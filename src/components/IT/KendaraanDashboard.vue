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
                    <h3>Kendaraan Dashboard</h3>
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
                <v-btn color="primary" dark @click="addKendaraanDialog=true">Tambah Kendaraan</v-btn>
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="kendaraans"
                    :search="search"
                    light>
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-chip><v-icon color="primary" @click="editHandler(item)">mdi-pencil</v-icon></v-chip>
                        <v-chip><v-icon color="red" @click="deleteHandler(item.id_kendaraan)">mdi-delete</v-icon></v-chip>            
                </template>
                </v-data-table>
            </v-card>
    </template>
<template>
            <v-dialog
                v-model="addKendaraanDialog"
                max-width="600"
                content-class="add-kendaraan-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Tambah Kendaraan</h2></v-toolbar>
                    <v-form v-model="valid" ref="form" class="mx-5 my-5">
                        <v-text-field :rules="fieldRules" v-model="form.model_kendaraan" label="Model Kendaraan" prepend-inner-icon="mdi-car" outlined required></v-text-field>
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
                v-model="editKendaraanDialog"
                max-width="600"
                content-class="edit-kendaraan-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Kendaraan</h2></v-toolbar>
                    <v-form v-model="valid" ref="form1" class="mx-5 my-5">
                        <v-text-field :rules="fieldRules" v-model="form.model_kendaraan" label="Model Kendaraan" prepend-inner-icon="mdi-car" outlined required></v-text-field>
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
         <v-dialog v-model="dialogConfirm" persistent max-width="400px">
      <v-card>
        <v-card-title>
          <span class="headline">Warning!</span>
        </v-card-title>
        <v-card-text>Apakah Anda yakin ingin menghapus kendaraan ini?</v-card-text>
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
        name:'KendaraanDashboard',
        data(){
            return {
                activeTab:'',
                tabs:[
                    { name: 'UserDashboard', text:'User', align:'center'},
                    { name: 'WhatsappDashboard', text:'Whatsapp', align:'center'},
                    { name: 'DealerDashboard', text:'Dealer', align:'center'},
                    { name: 'KendaraanDashboard', text:'Kendaraan', align:'center'}
                ],
                addKendaraanDialog: false,
                editKendaraanDialog: false,
                dialogConfirm: false,
                snackbar: false,
                snackbar1: false,
                valid:'',
                editId: '',
                kendaraans: [],
                search: null,
                color: '',
                icon_message:'',
                title_message:'',
                response_message:'',
                error_message: '',
                show3:'',
                newData: new FormData,
                form:{
                    model_kendaraan:'',
                },
                fieldRules: [
                    (v) => !!v || 'Field harus diisi',
                ],
                headers: [
                    {text: "Model Kendaraan", value:"model_kendaraan", align:'center'},
                    {text: "Actions", value:'actions', align:'center'}
                ],
            }
        },
        methods:{
            validate(){
                if(this.$refs.form.validate()){
                    this.saveData()
                 }   
            },
            validate2(){
                if(this.$refs.form1.validate()){
                    this.updateData()
                }
            },
            saveData(){
                this.newData.append('model_kendaraan', this.form.model_kendaraan)
                this.$http.post(this.$api+'/kendaraan', this.newData, {
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
            updateData(){
                this.newData.append('model_kendaraan', this.form.model_kendaraan)

                var url = this.$api+'/kendaraan/'+this.editId
                this.$http.post(url, this.newData, {
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
                var url = this.$api+'/kendaraan/'+this.deleteId
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
            var url = this.$api+'/kendaraan'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.kendaraans = response.data.data
                })
            },
            getUser(){
                return localStorage.getItem('nama')
            },
            logout(){
                localStorage.removeItem('nama')
                localStorage.removeItem('token')
                localStorage.removeItem('role')
                this.$router.push({name:'ITLogin'})
            },
            editHandler(item){
                this.editId = item.id_kendaraan
                this.form.model_kendaraan = item.model_kendaraan
                this.editKendaraanDialog = true;
            },
            deleteHandler(id){
                this.deleteId = id
                this.dialogConfirm = true
            },
            close(){
                this.addKendaraanDialog = false
                this.$refs.form.reset()
            },
            close1(){
                this.editKendaraanDialog = false
                this.$refs.form1.reset()

            },
            close2(){
                this.dialogConfirm = false
            },
        },
        mounted(){
            this.readData();
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