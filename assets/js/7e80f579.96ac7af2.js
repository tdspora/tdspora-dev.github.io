"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[308],{5788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>m});var r=n(1504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),p=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(g.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,g=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=a,m=s["".concat(g,".").concat(d)]||s[d]||u[d]||l;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(5072),a=(n(1504),n(5788));const l={title:"Configuring logging"},o=void 0,i={unversionedId:"config/clusters/configuring-logging",id:"config/clusters/configuring-logging",title:"Configuring logging",description:"See details in Apache Spark documentation.",source:"@site/docs/config/clusters/configuring-logging.md",sourceDirName:"config/clusters",slug:"/config/clusters/configuring-logging",permalink:"/tdspora-dev.github.io/docs/config/clusters/configuring-logging",draft:!1,tags:[],version:"current",frontMatter:{title:"Configuring logging"},sidebar:"docs",previous:{title:"Cluster connection environment variables",permalink:"/tdspora-dev.github.io/docs/config/clusters/cluster-connection-envs"},next:{title:"Apache Spark Master URL",permalink:"/tdspora-dev.github.io/docs/config/clusters/spark-master-url"}},g={},p=[],c={toc:p},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"See details in ",(0,a.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/2.4.2/configuration.html#configuring-logging"},"Apache Spark documentation"),"."),(0,a.yg)("p",null,"The table below could help you in selection of appropriate ",(0,a.yg)("a",{parentName:"p",href:"https://www.tutorialspoint.com/log4j/log4j_logging_levels.htm"},"log level"),":"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Level"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"OFF"),(0,a.yg)("td",{parentName:"tr",align:null},"The highest possible rank and is intended to turn off logging.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"FATAL"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates very severe error events that will presumably lead the application to abort.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ERROR"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates error events that might still allow the application to continue running.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"WARN"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates potentially harmful situations.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"INFO"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates informational messages that highlight the progress of the application at coarse-grained level.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"DEBUG"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates fine-grained informational events that are most useful to debug an application.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TRACE"),(0,a.yg)("td",{parentName:"tr",align:null},"Designates finer-grained informational events than the DEBUG.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ALL"),(0,a.yg)("td",{parentName:"tr",align:null},"All levels including custom levels.")))))}u.isMDXComponent=!0}}]);