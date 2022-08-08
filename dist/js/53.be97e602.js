"use strict";(self["webpackChunkhonda_booking_online"]=self["webpackChunkhonda_booking_online"]||[]).push([[53],{2053:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var s=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("v-app",[s("v-app-bar",{attrs:{app:"",height:"80"}},[s("v-toolbar-title",[s("img",{staticClass:"mt-2 hidden-sm-and-down",attrs:{src:t(8294),height:"50px",contain:""}}),s("img",{staticClass:"mt-1 hidden-md-and-up",attrs:{src:t(8294),height:"20px",contain:""}})]),s("v-toolbar-title",{staticClass:"ml-4 hidden-sm-and-down"},[e._v("Booking Service ")]),s("v-toolbar-title",{staticClass:"ml-5 hidden-md-and-up"},[e._v("Booking Service")]),s("v-spacer"),s("v-toolbar-title",[e._v("Welcome, "),s("strong",[e._v(e._s(e.getUser()))]),e._v("! ")]),s("v-spacer"),s("v-btn",{attrs:{color:"error"},on:{click:e.logout}},[e._v("Logout")])],1),[s("v-card",{staticClass:"mx-6"},[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h3",[e._v("User Dashboard")])]),s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(a){e.search=a},expression:"search"}}),s("v-spacer"),s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(a){e.addUserDialog=!0}}},[e._v(" Tambah User")])],1),s("v-data-table",{attrs:{headers:e.headers,items:e.users,search:e.search,light:""},scopedSlots:e._u([{key:"item.actions",fn:function(a){var t=a.item;return[s("v-chip",[s("v-icon",{attrs:{color:"primary"},on:{click:function(a){return e.editHandler(t)}}},[e._v("mdi-pencil")])],1),s("v-chip",[s("v-icon",{attrs:{color:"red"},on:{click:function(a){return e.deleteHandler(t.id)}}},[e._v("mdi-delete")])],1)]}}],null,!0)})],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-status-dialog"},model:{value:e.addUserDialog,callback:function(a){e.addUserDialog=a},expression:"addUserDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Tambah User")])]),s("v-form",{ref:"form",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.namaRules,label:"Nama",hint:"John Doe","prepend-inner-icon":"mdi-account",outlined:"",required:""},model:{value:e.form.nama,callback:function(a){e.$set(e.form,"nama",a)},expression:"form.nama"}}),s("v-text-field",{attrs:{rules:e.emailRules,label:"Email",hint:"username@email.com","prepend-inner-icon":"mdi-account",outlined:"",required:""},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}}),s("v-text-field",{attrs:{"append-icon":e.show3?"mdi-eye":"mdi-eye-off",type:e.show3?"text":"password",rules:e.passwordRules,label:"Password","prepend-inner-icon":"mdi-lock",outlined:"",required:""},on:{"click:append":function(a){e.show3=!e.show3}},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}}),s("v-autocomplete",{attrs:{rules:e.roleRules,"prepend-inner-icon":"mdi-account-cog",label:"Role",outlined:"",items:e.role,"item-text":"role","item-value":"id"},model:{value:e.form.id_role,callback:function(a){e.$set(e.form,"id_role",a)},expression:"form.id_role"}}),s("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:2===e.form.id_role,expression:"form.id_role===2"}],attrs:{"prepend-inner-icon":"mdi-map-marker",label:"Dealer",outlined:"",items:e.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:e.form.id_dealer,callback:function(a){e.$set(e.form,"id_dealer",a)},expression:"form.id_dealer"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-status-dialog"},model:{value:e.editPasswordDialog,callback:function(a){e.editPasswordDialog=a},expression:"editPasswordDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Edit Password")])]),s("v-form",{ref:"form1",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[s("v-text-field",{attrs:{"append-icon":e.show3?"mdi-eye":"mdi-eye-off",type:e.show3?"text":"password",rules:e.passwordRules,label:"Password","prepend-inner-icon":"mdi-lock",outlined:"",required:""},on:{"click:append":function(a){e.show3=!e.show3}},model:{value:e.form.password,callback:function(a){e.$set(e.form,"password",a)},expression:"form.password"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close1}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate2}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:e.dialogConfirm,callback:function(a){e.dialogConfirm=a},expression:"dialogConfirm"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Warning!")])]),s("v-card-text",[e._v("Apakah Anda yakin ingin menghapus user ini?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close2}},[e._v("Batal")]),s("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteData}},[e._v("Hapus")])],1)],1)],1)],s("v-snackbar",{attrs:{elevation:"24",color:e.color,timeout:"5000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(a){var t=a.attrs;return[s("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(a){e.snackbar1=!1}}},"v-btn",t,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar1,callback:function(a){e.snackbar1=a},expression:"snackbar1"}},[e._v(" "+e._s(e.response_message)+" ")]),s("v-snackbar",{attrs:{color:e.color,timeout:"2000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(a){var t=a.attrs;return[s("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(a){e.snackbar2=!1}}},"v-btn",t,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar,callback:function(a){e.snackbar=a},expression:"snackbar"}},[e._v(" "+e._s(e.error_message)+" ")])],2)},r=[],o={name:"UserDashboard",data(){return{addUserDialog:!1,editPasswordDialog:!1,dialogConfirm:!1,snackbar:!1,snackbar1:!1,valid:"",editId:"",users:[],search:null,show3:"",dealer:[],role:[{id:1,role:"IT"},{id:2,role:"CCO"}],userData:new FormData,form:{nama:"",email:"",id_dealer:"",password:"",id_role:""},namaRules:[e=>!!e||"Nama harus diisi"],emailRules:[e=>!!e||"Email harus diisi"],passwordRules:[e=>!!e||"Password harus diisi"],dealerRules:[e=>!!e||"Dealer harus diisi"],roleRules:[e=>!!e||"Role harus diisi"],headers:[{text:"Nama",value:"nama"},{text:"Alamat Email",value:"email"},{text:"Dealer",value:"nama_dealer"},{text:"Actions",value:"actions"}]}},methods:{validate(){this.$refs.form.validate()&&this.saveUser()},validate2(){this.$refs.form1.validate()&&this.savePassword()},saveUser(){this.userData.append("nama",this.form.nama),this.userData.append("email",this.form.email),this.userData.append("password",this.form.password),this.userData.append("id_dealer",this.form.id_dealer),this.userData.append("id_role",this.form.id_role),this.$http.post(this.$api+"/register",this.userData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.snackbar1=!0,this.color="success",this.close(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="red",this.snackbar=!0}))},savePassword(){this.userData.append("password",this.form.password);var e=this.$api+"/user-password/"+this.editId;this.$http.post(e,this.userData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="secondary",this.snackbar1=!0,this.close1(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0}))},deleteData(){var e=this.$api+"/user/"+this.deleteId;this.$http.delete(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="success",this.snackbar1=!0,this.close2(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="error",this.snackbar=!0,this.load=!1}))},readData(){var e=this.$api+"/user";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.users=e.data.data}))},getUser(){return localStorage.getItem("nama")},getDataDealer(){var e=this.$api+"/dealer";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.dealer=e.data.data}))},logout(){localStorage.removeItem("nama"),localStorage.removeItem("token"),localStorage.removeItem("role"),this.$router.push({name:"ITLogin"})},editHandler(e){this.editId=e.id,this.editPasswordDialog=!0},deleteHandler(e){this.deleteId=e,this.dialogConfirm=!0},close(){this.addUserDialog=!1,this.$refs.form.reset()},close1(){this.editPasswordDialog=!1,this.$refs.form1.reset()},close2(){this.dialogConfirm=!1}},mounted(){this.readData(),this.getDataDealer()},created(){this.interval=setInterval(this.readData,5e3)},beforeDestroy(){clearInterval(this.interval)}},i=o,l=t(1001),n=(0,l.Z)(i,s,r,!1,null,null,null),d=n.exports},8294:function(e,a,t){e.exports=t.p+"img/honda-logo.122277f2.png"}}]);
//# sourceMappingURL=53.be97e602.js.map