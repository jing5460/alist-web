var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;import{j as n,h as l,r as c,R as p,s as m,af as d,F as u,v as b}from"./vendor.cc756816.js";import{a as f}from"./index.153c9be1.js";import{F as y}from"./form-item.daa0d2e2.js";import"./index.dfc2e03d.js";import"./index.c53992a6.js";import"./index.esm.77356c16.js";import"./useTitle.ba04131e.js";const g=()=>{const e=n(),{t:g}=l(),[j,v]=c.exports.useState([]);return c.exports.useEffect((()=>{f.get("settings").then((t=>{const r=t.data;200!==r.code?e({title:g(r.message),status:"error",duration:3e3,isClosable:!0}):v(r.data)}))}),[]),p.createElement(m,{w:"full"},p.createElement(d,{minChildWidth:"250px",spacing:"2"},j.map((e=>p.createElement(y,{key:e.key,type:"string",label:e.key,value:e.value,readOnly:2===e.group,description:`${e.description}(${g(0===e.group?"public":1===e.group?"private":"readonly")})`,onChange:n=>{v(j.map((l=>{return l.key===e.key?(c=((e,t)=>{for(var r in t||(t={}))a.call(t,r)&&i(e,r,t[r]);if(s)for(var r of s(t))o.call(t,r)&&i(e,r,t[r]);return e})({},l),t(c,r({value:n}))):l;var c})))}})))),p.createElement(u,{mt:"2",justify:"end"},p.createElement(b,{onClick:()=>{f.post("settings",j).then((t=>{const r=t.data;200!==r.code?e({title:g(r.message),status:"error",duration:3e3,isClosable:!0}):e({title:g(r.message),status:"success",duration:3e3,isClosable:!0})}))}},g("save"))))};export{g as default};
