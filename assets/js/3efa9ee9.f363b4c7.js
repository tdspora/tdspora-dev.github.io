"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[601],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},120:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Known issues and limitations"},o=void 0,l={unversionedId:"troubleshooting/known-issues-and-limitations",id:"troubleshooting/known-issues-and-limitations",title:"Known issues and limitations",description:"Here we collected all know issues and limitations of the TDspora product.",source:"@site/docs/troubleshooting/known-issues-and-limitations.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/known-issues-and-limitations",permalink:"/site/docs/troubleshooting/known-issues-and-limitations",draft:!1,tags:[],version:"current",frontMatter:{title:"Known issues and limitations"},sidebar:"docs",previous:{title:"Model training parameters",permalink:"/site/docs/config/models/model-training-parameters"},next:{title:"PostgreSQL - disable triggers",permalink:"/site/docs/troubleshooting/connectivity-postgresql-disable-triggers"}},s={},u=[{value:"Known issues",id:"known-issues",level:2},{value:"Limitations",id:"limitations",level:2}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Here we collected all know issues and limitations of the TDspora product."),(0,a.kt)("h2",{id:"known-issues"},"Known issues"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Issue"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},'"Hold Shift to zoom" on notepads'),(0,a.kt)("td",{parentName:"tr",align:null},'The "Hold Shift to Zoom" function might cause navigation difficulties on notepads.'),(0,a.kt)("td",{parentName:"tr",align:null},"Open")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filters can be changed in pipeline view mode"),(0,a.kt)("td",{parentName:"tr",align:null},"When a user enters the view mode of a pipeline, he/she can modify them."),(0,a.kt)("td",{parentName:"tr",align:null},"Review")))),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feature"),(0,a.kt)("th",{parentName:"tr",align:null},"Summary"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Authentication types for Oracle"),(0,a.kt)("td",{parentName:"tr",align:null},"RADIUS, LDAP (Should be supported with user properties and long JDBC connection string. However, we did not test this)"),(0,a.kt)("td",{parentName:"tr",align:null},"On Demand")))))}c.isMDXComponent=!0}}]);