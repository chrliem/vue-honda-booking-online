<template>
    <v-app>
        <v-app-bar app height="80">
            <v-toolbar-title>
                <img
                    class="mt-2 hidden-sm-and-down"
                    src="@/assets/honda-logo.png"
                    height="50px"
                    contain
                >
                <img
                    class="mt-1 hidden-md-and-up"
                    src="@/assets/honda-logo.png"
                    height="20px"
                    contain
                >
            </v-toolbar-title>
            <v-toolbar-title class="ml-4 hidden-sm-and-down">Booking Service</v-toolbar-title>
            <v-toolbar-title class="ml-5 hidden-md-and-up">Booking Service</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <img
                class="mt-2 hidden-sm-and-down"
                src="@/assets/bintang-group-logo.png"
                height="50px"
                contain
            >
            <img
                class="mt-1 mx-3 hidden-md-and-up"
                src="@/assets/bintang-group-logo.png"
                height="30px"
                contain
            >
            </v-toolbar-title>
        </v-app-bar>
        <v-container fluid fill-height class="custom-container">
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm6 elevation-6>
                <v-card>
                    <v-toolbar
                    color="secondary"
                        dark
                        ><h2>Login IT</h2></v-toolbar>
                                <v-form v-model="valid" ref="form" class="mx-5 my-5">
                                    <v-text-field :rules="emailRules" v-model="form.email" label="Email" hint="username@email.com" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                                    <v-text-field 
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3"
                                    :rules="passwordRules" v-model="form.password" label="Password" prepend-inner-icon="mdi-lock" outlined required></v-text-field>
                                </v-form>
                        <v-card-actions class="justify-end">
                            <v-btn text color="primary" @click="login">Login</v-btn>
                        <v-btn
                            text
                            @click="resetForm"
                        >Batal</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <v-snackbar elevation="24" v-model="snackbar" :color="color" timeout="4000" bottom>
                    <!-- {{error_message}} -->
            <v-layout align-center pr-4>
             <v-icon class="pr-3" dark large>{{ icon_message }}</v-icon>
                <v-layout column>
                    <div>
                        <strong>{{ title_message }}</strong>
                    </div>
                    <div>{{ error_message }}</div>
                </v-layout>
            </v-layout>
            <template v-slot:action="{ attrs }">
                        <v-btn
                        color="white"
                        text
                        v-bind="attrs"
                        @click="snackbar1 = false"
                        >
                        Close</v-btn>
                    </template>
        </v-snackbar>
        <v-snackbar elevation="24" v-model="snackbar1" :color="color" dark timeout="4000">
            <!-- {{response_message}} -->
             <v-layout align-center pr-4>
             <v-icon class="pr-3" dark large>{{ icon_message }}</v-icon>
                <v-layout column>
                    <div>
                        <strong>{{ title_message }}</strong>
                    </div>
                    <div>{{ response_message }}</div>
                </v-layout>
            </v-layout>
            <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar1 = false"
            >
            Close</v-btn>
            </template>
        </v-snackbar>
        <v-snackbar elevation="24" v-model="snackbar2" :color="color" dark timeout="4000">
            <!-- {{no_access_message}} -->
            <v-layout align-center pr-4>
             <v-icon class="pr-3" dark large>{{ icon_message }}</v-icon>
                <v-layout column>
                    <div>
                        <strong>{{ title_message }}</strong>
                    </div>
                    <div>{{ no_access_message }}</div>
                </v-layout>
            </v-layout>
            <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar1 = false"
            >
            Close</v-btn>
            </template>
        </v-snackbar>
        <v-snackbar elevation="24" v-model="snackbar3" color="secondary" dark>
            <v-layout align-center pr-4>
             <v-icon class="pr-3" dark large>mdi-timer-sand-empty</v-icon>
                <v-layout column>
                    <div>
                        <strong>Loading . . .</strong>
                    </div>
                    <div>Mohon tunggu</div>
                </v-layout>
            </v-layout>
        </v-snackbar>
    </v-app>
</template>

<script>
export default {
    name:'ITLogin',
    data(){
        return{
            user: new FormData,
            show3: false,
            alertEmpty: false,
            snackbar: false,
            snackbar1: false,
            snackbar2: false,
            snackbar3: false,
            role: 1,
            form:{
                nama: '',
                email: '',
                password: '',
                id_dealer: '',
                nama_dealer: ''
            },
            emailRules: [
                (v) => !!v || 'Email harus diisi',
            ],
            passwordRules: [
                (v) => !!v || 'Password harus diisi'
            ],
           response_message:'',
           error_message:''
        }
    },
    methods:{
        login(){
            if(this.$refs.form.validate()){
                this.snackbar3 = true
                this.$http.post(this.$api+'/login',{
                email: this.form.email,
                password: this.form.password, 
            }).then(response =>{
                
                localStorage.setItem('nama',response.data.data.nama)
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('role', response.data.data.id_role)
                
                if(localStorage.getItem('role')==1){
                    this.response_message = response.data.message;
                    this.color = 'blue-grey darken-1'
                    this.snackbar1 = true
                    this.snackbar3 = false
                    this.icon_message = 'mdi-check-decagram'
                    this.title_message = 'Success'
                    this.$router.push({
                        name: 'UserDashboard'
                    })
                }else if(localStorage.getItem('role')!=1){
                    localStorage.removeItem('nama')
                    localStorage.removeItem('token')
                    localStorage.removeItem('role')
                    this.color = 'error'
                    this.snackbar2 = true
                    this.snackbar3 = false
                    this.icon_message = 'mdi-cancel'
                    this.title_message = 'Error'
                    this.no_access_message = 'Anda tidak memiliki akses'
                    setTimeout(function(){
                        window.location.reload(1);
                    }, 4000);
                }
                
            }).catch(error => {
                this.error_message = error.response.data.message
                this.color = 'warning'
                this.snackbar = true
                this.icon_message = 'mdi-alert-decagram'
                this.title_message = 'Error'
                localStorage.removeItem('token')
            })
            }
        },
        resetForm(){
            this.form = {
                email: '',
                password: '',
            }
        },
    },
}
</script>

<style scoped>
.custom-container{
    position: absolute;
    top: -150px;
    left: 0px;
    right: 0px;
}
</style>