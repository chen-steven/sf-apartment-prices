(this["webpackJsonpapartments-frontend"]=this["webpackJsonpapartments-frontend"]||[]).push([[0],{102:function(e,n,t){},197:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(16),i=t.n(r),s=(t(102),t(2)),o=t(80),d=t.n(o),m=t(81),u=t.n(m),p=t(200),j=t(9),l=p.a.Option,h={strata:"Strata",windsor:"Windsor","340-fremont":"340 Fremont",azure:"Azure","avalon-mb":"Avalon Mission Bay",edgewater:"Edgewater"};function b(){var e=Object(a.useState)(),n=Object(s.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)("min_price"),i=Object(s.a)(r,2),o=i[0],m=i[1];Object(a.useEffect)((function(){d.a.get("https://36ej55h6pc.execute-api.us-east-1.amazonaws.com/Prod/get-apartment-data/").then((function(e){var n={};e.data.sort((function(e,n){return e.date.localeCompare(n.date)})),e.data.forEach((function(e){n[e.name]||(n[e.name]={date:[],min_price:[],max_price:[],mean_price:[],median_price:[]}),n[e.name].date.push(e.date),n[e.name].min_price.push(e.min_price),n[e.name].max_price.push(e.max_price),n[e.name].mean_price.push(e.mean_price),n[e.name].median_price.push(e.median_price)})),c(n)}))}),[]);if(!t)return Object(j.jsx)("h1",{children:"Loading..."});for(var b=[],f=0,x=Object.entries(t);f<x.length;f++){var O=Object(s.a)(x[f],2),_=O[0],g=O[1];b.push({x:g.date,y:g[o],mode:"lines",name:h[_]?h[_]:_})}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)(p.a,{defaultValue:"min_price",onChange:function(e){m(e)},children:[Object(j.jsx)(l,{value:"min_price",children:"Min Price"}),Object(j.jsx)(l,{value:"max_price",children:"Max Price"}),Object(j.jsx)(l,{value:"mean_price",children:"Mean Price"}),Object(j.jsx)(l,{value:"median_price",children:"Median Price"})]}),Object(j.jsx)(u.a,{data:b})]})}t(196);var f=function(){return Object(j.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[Object(j.jsx)("h1",{children:"SF Apartment Prices (two bed)"}),Object(j.jsx)(b,{})]})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,201)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[197,1,2]]]);
//# sourceMappingURL=main.8330b85e.chunk.js.map