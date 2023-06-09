"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[514],{4122:(e,t,n)=>{n.d(t,{J:()=>o});var l=n(7294),a=n(4996);const o=e=>{let{src:t,width:n=16,height:o=16,className:r}=e;return l.createElement("span",{className:r,style:{backgroundImage:`url(${(0,a.Z)(t)})`,minWidth:`${n}px`,minHeight:`${o}px`,display:"inline-block"}})}},8463:(e,t,n)=>{n.d(t,{JO:()=>l.J,Nt:()=>u});var l=n(4122),a=n(7294);n(4996);var o=n(6010);const r=function(e,t,n){const[l,o]=(0,a.useState)(void 0);(0,a.useEffect)((()=>{function a(){const a=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){return e[e.indexOf(t)-1]??t}return t}return e[(null==e?void 0:e.length)-1]}();if(a){let n=0,r=!1;const c=document.getElementsByClassName(e);for(;n<(null==c?void 0:c.length)&&!r;){const e=c[n],{href:i}=e,s=decodeURIComponent(i.substring(i.indexOf("#")+1));a.id===s&&(l&&l.classList.remove(t),e.classList.add(t),o(e),r=!0),n+=1}}}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),()=>{document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}))},c="tableOfContents_a0eZ",i="table-of-contents__link";function s(e){let{toc:t,isChild:n}=e;return null!=t&&t.length?a.createElement("ul",{className:n?"":"table-of-contents"},null==t?void 0:t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:i,dangerouslySetInnerHTML:{__html:e.value},title:e.value}),a.createElement(s,{isChild:!0,toc:e.children}))))):null}function u(e){let{toc:t}=e;return r(i,"table-of-contents__link--active",150),a.createElement("div",{className:(0,o.Z)(c,"thin-scrollbar")},a.createElement(s,{toc:t}))}},4530:(e,t)=>{t.M=void 0;t.M=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},5657:(e,t,n)=>{n.d(t,{G:()=>o});var l=n(7294);const a={sm:640,md:768,lg:1024,xl:1280,"2xl":1536,laptop:1440},o=e=>{const[t,n]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{function t(){window.innerWidth>=a[e]?n(!0):n(!1)}return window.addEventListener("resize",t),t(),()=>window.removeEventListener("resize",t)}),[]),t}},8436:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var l=n(7294),a=n(3905),o=n(2263),r=n(8790),c=n(752),i=n(7462),s=n(6010),u=n(4530),m=n(1049),d=n(9960),v=n(3919),f=n(6550),p=n(5657),h=n(8463),b=n(5142);const E=(e,t)=>"link"===e.type?(0,u.M)(e.href,t):"category"===e.type&&e.items.some((e=>E(e,t)));function g(e){let{item:t,onItemClick:n,collapsible:a,activePath:o,...r}=e;const{items:c,label:u}=t,m=E(t,o),d=function(e){const t=(0,l.useRef)(e);return(0,l.useEffect)((()=>{t.current=e}),[e]),t.current}(m),[v,f]=(0,l.useState)((()=>!!a&&(!m&&t.collapsed))),p=(0,l.useRef)(null),[h,b]=(0,l.useState)(void 0),g=function(e){var t;void 0===e&&(e=!0),b(e?`${null==(t=p.current)?void 0:t.scrollHeight}px`:void 0)};(0,l.useEffect)((()=>{m&&!d&&v&&f(!1)}),[m,d,v]);const _=(0,l.useCallback)((e=>{e.preventDefault(),h||g(),setTimeout((()=>f((e=>!e))),100)}),[h]);return 0===(null==c?void 0:c.length)?null:l.createElement("li",{className:(0,s.Z)("menu__list-item",{"menu__list-item--collapsed":v,"menu__list-item--none-collapsed":!v}),key:u},l.createElement("a",(0,i.Z)({className:(0,s.Z)("menu__link",{"menu__link--sublist":a,"menu__link--active":a&&m}),onClick:a?_:void 0,href:a?"#!":void 0},r),u),l.createElement("ul",{className:"menu__list",ref:p,style:{height:h},onTransitionEnd:()=>{v||g(!1)}},null==c?void 0:c.map((e=>l.createElement(k,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:a,activePath:o})))))}function _(e){let{item:t,onItemClick:n,activePath:a,...o}=e;const{href:r,label:c}=t,u=E(t,a);return l.createElement("li",{className:"menu__list-item",key:c},l.createElement(d.Z,(0,i.Z)({className:(0,s.Z)("menu__link",{"menu__link--active":u}),to:r},(0,v.Z)(r)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function k(e){return"category"===e.item.type?l.createElement(g,e):l.createElement(_,e)}const y=function(e){let{path:t,sidebar:n,sidebarCollapsible:a=!0}=e;const o=(0,p.G)("lg"),[r,c]=(0,l.useState)(!1);(0,l.useLayoutEffect)((()=>{setTimeout((()=>{let e=document.querySelector(".aa-DetachedSearchButton");null==e||e.addEventListener("click",(()=>c(!0)))}),0)}),[]),(0,l.useLayoutEffect)((()=>{r&&setTimeout((()=>{var e;let t=null==(e=document)?void 0:e.querySelector(".aa-Input");null==t||t.addEventListener("blur",(e=>{var t,n,l,a,o,r,c;(n=null==e||null==(t=e.target)?void 0:t.value)&&(null==(l=window)||null==(a=l.dataLayer)||a.push({event:"ga_event",event_name:"search_term",custom_dimensions:{query:n,type:"DIV"!==(null==(o=document)||null==(r=o.querySelector(".aa-Source"))||null==(c=r.firstChild)?void 0:c.nodeName)},timestamp:`${Date.now()}`}))}))}),0)}),[r]);const[i,u]=(0,l.useState)(!1),{pathname:d}=(0,f.TH)();return(0,m.Z)(i),(0,l.useEffect)((()=>{u(!1)}),[o,d]),l.createElement("div",{className:(0,s.Z)("flex flex-col lg:pt-6 lg:pl-6 lg:border-r border-none",{"fixed inset-0 z-50 mt-0 bg-monochrome-body":i}),role:"complementary"},!o&&l.createElement(l.Fragment,null,l.createElement("button",{"aria-label":i?"Close Menu":"Open Menu","aria-haspopup":"true",className:(0,s.Z)(i?"button--documentation-menu-close":"button--documentation-menu-open"),type:"button",onClick:()=>u(!i)},i?l.createElement("button",{"aria-label":"menu button",className:"w-9 h-9 lg:hidden text-monochrome-black fill-current\n\t\t\t\t\t\t\t\t\tbg-close bg-no-repeat ",type:"button"}):l.createElement(l.Fragment,null,l.createElement(h.JO,{src:"/img/documentation-menu.svg",width:24,height:24}),l.createElement("div",null,"Documentation menu"))),!i&&l.createElement("div",{className:"search-bar-icon"},l.createElement(b.Z,null),l.createElement("div",{id:"searchLoupe"}))),(o||i)&&l.createElement("div",{className:"flex justify-between items-center mb-3 lg:mb-4 py-3 lg:py-0 pt-6 lg:pt-0 px-6 lg:px-0 hide-search-bar-modal"},l.createElement("h3",{className:"sm:inline lg:hidden text-monochrome-default break-words mr-10"},"Documentation menu"),o&&l.createElement("div",{className:"w-full"},l.createElement(b.Z,null))),l.createElement("div",{className:"menu px-6 lg:px-0"},(o||i)&&l.createElement("ul",{className:"menu__list"},null==n?void 0:n.map((e=>l.createElement(k,{key:e.label,item:e,onItemClick:e=>{e.target.blur(),u(!1)},collapsible:a,activePath:t}))))))};var C=n(5959),N=n(4972);const x="docPageContainer_vFwC",Z="background_rNR4";function w(e){var t;let{currentDocRoute:n,versionMetadata:r,children:i}=e;const{siteConfig:u}=(0,o.default)(),{pluginId:m,permalinkToSidebar:d,docsSidebars:v,version:f}=r,p="docs",h=v.docs,[b,E]=(0,l.useState)(!1),[g,_]=(0,l.useState)(!1),k=(0,l.useCallback)((()=>{g&&_(!1),E(!b)}),[g]);return l.createElement(c.Z,{searchMetadatas:{version:f}},l.createElement("div",{className:(0,s.Z)(x)},l.createElement("div",{className:Z}),l.createElement(y,{key:p,sidebar:h,path:n.path,sidebarCollapsible:(null==u||null==(t=u.themeConfig)?void 0:t.sidebarCollapsible)??!0,onCollapse:k,isHidden:g}),l.createElement(a.Zo,{components:C.Z},i)))}const L=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,o=t.find((e=>(0,f.LX)(a.pathname,e)));return o?((0,l.useEffect)((()=>{var e;navigator.userAgent.indexOf("Mac")>0&&(null==(e=document.querySelector("body"))||e.classList.add("mac-os"))}),[]),l.createElement(w,{currentDocRoute:o,versionMetadata:n},(0,r.H)(t))):l.createElement(N.default,e)}}}]);