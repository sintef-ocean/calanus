System.register(["./index-legacy-C76b16Te.js","./leaflet-legacy-CY6cmsxr.js"],(function(e,t){"use strict";var n,r,a;return{setters:[e=>{n=e.aA,r=e.aB,a=e.aC},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("createSwipeBackGesture",((e,t,s,i,c)=>{const o=e.ownerDocument.defaultView;let l=n(e);const u=e=>l?-e.deltaX:e.deltaX;return r({el:e,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(e),(e=>{const{startX:t}=e;return l?t>=o.innerWidth-50:t<=50})(r)&&t()),onStart:s,onMove:e=>{const t=u(e)/o.innerWidth;i(t)},onEnd:e=>{const t=u(e),n=o.innerWidth,r=t/n,s=(e=>l?-e.velocityX:e.velocityX)(e),i=s>=0&&(s>.2||t>n/2),d=(i?1-r:r)*n;let h=0;if(d>5){const e=d/Math.abs(s);h=Math.min(e,540)}c(i,r<=0?.01:a(0,r,.9999),h)}})}))}}}));
