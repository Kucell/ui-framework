"use strict";var c=Object.defineProperty;var t=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var i=(o,e,n)=>e in o?c(o,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[e]=n,r=(o,e)=>{for(var n in e||(e={}))l.call(e,n)&&i(o,n,e[n]);if(t)for(var n of t(e))s.call(e,n)&&i(o,n,e[n]);return o};Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});var d=require("../icon/index/index.cjs");const a=[d.ElIcon],u=o=>{a.forEach(e=>o.component(e.name,e))};var v=r({install:u},a);exports.default=v;
