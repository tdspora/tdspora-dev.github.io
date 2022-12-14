"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={title:"Apache Spark Cluster Configuration Options"},i=void 0,l={unversionedId:"config/clusters/spark-submit-options",id:"config/clusters/spark-submit-options",title:"Apache Spark Cluster Configuration Options",description:'The TDspora application is supplied with a pre-configured Apache Spark cluster running within Docker containers. This cluster is referenced as the "Local cluster" and configured to work in the standalone mode. It has two workers.',source:"@site/docs/config/clusters/spark-submit-options.md",sourceDirName:"config/clusters",slug:"/config/clusters/spark-submit-options",permalink:"/docs/config/clusters/spark-submit-options",draft:!1,tags:[],version:"current",frontMatter:{title:"Apache Spark Cluster Configuration Options"},sidebar:"docs",previous:{title:"Apache Spark Master URL",permalink:"/docs/config/clusters/spark-master-url"},next:{title:"SSH configuration",permalink:"/docs/config/clusters/ssh-configuration"}},p={},s=[{value:"Deploment Mode",id:"deploment-mode",level:2},{value:"Spark-submit options",id:"spark-submit-options",level:2},{value:"Temporal tables created by a pipeline",id:"temporal-tables-created-by-a-pipeline",level:3},{value:"Running a Pipeline on a Remote Cluster",id:"running-a-pipeline-on-a-remote-cluster",level:2},{value:"SSH Session and Environment Variables",id:"ssh-session-and-environment-variables",level:3},{value:"Spark Home",id:"spark-home",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'The TDspora application is supplied with a pre-configured Apache Spark cluster running within Docker containers. This cluster is referenced as the "Local cluster" and configured to work in the ',(0,r.kt)("inlineCode",{parentName:"p"},"standalone")," mode. It has two workers."),(0,r.kt)("p",null,"Please note that the Local cluster is intended for testing and demonstration purposes only. It is not recommended to use the cluster to process a large amount of data or execute more than one Spark application simultaneously.\nYou can change its default configuration by using the ",(0,r.kt)("strong",{parentName:"p"},"Spark-submit options")," field in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced section"),".\nPlease ensure that the TDspora server has enough resources to allow the Local cluster to process Spark applications without significant degradation in performance of the server itself."),(0,r.kt)("p",null,"The production scale jobs require distributed Spark cluster configured to handle workloads corresponding to the data volumes extracted from the production databases. For example, the subsetting of 20GB of data from an Oracle database requires roughly 6GB RAM on a worker node.\nYou also can use the ",(0,r.kt)("strong",{parentName:"p"},"Spark-submit options")," field in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," section to manage the cluster resources (CPU cores and memory) for running your pipelines."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#dynamically-loading-spark-properties"},"Apache Spark configuration")," and ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/job-scheduling.html#graceful-decommission-of-executors"},"Dynamic Resource Allocation")," for additional information about Spark configuration and available Spark properties."),(0,r.kt)("h2",{id:"deploment-mode"},"Deploment Mode"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," deploy mode set by default for the Apache Spark cluster supplied with the product. You can change the mode by providing option ",(0,r.kt)("inlineCode",{parentName:"p"},"--deploy-mode")," in the advanced parameters of the cluster configuration. Currently, Spark supports two modes ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster"),"."),(0,r.kt)("p",null,"Note, that if you set Master URL as ",(0,r.kt)("inlineCode",{parentName:"p"},"local")," (or any variation of ",(0,r.kt)("inlineCode",{parentName:"p"},"local"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/clusters/spark-master-url"},"Apache Spark Master URL"),"), the deploy mode will be automatically set to ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," as with this Master URLs the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster")," deploy mode is not supported. "),(0,r.kt)("h2",{id:"spark-submit-options"},"Spark-submit options"),(0,r.kt)("p",null,"The options you define in this control passed directly to the spark-submit command that executes pipeline job on a Spark cluster except the following"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--class")," - points to the application engine implementation class ",(0,r.kt)("inlineCode",{parentName:"li"},"com.epam.tdm.engine.TdmEngineJobApp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--files")," - includes files required to execute the job (pipeline)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--master")," - the master URL specified in a separate input control")),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/configuration.html#application-properties"},"Apache Spark documentation")," for additional options available for the driver and executors."),(0,r.kt)("h3",{id:"temporal-tables-created-by-a-pipeline"},"Temporal tables created by a pipeline"),(0,r.kt)("p",null,"Normally, all temporal tables dropped from the source and target locations, but you can specify additional configuration parameter of the Spark driver using ",(0,r.kt)("inlineCode",{parentName:"p"},"--conf 'spark.driver.extraJavaOptions=-Dtdspora.drop.temp.tables=<MODE>'"),"as the following"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALL"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop all temporal tables. Default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SOURCE"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop all temporal tables from the source.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TARGET"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop all temporal tables from the target.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NONE"),(0,r.kt)("td",{parentName:"tr",align:null},"Do not drop any tables which created by programm.")))),(0,r.kt)("p",null,"For example,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--conf 'spark.driver.extraJavaOptions=-Dtdspora.drop.temp.tables=NONE'\n")),(0,r.kt)("h2",{id:"running-a-pipeline-on-a-remote-cluster"},"Running a Pipeline on a Remote Cluster"),(0,r.kt)("p",null,"When you execute a pipeline, the application connects to the corresponding Apache Spark cluster using SSH and runs the spark-submit command. You can adjust the location and parameters of the command in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," cluster configuration section:\n",(0,r.kt)("img",{alt:"Advanced Cluster Configuration Options",src:n(4232).Z,width:"1171",height:"485"})),(0,r.kt)("h3",{id:"ssh-session-and-environment-variables"},"SSH Session and Environment Variables"),(0,r.kt)("p",null,"Under the hood, the application connects to the cluster host in the non-interactive mode. It applied limitations to the availability of the user-defined environment variables."),(0,r.kt)("p",null,"We recommend modifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH")," variable in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/environment")," file to include Apache Spark ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sbin")," folders, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"PATH=...:/opt/spark/bin:/opt/spark/sbin"),". Also, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," variable there. For instance, append line ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME=/opt/spark")," to the file."),(0,r.kt)("p",null,"In case you have no privileges to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/environment")," file, you can define the location of the Apache Spark home in the ",(0,r.kt)("strong",{parentName:"p"},"Advanced")," section."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/216202/why-does-an-ssh-remote-command-get-fewer-environment-variables-then-when-run-man"},"Why does an SSH remote command get fewer environment variables then when run manually?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.fabfile.org/faq.html#the-remote-shell-environment-doesn-t-match-interactive-shells"},"The remote shell environment doesn\u2019t match interactive shells!"))),(0,r.kt)("h3",{id:"spark-home"},"Spark Home"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," environment variable controls the location of the Apache Spark scripts executed even if you use the full path to the script or overrides it in the Cluster configuration. Pre-defined ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," takes precedence over any other means of Apache Spark home selection."),(0,r.kt)("p",null,"If you have several versions of Spark on the remote machine make sure that the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," variable point to the valid version of Apache Spark."),(0,r.kt)("p",null,"Check ",(0,r.kt)("a",{parentName:"p",href:"/docs/config/clusters/cluster-connection-envs"},"Cluster connection environment variables")," for details."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"For more details please check original ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark")," documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/submitting-applications.html"},"Submitting Applications"),"."))}u.isMDXComponent=!0},4232:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/advanced-cluster-config-211490b4b377faccecc5e6399e3e7d94.png"}}]);