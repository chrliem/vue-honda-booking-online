"use strict";(self["webpackChunkhonda_booking_online"]=self["webpackChunkhonda_booking_online"]||[]).push([[685],{7685:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-app-bar",{attrs:{app:"",height:"80"},scopedSlots:e._u([{key:"extension",fn:function(){return[s("v-tabs",{attrs:{"align-with-title":""},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},e._l(e.tabs,(function(t){return s("v-tab",{key:t.name,attrs:{to:{name:t.name}}},[e._v(" "+e._s(t.text)+" ")])})),1)]},proxy:!0}])},[s("v-toolbar-title",[s("img",{staticClass:"mt-2 hidden-sm-and-down",attrs:{src:a(8294),height:"50px",contain:""}}),s("img",{staticClass:"mt-1 hidden-md-and-up",attrs:{src:a(8294),height:"20px",contain:""}})]),s("v-toolbar-title",[s("img",{staticClass:"mt-2 mx-3 hidden-sm-and-down",attrs:{src:a(6175),height:"50px",contain:""}}),s("img",{staticClass:"mt-1 mx-3 hidden-md-and-up",attrs:{src:a(6175),height:"30px",contain:""}})]),s("v-toolbar-title",{staticClass:"ml-4 hidden-sm-and-down"},[e._v("Booking Service ")]),s("v-toolbar-title",{staticClass:"ml-5 hidden-md-and-up"},[e._v("Booking Service")]),s("v-spacer"),s("v-toolbar-title",[e._v("Welcome, "),s("strong",[e._v(e._s(e.getUser()))]),e._v("! ")]),s("v-spacer"),s("v-btn",{attrs:{color:"error"},on:{click:e.logout}},[e._v("Logout")])],1),[s("v-row",[s("v-col",{attrs:{cols:"4"}},[s("v-card",{staticClass:"mx-4 mt-6"},[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h3",[e._v("Whatsapp Instances")])]),s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("v-spacer"),s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){e.addInstanceDialog=!0}}},[e._v(" Tambah")])],1),s("v-data-table",{attrs:{headers:e.headers,items:e.instances,search:e.search,light:""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[s("v-chip",[s("v-icon",{attrs:{color:"primary"},on:{click:function(t){return e.editHandler(a)}}},[e._v("mdi-pencil")])],1),s("v-chip",[s("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.deleteHandler(a.instance_id)}}},[e._v("mdi-delete")])],1)]}}],null,!0)})],1)],1),s("v-col",{attrs:{cols:"8"}},[s("v-card",{staticClass:"mx-4 mt-6"},[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h3",[e._v("Whatsapp Template")])]),s("v-card-title",[s("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),s("v-spacer"),s("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){e.addTemplateDialog=!0}}},[e._v(" Tambah ")])],1),s("v-data-table",{attrs:{headers:e.headers1,items:e.templates,search:e.search,light:""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[s("v-chip",[s("v-icon",{attrs:{color:"primary"},on:{click:function(t){return e.editHandler1(a)}}},[e._v("mdi-pencil")])],1),s("v-chip",[s("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.deleteHandler1(a.template_id)}}},[e._v("mdi-delete")])],1)]}}],null,!0)})],1)],1)],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-status-dialog"},model:{value:e.addInstanceDialog,callback:function(t){e.addInstanceDialog=t},expression:"addInstanceDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Tambah Instance")])]),s("v-form",{ref:"form",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.instanceRules,label:"Instance ID",hint:"123456","prepend-inner-icon":"mdi-identifier",outlined:"",required:""},model:{value:e.form.instance_id,callback:function(t){e.$set(e.form,"instance_id",t)},expression:"form.instance_id"}}),s("v-text-field",{attrs:{rules:e.instanceRules,label:"Token","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.token,callback:function(t){e.$set(e.form,"token",t)},expression:"form.token"}}),s("v-autocomplete",{attrs:{rules:e.instanceRules,"prepend-inner-icon":"mdi-map-marker",label:"Dealer",outlined:"",items:e.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:e.form.id_dealer,callback:function(t){e.$set(e.form,"id_dealer",t)},expression:"form.id_dealer"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-instance-dialog"},model:{value:e.editInstanceDialog,callback:function(t){e.editInstanceDialog=t},expression:"editInstanceDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Edit Instance")])]),s("v-form",{ref:"form1",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.instanceRules,disabled:"",label:"Instance ID",hint:"123456","prepend-inner-icon":"mdi-identifier",outlined:"",required:""},model:{value:e.form.instance_id,callback:function(t){e.$set(e.form,"instance_id",t)},expression:"form.instance_id"}}),s("v-text-field",{attrs:{rules:e.instanceRules,label:"Token","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.token,callback:function(t){e.$set(e.form,"token",t)},expression:"form.token"}}),s("v-autocomplete",{attrs:{rules:e.instanceRules,"prepend-inner-icon":"mdi-map-marker",label:"Dealer",outlined:"",items:e.dealer,"item-text":"nama_dealer","item-value":"id_dealer"},model:{value:e.form.id_dealer,callback:function(t){e.$set(e.form,"id_dealer",t)},expression:"form.id_dealer"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close1}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate2}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:e.dialogConfirm,callback:function(t){e.dialogConfirm=t},expression:"dialogConfirm"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Warning!")])]),s("v-card-text",[e._v("Apakah Anda yakin ingin menghapus instance ini?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close2}},[e._v("Batal")]),s("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteData}},[e._v("Hapus")])],1)],1)],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-template-dialog"},model:{value:e.addTemplateDialog,callback:function(t){e.addTemplateDialog=t},expression:"addTemplateDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Tambah Template")])]),s("v-form",{ref:"form2",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.instanceRules,label:"Namespace","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.namespace,callback:function(t){e.$set(e.form,"namespace",t)},expression:"form.namespace"}}),s("v-text-field",{attrs:{rules:e.instanceRules,label:"Template Name","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.template_name,callback:function(t){e.$set(e.form,"template_name",t)},expression:"form.template_name"}}),s("v-autocomplete",{attrs:{rules:e.instanceRules,"prepend-inner-icon":"mdi-identifier",label:"Instance ID",outlined:"",items:e.instances,"item-text":"instance_id","item-value":"instance_id"},model:{value:e.form.instance_id_template,callback:function(t){e.$set(e.form,"instance_id_template",t)},expression:"form.instance_id_template"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close3}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate3}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{"max-width":"600","content-class":"edit-template-dialog"},model:{value:e.editTemplateDialog,callback:function(t){e.editTemplateDialog=t},expression:"editTemplateDialog"}},[s("v-card",[s("v-toolbar",{attrs:{color:"secondary",dark:""}},[s("h2",[e._v("Edit Template")])]),s("v-form",{ref:"form3",staticClass:"mx-5 my-5",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-text-field",{attrs:{rules:e.instanceRules,label:"Namespace","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.namespace,callback:function(t){e.$set(e.form,"namespace",t)},expression:"form.namespace"}}),s("v-text-field",{attrs:{rules:e.instanceRules,label:"Template Name","prepend-inner-icon":"mdi-card-text-outline",outlined:"",required:""},model:{value:e.form.template_name,callback:function(t){e.$set(e.form,"template_name",t)},expression:"form.template_name"}}),s("v-autocomplete",{attrs:{rules:e.instanceRules,"prepend-inner-icon":"mdi-identifier",label:"Instance ID",outlined:"",items:e.instances,"item-text":"instance_id","item-value":"instance_id"},model:{value:e.form.instance_id_template,callback:function(t){e.$set(e.form,"instance_id_template",t)},expression:"form.instance_id_template"}})],1),s("v-card-actions",{staticClass:"justify-end"},[s("v-btn",{attrs:{text:""},on:{click:e.close4}},[e._v("Close")]),s("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.validate4}},[e._v("Simpan")])],1)],1)],1)],[s("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:e.dialogConfirm1,callback:function(t){e.dialogConfirm1=t},expression:"dialogConfirm1"}},[s("v-card",[s("v-card-title",[s("span",{staticClass:"headline"},[e._v("Warning!")])]),s("v-card-text",[e._v("Apakah Anda yakin ingin menghapus template ini?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close5}},[e._v("Batal")]),s("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteData1}},[e._v("Hapus")])],1)],1)],1)],s("v-snackbar",{attrs:{elevation:"24",color:e.color,timeout:"5000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[s("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar1=!1}}},"v-btn",a,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar1,callback:function(t){e.snackbar1=t},expression:"snackbar1"}},[s("v-layout",{attrs:{"align-center":"","pr-4":""}},[s("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[e._v(e._s(e.icon_message))]),s("v-layout",{attrs:{column:""}},[s("div",[s("strong",[e._v(e._s(e.title_message))])]),s("div",[e._v(e._s(e.response_message))])])],1)],1),s("v-snackbar",{attrs:{color:e.color,timeout:"2000",bottom:""},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[s("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",a,!1),[e._v(" Close")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[s("v-layout",{attrs:{"align-center":"","pr-4":""}},[s("v-icon",{staticClass:"pr-3",attrs:{dark:"",large:""}},[e._v(e._s(e.icon_message))]),s("v-layout",{attrs:{column:""}},[s("div",[s("strong",[e._v(e._s(e.title_message))])]),s("div",[e._v(e._s(e.error_message))])])],1)],1)],2)},i=[],n={name:"UserDashboard",data(){return{activeTab:"",tabs:[{name:"UserDashboard",text:"User"},{name:"WhatsappDashboard",text:"Whatsapp"}],addInstanceDialog:!1,addTemplateDialog:!1,editInstanceDialog:!1,editTemplateDialog:!1,dialogConfirm:!1,dialogConfirm1:!1,snackbar:!1,snackbar1:!1,valid:"",editId:"",instances:[],templates:[],search:null,color:"",response_message:"",error_message:"",show3:"",dealer:[],newData:new FormData,form:{instance_id:"",id_dealer:"",token:"",namespace:"",instance_id_template:"",template_name:""},instanceRules:[e=>!!e||"Field harus diisi"],headers:[{text:"Dealer",value:"nama_dealer"},{text:"Instances ID",value:"instance_id"},{text:"Token",value:"token"},{text:"Actions",value:"actions"}],headers1:[{text:"Dealer",value:"nama_dealer"},{text:"Instance ID",value:"instance_id"},{text:"Token",value:"token"},{text:"Namespace",value:"namespace"},{text:"Nama Template",value:"template_name"},{text:"Actions",value:"actions"}]}},methods:{validate(){this.$refs.form.validate()&&this.saveInstance()},validate2(){this.$refs.form1.validate()&&this.updateInstance()},validate3(){this.$refs.form2.validate()&&this.saveTemplate()},validate4(){this.$refs.form3.validate()&&this.updateTemplate()},saveInstance(){this.newData.append("instance_id",this.form.instance_id),this.newData.append("token",this.form.token),this.newData.append("id_dealer",this.form.id_dealer),this.$http.post(this.$api+"/wa-instance",this.newData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error"}))},updateInstance(){this.newData.append("instance_id",this.form.instance_id),this.newData.append("token",this.form.token),this.newData.append("id_dealer",this.form.id_dealer),console.log(this.form.id_dealer),this.$http.post(this.$api+"/wa-instance/"+this.editId,this.newData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close1(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error"}))},saveTemplate(){this.newData.append("namespace",this.form.namespace),this.newData.append("template_name",this.form.template_name),this.newData.append("instance_id",this.form.instance_id_template),this.$http.post(this.$api+"/wa-template",this.newData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close3(),this.readData1()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error"}))},updateTemplate(){this.newData.append("namespace",this.form.namespace),this.newData.append("template_name",this.form.template_name),this.newData.append("instance_id",this.form.instance_id_template),console.log(this.editId),this.$http.post(this.$api+"/wa-template/"+this.editId,this.newData,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close4(),this.readData1()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error"}))},deleteData(){var e=this.$api+"/wa-instance/"+this.deleteId;console.log(e),this.$http.delete(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close2(),this.readData()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error",this.load=!1}))},deleteData1(){var e=this.$api+"/wa-template/"+this.deleteId;console.log(e),this.$http.delete(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.response_message=e.data.message,this.color="blue-grey darken-1",this.snackbar1=!0,this.icon_message="mdi-check-decagram",this.title_message="Success",this.close5(),this.readData1()})).catch((e=>{this.error_message=e.response.data.message,this.color="warning",this.snackbar=!0,this.icon_message="mdi-alert-decagram",this.title_message="Error",this.load=!1}))},readData(){var e=this.$api+"/wa-instance";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.instances=e.data.data}))},readData1(){var e=this.$api+"/wa-template";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.templates=e.data.data}))},getUser(){return localStorage.getItem("nama")},getDataDealer(){var e=this.$api+"/dealer";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((e=>{this.dealer=e.data.data}))},logout(){localStorage.removeItem("nama"),localStorage.removeItem("token"),localStorage.removeItem("role"),this.$router.push({name:"ITLogin"})},editHandler(e){this.editId=e.instance_id,this.editInstanceDialog=!0,this.form.instance_id=e.instance_id,this.form.id_dealer=e.id_dealer,this.form.token=e.token},editHandler1(e){this.editId=e.template_id,this.editTemplateDialog=!0,this.form.instance_id_template=e.instance_id,this.form.namespace=e.namespace,this.form.template_name=e.template_name},deleteHandler(e){this.deleteId=e,this.dialogConfirm=!0},deleteHandler1(e){this.deleteId=e,this.dialogConfirm1=!0},close(){this.addInstanceDialog=!1,this.$refs.form.reset()},close1(){this.editInstanceDialog=!1,this.$refs.form1.reset()},close2(){this.dialogConfirm=!1},close3(){this.addTemplateDialog=!1,this.$refs.form2.reset()},close4(){this.editTemplateDialog=!1,this.$refs.form3.reset()},close5(){this.dialogConfirm1=!1}},mounted(){this.readData(),this.readData1(),this.getDataDealer()},created(){this.interval=setInterval(this.readData,5e3)},beforeDestroy(){clearInterval(this.interval)}},r=n,o=a(1001),l=(0,o.Z)(r,s,i,!1,null,"710cce34",null),c=l.exports},6175:function(e,t,a){e.exports=a.p+"img/bintang-group-logo.9c3a682e.png"},8294:function(e,t,a){e.exports=a.p+"img/honda-logo.122277f2.png"}}]);
//# sourceMappingURL=685.09972bea.js.map