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
        </v-app-bar>

        <!-- <template>
            <v-card class="mx-6">
                <v-toolbar color="secondary" dark>
                    Booking Service
                </v-toolbar>
                <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                :headers="headers"
                :items="bookings"
                :search="search"
                light></v-data-table>
            </v-card>
        </template> -->

        <template>
            <v-data-iterator
                :items="filteredData"
                item-key="kode_booking"
                :items-per-page.sync="itemsPerPage"
                :page.sync="page"
                :search="search"
                :sort-by="sortBy.toLowerCase()"
                :sort-desc="sortDesc"
                hide-default-footer
                class="mx-7"
            >
                <template v-slot:header>
                        
                    <v-toolbar
                    dark
                    color="secondary"
                    class="mb-4 mt-n7"
                    >
                    <v-text-field
                        v-model="search"
                        clearable
                        flat
                        solo-inverted
                        hide-details
                        prepend-inner-icon="mdi-magnify"
                        label="Cari ... "
                    ></v-text-field>
                    <v-spacer></v-spacer>
                    
                    <h3 class="text" font-weight-medium mb-5>{{getDealer()}}</h3>

                    <template v-if="$vuetify.breakpoint.mdAndUp">
                        <v-spacer></v-spacer>
                        <v-chip-group
                            v-model="statusFilter"
                            column
                        >
                            <v-chip
                            color="warning"
                            filter
                            value="New"
                            >
                            New
                            <v-avatar v-show="countByNew!==0" class="indigo darken-3" right>{{countByNew}}</v-avatar>
                            </v-chip>
                            <v-chip
                            color="success"
                            filter
                            value="Confirmed"
                            >
                            Confirmed
                            <v-avatar v-show="countByConfirmed!==0"  class="indigo darken-3" right>{{countByConfirmed}}</v-avatar>
                            </v-chip>

                            <v-chip
                            color="success"
                            value="Rescheduled & Confirmed"
                            filter
                            
                            >
                            Rescheduled & Confirmed
                            <v-avatar v-show="countByRescheduleConfirmed!==0" class="indigo darken-3" right>{{countByRescheduleConfirmed}}</v-avatar>
                            </v-chip>

                            <v-chip
                            color="error"
                            filter
                            value="Cancelled"
                            
                            >
                            Cancelled
                            <v-avatar v-show="countByCancelled!==0" class="indigo darken-3" right>{{countByCancelled}}</v-avatar>
                            </v-chip>

                        </v-chip-group>
                        <v-spacer></v-spacer>
                        <v-btn-toggle
                        v-model="sortDesc"
                        mandatory
                        >
                        <v-btn
                            large
                            depressed
                            color="blue"
                            :value="false"
                        >
                            <v-icon>mdi-arrow-up</v-icon>
                        </v-btn>
                        <v-btn
                            large
                            depressed
                            color="blue"
                            :value="true"
                        >
                            <v-icon>mdi-arrow-down</v-icon>
                        </v-btn>
                        </v-btn-toggle>
                    </template>
                    </v-toolbar>
                </template>
                
                <template v-slot:default="props">
                    <v-card v-show="isEmpty" flat>
                        <v-card-title class="justify-center">
                            <img
                                src="@/assets/no-data.png"
                                contain
                                height="150px"
                            >
                        </v-card-title>
                        <v-card-title class="justify-center">
                            Belum ada data
                        </v-card-title>
                    </v-card>
                    <v-row>
                    <v-col
                        v-for="item in props.items"  
                        :key="item.kode_booking"
                        cols="12"
                        sm="6"
                        md="4"
                        lg="4"
                    >
                        <v-card v-show="isEmpty===false" :style="isStatus(item)">
                            <v-toolbar color="secondary" dark>
                                <v-chip label color="blue-grey darken-1">{{ item.kode_booking }}</v-chip>
                                <v-spacer></v-spacer>
                                <span v-if="item.status==='New'">
                                    <v-chip color="warning">{{item.status}}</v-chip>
                                </span>
                                <span v-else-if="item.status==='Confirmed'">
                                    <v-chip color="success">{{item.status}}</v-chip>
                                </span>
                                <span v-else-if="item.status==='Rescheduled & Confirmed'">
                                    <v-chip color="success">{{item.status}}</v-chip>
                                </span>
                                <span v-else-if="item.status==='Cancelled'">
                                    <v-chip color="error">{{item.status}}</v-chip>
                                </span>
                            </v-toolbar>
                            <v-simple-table class="mb-2 mt-2">
                                <tr>
                                    <td><strong>Tanggal Booking</strong></td>
                                    <td><strong>Tanggal Service</strong></td>
                                </tr>
                                <tr>
                                    <td><v-chip fill>{{ formatTimezone(item.created_at) }}</v-chip></td>
                                    <td><v-chip fill>{{ formatDate(item.tgl_service) }}</v-chip></td>
                                </tr>
                                </v-simple-table>
                        <v-divider></v-divider>
                        <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-header>
                                Lihat Detail
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                        <v-simple-table
                            dense>
                            <tbody> 
                                <tr>
                                    <td><strong>Nama Customer</strong></td>
                                    <td>{{ item.nama_customer }}</td>
                                </tr>
                                <tr v-show="item.email_customer!==''">
                                    <td><strong>Email Customer</strong></td>
                                    <td>{{ item.email_customer }}</td>
                                </tr>
                                <tr>
                                    <td><strong>No Handphone</strong></td>
                                    <td>{{ item.no_handphone }}</td>
                                </tr>
                                <tr>
                                    <td><strong>No Polisi</strong></td>
                                    <td>{{ item.no_polisi }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Model Kendaraan</strong></td>
                                    <td><span v-for="k in kendaraan" :key="k.id_kendaraan">
                                        <span v-if="k.id_kendaraan===item.id_kendaraan">
                                           {{k.model_kendaraan}}
                                        </span>
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Nomor Rangka</strong></td>
                                    <td>{{ item.no_rangka }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Dealer</strong></td>
                                    <td><span v-for="d in dealer" :key="d.id_dealer">
                                        <span v-if="d.id_dealer===item.id_dealer">
                                            {{d.nama_dealer}}
                                        </span>
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><strong>Jenis Pekerjaan</strong></td>
                                    <td>{{ item.jenis_pekerjaan }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Jenis Layanan</strong></td>
                                    <td>{{ item.jenis_layanan }}</td>
                                </tr>
                                <tr>
                                    <td><strong>Keterangan Customer</strong></td>
                                    <td><strong>Keterangan CCO</strong></td>
                                </tr>
                                <tr>
                                    <td>{{ item.keterangan_customer }}</td>
                                    <td v-show="item.keterangan_cco!==''">{{ item.keterangan_cco }} </td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                        </v-expansion-panel-content>
                        </v-expansion-panel>
                        
                            <v-expansion-panel>
                            <v-expansion-panel-header>
                                Actions
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <v-btn small color="blue-grey" class="ma-2 white--text" @click="editDataHandler(item)">Ubah Data
                                    <v-icon right dark>
                                        mdi-pencil
                                    </v-icon>
                                    </v-btn>
                                <v-btn small color="info" class="ma-2 white--text" @click="editStatusHandler(item)">Ubah Status
                                    <v-icon right dark>
                                        mdi-pencil
                                    </v-icon>
                                    </v-btn>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            
                            <v-expansion-panel>
                            <v-expansion-panel-header>
                                Log
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <ul>
                                <span v-for="log in logs" :key="log.detail_log">
                                    <span v-if="log.kode_booking===item.kode_booking">
                                        <li class="text-left">{{log.detail_log}}</li>
                                    </span>
                                </span>
                                </ul>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            
                        </v-expansion-panels>
                        </v-card>
                    </v-col>
                    </v-row>                 
                </template>
                
                <template v-slot:footer>
                    <v-toolbar color="secondary" dark class="mt-5">
                        <v-row
                        align="center"
                        justify="center"
                        >
                        <span class="white--text">&nbsp; Items per page</span>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                dark
                                text
                                color="white"
                                class="ml-2"
                                v-bind="attrs"
                                v-on="on"
                            >
                                {{ itemsPerPage }}
                                <v-icon>mdi-chevron-down</v-icon>
                            </v-btn>
                            </template>
                            <v-list>
                            <v-list-item
                                v-for="(number, index) in itemsPerPageArray"
                                :key="index"
                                @click="updateItemsPerPage(number)"
                            >
                                <v-list-item-title>{{ number }}</v-list-item-title>
                            </v-list-item>
                            </v-list>
                        </v-menu>

                        <v-spacer></v-spacer>

                        <span
                            class="mr-4
                            grey--text"
                        >
                            Page {{ page }} of {{ numberOfPages }}
                        </span>
                        <v-btn
                            text
                            dark
                            color="white"
                            class="mr-1"
                            @click="formerPage"
                        >
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                        <v-btn
                            text
                            dark
                            color="white"
                            class="ml-1"
                            @click="nextPage"
                        >
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                        </v-row>
                    </v-toolbar>
                </template>
               
            </v-data-iterator>
            
        <template>
            <v-dialog
                v-model="editDataDialog"
                max-width="800"
                content-class="edit-data-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Data Booking</h2></v-toolbar>
                    <v-form v-model="valid" ref="form" class="mx-5 my-5">
                        <v-text-field :rules="namaRules" v-model="form.nama_customer" label="Nama Lengkap" hint="Contoh: John Doe" prepend-inner-icon="mdi-account" outlined ></v-text-field>
                        <v-text-field v-model="form.email_customer" label="Alamat Email" hint="Contoh: username@email.com" prepend-inner-icon="mdi-email" outlined></v-text-field>
                        <v-text-field placeholder="081234567890" :rules="noHPRules" v-model="form.no_handphone" label="Nomor Handphone" hint="Contoh: 081234567890" prepend-inner-icon="mdi-cellphone" outlined></v-text-field>
                        <v-text-field placeholder="AD 1234 HO" :rules="noPolisiRules" v-model="form.no_polisi" label="Nomor Polisi" prepend-inner-icon="mdi-car-search" hint="Contoh: AD 1234 HO" outlined></v-text-field>
                        <v-row>
                            <v-col cols="12" md="6">
                            <v-autocomplete
                                prepend-inner-icon="mdi-car"
                                :rules="kendaraanRules"
                                v-model="form.model_kendaraan"
                                label="Model Kendaraan"
                                :items="kendaraan"
                                item-text="model_kendaraan"
                                item-value="id_kendaraan"
                                outlined
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field :rules="noRangkaRules" v-model="form.no_rangka" label="Nomor Rangka/VIN" prepend-inner-icon="mdi-car-search" hint="Nomor rangka dapat ditemukan di STNK" outlined></v-text-field>
                        </v-col>
                    </v-row>        
                    <v-row class="mt-n7">
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            prepend-inner-icon="mdi-map-marker"
                            :rules="dealerRules"
                            v-model="form.nama_dealer"
                            label="Dealer"
                            outlined
                            :items="dealer"
                            item-text="nama_dealer"
                            item-value="id_dealer"
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            prepend-inner-icon="mdi-tools"
                            v-model="form.jenis_pekerjaan"
                            :rules="jenisPekerjaanRules"
                            label="Jenis Pekerjaan"
                            :items="jenis_pekerjaan"
                            item-text="jenis_pekerjaan"
                            item-value="jenis_pekerjaan"
                            outlined
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            v-show="form.jenis_pekerjaan===''"
                            label="Jenis Layanan"
                            disabled
                            outlined
                        ></v-autocomplete>
                        <span v-if="form.jenis_pekerjaan==='Authorized Workshop'">
                            <v-autocomplete
                            :rules="jenisLayananRules"
                            v-model="form.jenis_layanan"
                            label="Jenis Layanan"
                            :items="layanan_authorized_workshop"
                            item-text="jenis_layanan"
                            item-value="jenis_layanan"
                            outlined
                        ></v-autocomplete>
                        </span><span v-else-if="form.jenis_pekerjaan==='Home Service'">
                            <v-autocomplete
                                :rules="jenisLayananRules"
                                label="Jenis Layanan"
                                v-model="form.jenis_layanan"
                                :items="layanan_home_service"
                                item-text="jenis_layanan"
                                item-value="jenis_layanan"
                                outlined
                            ></v-autocomplete>
                        </span>
                    </v-col>
                </v-row>    
                <v-row class="mt-n7">
                    <v-col cols="12" md="6">
                    <v-menu
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="100%"
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field 
                                prepend-inner-icon="mdi-calendar-range"
                                v-model="form.tgl_service"
                                :rules="tglServiceRules"
                                label="Tanggal Service"
                                persistent-hint
                                v-bind="attrs"
                                v-on="on"
                                outlined
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="form.tgl_service"
                            no-title
                            :min="new Date((new Date()).valueOf() + 1000*3600*24).toISOString().slice(0,10)"
                            locale="id"
                        ></v-date-picker>
                    </v-menu>   
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-autocomplete
                            prepend-inner-icon="mdi-clock-time-eight"
                            v-model="form.jam_service"
                            :rules="jamServiceRules"
                            label="Jam Service"
                            :items="jam_service"
                            item-text="name"
                            item-value="name"
                            outlined
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                    
                <v-textarea
                    prepend-inner-icon="mdi-pencil-box-multiple"
                    v-model="form.keterangan_customer"
                    outlined
                    label="Pesan/Keluhan"
                    hint="Sampaikan pesan atau keluhan yang ingin Anda sampaikan"
                ></v-textarea>
                    </v-form>
            <v-card-actions class="justify-end">
                
              <v-btn
                text
                color="error"
                @click="close"
              >Tutup</v-btn>
              <v-btn text color="primary" @click="save">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
        </template>

        <template>
            <v-dialog
                v-model="editStatusDialog"
                max-width="600"
                content-class="edit-status-dialog"
            >
            <v-card>
            <v-toolbar
              color="secondary"
              dark
            ><h2>Edit Status Booking</h2></v-toolbar>
                    <v-form v-model="valid" ref="form1" class="mx-5 my-5">
                        <v-chip-group
                            v-model="form.status"
                            column
                        >
                            <v-chip
                            color="warning"
                            filter
                            value="New"
                            >
                            New
                            </v-chip>
                            <v-chip
                            color="success"
                            filter
                            value="Confirmed"
                            >
                            Confirmed
                            </v-chip>

                            <v-chip
                            color="success"
                            value="Rescheduled & Confirmed"
                            filter
                            
                            >
                            Rescheduled & Confirmed
                            </v-chip>

                            <v-chip
                            color="error"
                            filter
                            value="Cancelled"
                            >
                            Cancelled
                            </v-chip>

                        </v-chip-group>
                        <v-textarea
                            prepend-inner-icon="mdi-pencil-box-multiple"
                            v-model="form.keterangan_cco"
                            outlined
                            label="Keterangan CCO"
                        ></v-textarea>
                    </v-form>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="close1"
              >Close</v-btn>
            <v-btn text color="primary" @click="saveStatus">Simpan</v-btn>
            </v-card-actions>
          </v-card>
            </v-dialog>
        </template>

        </template>
        
        <v-snackbar elevation="24" v-model="snackbar" :color="color" timeout="4000" bottom>
           
            <v-layout align-center pr-4>
             <v-icon class="pr-3" dark large>{{ icon_message }}</v-icon>
                <v-layout column>
                    <div>
                        <strong>{{ title_message }}</strong>
                    </div>
                    <div>
                        <div v-for="(errorArray, index) in error_message" :key="index">
                            <div v-for="(error_message,  index) in errorArray" :key="index">
                                {{error_message}}
                            </div>
                        </div>
                    </div>
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
         <v-overlay
                :opacity="0.5"
                :value="overlay"
                >
                    <v-progress-circular indeterminate size="86">
                        Loading...
                    </v-progress-circular>
        </v-overlay>
    </v-app>
</template>

<script>
/*eslint-disable*/
import moment from 'moment-timezone';

  export default {
    name:'BookingDashboard',
    data () {
      return {
        isEmpty: true,
        tab: null,
        snackbar: false,
        snackbar1: false,
        editId: '',
        editDataDialog: false,
        editStatusDialog: false,
        icon_message:'',
        title_message:'',
        error_message: '',
        response_message: '',
        dialog: true,
        search: '',
        logs: [],
        filter: [],
        sortDesc: true,
        overlay: true,
        page: 1,
        itemsPerPage: 15,
        itemsPerPageArray: [15, 30, 50],
        sortBy:'created_at',
        statusFilter: '',
        interval: null,
        valid: false,
        menu1: false,
        color: '',
        keys: [
            'Tanggal Service',
            'Tanggal Booking',
            'Status'
        ],
        bookings:[{
            kode_booking:'',
            nama_customer:'',
            email_customer:'',
            no_handphone: '',
            no_polisi:'',
            model_kendaraan: '',
            no_rangka: '',
            nama_dealer: '',
            tgl_service:'',
            jenis_pekerjaan:'',
            jenis_layanan:'',
            keterangan_customer:'',
            keterangan_cco:'',  
            status:'',
            created_at: ''
        }],
        updateBooking: new FormData,
        form:{
                nama_customer: '',
                email_customer: '',
                no_handphone: '',
                no_polisi: '',
                model_kendaraan: '',
                no_rangka: '',
                nama_dealer: '',
                tgl_service: '',
                jam_service:'',
                jenis_pekerjaan: '',
                jenis_layanan: '',
                keterangan_customer: '',
                keterangan_cco: '',
                status: '',
        },
        kendaraan: [{
                id_kendaraan: '',
                model_kendaraan: ''
        }],
        dealer: [{
            id_dealer: '',
            nama_dealer: ''
        }],
        jenis_pekerjaan: [
            { jenis_pekerjaan: 'Authorized Workshop'},
            { jenis_pekerjaan: 'Home Service'}
        ],
        layanan_authorized_workshop: [
            { jenis_layanan: 'General Service (Perawatan Berkala)'},
            { jenis_layanan: 'Body Repair (Perbaikan Bodi Mobil)'},
            { jenis_layanan: 'Quick Maintenance'}
        ],
        layanan_home_service: [
            { jenis_layanan: 'Home Service'}
        ],
        jam_service: [
            { name: '08:00'},{ name: '08:30'}, { name: '09:00'}, { name: '09:30'}, { name: '10:00'}, { name: '10:30'}, { name: '11:00'}, { name: '11:30'},
            { name: '12:00'},{ name: '12:30'}, { name: '13:00'},{ name: '13:30'}, { name: '14:00'}
        ],
        status_booking: [
            { name: 'New'}, { name: 'Confirmed'}, { name: 'Rescheduled & Confirmed'}, {name: 'Cancelled'}
        ],
        namaRules: [
                (v) => !!v || 'Nama lengkap harus diisi',
        ],
        noHPRules: [
            (v) => !!v || 'Nomor handphone harus diisi',
            (v) => /^(\+62|62|0)8[1-9][0-9]{6,10}$/.test(v) || "Nomor handphone invalid"
        ],
        noPolisiRules: [
            (v) => !!v || 'Nomor polisi harus diisi',
            (v) => /^[A-Z]{1,2}\s{1}\d{0,4}\s{0,1}[A-Z]{0,3}$/.test(v) || "Nomor polisi tidak sesuai format. Contoh: AD 1234 HO"
        ],
        kendaraanRules: [
            (v) => !!v || 'Model kendaraan harus diisi',
        ],
        noRangkaRules: [
            (v) => !!v || 'Nomor rangka harus diisi',
        ],
        dealerRules: [
            (v) => !!v || 'Dealer harus diisi',
        ],
        tglServiceRules: [
            (v) => !!v || 'Tanggal service harus diisi',
        ],
        jamServiceRules: [
            (v) => !!v || 'Jam service harus diisi',
        ],
        jenisPekerjaanRules: [
            (v) => !!v || 'Jenis pekerjaan harus diisi',
        ],
        jenisLayananRules: [
            (v) => !!v || 'Jenis layanan harus diisi',
        ],
        statusRules: [
            (v) => !!v || 'Status harus dipilih'
        ],
      } 
    },
    computed: {
      filteredData(){
            return this.bookings.filter((i) => {
                return !this.statusFilter || (i.status === this.statusFilter);
            })
        },
        countByNew(){
            var temp = localStorage.getItem('dealer')
            return this.bookings.filter((i) => i.status === 'New' && i.id_dealer==localStorage.getItem('dealer')).length
        },
        countByConfirmed(){
            return this.bookings.filter((i) => i.status === 'Confirmed' && i.id_dealer==localStorage.getItem('dealer')).length
        },
        countByRescheduleConfirmed(){
            return this.bookings.filter((i) => i.status === 'Rescheduled & Confirmed' && i.id_dealer==localStorage.getItem('dealer')).length
        },
        countByCancelled(){
            return this.bookings.filter((i) => i.status === 'Cancelled' && i.id_dealer==localStorage.getItem('dealer')).length
        },
        numberOfPages () {
            return Math.ceil(this.filteredData.length / this.itemsPerPage)
        },
      
    },
    methods:{
        
        logout(){
            localStorage.removeItem('nama')
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('dealer')
            localStorage.removeItem('nama_dealer')
            this.$router.push({name:'AdminLogin'})
        },
        readData(){
        var url = this.$api+'/booking-filtered/'+localStorage.getItem('dealer')
            this.$http.get(url,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('token')
                }
            }).then(response=>{
                this.bookings = response.data.data
                this.isEmpty = false
            }).catch(error=>{
                this.isEmpty = true
            })
        },
        getBookingLog(){
            var url = this.$api+'/booking-log'
            this.$http.get(url,{
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('token')
                }
            }).then(response=>{
                this.logs = response.data.data
            })
        },
        getDataKendaraan(){
            var url = this.$api+'/kendaraan'
                this.$http.get(url,{
                    headers:{
                        'Authorization':'Bearer '+localStorage.getItem('token')
                    }
                }).then(response=>{
                    this.kendaraan = response.data.data
                })
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
        getUser(){
            return localStorage.getItem('nama')
        },
        getDealer(){
            return localStorage.getItem('nama_dealer')
        },
        editDataHandler(item){
            this.editId = item.kode_booking
            this.form.nama_customer = item.nama_customer
            this.form.email_customer = item.email_customer
            this.form.no_handphone = item.no_handphone
            this.form.no_polisi = item.no_polisi
            this.form.model_kendaraan = item.id_kendaraan
            this.form.no_rangka = item.no_rangka
            this.form.nama_dealer = item.id_dealer
            this.form.tgl_service = item.tgl_service.substring(0,10)
            this.form.jam_service = item.tgl_service.substring(11,16)
            this.form.jenis_pekerjaan = item.jenis_pekerjaan
            this.form.jenis_layanan = item.jenis_layanan
            this.form.keterangan_customer = item.keterangan_customer

            this.editDataDialog = true
        },
        editStatusHandler(item){
            this.editId = item.kode_booking
            this.form.keterangan_cco = item.keterangan_cco
            this.form.status = item.status

            this.editStatusDialog = true
        },
        save(){
            if(this.$refs.form.validate()){
                
                if(this.form.email_customer===null){
                    this.updateBooking.append('nama_customer', this.form.nama_customer)
                    this.updateBooking.append('email_customer', '')
                    this.updateBooking.append('no_handphone', this.form.no_handphone)
                    this.updateBooking.append('no_polisi', this.form.no_polisi)
                    this.updateBooking.append('id_dealer', this.form.nama_dealer)
                    this.updateBooking.append('id_kendaraan', this.form.model_kendaraan)
                    this.updateBooking.append('no_rangka', this.form.no_rangka)
                    var formatted_tgl_service = this.form.tgl_service+' '+this.form.jam_service
                    this.updateBooking.append('tgl_service',formatted_tgl_service)
                    this.updateBooking.append('jenis_pekerjaan', this.form.jenis_pekerjaan)
                    this.updateBooking.append('jenis_layanan', this.form.jenis_layanan)
                    this.updateBooking.append('keterangan_customer', this.form.keterangan_customer)

                    var url = this.$api+'/booking/'+this.editId
                    this.$http.post(url, this.updateBooking, {
                        headers: {
                            'Authorization':'Bearer '+localStorage.getItem('token')
                        }
                    }).then(response=>{
                        this.response_message = response.data.message
                        this.color = 'blue-grey darken-1'
                        this.snackbar1 = true
                        this.icon_message = 'mdi-check-decagram'
                        this.title_message = 'Success'
                        this.editDataDialog = false
                        this.readData()
                        
                    }).catch(error=>{
                        this.error_message = error.response.data.message;
                        this.color = 'warning'
                        this.snackbar = true
                        this.icon_message = 'mdi-alert-decagram'
                        this.title_message = 'Error'
                    })

                }else{
                    this.updateBooking.append('nama_customer', this.form.nama_customer)
                    this.updateBooking.append('email_customer', this.form.email_customer)                    
                    this.updateBooking.append('no_handphone', this.form.no_handphone)
                    this.updateBooking.append('no_polisi', this.form.no_polisi)
                    this.updateBooking.append('id_dealer', this.form.nama_dealer)
                    this.updateBooking.append('id_kendaraan', this.form.model_kendaraan)
                    this.updateBooking.append('no_rangka', this.form.no_rangka)
                    var formatted_tgl_service = this.form.tgl_service+' '+this.form.jam_service
                    this.updateBooking.append('tgl_service',formatted_tgl_service)
                    this.updateBooking.append('jenis_pekerjaan', this.form.jenis_pekerjaan)
                    this.updateBooking.append('jenis_layanan', this.form.jenis_layanan)
                    this.updateBooking.append('keterangan_customer', this.form.keterangan_customer)

                    var url = this.$api+'/booking/'+this.editId
                    this.$http.post(url, this.updateBooking, {
                        headers: {
                            'Authorization':'Bearer '+localStorage.getItem('token')
                        }
                    }).then(response=>{
                        this.response_message = response.data.message
                        this.color = 'blue-grey darken-1'
                        this.snackbar1 = true
                        this.icon_message = 'mdi-check-decagram'
                        this.title_message = 'Success'
                        this.editDataDialog = false
                        this.readData()
                        
                    }).catch(error=>{
                        this.error_message = error.response.data.message;
                        this.color = 'warning'
                        this.snackbar = true
                        this.icon_message = 'mdi-alert-decagram'
                        this.title_message = 'Error'
                    })
                }
            }
        },
        saveStatus(){
            if(this.$refs.form1.validate()){
                if(this.form.keterangan_cco===null){
                    this.updateBooking.append('status', this.form.status)
                    this.updateBooking.append('keterangan_cco', '')
                    var url = this.$api+'/booking-status/'+this.editId
                    this.$http.post(url, this.updateBooking, {
                        headers: {
                            'Authorization':'Bearer '+localStorage.getItem('token')
                        }
                    }).then(response=>{
                        this.response_message = response.data.message
                        this.color = 'blue-grey darken-1'
                        this.snackbar1 = true
                        this.icon_message = 'mdi-check-decagram'
                        this.title_message = 'Success'
                        this.editStatusDialog = false
                        this.readData()
                        
                    }).catch(error=>{
                        this.error_message = error.response.data.message;
                        this.color = 'warning'
                        this.snackbar = true
                        this.icon_message = 'mdi-alert-decagram'
                        this.title_message = 'Error'
                    })
                }else{
                    this.updateBooking.append('status', this.form.status)
                    this.updateBooking.append('keterangan_cco', this.form.keterangan_cco)
                    var url = this.$api+'/booking-status/'+this.editId
                    this.$http.post(url, this.updateBooking, {
                        headers: {
                            'Authorization':'Bearer '+localStorage.getItem('token')
                        }
                    }).then(response=>{
                        this.response_message = response.data.message
                        this.color = 'blue-grey darken-1'
                        this.snackbar1 = true
                        this.icon_message = 'mdi-check-decagram'
                        this.title_message = 'Success'
                        this.editStatusDialog = false
                        this.readData()
                        
                    }).catch(error=>{
                        this.error_message = error.response.data.message;
                        this.color = 'warning'
                        this.snackbar = true
                        this.icon_message = 'mdi-alert-decagram'
                        this.title_message = 'Error'
                    })
                }
                
            }
        },
        formatDate(date){
            return moment(String(date)).locale('id').format('dddd, DD MMMM YYYY HH:mm')
        },
        formatTimezone(date1){
            return moment(date1).tz('Asia/Jakarta').locale('id').format('dddd, DD MMMM YYYY HH:mm') 
        },
        nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
        },
        formerPage () {
            if (this.page - 1 >= 1) this.page -= 1
        },
        updateItemsPerPage (number) {
            this.itemsPerPage = number
        },
        isStatus(item){
            if(item.status==='Confirmed' || item.status==='Rescheduled & Confirmed'){
                return 'border:3px solid #4CAF50'
            }else if(item.status === 'New'){
                return 'border: 3px solid #FFC107'
            }else if(item.status === 'Cancelled'){
                return 'border: 3px solid #FF5252'
            }
        },
        close(){
            this.editDataDialog = false
            this.$refs.form.reset()
        },
        close1(){
            this.editStatusDialog = false,
            this.$refs.form.reset()
        }

    },
    mounted(){
        this.readData();
        this.getBookingLog();
        this.getDataKendaraan();
        this.getDataDealer();
        this.overlay = false
    },
    created(){
        this.interval = setInterval(this.readData, 5000)
        this.interval1 = setInterval(this.getBookingLog, 5000)
    },
    beforeDestroy(){
        clearInterval(this.interval)
        clearInterval(this.interval1)
    }
  }
</script>
