import{aD as r,aE as i,aF as c,aG as d,aH as l}from"./index-BfIguVcC.js";import"./leaflet-CYx1M_cZ.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const w=()=>{const e=window;e.addEventListener("statusTap",()=>{r(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(a=>c(t,a)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{w as startStatusTap};
