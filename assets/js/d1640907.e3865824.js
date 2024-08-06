"use strict";(self.webpackChunktdm_docs=self.webpackChunktdm_docs||[]).push([[400],{5788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>g});var n=a(1504);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=o,g=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return a?n.createElement(g,r(r({ref:t},c),{},{components:a})):n.createElement(g,r({ref:t},c))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},316:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=a(5072),o=(a(1504),a(5788));const i={title:"FAQ - Data generation"},r=void 0,s={unversionedId:"faq/faq-data-generation",id:"faq/faq-data-generation",title:"FAQ - Data generation",description:"Do we spend privacy budget when generating data?",source:"@site/docs/faq/faq-data-generation.md",sourceDirName:"faq",slug:"/faq/faq-data-generation",permalink:"/tdspora-dev.github.io/docs/faq/faq-data-generation",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ - Data generation"},sidebar:"docs",previous:{title:"Security Policy",permalink:"/tdspora-dev.github.io/docs/legal/security-policy"},next:{title:"FAQ - Subsetting",permalink:"/tdspora-dev.github.io/docs/faq/faq-subsetting"}},l={},d=[{value:"Do we spend privacy budget when generating data?",id:"do-we-spend-privacy-budget-when-generating-data",level:3},{value:"How can we extract representative samples of the data to feed to the model?",id:"how-can-we-extract-representative-samples-of-the-data-to-feed-to-the-model",level:3},{value:"How does TDSpora handle dependencies across multiple databases?",id:"how-does-tdspora-handle-dependencies-across-multiple-databases",level:3},{value:"How do you generate addresses?",id:"how-do-you-generate-addresses",level:3},{value:"How do you handle data generation errors?",id:"how-do-you-handle-data-generation-errors",level:3},{value:"How do you preserve relationships between tables?",id:"how-do-you-preserve-relationships-between-tables",level:3},{value:"If I have a strict business rule that allows only particular combinations of values in separate columns, can it be enforced?",id:"if-i-have-a-strict-business-rule-that-allows-only-particular-combinations-of-values-in-separate-columns-can-it-be-enforced",level:3},{value:"Is it suitable for generating data precicely folowing the business rules?",id:"is-it-suitable-for-generating-data-precicely-folowing-the-business-rules",level:3},{value:"What is the cost associated with training of a data generation model?",id:"what-is-the-cost-associated-with-training-of-a-data-generation-model",level:3},{value:"What is the data generation performance?",id:"what-is-the-data-generation-performance",level:3}],c={toc:d},h="wrapper";function p(e){let{components:t,...i}=e;return(0,o.yg)(h,(0,n.c)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h3",{id:"do-we-spend-privacy-budget-when-generating-data"},"Do we spend privacy budget when generating data?"),(0,o.yg)("p",null,"No, once the model is trained we do not reference the original data anymore hence do not spend the privacy budget."),(0,o.yg)("h3",{id:"how-can-we-extract-representative-samples-of-the-data-to-feed-to-the-model"},"How can we extract representative samples of the data to feed to the model?"),(0,o.yg)("p",null,"If we have no access to the production data, how we can tell what is the representative sample?"),(0,o.yg)("p",null,"A (draft):"),(0,o.yg)("blockquote",null,(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"Random or ",(0,o.yg)("a",{parentName:"li",href:"https://www.investopedia.com/terms/stratified_random_sampling.asp"},"stratified sampling")," will give you a representative dataset with normal distribution of data points."),(0,o.yg)("li",{parentName:"ol"},"Data profiling can give you a sense of what data patterns exist. Extract sample and compare profiling results on the full data set."),(0,o.yg)("li",{parentName:"ol"},"Shooting in the dark: extract the last few days or months, take one or more random business entities and extract all related data."),(0,o.yg)("li",{parentName:"ol"},"Have a DP process on top of the whole dataset to run a limited number of exploratory queries."),(0,o.yg)("li",{parentName:"ol"},"Give access to the data for one Data Scientist to do the investigations."),(0,o.yg)("li",{parentName:"ol"},"Use cleanrooms like ",(0,o.yg)("a",{parentName:"li",href:"https://databricks.com/blog/2022/06/28/introducing-data-cleanrooms-for-the-lakehouse.html?utm_source=databricks&utm_medium=email&utm_campaign=7013f000000TyO7AAK&mkt_tok=MDk0LVlNUy02MjkAAAGFVge28TjKdqNz-QK1iiI6bTHznNENdouXk4uhPQxe4qI8eZXTfOC38I1Q9UI9LzBakfCg0mLl89Wh7C9OYlVM4Yi6OtVcH80WbybzRmz_ySWP5-8"},"Databricks Cleanroom")))),(0,o.yg)("h3",{id:"how-does-tdspora-handle-dependencies-across-multiple-databases"},"How does TDSpora handle dependencies across multiple databases?"),(0,o.yg)("p",null,"SynGen handles each table independently. Global metadata file contains definitions of the keys and training parameters for each table. Once training of all the models completed, the generated data can be loaded into target databases using existing ETL(ELT) pipelines."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(588).c,width:"1111",height:"422"})),(0,o.yg)("h3",{id:"how-do-you-generate-addresses"},"How do you generate addresses?"),(0,o.yg)("p",null,"Q: I\u2019m also curious about how you deal with data that might help identify people, but whose semantics might also be important to the overall synthetic data. For example, postal code \u2013 if you want to do testing that involves filling out forms, a postal code needs to be valid. If you\u2019re introducing noise into postal codes, does that mean you move a person to a random postal code in the same country? Do you have a database of legitimate postal codes that you draw from?"),(0,o.yg)("p",null,"A: We have no databases with postal codes or physical addresses to draw from. However, if you have enough data in the sample, the model will learn the patterns and move people into a slightly different area thanks to the way the codes are formed. A bit different story with physical addresses. The algorithm cannot replicate them at all. In order to work it around, you can replace address lines with geo-coordinates before feeding data to the model."),(0,o.yg)("p",null,"Here is an example of overlay of original and generated geographic coordinates:"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(12).c,width:"2311",height:"1684"})),(0,o.yg)("h3",{id:"how-do-you-handle-data-generation-errors"},"How do you handle data generation errors?"),(0,o.yg)("p",null,"We do not handle the errors due to unsupervised nature of the generation model."),(0,o.yg)("p",null,"We recommend to use existing data quality rules (Great Expectations, deequ, dbt tests) to filter out the invalid rows. Please be aware that the distributions quality might be affected if the generated dataset is small."),(0,o.yg)("p",null,"Useful link: ",(0,o.yg)("a",{parentName:"p",href:"https://towardsdatascience.com/how-to-validate-the-quality-of-your-synthetic-data-34503eba6da"},"https://towardsdatascience.com/how-to-validate-the-quality-of-your-synthetic-data-34503eba6da")),(0,o.yg)("h3",{id:"how-do-you-preserve-relationships-between-tables"},"How do you preserve relationships between tables?"),(0,o.yg)("p",null,"Preserving relationships between two or more tables is essential for synthetic data generation. Here is a typical wish list for relationship integrity in multi-table data:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Referential integrity is respected, meaning that all children have parents"),(0,o.yg)("li",{parentName:"ol"},'It is desirable to have a small percentage of "broken" links to increase coverage during software testing'),(0,o.yg)("li",{parentName:"ol"},"The ability to rebalance children and parents"),(0,o.yg)("li",{parentName:"ol"},"Having logical correlations between children and parents be as accurate as possible.")),(0,o.yg)("p",null,"Different priorities in this list require different generation approaches. The simplest and most popular one is the adaptation of the ",(0,o.yg)("a",{parentName:"p",href:"https://mathisonian.github.io/kde"},"Kernel Density Estimator (KDE)"),". It estimates the distribution of keys and fills in the gaps and extrapolates values beyond the boundaries of the sample data set."),(0,o.yg)("p",null,"The KDE generates predictable, accurate relationships always connecting parent and child, which is more suitable for the software testing scenario. However, the method is blind to the semantic correlations. For example, a patient in Nebraska can be assigned to a hospital in New Jersey."),(0,o.yg)("p",null,"Another, ML approach, involves generating a parent table first. The model for a child table is then trained using the original child table and low-dimensional (latent) representation of the parent table.\xa0 After the synthetic child table is generated, each child row is matched (also in the latent space) with the nearest, most similar, parent row, and its foreign key.\xa0 By this, we preserve not only statistical properties but the \u201cmeaning\u201d of the relationship between parent and child tables."),(0,o.yg)("p",null,"For example, the figure below depicts two related tables connected by ",(0,o.yg)("strong",{parentName:"p"},"cust_id"),". If we would like to maintain the logical relationship between a customer's physical features and a purchased product, it is important to consider all attributes of the customer and select the largest similarity value between its latent space and three rows in the ",(0,o.yg)("strong",{parentName:"p"},"Customer")," table, which suggests that the row is related to the 1st parent row, and, therefore, its ",(0,o.yg)("strong",{parentName:"p"},"cust_id")," is assigned to 1."),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(528).c,width:"622",height:"113"})),(0,o.yg)("p",null,"Unfortunately, the accuracy of the generated links is not perfect, which can be good or bad depending on the task at hand. Synthetic data generated using this approach is demanded in software testing, data science, and business intelligence applications."),(0,o.yg)("h3",{id:"if-i-have-a-strict-business-rule-that-allows-only-particular-combinations-of-values-in-separate-columns-can-it-be-enforced"},"If I have a strict business rule that allows only particular combinations of values in separate columns, can it be enforced?"),(0,o.yg)("p",null,"Currently, the rules will be followed in 80-90% of cases. You can configure data filtering rules to remove such records as the solution can generate unlimited amount of data."),(0,o.yg)("h3",{id:"is-it-suitable-for-generating-data-precicely-folowing-the-business-rules"},"Is it suitable for generating data precicely folowing the business rules?"),(0,o.yg)("p",null,"For example, we can have a data mart with calculated columns aggregated from various sources."),(0,o.yg)("p",null,"Currently, we have no capabilities to define the generation rules for particular columns. At the same time, the trained model can generate highly accurate, but still approximate values with a high error accumulation rate. To avoid this issue we recommend feeding upstream data to the model and downstream it thru the transformation logic to get valuable results."),(0,o.yg)("p",null,"Alternatively, data validation rules can be defined or reused to filter out invalid rows. However, such an approach might affect distributions and correlations within the data set and create bias. So, it is not recommended for the AI/ML apprications."),(0,o.yg)("h3",{id:"what-is-the-cost-associated-with-training-of-a-data-generation-model"},"What is the cost associated with training of a data generation model?"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(8068).c,width:"960",height:"540"})),(0,o.yg)("h3",{id:"what-is-the-data-generation-performance"},"What is the data generation performance?"),(0,o.yg)("p",null,(0,o.yg)("img",{src:a(7763).c,width:"960",height:"540"})))}p.isMDXComponent=!0},588:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/handle_dependencies_across_multiple_databases-e43631994c77416742ea2b30af394118.png"},12:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/map_latitude_logitude-993f0a12dfd69c35eee1845309fc4440.png"},8068:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/presentation_cost_generation_2-49ec4435e4299428e97cda6e64536168.jpg"},7763:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/presentation_cost_generation_3-ffc676a98f00f813cddcd924b4389dd8.jpg"},528:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/preserve_relationships_between_tables-b0e15e425ea23efe51068e505f13ea70.png"}}]);