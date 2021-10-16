(this["webpackJsonpcrud-using-hooks"]=this["webpackJsonpcrud-using-hooks"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(9),s=n.n(r),a=(n(14),n(8)),i=n(2),u=n(5),o=n(7),d=n(0);var l=function(e){var t={name:"",username:""},n=Object(c.useState)(t),r=Object(i.a)(n,2),s=r[0],a=r[1],l=function(e){var t=e.target,n=t.name,c=t.value;a(Object(o.a)(Object(o.a)({},s),{},Object(u.a)({},n,c)))},j=Object(c.useRef)();Object(c.useEffect)((function(){j.current=e}));var b=j.current;return Object(c.useEffect)((function(){if(e.userToEdit&&b.userToEdit!==e.userToEdit){var t=e.userToEdit,n=t.name,c=t.username;a({name:n,username:c})}}),[b,e.userToEdit]),Object(d.jsxs)("form",{onSubmit:function(n){!function(n){n.preventDefault(),s.name&&s.username&&(e.editing?(e.toggleEditButton(),e.updateUser(s)):e.addUser(s),a(t))}(n)},children:[Object(d.jsx)("input",{className:"w-full border border-black p-1 mt-2",type:"text",placeholder:"Username",name:"username",onChange:l,value:s.username}),Object(d.jsx)("input",{className:"w-full border border-black p-1 mt-2",type:"text",placeholder:"Name",name:"name",onChange:l,value:s.name}),Object(d.jsx)("input",{type:"submit",className:"border border-black px-4 mt-2 mr-2",value:e.editing?"Update":"Add"}),e.editing?Object(d.jsx)("input",{type:"reset",value:"Cancel",className:"border border-black px-4 mt-2 ",onClick:function(){e.toggleEditButton(),a(t)}}):""]})};var j=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"text-center mt-6 text-xl mt-4 mb-2",children:"List of Users"}),Object(d.jsxs)("table",{className:"w-full text-center",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"Name"}),Object(d.jsx)("th",{children:"Action"})]})}),Object(d.jsx)("tbody",{children:e.users.length>0?e.users.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.username}),Object(d.jsx)("td",{children:t.name}),Object(d.jsxs)("td",{children:[Object(d.jsx)("button",{className:"border px-1 mr-2",onClick:function(){!function(t){e.editUser(t)}(t)},children:"Edit"}),Object(d.jsx)("button",{className:"border px-1",onClick:function(){e.deleteUser(t.id)},children:"Delete"})]})]},t.id)})):Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colSpan:"3",children:"No User Available!"})})})]})]})};var b=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(null),u=Object(i.a)(s,2),o=u[0],b=u[1],m=Object(c.useState)(!1),O=Object(i.a)(m,2),f=O[0],x=O[1],h=JSON.parse(localStorage.getItem("usersData"));Object(c.useEffect)((function(){r(h||[])}),[]);var g=function(){x(!f)};return Object(d.jsxs)("div",{className:"w-96 mx-auto",children:[Object(d.jsx)("h1",{className:"text-center text-3xl mt-2",children:"Crud using Hooks"}),Object(d.jsx)(l,{addUser:function(e){e.id=n.length+1,r([].concat(Object(a.a)(n),[e])),localStorage.setItem("usersData",JSON.stringify([].concat(Object(a.a)(n),[e])))},editing:f,toggleEditButton:g,userToEdit:o,updateUser:function(e){var t=n.map((function(t){return t.id===o.id?(e.id=o.id,e):t}));r(t),localStorage.setItem("usersData",JSON.stringify(t))}}),Object(d.jsx)(j,{users:n,deleteUser:function(e){var t=n.filter((function(t){return t.id!==e}));r(t),localStorage.setItem("usersData",JSON.stringify(t))},editUser:function(e){x(!0),b(e)},toggleEditButton:g})]})};s.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.676614c5.chunk.js.map