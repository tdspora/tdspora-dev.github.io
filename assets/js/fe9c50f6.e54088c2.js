"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[728],{5788:(e,t,n)=>{n.d(t,{Iu:()=>l,yg:()=>d});var r=n(1504);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||f[m]||s;return n?r.createElement(d,a(a({ref:t},l),{},{components:n})):r.createElement(d,a({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(5072),o=(n(1504),n(5788));const s={title:"SSH configuration"},a=void 0,i={unversionedId:"config/clusters/ssh-configuration",id:"config/clusters/ssh-configuration",title:"SSH configuration",description:"Here is the list of currently supported ssh config options.",source:"@site/docs/config/clusters/ssh-configuration.md",sourceDirName:"config/clusters",slug:"/config/clusters/ssh-configuration",permalink:"/tdspora-dev.github.io/docs/config/clusters/ssh-configuration",draft:!1,tags:[],version:"current",frontMatter:{title:"SSH configuration"},sidebar:"docs",previous:{title:"Apache Spark Cluster Configuration Options",permalink:"/tdspora-dev.github.io/docs/config/clusters/spark-submit-options"},next:{title:"Apache Spark Master and History Web UI",permalink:"/tdspora-dev.github.io/docs/config/clusters/application-monitoring"}},c={},p=[],l={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.yg)(u,(0,r.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"http://docs.paramiko.org/en/stable/api/config.html#keywords-currently-supported"},"Here")," is the list of currently supported ssh config options.\xa0\n",(0,o.yg)("a",{parentName:"p",href:"https://man.openbsd.org/ssh_config"},"Here")," is the documentation on ssh config options in general including the ones we support.\n",(0,o.yg)("a",{parentName:"p",href:"https://unix.stackexchange.com/questions/150002/only-apply-match-keyword-to-single-host-in-ssh-config"},"Here")," is a discussion and example on how to use Match keyword and ProxyCommand.\nHere's a possible ssh config that uses all options we support:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Host *\n    AddressFamily inet\n    CanonicalDomains com\n    CanonicalizeFallbackLocal no\n    CanonicalizeHostname no\n    CanonicalizeMaxDots 1\n    HostName example.com\n    Port 22\n\nHost proxy_server\n    User user\n    Port 22\n    Hostname some_domain\n\nMatch host example.com exec not_inside_network\n    ProxyCommand ssh -W %h:%p proxy_server\n")),(0,o.yg)("p",null,"See more in ",(0,o.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/web-ui.html"},"Spark Web UI Documentation")))}f.isMDXComponent=!0}}]);