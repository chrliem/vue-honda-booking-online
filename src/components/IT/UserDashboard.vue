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
            <v-toolbar-title>
                <img
                    class="mt-2 mx-3 hidden-sm-and-down"
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
            <v-toolbar-title class="ml-4 hidden-sm-and-down">Booking Service </v-toolbar-title>
            <v-toolbar-title class="ml-5 hidden-md-and-up">Booking Service</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>Welcome, <strong>{{getUser()}}</strong>!
             </v-toolbar-title>
             <v-spacer></v-spacer>
             <v-btn color="error" @click="logout">Logout</v-btn>
             <template v-slot:extension>
                <v-tabs align-with-title v-model="active_tab">
                <v-tab v-for="tab in tabs"
                        :key="tab.name"
                        :to="{name: tab.name}">
                    {{ tab.text }}
                </v-tab>
                </v-tabs>
            </template> 
        </v-app-bar>
    

    <template>
            <v-card class="mx-6 mt-6">
                <v-toolbar color="secondary" dark>
                    <h3>User Dashboard</h3>
                </v-toolbar>
                <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn color="primary" dark @click="addUserDialog=true"> Tambah User</v-btn>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="users"
                    :search="search"
                    light>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-chip><v-icon color="primary" @click="editHandler1(item)">mdi-pencil</v-icon></v-chip>
                        <v-chip><v-icon color="secondary" @click="editHandler(item)">mdi-lock</v-icon></v-chip>
                        <v-chip><v-icon color="red" @click="deleteHandler(item.id)">mdi-delete</v-icon></v-chip>            
                </template>
                </v-data-table>
            </v-card>
    </template>

    <template>
            <v-dialog
                v-model="addUserDialog"
                max-width="600"
                content-class="edit-status-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Tambah User</h2></v-toolbar>
                    <v-form v-model="valid" ref="form" class="mx-5 my-5">
                        <v-text-field :rules="namaRules" v-model="form.nama" label="Nama" hint="John Doe" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                        <v-text-field :rules="emailRules" v-model="form.email" label="Email" hint="username@email.com" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                        <v-text-field 
                        :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3"
                        :rules="passwordRules" v-model="form.password" label="Password" prepend-inner-icon="mdi-lock" outlined required></v-text-field>
                        <v-autocomplete
                            :rules="roleRules"
                            v-model="form.id_role"
                            prepend-inner-icon="mdi-account-cog"
                            label="Role"
                            outlined
                            :items="role"
                            item-text="role"
                            item-value="id"
                        ></v-autocomplete>
                        <v-text-field v-show="form.id_role===2" v-model="form.no_handphone" label="No. Handphone" hint="081234567890" prepend-inner-icon="mdi-cellphone" outlined required></v-text-field>                        
                        <v-autocomplete
                            v-show="form.id_role===2"
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
              <v-btn
                text
                @click="close"
              >Close</v-btn>
            <v-btn text color="primary" @click="validate">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
    </template> 

    <template>
            <v-dialog
                v-model="editPasswordDialog"
                max-width="600"
                content-class="edit-status-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Password</h2></v-toolbar>
                    <v-form v-model="valid" ref="form1" class="mx-5 my-5">
                        <v-text-field 
                            :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :type="show3 ? 'text' : 'password'" @click:append="show3 = !show3"
                            :rules="passwordRules" v-model="form.password" label="Password" prepend-inner-icon="mdi-lock" outlined required>
                        </v-text-field>
                    </v-form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="close1"
              >Close</v-btn>
            <v-btn text color="primary" @click="validate2">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
        </template>

        <template>
            <v-dialog
                v-model="editUserDialog"
                max-width="600"
                content-class="edit-user-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Ubah User</h2></v-toolbar>
                    <v-form v-model="valid" ref="form2" class="mx-5 my-5">
                        <v-text-field :rules="namaRules" v-model="form.nama" label="Nama" hint="John Doe" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                        <v-text-field :rules="emailRules" v-model="form.email" label="Email" hint="username@email.com" prepend-inner-icon="mdi-account" outlined required></v-text-field>
                        <v-text-field v-show="temp_id_role==2" v-model="form.no_handphone" label="No. Handphone" hint="081234567890" prepend-inner-icon="mdi-cellphone" outlined required></v-text-field>                        
                        <v-autocomplete
                            v-show="temp_id_role==2"
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
              <v-btn
                text
                @click="close3"
              >Close</v-btn>
            <v-btn text color="primary" @click="validate3">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
    </template> 

    <template>
         <v-dialog v-model="dialogConfirm" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Warning!</span>
        </v-card-title>
        <v-card-text>Apakah Anda yakin ingin menghapus user ini?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close2">Batal</v-btn>
          <v-btn color="error" text @click="deleteData">Hapus</v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>
    </template>

    <v-snackbar v-model="snackbar1" elevation="24" :color="color" timeout="5000" bottom>
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

        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>
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
            @click="snackbar = false"
            >
            Close</v-btn>
            </template>
        </v-snackbar>
    </v-app>
</template>

<script>
/* eslint-disable */

    export default {
        name:'UserDashboard',
        data(){
            return {
                activeTab:'',
                tabs:[
                    { name: 'UserDashboard', text:'User', align:'center'},
                    { name: 'BookingIndex', text:'Booking', align:'center'},
                    { name: 'WhatsappDashboard', text:'Whatsapp', align:'center'},
                    { name: 'DealerDashboard', text:'Dealer', align:'center'},
                    { name: 'KendaraanDashboard', text:'Kendaraan', align:'center'}
                ],
                addUserDialog: false,
                editPasswordDialog: false,
                editUserDialog: false,
                dialogConfirm: false,
                snackbar: false,
                snackbar1: false,
                valid:'',
                editId: '',
                users: [],
                temp_id_role:'',
                search: null,
                color: '',
                response_message:'',
                error_message: '',
                show3:'',
                dealer: [],
                role: [{id:1, role:'IT'},{id:2, role:'CCO'}],
                userData: new FormData,
                form:{
                    nama:'',
                    email:'',
                    id_dealer:'',
                    password: '',
                    id_role:'',
                    no_handphone:''
                },
                namaRules: [
                    (v) => !!v || 'Nama harus diisi',
                ],
                emailRules: [
                    (v) => !!v || 'Email harus diisi',
                ],
                passwordRules: [
                    (v) => !!v || 'Password harus diisi'
                ],
                dealerRules: [
                    (v) => !!v || 'Dealer harus diisi'
                ],
                roleRules: [
                    (v) => !!v || 'Role harus diisi'
                ],
                noHPRules: [
                    (v) => !!v || 'Nomor handphone harus diisi',
                    (v) => /^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(v) || "Nomor handphone invalid"
                ],
                headers: [
                    {text: "Nama", value:"nama", align:'center'},
                    {text: "Alamat Email", value: "email", align:'center'},
                    {text: "Dealer", value: "nama_dealer", align:'center'},
                    {text: "No Handphone", value: "no_handphone", align:'center'},
                    {text: 'Role', value: 'role', align:'center'},
                    {text: "Actions", value:'actions', align:'center'}
                ],
            }
        },
        methods:{
            validate(){
                if(this.$refs.form.validate()){
                    this.saveUser()
                 }   
            },
            validate2(){
                if(this.$refs.form1.validate()){
                    this.savePassword()
                }
            },
            validate3(){
                if(this.$refs.form2.validate()){
                    this.updateUser()
                }
            },
            saveUser(){
                this.userData.append('nama', this.form.nama)
                this.userData.append('email', this.form.email)
                this.userData.append('password', this.form.password)
                this.userData.append('id_dealer', this.form.id_dealer)
                this.userData.append('id_role', this.form.id_role)
                
                // if(this.form.no_handphone===''){
                //     this.userData.append('no_handphone', '')
                // }else{
                    this.userData.append('no_handphone',this.form.no_handphone)
                // }

                this.$http.post(this.$api+'/register', this.userData, {
                     headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.response_message = response.data.message
                    this.color = 'blue-grey darken-1'
                    this.snackbar1 = true
                    this.icon_message = 'mdi-check-decagram'
                    this.title_message = 'Success'
                    this.close()
                    this.readData()
                }).catch(error=>{
                    this.error_message = error.response.data.message
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                })
            },
            updateUser(){
                this.userData.append('nama', this.form.nama)
                this.userData.append('email', this.form.email)

                if(this.form.no_handphone===null){
                    this.userData.append('no_handphone', '')
                }else{
                    this.userData.append('no_handphone',this.form.no_handphone)
                }

                if(this.form.id_dealer===null){
                    this.userData.append('id_dealer', '')
                }else{
                    this.userData.append('id_dealer',this.form.id_dealer)
                }

                this.$http.post(this.$api+'/user/'+this.editId, this.userData, {
                     headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.response_message = response.data.message
                    this.color = 'blue-grey darken-1'
                    this.snackbar1 = true
                    this.icon_message = 'mdi-check-decagram'
                    this.title_message = 'Success'
                    this.close3()
                    this.readData()
                }).catch(error=>{
                    this.error_message = error.response.data.message
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                })
            },
            savePassword(){
                this.userData.append('password', this.form.password)

                var url = this.$api+'/user-password/'+this.editId
                this.$http.post(url, this.userData, {
                        headers: {
                            'Authorization':'Bearer '+localStorage.getItem('token')
                        }
                    }).then(response=>{
                        this.response_message = response.data.message
                        this.color = 'blue-grey darken-1'
                        this.snackbar1 = true
                        this.icon_message = 'mdi-check-decagram'
                        this.title_message = 'Success'
                        this.close1()
                        this.readData()                        
                    }).catch(error=>{
                        this.error_message = error.response.data.message;
                        this.color = 'warning'
                        this.snackbar = true
                        this.icon_message = 'mdi-alert-decagram'
                        this.title_message = 'Error'
                    })
            },
            deleteData(){
                var url = this.$api+'/user/'+this.deleteId
                this.$http.delete(url,{
                    headers: {
                        'Authorization':'Bearer ' + localStorage.getItem('token'),
                    }
                }).then(response => {
                    this.response_message = response.data.message;
                    this.color = 'blue-grey darken-1'
                    this.snackbar1 = true
                    this.icon_message = 'mdi-check-decagram'
                    this.title_message = 'Success'
                    this.close2()
                    this.readData()
                }).catch(error=>{
                    this.error_message = error.response.data.message;
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                    this.load = false
                });
            },
            readData(){
            var url = this.$api+'/user'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.users = response.data.data
                })
            },
            getUser(){
                return localStorage.getItem('nama')
            },
            getDataDealer(){
            var url = this.$api+'/dealer'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.dealer = response.data.data
                })
            },
            logout(){
                localStorage.removeItem('nama')
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                this.$router.push({name:'ITLogin'})
            },
            editHandler(item){
                this.editId = item.id
                this.editPasswordDialog = true;
            },
            editHandler1(item){
                this.editId = item.id
                this.temp_id_role = item.id_role
                this.form.nama = item.nama
                this.form.email = item.email
                this.form.no_handphone = item.no_handphone
                this.form.id_dealer = item.id_dealer
                this.editUserDialog = true
            },
            deleteHandler(id){
                this.deleteId = id
                this.dialogConfirm = true
            },
            close(){
                this.addUserDialog = false
                this.$refs.form.reset()
            },
            close1(){
                this.editPasswordDialog = false
                this.$refs.form1.reset()

            },
            close2(){
                this.dialogConfirm = false
            },
            close3(){
                this.editUserDialog = false
                this.$refs.form2.reset()
            }
        },
        mounted(){
            this.readData();
            this.getDataDealer();
        },
        created(){
            this.interval = setInterval(this.readData, 5000)
        },
        beforeDestroy(){
            clearInterval(this.interval)
        }
    }
</script>

<style scoped>
a {
  color:black;
  text-decoration: none;
}
</style>
