(this["webpackJsonpapartments-frontend"]=this["webpackJsonpapartments-frontend"]||[]).push([[0],{102:function(e,t,n){},197:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),s=(n(102),n(2)),m=n(80),o=n.n(m),d=n(81),p=n.n(d),u=n(200),j=n(9),l=u.a.Option;function x(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("min_price"),i=Object(s.a)(c,2),m=i[0],d=i[1];Object(a.useEffect)((function(){o.a.get("https://36ej55h6pc.execute-api.us-east-1.amazonaws.com/Prod/get-apartment-data/").then((function(e){var t={strata:{date:[],min_price:[],max_price:[],mean_price:[]},windsor:{date:[],min_price:[],max_price:[],mean_price:[]},"340-fremont":{date:[],min_price:[],max_price:[],mean_price:[]},azure:{date:[],min_price:[],max_price:[],mean_price:[]}};e.data.sort((function(e,t){return e.date.localeCompare(t.date)})),e.data.forEach((function(e){t[e.name].date.push(e.date),t[e.name].min_price.push(e.min_price),t[e.name].max_price.push(e.max_price),t[e.name].mean_price.push(e.mean_price)})),console.log(t),r(t)}))}),[]);if(!n)return Object(j.jsx)("h1",{children:"Loading..."});var x={x:n.windsor.date,y:n.windsor[m],mode:"lines",name:"Windsor"},f={x:n.azure.date,y:n.azure[m],mode:"lines",name:"Azure"},h={x:n.strata.date,y:n.strata[m],mode:"lines",name:"Strata"},_={x:n["340-fremont"].date,y:n["340-fremont"][m],mode:"lines",name:"340 Fremont"};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(u.a,{defaultValue:"min_price",onChange:function(e){d(e)},children:[Object(j.jsx)(l,{value:"min_price",children:"Min Price"}),Object(j.jsx)(l,{value:"max_price",children:"Max Price"}),Object(j.jsx)(l,{value:"mean_price",children:"Mean Price"})]}),Object(j.jsx)(p.a,{data:[x,f,h,_]})]})}n(196);var f=function(){return Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(j.jsx)("h1",{children:"SF Apartment Prices (two bed)"}),Object(j.jsx)(x,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),h()}},[[197,1,2]]]);
//# sourceMappingURL=main.7157e8ae.chunk.js.map