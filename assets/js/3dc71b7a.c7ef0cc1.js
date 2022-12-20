"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[839],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2349:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Model training parameters"},o=void 0,l={unversionedId:"config/models/model-training-parameters",id:"config/models/model-training-parameters",title:"Model training parameters",description:"Training a synthetic data generation model (or set of related models) requires several parameters to be provided:",source:"@site/docs/config/models/model-training-parameters.md",sourceDirName:"config/models",slug:"/config/models/model-training-parameters",permalink:"/docs/config/models/model-training-parameters",draft:!1,tags:[],version:"current",frontMatter:{title:"Model training parameters"},sidebar:"docs",previous:{title:"Export pipeline",permalink:"/docs/config/pipelines/pipeline-export"},next:{title:"Known issues and limitations",permalink:"/docs/troubleshooting/known-issues-and-limitations"}},s={},p=[{value:"Differential privacy",id:"differential-privacy",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Training a synthetic data generation model (or set of related models) requires several parameters to be provided:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Max epochs")," parameter regulates the maximum number of iterations that the training process will try to improve the accuracy of the generation model. If it detects that the model reached its top accuracy it will stop earlier. Each iteration consumes computing power and time to complete. Recommended values for this parameter are:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Test data for the application testing purposes: ",(0,n.kt)("strong",{parentName:"li"},"10-20")),(0,n.kt)("li",{parentName:"ul"},"Test data for the analytical purposes: ",(0,n.kt)("strong",{parentName:"li"},"20-50")),(0,n.kt)("li",{parentName:"ul"},"Synthetic data for training other ML models: ",(0,n.kt)("strong",{parentName:"li"},"50-100")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("strong",{parentName:"p"},"Null values")," parameter defines the action the training process will apply to the rows with the NULL values. There are two options available:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Replace NULL values with the column average value that might affect the accuracy of the generation"),(0,n.kt)("li",{parentName:"ul"},"Drop the entire row, if at least one of the columns has the NULL value")))),(0,n.kt)("p",null,"It is recommended to use the replace action for the application testing, and the drop option for the analytical or data science needs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("a",{parentName:"li",href:"#dp"},"Differential privacy")," option allows you to activate a special process during the synthetic data generation model training that mathematically guarantees the risk of disclosure of personal/sensitive data to be less or equal to a value known as privacy budget (\u03b5). The lower the epsilon (\u03b5) is the more privacy is added, but the lower accuracy is. The privacy budget determines how one's personal data present in the database influences the generated table or a risk for a person to reveal her personal data. It is recommended to use values 0-3 \u2013 for high, 3-15 \u2013 for medium, and 15+ \u2013 for low privacy.")),(0,n.kt)("a",{name:"dp"}),(0,n.kt)("h2",{id:"differential-privacy"},"Differential privacy"),(0,n.kt)("p",null,"Differential privacy (DP) is a mechanism to ensure mathematically guaranteed privacy of data. That means that an intruder cannot identify whether a certain piece of information was presented in a trained data using limited queries to the generated data.\xa0Therefore, with differential privacy applied to sensitive data, the goal is to give each individual roughly the same privacy that would result from having their data removed.\xa0\xa0"),(0,n.kt)("p",null,"From the technical point of view, DP is implemented by adding a Laplace noise to the stochastic gradient descent algorithm results. This allows the neural network to learn more global patterns, that are not affected much by individual records. Thus, Information about individuals is removed from the model, leading to satisfactory results in terms of DP."),(0,n.kt)("p",null,"Unfortunately, such manipulations with optimization algorithms lead to some drawbacks, the most significant of which include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Accuracy degradation"),(0,n.kt)("li",{parentName:"ul"},"Training time increasing")),(0,n.kt)("p",null,"Since the DP mechanism is disrupting in its nature, the learning step should be kept small to ensure convergence. What is more, according to Frisk et al ",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2103.10498.pdf"},"[","1","]"),', "to obtain the best possible epsilon, gradients need to be perturbed on a single sample basis, i.e. training the deep neural network with a batch size of 1. This dramatically increases the training time by orders of magnitude, from minutes or seconds to train a non-private model with a larger batch size to hours and days for a private variant of the same model. It also eliminates the use of GPUs in training, since they offer no direct benefit over CPUs when training with such a small batch size".'),(0,n.kt)("p",null,"We use the default implementation of DP optimizers from TensorFlow. The tunable hyperparameters of a DP optimizer include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Number of micro-batches"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The number of partitions, that divide the minibatch used for training. Gradients are averaged over a micro-batch. This is what ",(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2103.10498.pdf"},"[","1","]")," is talking about."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Clipping (L2-norm)"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"To ensure DP the sensitivity of each gradient needs to be bounded. In other words, we need to limit how much each individual training point sampled in a minibatch can influence gradient computations, and the resulting updates applied to model parameters. This can be done by\xa0clipping\xa0each gradient computed on each training point. The clipping is represented as a share ranging from 0 to 1 and reflects a multiplier for every single gradient.\xa0"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Noise multiplier"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Noise multiplier controls the amount of noise added."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Learning rate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Learning rate is inherited from the model and has the same meaning as for a traditional optimizer. Should be kept low for convergence.")))),(0,n.kt)("p",null,"Some dependencies between the hyperparameter's accuracy and learning rate are obtained and shown lower."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Microbatches",src:a(8918).Z,width:"817",height:"515"})),(0,n.kt)("p",null,"The accuracy for 8 micro-batches surprisingly was 0.83 so considered an outlier and not shown in the figure. The dependency for accuracy is fitted with log trend, dependency for training rate - with a linear trend."),(0,n.kt)("p",null,"[","1","]"," -\xa0",(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2103.10498.pdf"},"Frisk et al., Super-convergence and Differential Privacy: Training faster with better privacy guarantees. 2021")))}d.isMDXComponent=!0},8918:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dp-microbatches-8924e4f85b0867fd7e1b34fca61a8390.png"}}]);