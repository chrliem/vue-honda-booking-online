 <v-card elevation="2" fill-height>
            <v-card-title>
                <span class="headline align-center">Booking Service</span>
            </v-card-title>
            <v-container>
                <v-text-field class="mx-3" label="Nama Lengkap" outlined></v-text-field>
                <v-text-field class="mx-3" label="Alamat Email" outlined></v-text-field>
                <v-text-field class="mx-3" label="Nomor Handphone" outlined></v-text-field>
                <v-text-field class="mx-3" label="Nomor Polisi" outlined></v-text-field>
                <v-autocomplete class="mx-3" label="Model Kendaraan" outlined></v-autocomplete>
                <v-autocomplete class="mx-3" label="Jenis Transmisi" outlined></v-autocomplete>
                <v-autocomplete class="mx-3" label="Dealer" outlined></v-autocomplete>
                
                <v-menu
                    ref="menu1"
                    v-model="menu1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="auto">
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field class="mx-n5"
                        label="Tanggal Booking"
                        persistent-hint
                        prepend-icon="mdi-calendar"
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
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    >
                    <v-autocomplete
                        class="ml-3"
                        label="Jam"
                        outlined
                    ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    >
                    <v-autocomplete
                        label="Menit"
                        outlined
                    ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    class="mt-n5"
                    >
                    <v-autocomplete
                        class="ml-3"
                        label="Jenis Pekerjaan"
                        outlined
                    ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    sm="6"
                    md="3"
                    class="mt-n5"
                    >
                    <v-autocomplete
                        label="Jenis Layanan"
                        outlined
                    ></v-autocomplete>
                    </v-col>
                </v-row>
                <v-textarea
                    class="ml-3"
                    outlined
                    name="input-7-4"
                    label="Pesan/Keluhan"
                    ></v-textarea>
            </v-container>
        </v-card>

          <p class="text-left">1. Booking Service tidak dikenakan biaya tambahan.</p>
                        <p class="text-left">2. Booking Service minimal H-1 pada hari Senin – Jumat pukul 09:00 s/d 15:00, dan Sabtu pukul 08:00 s/d 11:00.</p>
                        <p class="text-left">3. Khusus untuk Booking Service Senin, lakukan pendaftaran paling lambat Sabtu pukul 13.00 WIB.</p>
                        <p class="text-left">4. Booking Service khusus perawatan berkala tanpa keluhan.</p>
                        <p class="text-left">5. Customer yang melakukan Booking Service akan di layani pada meja khusus.</p>
                        <p class="text-left">6. Waktu dibuat atas kesepakatan Dealer dengan Customer. Apabila booking pada hari dan jam bersangkutan penuh, maka dealer dapat menolak waktu yang diminta.</p>
                        <p class="text-left">7. Customer wajib datang sesuai dengan waktu yang telah di sepakati. Apabila ingin membatalkan atau mengubah waktu maka diwajibkan menginformasikan ke Dealer. Apabila pelanggan datang terlambat melebihi 15 menit dari waktu booking tanpa pemberitahuan maka diperlakukan seperti customer biasa (Ambil nomor antrian).</p>
                        <p class="text-left">8.Booking Service pada hari libur akan diproses pada hari kerja.</p>
                        <p class="text-left">9. Untuk Info Lebih Lanjut akan di Bantu CCO kami di Nomor 0822-4212-0162 | Call Center Service</p>