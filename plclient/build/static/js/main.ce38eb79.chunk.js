(this.webpackJsonppvclient=this.webpackJsonppvclient||[]).push([[0],{27:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(12),s=n.n(a),o=(n(40),n(28)),l=n(29),i=n(35),d=n(34),j=(n(41),n(14)),h=n(21),u=(n(42),n(10)),b=n(30);u.b.add(b.a);var m=Object.keys(u.b.definitions.fas);var p=function(){return m},x=n(31),O=["allPart","newPart"];function y(e){var t=document.getElementById(e),n=document.getElementById(O[1]);"newPart"===e&&(n=document.getElementById("allPart")),t.style.display="block",n.style.display="none"}var f=n(32),N=(n(27),n(13)),g=n.n(N),v=n(26);function A(){return C.apply(this,arguments)}function C(){return(C=Object(v.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Requesting All records..."),e.next=3,fetch("/getAllParticipants",{method:"GET",headers:{accept:"application/x-www-form-urlencoded, application/json"}});case 3:return t=e.sent,e.next=6,t;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(v.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Got to handleParticipant.AddNew..."),e.next=3,fetch("/addNewParticipant",{method:"post",headers:{"content-type":"application/x-www-form-urlencoded"},body:JSON.stringify(t)});case 3:return n=e.sent,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var w=n(1);function L(){y("allPart"),A().then((function(e){return e.text()})).then((function(e){!function(e){var t=document.getElementById("partsTable");for(var n in t.innerHTML="",e){for(var r=t.insertRow(n),c=[],a=0;a<Object.keys(e[n]).length;a++)c.push(r.insertCell(a));c[0].innerHTML=e[n].rowid,c[1].innerHTML=e[n].fullname,c[2].innerHTML=e[n].dob,c[3].innerHTML=e[n].age,c[4].innerHTML=e[n].gender,c[5].innerHTML=e[n].ethnicity,c[6].innerHTML=e[n].phone,c[7].innerHTML=e[n].email,c[8].innerHTML=e[n].address1,c[9].innerHTML=e[n].address2,c[10].innerHTML=e[n].city,c[11].innerHTML=e[n].state,c[12].innerHTML=e[n].zip,c[13].innerHTML=e[n].county,c[14].innerHTML=e[n].hastransport}}(JSON.parse(e))}))}function T(e){(void 0===e||e.length<=0)&&(e=[]).push({Id:"NA",FullName:"No Records",DOB:"No Records",Age:"No Records",Gender:"No Records",Ethnicity:"No Records",Phone:"No Records",Email:"No Records",Address1:"No Records",Address2:"No Records",City:"No Records",State:"No Records",Zip:"No Records",Conty:"No Records","Has Transport":"No Records"});var t=null;try{t=e.map((function(e){return function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:e.Id}),Object(w.jsx)("td",{children:e.FullName}),Object(w.jsx)("td",{children:e.DOB}),Object(w.jsx)("td",{children:e.Age}),Object(w.jsx)("td",{children:e.Gender}),Object(w.jsx)("td",{children:e.Etdnicity}),Object(w.jsx)("td",{children:e.Phone}),Object(w.jsx)("td",{children:e.Email}),Object(w.jsx)("td",{children:e.Address1}),Object(w.jsx)("td",{children:e.Address2}),Object(w.jsx)("td",{children:e.City}),Object(w.jsx)("td",{children:e.State}),Object(w.jsx)("td",{children:e.Zip}),Object(w.jsx)("td",{children:e.Conty}),Object(w.jsx)("td",{children:e.HasTransport})]})}(e)}))}catch(n){}return Object(w.jsxs)("div",{id:"allPart",className:"GetAllDiv",children:[Object(w.jsx)("h3",{children:"Participant"}),Object(w.jsxs)(f.a,{responsive:"xl",striped:!0,bordered:!0,hover:!0,children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Id"}),Object(w.jsx)("th",{children:"Full Name"}),Object(w.jsx)("th",{children:"DOB"}),Object(w.jsx)("th",{children:"Age"}),Object(w.jsx)("th",{children:"Gender"}),Object(w.jsx)("th",{children:"Ethnicity"}),Object(w.jsx)("th",{children:"Phone"}),Object(w.jsx)("th",{children:"Email"}),Object(w.jsx)("th",{children:"Address"}),Object(w.jsx)("th",{children:"Apt/#"}),Object(w.jsx)("th",{children:"City"}),Object(w.jsx)("th",{children:"State"}),Object(w.jsx)("th",{children:"Zip"}),Object(w.jsx)("th",{children:"County"}),Object(w.jsx)("th",{children:"Has Transport"})]})}),Object(w.jsx)("tbody",{id:"partsTable",children:t})]})]})}var G=p();var P=function(e){return Object(w.jsxs)(j.a,{bg:"success",expand:"lg",variant:"dark",className:"navbar-custom",children:[Object(w.jsxs)(j.a.Brand,{href:"#home",children:[Object(w.jsx)(x.a,{icon:G[847]}),"\xa0\xa0Project Live"]}),Object(w.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(w.jsxs)(h.a,{className:"mr-auto",children:[Object(w.jsx)(h.a.Link,{onClick:function(e){return L()},children:"Get_Participants"}),Object(w.jsx)(h.a.Link,{onClick:function(e){return y("newPart")},children:"Add_Participants"})]})})]})},B=n(4),H=n(33);function R(e){console.log("Got to MainMenu.addNewParticipant"),e.preventDefault(),function(e){return E.apply(this,arguments)}({newPart:{FullName:document.getElementsByName("FullName")[0].value,DOB:document.getElementsByName("DOB")[0].value,Age:document.getElementsByName("Age")[0].value,Gender:document.getElementsByName("Gender")[0].value,Ethnicity:document.getElementsByName("Ethnicity")[0].value,Phone:document.getElementsByName("Phone")[0].value,Email:document.getElementsByName("Email")[0].value,Address1:document.getElementsByName("Address1")[0].value,Address2:document.getElementsByName("Address2")[0].value,City:document.getElementsByName("City")[0].value,State:document.getElementsByName("State")[0].value,Zip:document.getElementsByName("Zip")[0].value,County:document.getElementsByName("County")[0].value,HasTransport:document.getElementsByName("HasTransport")[0].checked}}).then((function(e){console.log("POST addNew - from Server:",e)})).catch((function(e){console.log("Error:",e.message)}))}var M=function(){return Object(w.jsxs)("div",{id:"newPart",className:"AddNewDiv",children:[Object(w.jsx)("h3",{children:"New Participant"}),Object(w.jsxs)(B.a,{className:"AddNewForm",children:[Object(w.jsx)(B.a.Row,{children:Object(w.jsxs)(B.a.Group,{className:"form-group col col-12",children:[Object(w.jsx)(B.a.Label,{children:"Full Name"}),Object(w.jsx)(B.a.Control,{name:"FullName",type:"text",placeholder:"Full Name",required:!0})]})}),Object(w.jsxs)(B.a.Row,{children:[Object(w.jsxs)(B.a.Group,{className:"form-group col col-8",children:[Object(w.jsx)(B.a.Label,{children:"Date of Birth"}),Object(w.jsx)(B.a.Control,{name:"DOB",type:"date",placeholder:"Date of Birth",required:!0})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-4",children:[Object(w.jsx)(B.a.Label,{children:"Age"}),Object(w.jsx)(B.a.Control,{name:"Age",type:"number",placeholder:"Age",min:"18",max:"120",required:!0})]})]}),Object(w.jsxs)(B.a.Row,{children:[Object(w.jsxs)(B.a.Group,{className:"form-group col col-6",children:[Object(w.jsx)(B.a.Label,{children:"Gender"}),Object(w.jsxs)(B.a.Control,{as:"select",name:"Gender",custom:!0,required:!0,children:[Object(w.jsx)("option",{children:"Female"}),Object(w.jsx)("option",{children:"Male"}),Object(w.jsx)("option",{children:"TransFemale"}),Object(w.jsx)("option",{children:"TransMale"}),Object(w.jsx)("option",{children:"Intersex"}),Object(w.jsx)("option",{children:"Unknown"}),Object(w.jsx)("option",{children:"Other"})]})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-6",children:[Object(w.jsx)(B.a.Label,{children:"Ethnicity"}),Object(w.jsxs)(B.a.Control,{as:"select",name:"Ethnicity",custom:!0,required:!0,children:[Object(w.jsx)("option",{children:"Asian"}),Object(w.jsx)("option",{children:"Black"}),Object(w.jsx)("option",{children:"Native"}),Object(w.jsx)("option",{children:"White"}),Object(w.jsx)("option",{children:"Unknown"})]})]})]}),Object(w.jsxs)(B.a.Row,{children:[Object(w.jsxs)(B.a.Group,{className:"form-group col col-6",children:[Object(w.jsx)(B.a.Label,{children:"Phone"}),Object(w.jsx)(B.a.Control,{name:"Phone",type:"integer",placeholder:"Phone Number",required:!0})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-6",controlId:"formGridEmail",children:[Object(w.jsx)(B.a.Label,{children:"Email Address"}),Object(w.jsx)(B.a.Control,{name:"Email",type:"email",placeholder:"Email Address",required:!0})]})]}),Object(w.jsxs)(B.a.Row,{children:[Object(w.jsxs)(B.a.Group,{className:"form-group col col-9",controlId:"formGridAddress1",children:[Object(w.jsx)(B.a.Label,{children:"Address"}),Object(w.jsx)(B.a.Control,{name:"Address1",type:"text",placeholder:"Address 1",required:!0})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-3",controlId:"formGridAddress1",children:[Object(w.jsx)(B.a.Label,{children:"Apt/#"}),Object(w.jsx)(B.a.Control,{name:"Address2",type:"text",placeholder:"Apt/#",required:!0})]})]}),Object(w.jsxs)(B.a.Row,{children:[Object(w.jsxs)(B.a.Group,{className:"form-group col col-6",controlId:"formGridCity",children:[Object(w.jsx)(B.a.Label,{children:"City"}),Object(w.jsx)(B.a.Control,{name:"City",type:"text",placeholder:"City",required:!0})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-3",children:[Object(w.jsx)(B.a.Label,{children:"State"}),Object(w.jsx)(B.a.Control,{name:"State",type:"text",placeholder:"State",required:!0})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-3",children:[Object(w.jsx)(B.a.Label,{children:"Zip"}),Object(w.jsx)(B.a.Control,{name:"Zip",type:"text",placeholder:"Zip",required:!0})]})]}),Object(w.jsxs)(B.a.Group,{className:"form-group col col-8",children:[Object(w.jsx)(B.a.Label,{children:"County"}),Object(w.jsx)(B.a.Control,{name:"County",type:"text",placeholder:"County",required:!0})]}),Object(w.jsx)(B.a.Group,{className:"form-group col",children:Object(w.jsx)(B.a.Check,{id:"HasTransport",custom:!0,type:"switch",label:"Has Transportation",name:"HasTransport"})}),Object(w.jsx)(B.a.Group,{className:"form-group col",children:Object(w.jsx)(H.a,{variant:"primary",type:"submit",onClick:function(e){return R(e)},children:"Submit"})})]})]})},k=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={part:{},parts:[]},e.getAllParts=function(){A().then((function(e){return e.text()})).then((function(t){var n=JSON.parse(t);e.setState({parts:n}),T(n)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("div",{children:Object(w.jsx)(P,{})}),Object(w.jsxs)("div",{children:[Object(w.jsx)(T,{parts:this.getAllParts}),Object(w.jsx)(M,{})]})]})}}]),n}(c.a.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(w.jsx)(k,{}),document.getElementById("root")),S()}},[[51,1,2]]]);
//# sourceMappingURL=main.ce38eb79.chunk.js.map