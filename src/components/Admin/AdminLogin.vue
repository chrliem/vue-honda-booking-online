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
            <v-toolbar-title>Welcome </v-toolbar-title>
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

        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
            {{response_message}}
        </v-snackbar>

        <v-snackbar v-model="snackbar1" :color="color" timeout="2000" bottom>
            {{error_message}}
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
            form:{
                nama: '',
                email: '',
                password: ''
            },
            emailRules: [
                (v) => !!v || 'Email harus diisi',
            ],
            passwordRules: [
                (v) => !!v || 'Password harus diisi'
            ]
        }
    },
    methods:{
        login(){
            this.$http.post(this.$api+'/login',{
                email: this.form.email,
                password: this.form.password
            }).then(response =>{
                this.response_message = response.data.message;
                localStorage.setItem('nama',response.data.data.nama)
                localStorage.setItem('token', response.data.access_token)
                this.snackbar1 = true
                this.color = 'secondary'
                this.$router.push({
                    name: 'BookingDashboard'
                })
            }).catch(error => {
                this.error_message = error.response.data.message
                this.snackbar = true
                this.color = 'warning'
                localStorage.removeItem('token')
            })
        },
        resetForm(){
            this.form = {
                nama: '',
                email: '',
                password: ''
            }
        }
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