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
    </v-app-bar>

    <!-- Section Banner 
    <section color="secondary" class="mb-3 mt-n2">
        <v-img height="200px" src="https://asset.honda-indonesia.com/images/background/bgalt_10.jpg">
          <v-layout column align-center justify-center>
            <div class="headline black--text text-xs-center">
            </div>
          </v-layout>
        </v-img>
    </section> -->

    <!-- Section Form Booking -->
    <v-container fluid class="background">
        <v-layout justify-center class="ma-md-12 ma-sm-5">
        <v-stepper v-model="stepper" color="#f5f5f5" vertical elevation="24"  class="ma-md-3">
            <v-stepper-step :complete="stepper > 1" step="1">
                Ketentuan Booking Service
            </v-stepper-step>

            <v-stepper-content step="1">
                <v-card flat color="blue-grey lighten-5" class="mb-12 pa-5" height="auto">
                    <ol>
                        <li class="text-left">Booking harus di lakukan maksimal H-1 sebelum pukul 16.00 WIB jika service dilakukan pada esok harinya.</li>
                        <li class="text-left">Setelah melakukan Booking Online, maka staff booking service akan segera menghubungi Anda untuk konfirmasi ulang, apakah jam booking tersedia atau sudah penuh</li>
                        <li class="text-left">Jika jam booking yang diinginkan sudah penuh, akan di tawarkan opsi untuk jam lain oleh staff booking service</li>
                        <li class="text-left">Konfirmasi booking kepada customer oleh staff booking dilakukan pada jam kerja Senin-Jumat pkl 08.00-16.00 WIB dan Sabtu pkl 08.00-12.00 WIB</li>
                        <li class="text-left">Waktu toleransi keterlambatan kedetangan booking service adalah <strong>15 menit</strong></li>
                    </ol>
                </v-card>
                <v-btn color="primary" @click="stepper = 2">
                    Saya memahami
                </v-btn>
                <v-btn text>
                    Batal
                </v-btn>
            </v-stepper-content>

            <v-stepper-step 
                :complete="stepper > 2" 
                step="2">
                Pengisian Data Diri dan Kendaraan
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-card flat class="mb-4">
                    <v-container>
                    <v-form v-model="valid" ref="form">
                        <v-text-field :rules="namaRules" v-model="form.nama_customer" label="Nama Lengkap" hint="Contoh: John Doe" prepend-inner-icon="mdi-account" outlined ></v-text-field>
                        <v-text-field v-model="form.email_customer" label="Alamat Email" hint="Contoh: username@email.com" prepend-inner-icon="mdi-email" outlined></v-text-field>
                        <v-text-field placeholder="081234567890" :rules="noHPRules" v-model="form.no_handphone" label="Nomor Handphone" hint="Contoh: 081234567890" prepend-inner-icon="mdi-cellphone" outlined></v-text-field>
                        <v-text-field placeholder="AD 1234 HO" :rules="noPolisiRules" v-model="form.no_polisi" label="Nomor Polisi" prepend-inner-icon="mdi-car-search" hint="Contoh: AD 1234 HO atau ad 1234 ho" outlined></v-text-field>
                        <v-autocomplete
                                class="hidden-lg-and-up"
                                prepend-inner-icon="mdi-car"
                                :rules="kendaraanRules"
                                v-model="form.id_kendaraan"
                                label="Model Kendaraan"
                                :items="kendaraan"
                                item-text="model_kendaraan"
                                item-value="id_kendaraan"
                                outlined
                            ></v-autocomplete>
                            <v-autocomplete
                                class="hidden-lg-and-up"
                                prepend-inner-icon="mdi-car-clutch"
                                :rules="transmisiRules"
                                v-model="form.jenis_transmisi"
                                label="Jenis Transmisi"
                                :items="transmisi"
                                item-text="jenis_transmisi"
                                item-value="jenis_transmisi"
                                outlined
                            ></v-autocomplete>
                        <v-row class="hidden-md-and-down">
                            <v-col cols="12" md="6">
                            <v-autocomplete
                                prepend-inner-icon="mdi-car"
                                :rules="kendaraanRules"
                                v-model="form.id_kendaraan"
                                label="Model Kendaraan"
                                :items="kendaraan"
                                item-text="model_kendaraan"
                                item-value="id_kendaraan"
                                outlined
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                prepend-inner-icon="mdi-car-clutch"
                                :rules="transmisiRules"
                                v-model="form.jenis_transmisi"
                                label="Jenis Transmisi"
                                :items="transmisi"
                                item-text="jenis_transmisi"
                                item-value="jenis_transmisi"
                                outlined
                            ></v-autocomplete>
                        </v-col>
                        </v-row>        
                    </v-form>
                    </v-container>
                </v-card>
                <v-btn color="primary" @click="validate1">
                    Lanjut
                </v-btn>
                <v-btn text @click="stepper=1">
                    Kembali
                </v-btn>
            </v-stepper-content>

            <v-stepper-step 
                :complete="stepper > 3" 
                step="3">
                Penjadwalan dan Lokasi Dealer
            </v-stepper-step>

            <v-stepper-content step="3">
            <v-card flat class="mb-4 mt-5">
                 <v-form v-model="valid1" ref="form1">
                    <!-- Mobile version -->
                    <v-autocomplete
                            class="hidden-lg-and-up"
                            prepend-inner-icon="mdi-map-marker"
                            :rules="dealerRules"
                            v-model="form.id_dealer"
                            label="Dealer"
                            outlined
                            :items="dealer"
                            item-text="nama_dealer"
                            item-value="id_dealer"
                        ></v-autocomplete>
                    <v-autocomplete
                            class="hidden-lg-and-up"
                            prepend-inner-icon="mdi-tools"
                            v-model="form.jenis_pekerjaan"
                            :rules="jenisPekerjaanRules"
                            label="Jenis Pekerjaan"
                            :items="jenis_pekerjaan"
                            item-text="jenis_pekerjaan"
                            item-value="jenis_pekerjaan"
                            outlined
                        ></v-autocomplete>
                        <v-autocomplete
                            class="hidden-lg-and-up"
                            v-show="form.jenis_pekerjaan===''"
                            label="Jenis Layanan"
                            disabled
                            outlined
                        ></v-autocomplete>
                        <span v-if="form.jenis_pekerjaan==='Authorized Workshop'">
                            <v-autocomplete
                            class="hidden-lg-and-up"
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
                                class="hidden-lg-and-up"
                                :rules="jenisLayananRules"
                                label="Jenis Layanan"
                                v-model="form.jenis_layanan"
                                :items="layanan_home_service"
                                item-text="jenis_layanan"
                                item-value="jenis_layanan"
                                outlined
                            ></v-autocomplete>
                        </span>
                        <v-menu
                        class="hidden-lg-and-up"
                        ref="menu1"
                        v-model="menu1"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        offset-y
                        max-width="100%"
                        min-width="auto">
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field 
                                class="hidden-lg-and-up"
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
                            class="hidden-lg-and-up"
                            v-model="form.tgl_service"
                            no-title
                            :min="new Date((new Date()).valueOf() + 1000*3600*24).toISOString().slice(0,10)"
                            locale="id"
                        ></v-date-picker>
                    </v-menu>
                    <v-autocomplete
                            prepend-inner-icon="mdi-clock-time-eight"
                            class="hidden-lg-and-up"
                            v-model="form.jam_service"
                            :rules="jamServiceRules"
                            label="Jam Service"
                            :items="jam_service"
                            item-text="name"
                            item-value="name"
                            outlined
                        ></v-autocomplete>
                <!-- Desktop version -->
                <v-row class="hidden-md-and-down">
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            prepend-inner-icon="mdi-map-marker"
                            :rules="dealerRules"
                            v-model="form.id_dealer"
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
                
                <v-row class="mt-n7 hidden-md-and-down">
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
                            class="hidden-md-and-down"
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
            </v-card>
                <v-btn
                color="primary"
                @click="validate2"
            >Lanjut</v-btn>
            <v-btn text @click="stepper=2">
                Kembali
            </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 4"  step="4">
                Konfirmasi Data
            </v-stepper-step>
            <v-stepper-content step="4">
            <v-card
                flat class="mb-4">         
                <v-card-subtitle><strong>Data Booking Anda</strong></v-card-subtitle>
                <v-divider></v-divider>
                <v-simple-table dense>
                    <tbody>
                        <tr>
                                <td class="text-left"><strong>Nama Customer</strong></td>
                                <td class="text-left">{{ form.nama_customer }}</td>
                                </tr>
                                <tr v-show="form.email_customer!==''">
                                    <td class="text-left"><strong>Email Customer</strong></td>
                                    <td class="text-left">{{ form.email_customer }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>No Handphone</strong></td>
                                    <td class="text-left">{{ form.no_handphone }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>No Polisi</strong></td>
                                    <td class="text-left">{{ form.no_polisi }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>Model Kendaraan</strong></td>
                                    <td class="text-left"><span v-for="k in kendaraan" :key="k.id_kendaraan">
                                        <span v-if="k.id_kendaraan===form.id_kendaraan">
                                           {{k.model_kendaraan}}
                                        </span>
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>Jenis Transmisi</strong></td>
                                    <td class="text-left">{{ form.jenis_transmisi }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>Dealer</strong></td>
                                    <td class="text-left"><span v-for="d in dealer" :key="d.id_dealer">
                                        <span v-if="d.id_dealer===form.id_dealer">
                                            {{d.nama_dealer}}
                                        </span>
                                    </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>Jenis Pekerjaan</strong></td>
                                    <td class="text-left">{{ form.jenis_pekerjaan }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left"><strong>Jenis Layanan</strong></td>
                                    <td class="text-left">{{ form.jenis_layanan }}</td>
                                </tr>
                                <tr>
                                    <td class="text-left" colspan="2"><strong>Keterangan Customer</strong></td>
                                </tr>
                                <tr>
                                    <td class="text-left" colspan="2">{{form.keterangan_customer}}</td>
                                </tr>
                    </tbody>
                </v-simple-table>
                <v-form v-model="valid1" ref="form2">
                <v-checkbox
                    v-model="privacy_checkbox"
                    :rules="privacyRules"
                    label="Saya telah membaca dan menyetujui kebijakan privasi*"
                    required
                    ></v-checkbox>
                <v-card dense>
                    <v-card-text>
                        <p> <strong>Kebijakan Privasi </strong> <br>Kami menghargai kepercayaan Anda. Untuk menghormati kepercayaan itu, dealer kami mematuhi standar etika dalam mengumpulkan, menggunakan, dan melindungi informasi apa pun yang Anda berikan. </p></v-card-text>
                </v-card>
                <v-checkbox
                    v-model="offers_checkbox"
                    label="Saya ingin menerima informasi penawaran dari HONDA mendatang."
                    ></v-checkbox>
                    <template>
                    <vue-recaptcha 
                        class="d-flex justify-center"
                        v-model="form.captcha"
                        ref="recaptcha" 
                        sitekey="6LemYEwhAAAAAKcWTc4RovvsWGvLqDGhspliKaWG"
                        @verify=onVerify />
                        <v-alert
                            v-model="captcha_validation"
                            dense
                            outlined
                            type="error"
                            class="mt-3 mx-12 text-caption"
                        >
                            {{ error_captcha }}
                        </v-alert>
                </template>
                </v-form>
            </v-card>
            <v-btn
                color="primary"
                @click="validate3"
            >
                Booking
            </v-btn>
            <v-btn text @click="stepper=3">
                Kembali
            </v-btn>
            </v-stepper-content>
        </v-stepper>
        </v-layout>
    </v-container>
    <template>
        <v-footer
            dark
            padless
            class="mt-10"
            width="100%"
        >
            <v-card
            flat
            tile
            class="white--text text-center"
            color="secondary"
            width="100%"
            >
            <v-card-text class="white--text">
                <h3>DEALER KAMI:</h3>
            </v-card-text>
            <v-row
                justify="center"
                no-gutters
                class="mt-n5"
                >
                <v-btn
                    color="white"
                    text
                    href="https://www.hondasolobaru.co.id/"
                    rounded
                    class="my-2"
                >
                    Honda Solo Baru
                </v-btn>
                <v-btn
                    color="white"
                    text
                    rounded
                    href="https://hondabintangsolo.co.id/"
                    class="my-2"
                >
                    Honda Bintang Solo
                </v-btn>
                <v-btn
                    color="white"
                    text
                    href="https://www.hondaperkasaklaten.co.id/"
                    rounded
                    class="my-2"
                >
                    Honda Perkasa Klaten
                </v-btn>
                <v-btn
                    color="white"
                    text
                    rounded
                    href="https://hondabintangmadiun.co.id/"
                    class="my-2"
                >
                    Honda Bintang Madiun
                </v-btn>
                <v-btn
                    color="white"
                    text
                    rounded
                    href="https://hondasukunmalang.co.id/"
                    class="my-2"
                >
                    Honda Sukun Malang
                </v-btn>
                <v-btn
                    color="white"
                    text
                    rounded
                    href="https://hondalestariprobolinggo.co.id/"
                    class="my-2"
                >
                    Honda Lestari Probolinggo
                </v-btn>
                <v-btn
                    color="white"
                    text
                    rounded
                    href="https://hondabintangtabanan.co.id/"
                    class="my-2"
                >
                    Honda Bintang Tabanan
                </v-btn>
            </v-row>
            <v-divider></v-divider><br>
            <img class="hidden-md-and-down" position="center center" width="7%" src="https://hondasukunmalang.co.id/wp-content/uploads/2022/07/HSM.png">
            <img class="hidden-sm-and-up" position="center center" width="20%" src="https://hondasukunmalang.co.id/wp-content/uploads/2022/07/HSM.png">

            <v-card-text class="white--text">
                {{ new Date().getFullYear() }} — <strong>Honda Bintang Group</strong>
            </v-card-text>
            </v-card>
        </v-footer>
    </template>
     <v-snackbar v-model="snackbar1" elevation="24" :color="color" timeout="5000" bottom>
            {{response_message}}
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

        <v-snackbar v-model="snackbar2" :color="color" timeout="2000" bottom>
            {{error_message}}
            <template v-slot:action="{ attrs }">
            <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar2 = false"
            >
            Close</v-btn>
            </template>
        </v-snackbar>

    <v-overlay
      :opacity="1"
      :value="overlay"
    >
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>

    
  </v-app>
</template>

<script>
import moment from 'moment';

export default { 
    name:'AddBooking',
    data (){ 
        return{
            stepper: 1,
            load: false,
            snackbar: false,
            snackbar1: false,
            snackbar2: false,
            captcha_validation: false,
            error_message: '',
            response_message: '',
            error_captcha: '',
            color: '',
            offers_checkbox: false,
            privacy_checkbox: false,
            menu1: false,
            valid: false,
            valid1: false,
            namaRules: [
                (v) => !!v || 'Nama lengkap harus diisi',
            ],
            noHPRules: [
                (v) => !!v || 'Nomor handphone harus diisi',
                (v) => /^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(v) || "Nomor handphone invalid"
            ],
            noPolisiRules: [
                (v) => !!v || 'Nomor polisi harus diisi',
                (v) => /^[A-Za-z]{1,2}\s{1}\d{0,4}\s{0,1}[A-Za-z]{0,3}$/.test(v) || "Nomor polisi tidak sesuai format. Contoh: AD 1234 HO"
            ],
            kendaraanRules: [
                (v) => !!v || 'Model kendaraan harus diisi',
            ],
            transmisiRules: [
                (v) => !!v || 'Jenis transmisi harus diisi',
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
            privacyRules: [
                (v) => !!v || 'Anda perlu menyetujui untuk melanjutkan'
            ],
            booking: new FormData,
            form: {
                nama_customer: '',
                email_customer: '',
                no_handphone: '',
                no_polisi: '',
                id_kendaraan: '',
                jenis_transmisi: '',
                id_dealer: '',
                tgl_service: '',
                jam_service:'',
                jenis_pekerjaan: '',
                jenis_layanan: '',
                keterangan_customer: '',
                captcha: false
            },
            
           kendaraan: [{
                id_kendaraan: '',
                model_kendaraan: ''
           }],
           transmisi: [
                { jenis_transmisi: 'Automatic'},
                { jenis_transmisi: 'Manual'}
            ],
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
           ]
        };
    },
    methods:{
        getDataKendaraan(){
            var url = this.$api+'/kendaraan'
                this.$http.get(url,{
                    headers:{

                    }
                }).then(response=>{
                    this.kendaraan = response.data.data
                })
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
        validate1(){
            if(this.$refs.form.validate()){
                this.stepper=3;
            }        
        },
        validate2(){
            if(this.$refs.form1.validate()){
                console.log("test")
                this.stepper=4;
                console.log(this.stepper)
            }
        },
        validate3(){
            if(this.$refs.form2.validate()){
                if(this.form.captcha){
                    this.submit();
                }else{
                    this.error_captcha = 'Verifikasi harus diisi'
                    this.captcha_validation = true
                }
                
            }
        },
        onVerify: function (response) {
            if (response) this.form.captcha = true;
        },
        formatDate(){
            return moment(String(this.form.tgl_service)).locale('id').format('dddd, DD MMMM YYYY')
        },
        submit(){
            var formatted_tgl_service = this.form.tgl_service+' '+this.form.jam_service
            this.booking.append('nama_customer', this.form.nama_customer)
            this.booking.append('email_customer', this.form.email_customer)
            this.booking.append('no_handphone', this.form.no_handphone)
            this.booking.append('no_polisi', this.form.no_polisi)
            this.booking.append('id_dealer', this.form.id_dealer)
            this.booking.append('id_kendaraan', this.form.id_kendaraan)
            this.booking.append('jenis_transmisi', this.form.jenis_transmisi)
            this.booking.append('tgl_service',formatted_tgl_service)
            this.booking.append('jenis_pekerjaan', this.form.jenis_pekerjaan)
            this.booking.append('jenis_layanan', this.form.jenis_layanan)
            this.booking.append('keterangan_customer', this.form.keterangan_customer)

            var url = this.$api+'/booking'
            this.$http.post(url, this.booking, {
                headers:{

                }
            }).then(response=>{
                this.response_message = response.data.message
                this.snackbar1 = true
                this.color = 'success'
                this.$refs.recaptcha.reset()
                setTimeout(function(){
                    window.location.reload(1);
                }, 3000);
            }).catch(error=>{
                this.error_message = error.response.data.message
                this.color = 'red'
                this.snackbar = true
            })
        }
    },
    mounted(){
        this.getDataKendaraan();
        this.getDataDealer();
        this.overlay = false
    },
};
</script>

<style>
.background{
    width: 100%;
    height: 100%;
    left: 0;
    background: url( 'https://www.hondasolobaru.co.id/wp-content/uploads/2022/08/download-2.png') no-repeat center center;
    background-size: cover;
    transform: scale(1.1);
  }
</style>