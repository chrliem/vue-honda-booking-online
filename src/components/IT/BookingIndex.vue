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
                    <h3>Booking Data</h3>
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
                </v-card-title>
                <v-data-table
                    :headers="headers"
                    :items="bookings"
                    :search="search"
                    light>
                    <template v-slot:[`item.no_polisi`]="{ item }">
                        <v-chip small label color="black" text-color="white"><strong>{{item.no_polisi}}</strong></v-chip>
                    </template>
                    <template v-slot:[`item.status`]="{ item }">
                        <span v-if="item.status==='New'"><v-chip color="warning">New</v-chip></span>
                        <span v-else-if="item.status==='Confirmed'"><v-chip color="success" >Confirmed</v-chip></span>
                        <span v-else-if="item.status==='Rescheduled & Confirmed'"><v-chip color="success" >Rescheduled & Confirmed</v-chip></span>
                        <span v-else-if="item.status==='Cancelled'"><v-chip color="error" >Cancelled</v-chip></span>
                    </template>
                    <template v-slot:[`item.kode_booking`]="{ item }">
                        <v-chip label color="blue-grey darken-1" dark>{{ item.kode_booking }}</v-chip>
                    </template>
                    <template v-slot:[`item.created_at`]="{ item }">
                        <v-chip fill>{{ formatTimezone(item.created_at) }}</v-chip>           
                    </template>
                    <template v-slot:[`item.tgl_service`]="{ item }">
                        <v-chip fill>{{ formatDate(item.tgl_service) }}</v-chip>           
                    </template>
                </v-data-table>
            </v-card>
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
import moment from 'moment-timezone';

    export default {
        name:'BookingIndex',
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
                snackbar: false,
                snackbar1: false,
                valid:'',
                editId: '',
                bookings: [],
                search: null,
                color: '',
                icon_message:'',
                title_message:'',
                response_message:'',
                error_message: '',
                headers: [
                    {text: "Kode Booking", value:"kode_booking", align:'center'},
                    {text: "Kode Dealer", value:"kode_dealer", align:'center'},
                    {text: "Nama Dealer", value: "nama_dealer", align:'center'},
                    {text: "Status", value: "status", align:'center'},
                    {text: "Nama Customer", value: "nama_customer", align:'center'},
                    {text: "No. Polisi", value: "no_polisi", align:'center'},
                    {text: "Kendaraan", value: "model_kendaraan", align:'center'},
                    {text: "Tanggal Service", value: "tgl_service", align:'center'},
                    {text: "Tanggal Booking", value: "created_at", align:'center'},
                    {text: "Jenis Pekerjaan", value: "jenis_pekerjaan", align:'center'},
                    {text: "Jenis Layanan", value: "jenis_layanan", align:'center'},
                    //Kodebooking, cabang, status, nama customer, no polisi, model kendaraan, tanggal service, kode dealer, jenis layanan jenis pekerjaan
                ],
            }
        },
        methods:{
            readData(){
            var url = this.$api+'/booking'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.bookings = response.data.data
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
            formatDate(date){
            return moment(String(date)).locale('id').format('dddd, DD MMMM YYYY HH:mm')
            },
            formatTimezone(date1){
                return moment(date1).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY HH:mm') 
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
        },
        
    }
</script>

<style scoped>
a {
  color:black;
  text-decoration: none;
}
</style>