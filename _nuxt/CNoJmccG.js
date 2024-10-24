import{_ as m,o as c,c as a,a as t,l as x,m as M,u as b,F as L,s as k,b as g,k as V,v as B}from"./B9tWGlrJ.js";import{_ as E}from"./ByKU2JVJ.js";const H={},W={width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function F(_,e){return c(),a("svg",W,e[0]||(e[0]=[t("circle",{cx:"6",cy:"6",r:"6",fill:"#FF0000"},null,-1),t("path",{d:"M4.66196 4.87024C5.10268 4.87024 5.50633 5.20988 5.52486 5.76943H3.76199C3.8248 5.09231 4.31083 4.87241 4.66299 4.87241H4.66196V4.87024ZM7.3907 3.59874C7.6677 3.59874 7.89423 3.76529 7.89423 4.09188C7.89423 4.39125 7.72433 4.68517 7.34025 4.86479L7.33407 4.85826C7.10753 4.60462 6.89335 4.31178 6.89335 4.03201C6.89438 3.75985 7.12813 3.60091 7.39276 3.60091H7.39173L7.3907 3.59874ZM8.9466 6.7089C9.18755 6.25713 9.33686 5.75855 9.38732 5.24363H8.63254C8.61606 5.55062 8.55634 5.85326 8.45646 6.14283C8.36687 6.40518 8.23507 6.64794 8.0662 6.8624C7.82009 7.16177 7.50603 7.35445 7.14666 7.35445C6.72242 7.35445 6.43101 7.16286 6.32083 6.84172H5.5125C5.3807 7.17483 5.07179 7.34139 4.68152 7.34139C4.25316 7.34139 3.81244 7.01481 3.76199 6.34966H6.28891C6.35378 6.02199 6.59885 5.77596 6.99529 5.61811C6.99529 5.61811 7.36187 5.47442 7.72639 5.31113C8.22992 5.0651 8.60783 4.6253 8.60783 4.06575C8.60783 3.27324 7.96528 3 7.38555 3C6.65446 3 6.11386 3.40605 6.11386 4.05269C6.11386 4.43261 6.3095 4.79186 6.59885 5.1511C6.44645 5.20771 6.30024 5.28173 6.16328 5.37318C5.93057 4.69279 5.39306 4.25191 4.66299 4.25191C3.69918 4.25082 3 5.0172 3 6.09493C3 7.1204 3.62298 8 4.71344 8C5.21492 8 5.59385 7.8084 5.8554 7.53625C6.12209 7.82364 6.52368 8 7.01383 8C7.61827 8 8.11047 7.74635 8.48838 7.35445L8.97337 7.914H10L8.9466 6.70999V6.7089Z",fill:"white"},null,-1)]))}const Z=m(H,[["render",F]]),I={},N={width:"5",height:"5",viewBox:"0 0 5 5",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function P(_,e){return c(),a("svg",N,e[0]||(e[0]=[t("path",{d:"M2.5 2.5C3.19062 2.5 3.75 1.94062 3.75 1.25C3.75 0.559375 3.19062 0 2.5 0C1.80938 0 1.25 0.559375 1.25 1.25C1.25 1.94062 1.80938 2.5 2.5 2.5ZM2.5 3.125C1.66562 3.125 0 3.54375 0 4.375V5H5V4.375C5 3.54375 3.33437 3.125 2.5 3.125Z",fill:"white"},null,-1)]))}const j=m(I,[["render",P]]),q={},R={width:"23",height:"22",viewBox:"0 0 23 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function T(_,e){return c(),a("svg",R,e[0]||(e[0]=[t("ellipse",{cx:"11.5",cy:"11",rx:"11",ry:"11.5",transform:"rotate(90 11.5 11)",fill:"white","fill-opacity":"0.1"},null,-1),t("path",{d:"M6.90553 11.2402L15.5879 11.2402",stroke:"white"},null,-1),t("path",{d:"M11.2467 7.08789L15.5879 11.2403L11.2467 15.3928",stroke:"white"},null,-1)]))}const A=m(q,[["render",T]]),S={class:"events-showcase"},z={class:"layout-box"},D={class:"showcase-container"},G={class:"showcase-item"},J=["src","alt"],K={class:"si-hover-display"},O={class:"actions-container"},Q={class:"ac-left"},U={class:"ac-tags"},X={class:"ac-tag act-one"},Y={class:"act-icon"},tt={class:"ac-tag act-two"},ot={class:"act-icon"},st={class:"ac-right"},et={key:0,class:"flex-center showcase-action-row"},it={__name:"events-showcase",props:["showViewMore"],setup(_){const e=_,u=x(),v=x();M(()=>{const{$gsap:i}=b(),o=v.value,h=u.value.clientWidth,p=o[0].clientWidth,f=o[o.length-1].clientWidth;p!==f&&o[o.length-1].classList.add("hidden");const r=Math.round(h/p),l=200;o.forEach((w,$)=>{const d={duration:.5,delay:$%o.length%r*.1};i.to(w,{scrollTrigger:{trigger:w,start:"top bottom",end:"bottom top",onEnter({trigger:n}){i.fromTo(n,{y:l},{...d,y:0,opacity:1})},onLeave({trigger:n}){i.to(n,{...d,y:-l,opacity:0})},onEnterBack({trigger:n}){i.to(n,{...d,y:0,opacity:1})},onLeaveBack({trigger:n}){i.to(n,{...d,y:l,opacity:0})}}})})});const s=window.location.href.split("//")[1].includes("/cpi-public/")?"/cpi-public/":"/",y=[{image:s+"img/portfolios/1.jpg"},{image:s+"img/portfolios/2.png"},{image:s+"img/portfolios/3.png"},{image:s+"img/portfolios/4.png"},{image:s+"img/portfolios/5.png"},{image:s+"img/portfolios/6.png"},{image:s+"img/portfolios/7.png"},{image:s+"img/portfolios/8.png"},{image:s+"img/portfolios/9.png"},{image:s+"img/portfolios/10.png"},{image:s+"img/portfolios/11.png"},{image:s+"img/portfolios/12.png"},{image:s+"img/portfolios/13.png"},{image:s+"img/portfolios/14.png"},{image:s+"img/portfolios/15.png"},{image:s+"img/portfolios/1.jpg"}];return(i,o)=>{const C=Z,h=j,p=A,f=E;return c(),a("section",S,[t("div",z,[t("div",D,[t("div",{class:"showcase-row",ref_key:"showcaseRow",ref:u},[(c(),a(L,null,k(y,(r,l)=>t("div",{class:"showcase-col",ref_for:!0,ref_key:"showcaseItems",ref:v},[t("div",G,[t("img",{src:r.image,alt:r.alt||`Event Image ${l}`,class:"showcase-img"},null,8,J),t("div",K,[t("div",O,[t("div",Q,[o[3]||(o[3]=t("h3",{class:"ac-title"}," e& Business Pitch ",-1)),t("div",U,[t("div",X,[t("div",Y,[g(C)]),o[1]||(o[1]=t("div",{class:"act-text"}," e\\& enterprises ",-1))]),t("div",tt,[t("div",ot,[g(h,{class:"act-icon-icon"})]),o[2]||(o[2]=t("div",{class:"act-text"}," 850 Participants ",-1))])])]),t("div",st,[g(p,{class:"acr-view-button"}),o[4]||(o[4]=t("span",{class:"acr-view-text"}," View ",-1))])]),o[5]||(o[5]=t("div",{class:"text-container"},[t("p",{class:"tc-text"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur. ")],-1))])])],512)),64))],512)]),e.showViewMore?(c(),a("div",et,[g(f,{text:"View More",class:"rounded showcase-action-bt",onClick:o[0]||(o[0]=V(r=>i.$router.push("/portfolio"),["prevent"]))})])):B("",!0)])])}}},rt=m(it,[["__scopeId","data-v-0d1ae42e"]]);export{rt as _};