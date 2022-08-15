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
            > </v-toolbar-title>
        </v-app-bar>
        <v-container fluid fill-height class="custom-container">
            <v-layout flex align-center justify-center>
                <v-flex xs12 sm6 elevation-6>
                <v-card>
                    <v-toolbar
                    color="secondary"
                        dark
                        ><h2>Login</h2></v-toolbar>
                                <v-form v-model="valid" ref="form" class="mx-5 my-5">
                                    <v-text-field :rules="emailRules" v-model="form.email" label="Email" hint="username@email.com" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                                    <v-text-field 
                                    :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3"
                                    :rules="passwordRules" v-model="form.password" label="Password" prepend-inner-icon="mdi-lock" outlined required></v-text-field>
                                    <v-autocomplete
                                        :rules="dealerRules"
                                        v-model="form.id_dealer"
                                        prepend-inner-icon="mdi-map-marker"
                                        label="Dealer"
                                        outlined
                                        :items="dealer"
                                        item-text="nama_dealer"
                                        item-value="id_dealer"
                                    ></v-autocomplete>
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
    </v-app>
</template>

<script>
export default {
    name:'AdminLogin',
    data(){
        return{
            user: new FormData,
            show3: false,
            alertEmpty: false,
            snackbar: false,
            snackbar1: false,
            color:'',
            valid:'',
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
            dealerRules: [
                (v) => !!v || 'Dealer harus diisi'
            ],
            dealer: [{
                id_dealer: '',
                nama_dealer: ''
           }],
           response_message:'',
           error_message:''
        }
    },
    methods:{
        login(){
            if(this.$refs.form.validate()){
                this.$http.post(this.$api+'/login',{
                email: this.form.email,
                password: this.form.password
            }).then(response =>{
                this.response_message = response.data.message;
                localStorage.setItem('nama',response.data.data.nama)
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('dealer', this.form.id_dealer)
                localStorage.setItem('role',2)
                for(let i=0; i<this.dealer.length; i++){
                    if(this.dealer[i].id_dealer===this.form.id_dealer)
                    localStorage.setItem('nama_dealer', this.dealer[i].nama_dealer)

                }
                this.color = 'blue-grey darken-1'
                this.snackbar1 = true
                this.icon_message = 'mdi-check-decagram'
                this.title_message = 'Success'
                this.$router.push({
                    name: 'BookingDashboard'
                })
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
                nama: '',
                email: '',
                password: '',
                dealer: ''
            }
        },
        getDataDealer(){
            var url = this.$api+'/dealer'
                this.$http.get(url,{
                    headers:{

                    }
                }).then(response=>{
                    this.dealer = response.data.data
                })
        },
    },
    mounted(){
        this.getDataDealer();
    }
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