"use strict";(self["webpackChunkhonda_booking_online"]=self["webpackChunkhonda_booking_online"]||[]).push([[243],{3243:function(a,e,t){t.r(e),t.d(e,{default:function(){return c}});var s=function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("v-app",[s("v-app-bar",{attrs:{app:"",height:"80"}},[s("v-toolbar-title",[s("img",{staticClass:"mt-2 hidden-sm-and-down",attrs:{src:t(8294),height:"50px",contain:""}}),s("img",{staticClass:"mt-1 hidden-md-and-up",attrs:{src:t(8294),height:"20px",contain:""}})]),s("v-toolbar-title",{staticClass:"ml-4 hidden-sm-and-down"},[a._v("Booking Service")]),s("v-toolbar-title",{staticClass:"ml-5 hidden-md-and-up"},[a._v("Booking Service")]),s("v-spacer"),s("v-toolbar-title",[s("img",{staticClass:"mt-2 hidden-sm-and-down",attrs:{src:t(6175),height:"50px",contain:""}}),s("img",{staticClass:"mt-1 mx-3 hidden-md-and-up",attrs:{src:t(6175),height:"30px",contain:""}})])],1),s("v-container",{staticClass:"custom-container",attrs:{fluid:"","fill-height":""}},[s("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[s("v-flex",{attrs:{xs12:"",sm6:"","elevation-6":""}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[a._v("Login")])]),s("v-form",{ref:"form",staticClass:"mx-5 my-5",model:{value:a.valid,callback:function(e){a.valid=e},expression:"valid"}},[s("v-text-field",{attrs:{rules:a.emailRules,label:"Email",hint:"username@email.com","prepend-inner-icon":"mdi-account",outlined:"",required:""},model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}}),s("v-text-field",{attrs:{"append-icon":a.show3?"mdi-eye":"mdi-eye-off",type:a.show3?"text":"password",rules:a.passwordRules,label:"Password","prepend-inner-icon":"mdi-lock",outlined:"",required:""},on:{"click:append":function(e){a.show3=!a.show3}},model:{value:a.form.password,callback:function(e){a.$set(a.form,"password",e)},expression:"form.password"}}),s("v-autocomplete",{attrs:{rules:a.dealerRules,"prepend-inner-icon":"mdi-map-marker",label:"Dealer",outlined:"",items:a.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:a.form.id_dealer,callback:function(e){a.$set(a.form,"id_dealer",e)},expression:"form.id_dealer"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:"",color:"primary"},on:{click:a.login}},[a._v("Login")]),s("v-btn",{attrs:{text:""},on:{click:a.resetForm}},[a._v("Batal")])],1)],1)],1)],1)],1),s("v-snackbar",{attrs:{elevation:"24",color:a.color,timeout:"4000",bottom:""},scopedSlots:a._u([{key:"action",fn:function(e){var t=e.attrs;return[s("v-btn",a._b({attrs:{color:"white",text:""},on:{click:function(e){a.snackbar1=!1}}},"v-btn",t,!1),[a._v(" Close")])]}}]),model:{value:a.snackbar,callback:function(e){a.snackbar=e},expression:"snackbar"}},[s("v-layout",{attrs:{"align-center":"","pr-4":""}},[s("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[a._v(a._s(a.icon_message))]),s("v-layout",{attrs:{column:""}},[s("div",[s("strong",[a._v(a._s(a.title_message))])]),s("div",[a._v(a._s(a.error_message))])])],1)],1),s("v-snackbar",{attrs:{elevation:"24",color:a.color,dark:"",timeout:"4000"},scopedSlots:a._u([{key:"action",fn:function(e){var t=e.attrs;return[s("v-btn",a._b({attrs:{color:"white",text:""},on:{click:function(e){a.snackbar1=!1}}},"v-btn",t,!1),[a._v(" Close")])]}}]),model:{value:a.snackbar1,callback:function(e){a.snackbar1=e},expression:"snackbar1"}},[s("v-layout",{attrs:{"align-center":"","pr-4":""}},[s("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[a._v(a._s(a.icon_message))]),s("v-layout",{attrs:{column:""}},[s("div",[s("strong",[a._v(a._s(a.title_message))])]),s("div",[a._v(a._s(a.response_message))])])],1)],1),s("v-snackbar",{attrs:{elevation:"24",color:"secondary",dark:""},model:{value:a.snackbar3,callback:function(e){a.snackbar3=e},expression:"snackbar3"}},[s("v-layout",{attrs:{"align-center":"","pr-4":""}},[s("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[a._v("mdi-timer-sand-empty")]),s("v-layout",{attrs:{column:""}},[s("div",[s("strong",[a._v("Loading . . .")])]),s("div",[a._v("Mohon tunggu")])])],1)],1)],1)},r=[],o={name:"AdminLogin",data(){return{user:new FormData,show3:!1,alertEmpty:!1,snackbar:!1,snackbar1:!1,snackbar3:!1,color:"",valid:"",form:{nama:"",email:"",password:"",id_dealer:"",nama_dealer:""},emailRules:[a=>!!a||"Email harus diisi"],passwordRules:[a=>!!a||"Password harus diisi"],dealerRules:[a=>!!a||"Dealer harus diisi"],dealer:[{id_dealer:"",nama_dealer:""}],response_message:"",error_message:""}},methods:{login(){this.$refs.form.validate()&&(this.snackbar3=!0,this.$http.post(this.$api+"/login",{email:this.form.email,password:this.form.password}).then((a=>{this.response_message=a.data.message,localStorage.setItem("nama",a.data.data.nama),localStorage.setItem("token",a.data.access_token),localStorage.setItem("dealer",this.form.id_dealer),localStorage.setItem("role",2);for(let e=0;e<this.dealer.length;e++)this.dealer[e].id_dealer===this.form.id_dealer&&localStorage.setItem("nama_dealer",this.dealer[e].nama_dealer);this.color="blue-grey darken-1",this.snackbar1=!0,this.snackbar3=!1,this.icon_message="mdi-check-decagram",this.title_message="Success",this.$router.push({name:"BookingDashboard"})})).catch((a=>{this.error_message=a.response.data.message,this.color="warning",this.snackbar=!0,this.snackbar3=!1,this.icon_message="mdi-alert-decagram",this.title_message="Error",localStorage.removeItem("token")})))},resetForm(){this.form={nama:"",email:"",password:"",dealer:""}},getDataDealer(){var a=this.$api+"/dealer";this.$http.get(a,{headers:{}}).then((a=>{this.dealer=a.data.data}))}},mounted(){this.getDataDealer()}},i=o,n=t(1001),l=(0,n.Z)(i,s,r,!1,null,"5b7c5e3a",null),c=l.exports},6175:function(a,e,t){a.exports=t.p+"img/bintang-group-logo.9c3a682e.png"},8294:function(a,e,t){a.exports=t.p+"img/honda-logo.122277f2.png"}}]);
//# sourceMappingURL=243.ed1f5007.js.map