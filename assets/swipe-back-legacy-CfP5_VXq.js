System.register(["./index-legacy-BXf5abyc.js","./leaflet-legacy-CY6cmsxr.js"],(function(t,e){"use strict";var n,r,s;return{setters:[t=>{n=t.ar,r=t.as,s=t.at},null],execute:function(){
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
t("createSwipeBackGesture",((t,e,a,i,c)=>{const o=t.ownerDocument.defaultView;let l=n(t);const u=t=>l?-t.deltaX:t.deltaX;return r({el:t,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:r=>(l=n(t),(t=>{const{startX:e}=t;return l?e>=o.innerWidth-50:e<=50})(r)&&e()),onStart:a,onMove:t=>{const e=u(t)/o.innerWidth;i(e)},onEnd:t=>{const e=u(t),n=o.innerWidth,r=e/n,a=(t=>l?-t.velocityX:t.velocityX)(t),i=a>=0&&(a>.2||e>n/2),d=(i?1-r:r)*n;let h=0;if(d>5){const t=d/Math.abs(a);h=Math.min(t,540)}c(i,r<=0?.01:s(0,r,.9999),h)}})}))}}}));
