System.register(["./index-legacy-BXf5abyc.js","./RaudMap-legacy-ChSJRMIp.js","./leaflet-legacy-CY6cmsxr.js"],(function(e,t){"use strict";var a,s,l,n,i,o,r,d,c,u,f,m,p,y,_,h,x,g,z,v,b,I,S,k,A,C,w,T,Z,j,L,M,P,B,E,H,O,R,D,U,$,q,F,G,N,V,J,K,Q,W;return{setters:[e=>{a=e.d,s=e.r,l=e.u,n=e.a,i=e.c,o=e.o,r=e.b,d=e.e,c=e.f,u=e.p,f=e._,m=e.s,p=e.I,y=e.w,_=e.g,h=e.h,x=e.i,g=e.j,z=e.k,v=e.l,b=e.m,I=e.n,S=e.q,k=e.t,A=e.v,C=e.x,w=e.y,T=e.z,Z=e.A},e=>{j=e.u,L=e.a,M=e.E,P=e.i,B=e.b,E=e.c,H=e.d,O=e.e,R=e.f,D=e.g,U=e.h,$=e.j,q=e.k,F=e.T,G=e.I,N=e.U,V=e.l,J=e.m,K=e.n,Q=e.o,W=e.R},null],execute:function(){var t=document.createElement("style");t.textContent=".chart[data-v-1678972d],.chart[data-v-26859302]{position:absolute;width:100%;height:100%}\n/*$vite$:1*/",document.head.appendChild(t);const X=f(a({__name:"VariableChart",setup(e){j([P,B,E,H,O,R,D,U,$,q]);const t=s({}),{t:a,locale:f}=l({useScope:"local"}),{theme:m,initOptions:p}=L(),y=n({notMerge:!0,lazyUpdate:!1,silent:!0});u(F,m),u(G,p),u(N,y);const _=()=>{console.log("Zr click")},h=e=>{e.batch},x=e=>{console.log(e)},g=i((()=>({tooltip:{trigger:"axis"},toolbox:{feature:{dataZoom:{yAxisIndex:"none"},restore:{},saveAsImage:{}}},axisPointer:{link:[{xAxisIndex:"all"}]},title:[{text:a("Biomass"),left:"center"}],xAxis:{type:"time",axisLine:{onZero:!1},axisLabel:{formatter:"{HH}:{mm}:{ss}"},splitNumber:3},yAxis:{nameGap:10,nameLocation:"middle",name:"[m²nmi⁻²]",axisLine:{show:!0}},series:[{name:a("Biomass")+" [m²nmi⁻²]",type:"line",showSymbol:!1,symbol:"none",encode:{x:"time",y:"x"},xAxisIndex:0,yAxisIndex:0}]})));return o((()=>{})),(e,a)=>(c(),r(d(M),{ref_key:"theChart",ref:t,class:"chart","manual-update":!1,autoresize:!0,option:g.value,"onZr:click":_,onHighlight:h,onSelectchanged:x},null,8,["option"]))}}),[["__scopeId","data-v-1678972d"]]),Y=f(a({__name:"BasicChart",setup(e){j([P,O,D,U,J,K,E,Q]);const t=m({}),a=s({}),n=s([]),f=s(-1),{t:p,locale:y}=l({useScope:"local"}),{theme:_,initOptions:h}=L();u(F,_),u(G,h);const x=i((()=>(setTimeout((()=>{V(f,a,t,n),a.value?.invalidateSize()}),50),{backgroundColor:"rgba(255,255,255,0)",timeline:{axisType:"time",realtime:!1,loop:!0,autoPlay:!1,playInterval:1e3,data:["2012-03-01T12:00:00Z","2012-03-01T12:36:00Z","2012-03-01T13:12:00Z"]},dataset:[{source:[[6,60]]},{source:[[5,60]]},{source:[[5.5,60]]},{source:[[5.8,62]]}],tooltip:{},lmap:{attributionControl:!1,center:[7.5,65],zoom:7,resizeEnable:!0,renderOnMoving:!1,echartsLayerInteractive:!0,largeMode:!1,zoomControl:!1},series:[{type:"scatter",name:"Fundamental",coordinateSystem:"lmap",symbolSize:20,datasetIndex:0},{type:"scatter",name:"TestSc",coordinateSystem:"lmap",symbolSize:20,datasetIndex:1}],options:[{series:[{},{datasetIndex:1}]},{series:[{},{datasetIndex:2}]},{series:[{},{datasetIndex:3}]}]})));return o((()=>{})),(e,a)=>(c(),r(d(M),{ref_key:"theChart",ref:t,class:"chart","manual-update":!1,autoresize:!0,option:x.value},null,8,["option"]))}}),[["__scopeId","data-v-26859302"]]),ee=a({__name:"AnalyticsDash",setup(e,{expose:t}){const a=s({});return o((()=>{})),t({refresh:()=>{a.value.doPlot()}}),(e,t)=>(c(),r(d(p),{"scroll-y":!0},{default:y((()=>[_(d(h),{class:"raudfinn-grid"},{default:y((()=>[_(d(x),{class:"raudfinn-row"},{default:y((()=>[_(d(g),{class:"raudfinn-col",size:"12","size-sm":"7","size-md":"7","size-lg":"8","size-xl":"9",style:{"min-height":"325px"}},{default:y((()=>[_(d(x),{class:"raudfinn-row",style:{height:"100%"}},{default:y((()=>[_(d(g),{size:"12",class:"raudfinn-col-0",style:{display:"flex"}},{default:y((()=>[_(d(z),{class:"raudfinn-card"},{default:y((()=>[_(d(v),{class:"raudfinn-card-content",style:{position:"relative"}},{default:y((()=>[_(W,{ref_key:"theMap",ref:a},null,512)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),_(d(g),{class:"raudfinn-col",size:"12","size-sm":"5","size-md":"5","size-lg":"4","size-xl":"3"},{default:y((()=>[_(d(x),{class:"raudfinn-row",style:{height:"100%"}},{default:y((()=>[_(d(g),{size:"12",class:"raudfinn-col-0"},{default:y((()=>[_(d(b),{class:"raudfinn-list",style:{height:"100%"}},{default:y((()=>[_(d(I),{disabled:!1,class:"raudfinn-list",onIonItemReorder:t[0]||(t[0]=e=>e.detail.complete())},{default:y((()=>[_(d(S),{class:"raudfinn-list-item",lines:"none"},{default:y((()=>[_(d(z),{class:"raudfinn-card"},{default:y((()=>[_(d(k),null,{default:y((()=>[_(d(A),{style:{padding:"2px"}},{default:y((()=>[_(d(C),{icon:d(w)},null,8,["icon"])])),_:1})])),_:1}),_(d(v),{class:"raudfinn-card-content"},{default:y((()=>[_(X)])),_:1})])),_:1})])),_:1}),_(d(S),{class:"raudfinn-list-item",lines:"none"},{default:y((()=>[_(d(z),{class:"raudfinn-card"},{default:y((()=>[_(d(k),null,{default:y((()=>[_(d(A),{style:{padding:"2px"}},{default:y((()=>[_(d(C),{icon:d(w)},null,8,["icon"])])),_:1})])),_:1}),_(d(v),{class:"raudfinn-card-content"},{default:y((()=>[_(Y)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}});e("default",a({__name:"DashboardPage",setup(e){const t=s();return T((()=>{t.value?.refresh()})),(e,a)=>(c(),r(d(Z),null,{default:y((()=>[_(d(p),{fullscreen:!0,style:{position:"relative"}},{default:y((()=>[_(ee,{ref_key:"analytics",ref:t},null,512)])),_:1})])),_:1}))}}))}}}));
