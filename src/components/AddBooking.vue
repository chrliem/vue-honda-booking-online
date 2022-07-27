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

    <!-- Section Banner  -->
    <section class="brown lighten-5 mb-3 mt-n4">
        <v-parallax height="300">
          <v-layout column align-center justify-center>
            <div class="headline black--text mb-3 text-xs-center"><strong>B A N N E R</strong></div>
          </v-layout>
        </v-parallax>
    </section>


    <v-container fluid>
        <v-layout justify-center>
        <v-stepper v-model="stepper" vertical flat class="ma-0 ma-md-3">
            <v-stepper-step :complete="stepper > 1" step="1">
                Ketentuan Booking Service
            </v-stepper-step>

            <v-stepper-content step="1">
                <v-card flat color="red lighten-5" class="mb-12 pa-5" height="auto">
                    <p class="text-left">1. Lorem ipsum.</p>
                    <p class="text-left">2. Lorem ipsum..</p>
                    <p class="text-left">3. Lorem ipsum..</p>
                    <p class="text-left">4. Lorem ipsum.</p>
                    <p class="text-left">5. Lorem ipsum..</p>
                    <p class="text-left">6. Lorem ipsum..</p>
                    <p class="text-left">7. Lorem ipsum.</p>
                    <p class="text-left">8.Lorem ipsum.</p>
                    <p class="text-left">9. Lorem ipsum.</p>
                </v-card>
                <v-btn color="primary" @click="stepper = 2">
                    Saya memahami
                </v-btn>
                <v-btn text>
                    Batal
                </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 2" step="2">
                Pengisian Data Diri dan Kendaraan
            </v-stepper-step>

            <v-stepper-content step="2">
                <v-card flat class="mb-4">
                    <v-container>
                        <v-text-field label="Nama Lengkap" outlined></v-text-field>
                        <v-text-field label="Alamat Email" outlined></v-text-field>
                        <v-text-field label="Nomor Handphone" outlined></v-text-field>
                        <v-text-field label="Nomor Polisi" outlined></v-text-field>
                        <v-row>
                            <v-col cols="12" md="6">
                            <v-autocomplete
                                label="Model Kendaraan"
                                outlined
                            ></v-autocomplete>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-autocomplete
                                label="Jenis Transmisi"
                                outlined
                            ></v-autocomplete>
                        </v-col>
                        </v-row>                            
                    </v-container>
                </v-card>
                <v-btn color="primary" @click="stepper = 3">
                    Lanjut
                </v-btn>
                <v-btn text @click="stepper=1">
                    Kembali
                </v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="stepper > 3" step="3">
                Penjadwalan dan Lokasi Dealer
            </v-stepper-step>

            <v-stepper-content step="3">
            <v-card flat class="mb-4">
                <v-row>
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            label="Dealer"
                            outlined
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            label="Jenis Pekerjaan"
                            outlined
                        ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" md="4">
                        <v-autocomplete
                            label="Jenis Layanan"
                            outlined
                        ></v-autocomplete>
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
                            label="Tanggal Service"
                            persistent-hint
                            v-bind="attrs"
                            v-on="on"
                            outlined
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            no-title
                            @input="menu1 = false"
                            locale="id"
                        ></v-date-picker>
                    </v-menu>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-autocomplete
                            label="Jam Service"
                            outlined
                        ></v-autocomplete>
                    </v-col>
                </v-row>
                    
                <v-textarea
                outlined
                label="Pesan/Keluhan"
                ></v-textarea>
            </v-card>
            <v-btn
                color="primary"
                @click="stepper = 4"
            >
                Lanjut
            </v-btn>
            <v-btn text @click="stepper=2">
                Kembali
            </v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">
                Konfirmasi Data
            </v-stepper-step>
            <v-stepper-content step="4">
            <v-card
                flat class="mb-4">         
                <p>Data yang sudah diisi ditampilkan</p>
                <p>Checkbox ketentuan privasi</p>
                <p>Checkbox apakah ingin menerima penawaran dari Hyundai melalui email</p>
                <p>CAPTCHA</p>
            </v-card>
            <v-btn
                color="primary"
                @click="stepper = 1"
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
  </v-app>
</template>

<script>
export default {
    data (){
        return{
            stepper: 1,
            load: false,
            snackbar: false,
            error_message: '',
            response_message: '',
            temp_nama: '',
            temp_email: '',
            temp_no_hp: '',
            temp_no_polisi: '',
            temp_kendaraan: '',
            temp_jenis_transmisi: '',
            temp_dealer: '',
            temp_tgl_booking: '',
            temp_jam_booking: '',
            temp_jenis_pekerjaan: '',
            temp_jenis_layanan: '',
            temp_keterangan_customer: '',
            booking: new FormData,
            form: {
                nama_customer: '',
                email_customer: '',
                no_handphone: '',
                no_polisi: '',
                id_kendaraan: '',
                jenis_transmisi: '',
                id_dealer: '',
                tgl_booking: '',
                jenis_pekerjaan: '',
                jenis_layanan: '',
                keterangan_customer: ''
            }
        }
    }
};
</script>

<style>

</style>