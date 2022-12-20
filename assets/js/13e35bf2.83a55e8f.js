"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[755],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,f=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Target filling methods"},i=void 0,l={unversionedId:"config/pipelines/target-filling-methods",id:"config/pipelines/target-filling-methods",title:"Target filling methods",description:"_Re-create mode_",source:"@site/docs/config/pipelines/target-filling-methods.md",sourceDirName:"config/pipelines",slug:"/config/pipelines/target-filling-methods",permalink:"/tdspora-dev.github.io/docs/config/pipelines/target-filling-methods",draft:!1,tags:[],version:"current",frontMatter:{title:"Target filling methods"},sidebar:"docs",previous:{title:"Overview",permalink:"/tdspora-dev.github.io/docs/config/pipelines/overview"},next:{title:"Graph behavior",permalink:"/tdspora-dev.github.io/docs/config/pipelines/graph-behavior"}},s={},p=[],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Re-create mode"))),(0,a.kt)("p",null,"Drop existing tables in scope from the target database and create new ones before data transfer.\nTables that are not present in the target database will be created anew."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Truncate mode"))),(0,a.kt)("p",null,"All data of target tables already existing in target DB is deleted before data transfer and replaced with new data.\nTables not yet existing are created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":the records will not be insert into target table in case the UNIQUE constrait violated even if the Primary key (PK)\nexists."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Append new mode"))),(0,a.kt)("p",null,"Transferred data is added to target data.\nRows with existing PK are left untouched.\nRows with new PK are inserted.\nTables not yet existing are created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note1"),": the records of the table without PRIMARY KEY constraint are added (appended) to the available ones,\nso duplicates could be detected on the target table.\nTo avoid the identical records, please use 'Truncate' target filling method instead of 'Append new'."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note2"),": the records will not be insert into target table in case the UNIQUE constrait violated even if the Primary key (PK)\nexists."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Append and Update mode"))),(0,a.kt)("p",null,"Transferred data is added to target data.\nRows with existing PK are updated.\nRows with new PK are inserted.\nTables not yet existing are created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note1"),": the tables without PRIMARY KEY constraint could not be transferred with 'Append and update'\ntarget filling method."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note2"),": the tables with UNIQUE constraint could not be transferred with 'Append and update' target filling\nmethods."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note3"),": the records will not be insert into target table in case the UNIQUE constrait violated even if the Primary key (PK)\nexists."),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": in case of topology mismatch for 'Truncate', 'Append new' and 'Append and update' target filling\nmethods no data transfer will be done."))}c.isMDXComponent=!0}}]);