"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[407],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||g[m]||l;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3644:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"Configuring logging"},i=void 0,o={unversionedId:"config/clusters/configuring-logging",id:"config/clusters/configuring-logging",title:"Configuring logging",description:"See details in Apache Spark documentation.",source:"@site/docs/config/clusters/configuring-logging.md",sourceDirName:"config/clusters",slug:"/config/clusters/configuring-logging",permalink:"/site/docs/config/clusters/configuring-logging",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuring logging"},sidebar:"docs",previous:{title:"Cluster connection environment variables",permalink:"/site/docs/config/clusters/cluster-connection-envs"},next:{title:"Apache Spark Master URL",permalink:"/site/docs/config/clusters/spark-master-url"}},c={},s=[],p={toc:s};function g(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"See details in ",(0,a.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/2.4.2/configuration.html#configuring-logging"},"Apache Spark documentation"),"."),(0,a.kt)("p",null,"The table below could help you in selection of appropriate ",(0,a.kt)("a",{parentName:"p",href:"https://www.tutorialspoint.com/log4j/log4j_logging_levels.htm"},"log level"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Level"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OFF"),(0,a.kt)("td",{parentName:"tr",align:null},"The highest possible rank and is intended to turn off logging.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"FATAL"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates very severe error events that will presumably lead the application to abort.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates error events that might still allow the application to continue running.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WARN"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates potentially harmful situations.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"INFO"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates informational messages that highlight the progress of the application at coarse-grained level.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEBUG"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates fine-grained informational events that are most useful to debug an application.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TRACE"),(0,a.kt)("td",{parentName:"tr",align:null},"Designates finer-grained informational events than the DEBUG.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ALL"),(0,a.kt)("td",{parentName:"tr",align:null},"All levels including custom levels.")))))}g.isMDXComponent=!0}}]);