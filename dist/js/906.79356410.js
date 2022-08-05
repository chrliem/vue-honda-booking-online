"use strict";(self["webpackChunkhonda_booking_online"]=self["webpackChunkhonda_booking_online"]||[]).push([[906],{906:function(e,a,t){t.r(a),t.d(a,{default:function(){return m}});var n=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",[n("v-app-bar",{attrs:{app:"",height:"80"}},[n("v-toolbar-title",[n("img",{staticClass:"mt-2 hidden-sm-and-down",attrs:{src:t(8294),height:"50px",contain:""}}),n("img",{staticClass:"mt-1 hidden-md-and-up",attrs:{src:t(8294),height:"20px",contain:""}})]),n("v-toolbar-title",{staticClass:"ml-4 hidden-sm-and-down"},[e._v("Booking Service")]),n("v-toolbar-title",{staticClass:"ml-5 hidden-md-and-up"},[e._v("Booking Service")])],1),n("v-container",{staticClass:"background",attrs:{fluid:""}},[n("v-layout",{staticClass:"ma-md-12 ma-sm-5",attrs:{"justify-center":""}},[n("v-stepper",{staticClass:"ma-md-3",attrs:{color:"#f5f5f5",vertical:"",elevation:"24"},model:{value:e.stepper,callback:function(a){e.stepper=a},expression:"stepper"}},[n("v-stepper-step",{attrs:{complete:e.stepper>1,step:"1"}},[e._v(" Ketentuan Booking Service ")]),n("v-stepper-content",{attrs:{step:"1"}},[n("v-card",{staticClass:"mb-12 pa-5",attrs:{flat:"",color:"blue-grey lighten-5",height:"auto"}},[n("ol",[n("li",{staticClass:"text-left"},[e._v("Booking harus di lakukan maksimal H-1 sebelum pukul 16.00 WIB jika service dilakukan pada esok harinya.")]),n("li",{staticClass:"text-left"},[e._v("Setelah melakukan Booking Online, maka staff booking service akan segera menghubungi Anda untuk konfirmasi ulang, apakah jam booking tersedia atau sudah penuh")]),n("li",{staticClass:"text-left"},[e._v("Jika jam booking yang diinginkan sudah penuh, akan di tawarkan opsi untuk jam lain oleh staff booking service")]),n("li",{staticClass:"text-left"},[e._v("Konfirmasi booking kepada customer oleh staff booking dilakukan pada jam kerja Senin-Jumat pkl 08.00-16.00 WIB dan Sabtu pkl 08.00-12.00 WIB")]),n("li",{staticClass:"text-left"},[e._v("Waktu toleransi keterlambatan kedetangan booking service adalah "),n("strong",[e._v("15 menit")])])])]),n("v-btn",{attrs:{color:"primary"},on:{click:function(a){e.stepper=2}}},[e._v(" Saya memahami ")]),n("v-btn",{attrs:{text:""}},[e._v(" Batal ")])],1),n("v-stepper-step",{attrs:{complete:e.stepper>2,step:"2"}},[e._v(" Pengisian Data Diri dan Kendaraan ")]),n("v-stepper-content",{attrs:{step:"2"}},[n("v-card",{staticClass:"mb-4",attrs:{flat:""}},[n("v-container",[n("v-form",{ref:"form",model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[n("v-text-field",{attrs:{rules:e.namaRules,label:"Nama Lengkap",hint:"Contoh: John Doe","prepend-inner-icon":"mdi-account",outlined:""},model:{value:e.form.nama_customer,callback:function(a){e.$set(e.form,"nama_customer",a)},expression:"form.nama_customer"}}),n("v-text-field",{attrs:{label:"Alamat Email",hint:"Contoh: username@email.com","prepend-inner-icon":"mdi-email",outlined:""},model:{value:e.form.email_customer,callback:function(a){e.$set(e.form,"email_customer",a)},expression:"form.email_customer"}}),n("v-text-field",{attrs:{placeholder:"081234567890",rules:e.noHPRules,label:"Nomor Handphone",hint:"Contoh: 081234567890","prepend-inner-icon":"mdi-cellphone",outlined:""},model:{value:e.form.no_handphone,callback:function(a){e.$set(e.form,"no_handphone",a)},expression:"form.no_handphone"}}),n("v-text-field",{attrs:{placeholder:"AD 1234 HO",rules:e.noPolisiRules,label:"Nomor Polisi","prepend-inner-icon":"mdi-car-search",hint:"Contoh: AD 1234 HO atau ad 1234 ho",outlined:""},model:{value:e.form.no_polisi,callback:function(a){e.$set(e.form,"no_polisi",a)},expression:"form.no_polisi"}}),n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-car",rules:e.kendaraanRules,label:"Model Kendaraan",items:e.kendaraan,"item-text":"model_kendaraan","item-value":"id_kendaraan",outlined:""},model:{value:e.form.id_kendaraan,callback:function(a){e.$set(e.form,"id_kendaraan",a)},expression:"form.id_kendaraan"}}),n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-car-clutch",rules:e.transmisiRules,label:"Jenis Transmisi",items:e.transmisi,"item-text":"jenis_transmisi","item-value":"jenis_transmisi",outlined:""},model:{value:e.form.jenis_transmisi,callback:function(a){e.$set(e.form,"jenis_transmisi",a)},expression:"form.jenis_transmisi"}}),n("v-row",{staticClass:"hidden-md-and-down"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-car",rules:e.kendaraanRules,label:"Model Kendaraan",items:e.kendaraan,"item-text":"model_kendaraan","item-value":"id_kendaraan",outlined:""},model:{value:e.form.id_kendaraan,callback:function(a){e.$set(e.form,"id_kendaraan",a)},expression:"form.id_kendaraan"}})],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-car-clutch",rules:e.transmisiRules,label:"Jenis Transmisi",items:e.transmisi,"item-text":"jenis_transmisi","item-value":"jenis_transmisi",outlined:""},model:{value:e.form.jenis_transmisi,callback:function(a){e.$set(e.form,"jenis_transmisi",a)},expression:"form.jenis_transmisi"}})],1)],1)],1)],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:e.validate1}},[e._v(" Lanjut ")]),n("v-btn",{attrs:{text:""},on:{click:function(a){e.stepper=1}}},[e._v(" Kembali ")])],1),n("v-stepper-step",{attrs:{complete:e.stepper>3,step:"3"}},[e._v(" Penjadwalan dan Lokasi Dealer ")]),n("v-stepper-content",{attrs:{step:"3"}},[n("v-card",{staticClass:"mb-4 mt-5",attrs:{flat:""}},[n("v-form",{ref:"form1",model:{value:e.valid1,callback:function(a){e.valid1=a},expression:"valid1"}},[n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-map-marker",rules:e.dealerRules,label:"Dealer",outlined:"",items:e.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:e.form.id_dealer,callback:function(a){e.$set(e.form,"id_dealer",a)},expression:"form.id_dealer"}}),n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-tools",rules:e.jenisPekerjaanRules,label:"Jenis Pekerjaan",items:e.jenis_pekerjaan,"item-text":"jenis_pekerjaan","item-value":"jenis_pekerjaan",outlined:""},model:{value:e.form.jenis_pekerjaan,callback:function(a){e.$set(e.form,"jenis_pekerjaan",a)},expression:"form.jenis_pekerjaan"}}),n("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:""===e.form.jenis_pekerjaan,expression:"form.jenis_pekerjaan===''"}],staticClass:"hidden-lg-and-up",attrs:{label:"Jenis Layanan",disabled:"",outlined:""}}),"Authorized Workshop"===e.form.jenis_pekerjaan?n("span",[n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{rules:e.jenisLayananRules,label:"Jenis Layanan",items:e.layanan_authorized_workshop,"item-text":"jenis_layanan","item-value":"jenis_layanan",outlined:""},model:{value:e.form.jenis_layanan,callback:function(a){e.$set(e.form,"jenis_layanan",a)},expression:"form.jenis_layanan"}})],1):"Home Service"===e.form.jenis_pekerjaan?n("span",[n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{rules:e.jenisLayananRules,label:"Jenis Layanan",items:e.layanan_home_service,"item-text":"jenis_layanan","item-value":"jenis_layanan",outlined:""},model:{value:e.form.jenis_layanan,callback:function(a){e.$set(e.form,"jenis_layanan",a)},expression:"form.jenis_layanan"}})],1):e._e(),n("v-menu",{ref:"menu1",staticClass:"hidden-lg-and-up",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"100%","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(a){var t=a.on,s=a.attrs;return[n("v-text-field",e._g(e._b({staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-calendar-range",rules:e.tglServiceRules,label:"Tanggal Service","persistent-hint":"",outlined:""},model:{value:e.form.tgl_service,callback:function(a){e.$set(e.form,"tgl_service",a)},expression:"form.tgl_service"}},"v-text-field",s,!1),t))]}}]),model:{value:e.menu1,callback:function(a){e.menu1=a},expression:"menu1"}},[n("v-date-picker",{staticClass:"hidden-lg-and-up",attrs:{"no-title":"",min:new Date((new Date).valueOf()+864e5).toISOString().slice(0,10),locale:"id"},model:{value:e.form.tgl_service,callback:function(a){e.$set(e.form,"tgl_service",a)},expression:"form.tgl_service"}})],1),n("v-autocomplete",{staticClass:"hidden-lg-and-up",attrs:{"prepend-inner-icon":"mdi-clock-time-eight",rules:e.jamServiceRules,label:"Jam Service",items:e.jam_service,"item-text":"name","item-value":"name",outlined:""},model:{value:e.form.jam_service,callback:function(a){e.$set(e.form,"jam_service",a)},expression:"form.jam_service"}}),n("v-row",{staticClass:"hidden-md-and-down"},[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-map-marker",rules:e.dealerRules,label:"Dealer",outlined:"",items:e.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:e.form.id_dealer,callback:function(a){e.$set(e.form,"id_dealer",a)},expression:"form.id_dealer"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-tools",rules:e.jenisPekerjaanRules,label:"Jenis Pekerjaan",items:e.jenis_pekerjaan,"item-text":"jenis_pekerjaan","item-value":"jenis_pekerjaan",outlined:""},model:{value:e.form.jenis_pekerjaan,callback:function(a){e.$set(e.form,"jenis_pekerjaan",a)},expression:"form.jenis_pekerjaan"}})],1),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:""===e.form.jenis_pekerjaan,expression:"form.jenis_pekerjaan===''"}],attrs:{label:"Jenis Layanan",disabled:"",outlined:""}}),"Authorized Workshop"===e.form.jenis_pekerjaan?n("span",[n("v-autocomplete",{attrs:{rules:e.jenisLayananRules,label:"Jenis Layanan",items:e.layanan_authorized_workshop,"item-text":"jenis_layanan","item-value":"jenis_layanan",outlined:""},model:{value:e.form.jenis_layanan,callback:function(a){e.$set(e.form,"jenis_layanan",a)},expression:"form.jenis_layanan"}})],1):"Home Service"===e.form.jenis_pekerjaan?n("span",[n("v-autocomplete",{attrs:{rules:e.jenisLayananRules,label:"Jenis Layanan",items:e.layanan_home_service,"item-text":"jenis_layanan","item-value":"jenis_layanan",outlined:""},model:{value:e.form.jenis_layanan,callback:function(a){e.$set(e.form,"jenis_layanan",a)},expression:"form.jenis_layanan"}})],1):e._e()],1)],1),n("v-row",{staticClass:"mt-n7 hidden-md-and-down"},[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-menu",{ref:"menu1",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"100%","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(a){var t=a.on,s=a.attrs;return[n("v-text-field",e._g(e._b({attrs:{"prepend-inner-icon":"mdi-calendar-range",rules:e.tglServiceRules,label:"Tanggal Service","persistent-hint":"",outlined:""},model:{value:e.form.tgl_service,callback:function(a){e.$set(e.form,"tgl_service",a)},expression:"form.tgl_service"}},"v-text-field",s,!1),t))]}}]),model:{value:e.menu1,callback:function(a){e.menu1=a},expression:"menu1"}},[n("v-date-picker",{staticClass:"hidden-md-and-down",attrs:{"no-title":"",min:new Date((new Date).valueOf()+864e5).toISOString().slice(0,10),locale:"id"},model:{value:e.form.tgl_service,callback:function(a){e.$set(e.form,"tgl_service",a)},expression:"form.tgl_service"}})],1)],1),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-autocomplete",{attrs:{"prepend-inner-icon":"mdi-clock-time-eight",rules:e.jamServiceRules,label:"Jam Service",items:e.jam_service,"item-text":"name","item-value":"name",outlined:""},model:{value:e.form.jam_service,callback:function(a){e.$set(e.form,"jam_service",a)},expression:"form.jam_service"}})],1)],1),n("v-textarea",{attrs:{"prepend-inner-icon":"mdi-pencil-box-multiple",outlined:"",label:"Pesan/Keluhan",hint:"Sampaikan pesan atau keluhan yang ingin Anda sampaikan"},model:{value:e.form.keterangan_customer,callback:function(a){e.$set(e.form,"keterangan_customer",a)},expression:"form.keterangan_customer"}})],1)],1),n("v-btn",{attrs:{color:"primary"},on:{click:e.validate2}},[e._v("Lanjut")]),n("v-btn",{attrs:{text:""},on:{click:function(a){e.stepper=2}}},[e._v(" Kembali ")])],1),n("v-stepper-step",{attrs:{complete:e.stepper>4,step:"4"}},[e._v(" Konfirmasi Data ")]),n("v-stepper-content",{attrs:{step:"4"}},[n("v-card",{staticClass:"mb-4",attrs:{flat:""}},[n("v-card-subtitle",[n("strong",[e._v("Data Booking Anda")])]),n("v-divider"),n("v-simple-table",{attrs:{dense:""}},[n("tbody",[n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Nama Customer")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.nama_customer))])]),n("tr",{directives:[{name:"show",rawName:"v-show",value:""!==e.form.email_customer,expression:"form.email_customer!==''"}]},[n("td",{staticClass:"text-left"},[n("strong",[e._v("Email Customer")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.email_customer))])]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("No Handphone")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.no_handphone))])]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("No Polisi")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.no_polisi))])]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Model Kendaraan")])]),n("td",{staticClass:"text-left"},e._l(e.kendaraan,(function(a){return n("span",{key:a.id_kendaraan},[a.id_kendaraan===e.form.id_kendaraan?n("span",[e._v(" "+e._s(a.model_kendaraan)+" ")]):e._e()])})),0)]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Jenis Transmisi")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.jenis_transmisi))])]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Dealer")])]),n("td",{staticClass:"text-left"},e._l(e.dealer,(function(a){return n("span",{key:a.id_dealer},[a.id_dealer===e.form.id_dealer?n("span",[e._v(" "+e._s(a.nama_dealer)+" ")]):e._e()])})),0)]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Jenis Pekerjaan")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.jenis_pekerjaan))])]),n("tr",[n("td",{staticClass:"text-left"},[n("strong",[e._v("Jenis Layanan")])]),n("td",{staticClass:"text-left"},[e._v(e._s(e.form.jenis_layanan))])]),n("tr",[n("td",{staticClass:"text-left",attrs:{colspan:"2"}},[n("strong",[e._v("Keterangan Customer")])])]),n("tr",[n("td",{staticClass:"text-left",attrs:{colspan:"2"}},[e._v(e._s(e.form.keterangan_customer))])])])]),n("v-form",{ref:"form2",model:{value:e.valid1,callback:function(a){e.valid1=a},expression:"valid1"}},[n("v-checkbox",{attrs:{rules:e.privacyRules,label:"Saya telah membaca dan menyetujui kebijakan privasi*",required:""},model:{value:e.privacy_checkbox,callback:function(a){e.privacy_checkbox=a},expression:"privacy_checkbox"}}),n("v-card",{attrs:{dense:""}},[n("v-card-text",[n("p",[n("strong",[e._v("Kebijakan Privasi ")]),e._v(" "),n("br"),e._v("Kami menghargai kepercayaan Anda. Untuk menghormati kepercayaan itu, dealer kami mematuhi standar etika dalam mengumpulkan, menggunakan, dan melindungi informasi apa pun yang Anda berikan. ")])])],1),n("v-checkbox",{attrs:{label:"Saya ingin menerima informasi penawaran dari HONDA mendatang."},model:{value:e.offers_checkbox,callback:function(a){e.offers_checkbox=a},expression:"offers_checkbox"}}),[n("vue-recaptcha",{ref:"recaptcha",staticClass:"d-flex justify-center",attrs:{sitekey:"6LemYEwhAAAAAKcWTc4RovvsWGvLqDGhspliKaWG"},on:{verify:e.onVerify},model:{value:e.form.captcha,callback:function(a){e.$set(e.form,"captcha",a)},expression:"form.captcha"}}),n("v-alert",{staticClass:"mt-3 mx-12 text-caption",attrs:{dense:"",outlined:"",type:"error"},model:{value:e.captcha_validation,callback:function(a){e.captcha_validation=a},expression:"captcha_validation"}},[e._v(" "+e._s(e.error_captcha)+" ")])]],2)],1),n("v-btn",{attrs:{color:"primary"},on:{click:e.validate3}},[e._v(" Booking ")]),n("v-btn",{attrs:{text:""},on:{click:function(a){e.stepper=3}}},[e._v(" Kembali ")])],1)],1)],1)],1),[n("v-footer",{staticClass:"mt-10",attrs:{dark:"",padless:"",width:"100%"}},[n("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"secondary",width:"100%"}},[n("v-card-text",{staticClass:"white--text"},[n("h3",[e._v("DEALER KAMI:")])]),n("v-row",{staticClass:"mt-n5",attrs:{justify:"center","no-gutters":""}},[n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",href:"https://www.hondasolobaru.co.id/",rounded:""}},[e._v(" Honda Solo Baru ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",href:"https://hondabintangsolo.co.id/"}},[e._v(" Honda Bintang Solo ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",href:"https://www.hondaperkasaklaten.co.id/",rounded:""}},[e._v(" Honda Perkasa Klaten ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",href:"https://hondabintangmadiun.co.id/"}},[e._v(" Honda Bintang Madiun ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",href:"https://hondasukunmalang.co.id/"}},[e._v(" Honda Sukun Malang ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",href:"https://hondalestariprobolinggo.co.id/"}},[e._v(" Honda Lestari Probolinggo ")]),n("v-btn",{staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",href:"https://hondabintangtabanan.co.id/"}},[e._v(" Honda Bintang Tabanan ")])],1),n("v-divider"),n("br"),n("img",{staticClass:"hidden-md-and-down",attrs:{position:"center center",width:"7%",src:"https://hondasukunmalang.co.id/wp-content/uploads/2022/07/HSM.png"}}),n("img",{staticClass:"hidden-sm-and-up",attrs:{position:"center center",width:"20%",src:"https://hondasukunmalang.co.id/wp-content/uploads/2022/07/HSM.png"}}),n("v-card-text",{staticClass:"white--text"},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Honda Bintang Group")])])],1)],1)],n("v-snackbar",{attrs:{elevation:"24",color:e.color,timeout:"5000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(a){var t=a.attrs;return[n("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(a){e.snackbar1=!1}}},"v-btn",t,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar1,callback:function(a){e.snackbar1=a},expression:"snackbar1"}},[e._v(" "+e._s(e.response_message)+" ")]),n("v-snackbar",{attrs:{color:e.color,timeout:"2000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(a){var t=a.attrs;return[n("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(a){e.snackbar2=!1}}},"v-btn",t,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar2,callback:function(a){e.snackbar2=a},expression:"snackbar2"}},[e._v(" "+e._s(e.error_message)+" ")]),n("v-overlay",{attrs:{opacity:1,value:e.overlay}},[n("v-progress-circular",{attrs:{indeterminate:"",size:"64"}},[e._v(" Loading... ")])],1)],2)},s=[],i=t(6797),r=t.n(i),o={name:"AddBooking",data(){return{stepper:4,load:!1,snackbar:!1,snackbar1:!1,snackbar2:!1,captcha_validation:!1,error_message:"",response_message:"",error_captcha:"",color:"",offers_checkbox:!1,privacy_checkbox:!1,menu1:!1,valid:!1,valid1:!1,namaRules:[e=>!!e||"Nama lengkap harus diisi"],noHPRules:[e=>!!e||"Nomor handphone harus diisi",e=>/^(\+62|62|0)8[1-9][0-9]{6,9}$/.test(e)||"Nomor handphone invalid"],noPolisiRules:[e=>!!e||"Nomor polisi harus diisi",e=>/^[A-Za-z]{1,2}\s{1}\d{0,4}\s{0,1}[A-Za-z]{0,3}$/.test(e)||"Nomor polisi tidak sesuai format. Contoh: AD 1234 HO"],kendaraanRules:[e=>!!e||"Model kendaraan harus diisi"],transmisiRules:[e=>!!e||"Jenis transmisi harus diisi"],dealerRules:[e=>!!e||"Dealer harus diisi"],tglServiceRules:[e=>!!e||"Tanggal service harus diisi"],jamServiceRules:[e=>!!e||"Jam service harus diisi"],jenisPekerjaanRules:[e=>!!e||"Jenis pekerjaan harus diisi"],jenisLayananRules:[e=>!!e||"Jenis layanan harus diisi"],privacyRules:[e=>!!e||"Anda perlu menyetujui untuk melanjutkan"],booking:new FormData,form:{nama_customer:"",email_customer:"",no_handphone:"",no_polisi:"",id_kendaraan:"",jenis_transmisi:"",id_dealer:"",tgl_service:"",jam_service:"",jenis_pekerjaan:"",jenis_layanan:"",keterangan_customer:"",captcha:!1},kendaraan:[{id_kendaraan:"",model_kendaraan:""}],transmisi:[{jenis_transmisi:"Automatic"},{jenis_transmisi:"Manual"}],dealer:[{id_dealer:"",nama_dealer:""}],jenis_pekerjaan:[{jenis_pekerjaan:"Authorized Workshop"},{jenis_pekerjaan:"Home Service"}],layanan_authorized_workshop:[{jenis_layanan:"General Service (Perawatan Berkala)"},{jenis_layanan:"Body Repair (Perbaikan Bodi Mobil)"},{jenis_layanan:"Quick Maintenance"}],layanan_home_service:[{jenis_layanan:"Home Service"}],jam_service:[{name:"08:00"},{name:"08:30"},{name:"09:00"},{name:"09:30"},{name:"10:00"},{name:"10:30"},{name:"11:00"},{name:"11:30"},{name:"12:00"},{name:"12:30"},{name:"13:00"},{name:"13:30"},{name:"14:00"}]}},methods:{getDataKendaraan(){var e=this.$api+"/kendaraan";this.$http.get(e,{headers:{}}).then((e=>{this.kendaraan=e.data.data}))},getDataDealer(){var e=this.$api+"/dealer";this.$http.get(e,{headers:{}}).then((e=>{this.dealer=e.data.data}))},validate1(){this.$refs.form.validate()&&(this.stepper=3)},validate2(){this.$refs.form1.validate()&&(console.log("test"),this.stepper=4,console.log(this.stepper))},validate3(){this.$refs.form2.validate()&&(this.form.captcha?this.submit():(this.error_captcha="Verifikasi harus diisi",this.captcha_validation=!0))},onVerify:function(e){e&&(this.form.captcha=!0)},formatDate(){return r()(String(this.form.tgl_service)).locale("id").format("dddd, DD MMMM YYYY")},submit(){var e=this.form.tgl_service+" "+this.form.jam_service;this.booking.append("nama_customer",this.form.nama_customer),this.booking.append("email_customer",this.form.email_customer),this.booking.append("no_handphone",this.form.no_handphone),this.booking.append("no_polisi",this.form.no_polisi),this.booking.append("id_dealer",this.form.id_dealer),this.booking.append("id_kendaraan",this.form.id_kendaraan),this.booking.append("jenis_transmisi",this.form.jenis_transmisi),this.booking.append("tgl_service",e),this.booking.append("jenis_pekerjaan",this.form.jenis_pekerjaan),this.booking.append("jenis_layanan",this.form.jenis_layanan),this.booking.append("keterangan_customer",this.form.keterangan_customer);var a=this.$api+"/booking";this.$http.post(a,this.booking,{headers:{}}).then((e=>{this.response_message=e.data.message,this.snackbar1=!0,this.color="success",this.$refs.recaptcha.reset(),setTimeout((function(){window.location.reload(1)}),3e3)})).catch((e=>{this.error_message=e.response.data.message,this.color="red",this.snackbar=!0}))}},mounted(){this.getDataKendaraan(),this.getDataDealer(),this.overlay=!1}},l=o,c=t(1001),d=(0,c.Z)(l,n,s,!1,null,null,null),m=d.exports},8294:function(e,a,t){e.exports=t.p+"img/honda-logo.122277f2.png"}}]);
//# sourceMappingURL=906.79356410.js.map