import{d as D,u as y,r as I,L as F,O as B,M,o as N,b as g,w as t,e,A as P,g as a,a5 as U,a6 as V,a7 as u,a8 as r,a9 as A,m as K,q as i,x as p,aa as O,ab as j,ac as q,ad as E,ae as v,af as h,ag as k,ah as _,ai as H,aj as R,R as x,ak as z,al as L,am as G,an as J,I as Q,f as d,ao as b,_ as W}from"./index-HamTE0ec.js";import"./leaflet-CYx1M_cZ.js";const X=D({__name:"SettingsPage",setup(Y){const{t:o,locale:S}=y({useScope:"local"}),w=I({});I({});const c=I(!0),T=F(),f=B(),m=M(),C=window.matchMedia("(prefers-color-scheme: dark)");C.addListener(n=>{c.value=n.matches});const $=n=>{c.value=n.detail.checked,T.setDarkTheme(c.value)};return N(()=>{c.value=C.matches}),(n,s)=>(d(),g(e(P),null,{default:t(()=>[a(e(A),null,{default:t(()=>[a(e(U),null,{default:t(()=>[a(e(V),null,{default:t(()=>[u(r(e(o)("Setting",2)),1)]),_:1})]),_:1})]),_:1}),a(e(Q),{fullscreen:!0},{default:t(()=>[a(e(K),null,{default:t(()=>[a(e(i),{lines:"full"},{default:t(()=>[a(e(p),{slot:"start",icon:c.value?e(O):e(j)},null,8,["icon"]),a(e(q),{ref_key:"themeToggle",ref:w,checked:c.value,onIonChange:$,slot:"end"},{default:t(()=>[u(r(e(o)("Dark theme")),1)]),_:1},8,["checked"])]),_:1}),a(e(i),{lines:"full"},{default:t(()=>[a(e(p),{slot:"start",icon:e(E)},null,8,["icon"]),a(e(v),{interface:"popover",label:e(o)("Distance"),placeholder:e(o)(e(f).distanceUnit),onIonChange:s[0]||(s[0]=l=>e(f).setUnitKm(l.detail.value==="km"))},{default:t(()=>[(d(!0),h(_,null,k(e(f).alternatives,l=>(d(),g(e(b),{key:"dist-".concat(l),value:l,selected:l===e(f).distanceUnit},{default:t(()=>[u(r(n.$t(l)),1)]),_:2},1032,["value","selected"]))),128))]),_:1},8,["label","placeholder"])]),_:1}),a(e(i),{lines:"full"},{default:t(()=>[a(e(p),{slot:"start",icon:e(H)},null,8,["icon"]),a(e(v),{interface:"popover",label:e(o)("Format")+" "+e(o)("Coordinate",2).toLowerCase(),placeholder:e(o)(e(m).theFormat),onIonChange:s[1]||(s[1]=l=>e(m).setCoordsFormat(l.detail.value))},{default:t(()=>[(d(!0),h(_,null,k(e(m).alternatives,l=>(d(),g(e(b),{key:"dist-".concat(l),value:l,selected:l===e(m).theFormat},{default:t(()=>[u(r(n.$t(l)),1)]),_:2},1032,["value","selected"]))),128))]),_:1},8,["label","placeholder"])]),_:1}),a(e(i),{lines:"full"},{default:t(()=>[a(e(R),{slot:"start",class:"language-flag",src:e(x)(e(S),"svg")},null,8,["src"]),a(e(v),{interface:"popover",label:e(o)("Language"),placeholder:e(o)(e(S)),onIonChange:s[2]||(s[2]=l=>n.$i18n.locale=l.detail.value)},{default:t(()=>[(d(!0),h(_,null,k(n.$i18n.availableLocales,l=>(d(),g(e(b),{key:"locale-".concat(l),value:l,selected:l===n.$i18n.locale},{default:t(()=>[u(r(n.$t(l)),1)]),_:2},1032,["value","selected"]))),128))]),_:1},8,["label","placeholder"])]),_:1}),a(e(z),null,{default:t(()=>[a(e(L),null,{default:t(()=>[u(r(e(o)("Information")),1)]),_:1})]),_:1}),a(e(i),{lines:"full"},{default:t(()=>[a(e(p),{slot:"start",icon:e(G)},null,8,["icon"]),a(e(L),{class:"leaflet-attribution"},{default:t(()=>[u(r(e(o)("Attribution"))+" "+r(e(o)("MapLayer").toLowerCase())+": ",1),s[3]||(s[3]=J("a",{href:"https://www.kartverket.no",target:"_blank",rel:"noopener noreferrer"},"Kartverket",-1))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}}),ae=W(X,[["__scopeId","data-v-0e25fa88"]]);export{ae as default};
