import{_ as m,l as g,m as T,u as x,o as N,c as v,a as b,r as k}from"./B9tWGlrJ.js";const C={class:"rollingText-track"},S={__name:"horizontal-text",props:["duration"],setup(d){const u=d,n=g(null);return T(()=>{const{$Observer:f,$gsap:t,$ScrollTrigger:c}=x();let a=1;const _=h(n.value,{duration:u.duration||10});c.create({trigger:n.value,onUpdate(i){i.direction!==a&&(a*=-1,t.to(_,{timeScale:a,overwrite:!0}))}});function h(i,s,$){const p=t.timeline({repeat:-1,onReverseComplete(){this.totalTime(this.rawTime()+this.duration()*10)}});return s=s||{},s.ease||(s.ease="none"),t.utils.toArray(i).forEach(e=>{let o=e.cloneNode(!0),r=e.cloneNode(!0),l=e.cloneNode(!0);e.parentNode.appendChild(o),e.parentNode.appendChild(r),e.parentNode.appendChild(l),t.set(o,{position:"absolute",top:e.offsetTop,left:e.offsetLeft+e.offsetWidth}),t.set(r,{position:"absolute",top:o.offsetTop,left:o.offsetLeft+o.offsetWidth}),t.set(l,{position:"absolute",top:r.offsetTop,left:r.offsetLeft+r.offsetWidth}),p.to([e,o,r,l],{xPercent:-100,...s},0)}),p}setTimeout(()=>{c.refresh()},0)}),(f,t)=>(N(),v("div",C,[b("div",{class:"rollingText",ref_key:"rollingText",ref:n},[k(f.$slots,"default",{},void 0,!0)],512)]))}},L=m(S,[["__scopeId","data-v-41aff672"]]);export{L as _};
