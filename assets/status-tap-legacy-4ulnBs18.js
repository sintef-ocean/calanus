System.register(["./index-legacy-C76b16Te.js","./leaflet-legacy-CY6cmsxr.js"],(function(e,t){"use strict";var n,r,s,a,o;return{setters:[e=>{n=e.aF,r=e.aG,s=e.aH,a=e.aI,o=e.aJ},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,i=document.elementFromPoint(t/2,n/2);if(!i)return;const c=r(i);c&&new Promise((e=>s(c,e))).then((()=>{a((async()=>{c.style.setProperty("--overflow","hidden"),await o(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
