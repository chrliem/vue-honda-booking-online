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
                <v-tabs align-with-title v-model="activeTab">
                <v-tab v-for="tab in tabs"
                        :key="tab.name"
                        :to="{name: tab.name}">
                    {{ tab.text }}
                </v-tab>               
                </v-tabs>
            </template> 
        </v-app-bar>
    

    <template>
        
            <v-row>
                <v-col cols="4">
                    <v-card class="mx-4 mt-6">

                    <v-toolbar color="secondary" dark>
                        <h3>Whatsapp Instances</h3>
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
                    <v-btn color="primary" dark @click="addInstanceDialog=true"> Tambah</v-btn>
                    </v-card-title>
                    <v-data-table
                        :headers="headers"
                        :items="instances"
                        :search="search"
                        light>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-chip><v-icon color="primary" @click="editHandler(item)">mdi-pencil</v-icon></v-chip>
                            <v-chip><v-icon color="red" @click="deleteHandler(item.instance_id)">mdi-delete</v-icon></v-chip>            
                    </template>
                    </v-data-table>
                    </v-card>
                </v-col>
                <v-col cols="8">
                    <v-card class="mx-4 mt-6">

                    <v-toolbar color="secondary" dark>
                        <h3>Whatsapp Template</h3>
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
                    <v-btn color="primary" dark @click="addTemplateDialog=true"> Tambah </v-btn>
                    </v-card-title>
                    <v-data-table
                        :headers="headers1"
                        :items="templates"
                        :search="search"
                        light>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-chip><v-icon color="primary" @click="editHandler1(item)">mdi-pencil</v-icon></v-chip>
                            <v-chip><v-icon color="red" @click="deleteHandler1(item.template_id)">mdi-delete</v-icon></v-chip>            
                    </template>
                    </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
            
    </template>

    <!-- Instance Dialog -->

    <template>
            <v-dialog
                v-model="addInstanceDialog"
                max-width="600"
                content-class="edit-status-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Tambah Instance</h2></v-toolbar>
                    <v-form v-model="valid" ref="form" class="mx-5 my-5">
                        <v-text-field :rules="instanceRules" v-model="form.instance_id" label="Instance ID" hint="123456" prepend-inner-icon="mdi-identifier" outlined required></v-text-field>
                        <v-text-field :rules="instanceRules" v-model="form.token" label="Token" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-autocomplete
                            :rules="instanceRules"
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
                v-model="editInstanceDialog"
                max-width="600"
                content-class="edit-instance-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Instance</h2></v-toolbar>
                    <v-form v-model="valid" ref="form1" class="mx-5 my-5">
                        <v-text-field :rules="instanceRules" disabled v-model="form.instance_id" label="Instance ID" hint="123456" prepend-inner-icon="mdi-identifier" outlined required></v-text-field>
                        <v-text-field :rules="instanceRules" v-model="form.token" label="Token" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-autocomplete
                            :rules="instanceRules"
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
        <v-card-text>Apakah Anda yakin ingin menghapus instance ini?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close2">Batal</v-btn>
          <v-btn color="error" text @click="deleteData">Hapus</v-btn>          
        </v-card-actions>
      </v-card>
    </v-dialog>
    </template>

    <!-- Template Dialog -->
        <template>
            <v-dialog
                v-model="addTemplateDialog"
                max-width="600"
                content-class="edit-template-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Tambah Template</h2></v-toolbar>
                    <v-form v-model="valid" ref="form2" class="mx-5 my-5">
                        <v-text-field :rules="instanceRules" v-model="form.namespace" label="Namespace" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-text-field :rules="instanceRules" v-model="form.template_name" label="Template Name" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-autocomplete
                            :rules="instanceRules"
                            v-model="form.instance_id_template"
                            prepend-inner-icon="mdi-identifier"
                            label="Instance ID"
                            outlined
                            :items="instances"
                            item-text="instance_id"
                            item-value="instance_id"
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
            <v-dialog
                v-model="editTemplateDialog"
                max-width="600"
                content-class="edit-template-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Template</h2></v-toolbar>
                    <v-form v-model="valid" ref="form3" class="mx-5 my-5">
                         <v-text-field :rules="instanceRules" v-model="form.namespace" label="Namespace" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-text-field :rules="instanceRules" v-model="form.template_name" label="Template Name" prepend-inner-icon="mdi-card-text-outline" outlined required></v-text-field>
                        <v-autocomplete
                            :rules="instanceRules"
                            v-model="form.instance_id_template"
                            prepend-inner-icon="mdi-identifier"
                            label="Instance ID"
                            outlined
                            :items="instances"
                            item-text="instance_id"
                            item-value="instance_id"
                        ></v-autocomplete>
                    </v-form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="close4"
              >Close</v-btn>
            <v-btn text color="primary" @click="validate4">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
        </template>

        <template>
            <v-dialog v-model="dialogConfirm1" persistent max-width="400px">
        <v-card>
            <v-card-title>
            <span class="headline">Warning!</span>
            </v-card-title>
            <v-card-text>Apakah Anda yakin ingin menghapus template ini?</v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close5">Batal</v-btn>
            <v-btn color="error" text @click="deleteData1">Hapus</v-btn>          
            </v-card-actions>
        </v-card>
        </v-dialog>
        </template>


    <!-- Snackbar -->

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
                    { name: 'UserDashboard', text:'User'},
                    { name: 'WhatsappDashboard', text:'Whatsapp'}
                ],
                addInstanceDialog: false,
                addTemplateDialog: false,
                editInstanceDialog: false,
                editTemplateDialog: false,
                dialogConfirm: false,
                dialogConfirm1: false,
                snackbar: false,
                snackbar1: false,
                valid:'',
                editId: '',
                instances: [],
                templates: [],
                search: null,
                color: '',
                response_message:'',
                error_message: '',
                show3:'',
                dealer: [],
                newData: new FormData,
                form:{
                    instance_id:'',
                    id_dealer:'',
                    token:'',
                    namespace:'',
                    instance_id_template:'',
                    template_name:''
                },
                instanceRules: [
                    (v) => !!v || 'Field harus diisi',
                ],
                headers: [
                    {text: 'Dealer', value:"nama_dealer"},
                    {text: "Instances ID", value: "instance_id"},
                    {text: "Token", value: "token"},
                    {text: "Actions", value:'actions'}
                ],

                headers1: [
                    {text: 'Dealer', value:'nama_dealer'},
                    {text: 'Instance ID', value:'instance_id'},
                    {text: 'Token', value:'token'},
                    {text: 'Namespace', value:'namespace'},
                    {text: 'Nama Template', value:'template_name'},
                    {text: "Actions", value:'actions'}
                ]
            }
        },
        methods:{
            validate(){
                if(this.$refs.form.validate()){
                    this.saveInstance()
                 }   
            },
            validate2(){
                if(this.$refs.form1.validate()){
                    this.updateInstance()
                }
            },
            validate3(){
                if(this.$refs.form2.validate()){
                    this.saveTemplate()
                }
            },
            validate4(){
                if(this.$refs.form3.validate()){
                    this.updateTemplate()
                }
            },
            saveInstance(){
                this.newData.append('instance_id', this.form.instance_id)
                this.newData.append('token', this.form.token)
                this.newData.append('id_dealer', this.form.id_dealer)
                this.$http.post(this.$api+'/wa-instance', this.newData, {
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
            updateInstance(){
                this.newData.append('instance_id', this.form.instance_id)
                this.newData.append('token', this.form.token)
                this.newData.append('id_dealer', this.form.id_dealer)
                console.log(this.form.id_dealer)
                this.$http.post(this.$api+'/wa-instance/'+this.editId, this.newData, {
                     headers:{
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
                    this.error_message = error.response.data.message
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                })
            },
            saveTemplate(){
                this.newData.append('namespace', this.form.namespace)
                this.newData.append('template_name', this.form.template_name)
                this.newData.append('instance_id', this.form.instance_id_template)
                this.$http.post(this.$api+'/wa-template', this.newData, {
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
                    this.readData1()
                }).catch(error=>{
                    this.error_message = error.response.data.message
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                })
            },
            updateTemplate(){
                this.newData.append('namespace', this.form.namespace)
                this.newData.append('template_name', this.form.template_name)
                this.newData.append('instance_id', this.form.instance_id_template)
                console.log(this.editId)
                this.$http.post(this.$api+'/wa-template/'+this.editId, this.newData, {
                     headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.response_message = response.data.message
                    this.color = 'blue-grey darken-1'
                    this.snackbar1 = true
                    this.icon_message = 'mdi-check-decagram'
                    this.title_message = 'Success'
                    this.close4()
                    this.readData1()
                }).catch(error=>{
                    this.error_message = error.response.data.message
                    this.color = 'warning'
                    this.snackbar = true
                    this.icon_message = 'mdi-alert-decagram'
                    this.title_message = 'Error'
                })
            },
            deleteData(){
                var url = this.$api+'/wa-instance/'+this.deleteId
                console.log(url)
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
            deleteData1(){
                var url = this.$api+'/wa-template/'+this.deleteId
                console.log(url)
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
                    this.close5()
                    this.readData1()
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
                var url = this.$api+'/wa-instance'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.instances = response.data.data
                })
            },
            readData1(){
                var url = this.$api+'/wa-template'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.templates = response.data.data
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
                this.editId = item.instance_id
                this.editInstanceDialog = true;
                this.form.instance_id = item.instance_id
                this.form.id_dealer = item.id_dealer
                this.form.token = item.token
            },
            editHandler1(item){
                this.editId = item.template_id
                this.editTemplateDialog = true;
                this.form.instance_id_template = item.instance_id
                this.form.namespace = item.namespace
                this.form.template_name = item.template_name
            },
            deleteHandler(id){
                this.deleteId = id
                this.dialogConfirm = true
            },
            deleteHandler1(id){
                this.deleteId = id
                this.dialogConfirm1 = true
            },
            close(){
                this.addInstanceDialog = false
                this.$refs.form.reset()
            },
            close1(){
                this.editInstanceDialog = false
                this.$refs.form1.reset()

            },
            close2(){
                this.dialogConfirm = false
            },
            close3(){
                this.addTemplateDialog = false
                this.$refs.form2.reset()
            },
            close4(){
                this.editTemplateDialog = false
                this.$refs.form3.reset()
            },
            close5(){
                this.dialogConfirm1 = false
            }
        },
        mounted(){
            this.readData();
            this.readData1();
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
