(this["webpackJsonphund-uppgift"]=this["webpackJsonphund-uppgift"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(29),r=c.n(a),i=(c(37),c(8)),o=c(2),l=(c(38),c.p+"static/media/daycare_logo.0f632378.png"),j=c(0);var d=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(i.b,{className:"nav_style",to:"/",children:Object(j.jsx)("img",{src:l,alt:"Logo",className:"dog_logo"})}),Object(j.jsxs)("ul",{className:"nav-links",children:[Object(j.jsx)(i.b,{className:"nav_style",to:"/home",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(i.b,{className:"nav_style",to:"/dogs",children:Object(j.jsx)("li",{children:"Dogs"})})]})]})},b=c(10),h=c.n(b),m=c(32),u=c(15),O=c(13),p=c(31),x=c.n(p).a.create({baseURL:"https://api.jsonbin.io/b/6087cedff6655022c46cff4b"});var g=function(e){var t=e.title,c=Object(s.useState)([]),n=Object(O.a)(c,2),a=n[0],r=n[1],o=Object(s.useState)([]),l=Object(O.a)(o,2),d=l[0],b=l[1],p=[];return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get();case 2:return c=e.sent,r(c.data),"Checked-In"===t?a.map((function(e){e.present&&b(Object(m.a)(d),e),console.log(d.length),r(d)})):"Away"===t&&(a.map((function(e){e.present||p.push(e)})),console.log(p.length)),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("h2",{children:t}),Object(j.jsxs)("div",{className:"row_dogs",id:"rd",children:[Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("rd"),c=document.getElementById("rd").scrollLeft;console.log(c),t.scrollTo({left:c-700,behavior:"smooth"})},className:"arrow__btn left-arrow",children:"<"}),a.map((function(e){return Object(j.jsx)(i.b,{to:"/dogs/".concat(e.chipNumber),style:{textDecoration:"none"},children:Object(j.jsx)("img",{className:"row_dog",src:e.img,alt:e.name})},e.chipNumber)})),Object(j.jsx)("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("rd"),c=document.getElementById("rd").scrollLeft;console.log(c),t.scrollTo({left:c+700,behavior:"smooth"})},className:"arrow__btn right-arrow",children:">"})]})]})};var f=function(){return Object(j.jsx)("div",{className:"dogs",children:Object(j.jsx)(g,{title:"Dog Index"})})},v=c.p+"static/media/dog_orange.bf3994eb.jpeg",N=c.p+"static/media/dog_blue.d4b9c72b.jpeg";var w=function(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsxs)("div",{className:"home_info",children:[Object(j.jsx)("h2",{className:"home_welcome",children:"Welcome to"}),Object(j.jsx)("h1",{className:"home_title",children:"Doggy Daycare"}),Object(j.jsx)("h3",{children:"A place for your dog to meet and play with friends."}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{children:"Click Dogs to checkout our gang."}),Object(j.jsx)("p",{children:"Maybe you'll find some friends."})]}),Object(j.jsxs)("div",{className:"home_images",children:[Object(j.jsx)("img",{src:N,alt:"Logo",className:"home_image"}),Object(j.jsx)("img",{src:v,alt:"Logo",className:"home_image"})]})]})};var _=function(e){var t=e.newDog;return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("img",{id:"dog_detail_image",src:t.img,alt:""}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:t.name}),Object(j.jsxs)("p",{id:"breed",children:["Breed: ",t.breed]})]})]}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("h3",{children:"About"}),Object(j.jsxs)("div",{className:"info_data",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("h4",{children:"Age"}),Object(j.jsxs)("p",{children:[t.age," years old"]})]}),Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("h4",{children:"Chipnumber "}),Object(j.jsx)("p",{children:t.chipNumber})]})]})]}),Object(j.jsxs)("div",{className:"owner",children:[Object(j.jsx)("h3",{children:"Owner"}),Object(j.jsxs)("div",{className:"owner_data",children:[Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("h4",{children:"Name"}),Object(j.jsxs)("p",{children:[t.owner.name," ",t.owner.lastName]})]}),Object(j.jsxs)("div",{className:"data",children:[Object(j.jsx)("h4",{children:"Phone"}),Object(j.jsx)("p",{children:t.owner.phoneNumber})]})]})]})]})]})};var y=function(e){var t=e.match,c=Object(s.useState)({name:"",breed:"",owner:""}),n=Object(O.a)(c,2),a=n[0],r=n[1];return Object(s.useEffect)((function(){function e(){return(e=Object(u.a)(h.a.mark((function e(){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get();case 2:return(c=e.sent).data.map((function(e){return e.chipNumber===t.params.id&&r(e),console.log("found dog")})),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t.params.id]),Object(j.jsx)("div",{className:"dog_detail",children:Object(j.jsx)(_,{newDog:a})})};var k=function(){return Object(j.jsx)(i.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{path:"/",exact:!0,component:w}),Object(j.jsx)(o.a,{path:"/Hund-uppgift",exact:!0,component:w}),Object(j.jsx)(o.a,{path:"/home",component:w}),Object(j.jsx)(o.a,{path:"/dogs",exact:!0,component:f}),Object(j.jsx)(o.a,{path:"/dogs/:id",component:y})]})]})})};r.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.447bcd5f.chunk.js.map