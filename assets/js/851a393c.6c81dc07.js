"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6374],{4137:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(a),k=l,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||r;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4168:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var n=a(7462),l=a(3366),r=(a(7294),a(4137)),i=["components"],o={title:"Data lake files",sidebar_label:"Data lake files",slug:"/metadata-ingestion/source_docs/data_lake",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/data_lake.md"},d="Data lake files",p={unversionedId:"metadata-ingestion/source_docs/data_lake",id:"metadata-ingestion/source_docs/data_lake",isDocsHomePage:!1,title:"Data lake files",description:"For context on getting started with ingestion, check out our metadata ingestion guide.",source:"@site/genDocs/metadata-ingestion/source_docs/data_lake.md",sourceDirName:"metadata-ingestion/source_docs",slug:"/metadata-ingestion/source_docs/data_lake",permalink:"/docs/metadata-ingestion/source_docs/data_lake",editUrl:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/data_lake.md",tags:[],version:"current",frontMatter:{title:"Data lake files",sidebar_label:"Data lake files",slug:"/metadata-ingestion/source_docs/data_lake",custom_edit_url:"https://github.com/linkedin/datahub/blob/master/metadata-ingestion/source_docs/data_lake.md"},sidebar:"overviewSidebar",previous:{title:"Business Glossary",permalink:"/docs/metadata-ingestion/source_docs/business_glossary"},next:{title:"dbt",permalink:"/docs/metadata-ingestion/source_docs/dbt"}},s=[{value:"Setup",id:"setup",children:[],level:2},{value:"Capabilities",id:"capabilities",children:[],level:2},{value:"Quickstart recipe",id:"quickstart-recipe",children:[],level:2},{value:"Config details",id:"config-details",children:[],level:2},{value:"Compatibility",id:"compatibility",children:[],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:s};function u(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-lake-files"},"Data lake files"),(0,r.kt)("p",null,"For context on getting started with ingestion, check out our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion"},"metadata ingestion guide"),"."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To install this plugin, run ",(0,r.kt)("inlineCode",{parentName:"p"},"pip install 'acryl-datahub[data-lake]'"),". Because the files are read using PySpark, we require Spark 3.0.3 with Hadoop 3.2 to be installed."),(0,r.kt)("p",null,"The data lake connector extracts schemas and profiles from a variety of file formats (see below for an exhaustive list).\nIndividual files are ingested as tables, and profiles are computed similar to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/source_docs/sql_profiles"},"SQL profiler"),"."),(0,r.kt)("p",null,"Enabling profiling will slow down ingestion runs."),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Running profiling against many tables or over many rows can run up significant costs.\nWhile we've done our best to limit the expensiveness of the queries the profiler runs, you\nshould be prudent about the set of tables profiling is enabled on or the frequency\nof the profiling runs."))),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("p",null,"Extracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Row and column counts for each table"),(0,r.kt)("li",{parentName:"ul"},"For each column, if applicable:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"null counts and proportions"),(0,r.kt)("li",{parentName:"ul"},"distinct counts and proportions"),(0,r.kt)("li",{parentName:"ul"},"minimum, maximum, mean, median, standard deviation, some quantile values"),(0,r.kt)("li",{parentName:"ul"},"histograms or frequencies of unique values")))),(0,r.kt)("p",null,"This connector supports both local files as well as those stored on AWS S3 (which must be identified using the prefix ",(0,r.kt)("inlineCode",{parentName:"p"},"s3://"),"). Supported file types are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CSV"),(0,r.kt)("li",{parentName:"ul"},"TSV"),(0,r.kt)("li",{parentName:"ul"},"Parquet"),(0,r.kt)("li",{parentName:"ul"},"JSON")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are ingesting datasets from AWS S3, we recommend running the ingestion on a server in the same region to avoid high egress costs."))),(0,r.kt)("h2",{id:"quickstart-recipe"},"Quickstart recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'source:\n  type: data-lake\n  config:\n    env: "prod"\n    platform: "local-data-lake"\n    base_path: "/path/to/data/folder"\n    profiling:\n      enabled: true\n\nsink:\n  # sink configs\n')),(0,r.kt)("h2",{id:"config-details"},"Config details"),(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"env")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROD")),(0,r.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"platform")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Platform to use in namespace when constructing URNs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"base_path")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Path of the base folder to crawl. Unless ",(0,r.kt)("inlineCode",{parentName:"td"},"schema_patterns")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"profile_patterns")," are set, the connector will ingest all files in this folder.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spark_driver_memory")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4g")),(0,r.kt)("td",{parentName:"tr",align:null},"Max amount of memory to grant Spark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aws_config.aws_region")),(0,r.kt)("td",{parentName:"tr",align:null},"If ingesting from AWS S3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"AWS region code.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aws_config.aws_access_key_id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aws_config.aws_secret_access_key")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"aws_config.aws_session_token")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Autodetected"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"},"https://boto3.amazonaws.com/v1/documentation/api/latest/guide/credentials.html"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_patterns.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to ingest. Defaults to all.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_patterns.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to not ingest. Defaults to none.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"schema_patterns.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching of tables to ingest.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile_patterns.allow")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"*")),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to profile (a must also be ingested for profiling). Defaults to all.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile_patterns.deny")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of regex patterns for tables to not profile (a must also be ingested for profiling). Defaults to none.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profile_patterns.ignoreCase")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to ignore case sensitivity during pattern matching of tables to profile.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.enabled")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether profiling should be done.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.profile_table_level_only")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to perform profiling at table-level only or include column-level profiling as well.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.max_number_of_fields_to_profile")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"None")),(0,r.kt)("td",{parentName:"tr",align:null},"A positive integer that specifies the maximum number of columns to profile for any table. ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," implies all columns. The cost of profiling goes up significantly as the number of columns to profile goes up.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_null_count")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the number of nulls for each column.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_min_value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the min value of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_max_value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the max value of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_mean_value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the mean value of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_median_value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the median value of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_stddev_value")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the standard deviation of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_quantiles")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the quantiles of numeric columns.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_distinct_value_frequencies")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for distinct value frequencies.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_histogram")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the histogram for numeric fields.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"profiling.include_field_sample_values")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"True")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to profile for the sample values for all columns.")))),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Files are read using PySpark and profiles are computed with PyDeequ.\nWe currently require Spark 3.0.3 with Hadoop 3.2 to be installed and the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPARK_HOME")," environment variable to be set for PySpark.\nThe Spark+Hadoop binary can be downloaded ",(0,r.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.lua/spark/spark-3.0.3/spark-3.0.3-bin-hadoop3.2.tgz"},"here"),"."),(0,r.kt)("p",null,"For an example guide on setting up PyDeequ on AWS, see ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/big-data/testing-data-quality-at-scale-with-pydeequ/"},"this guide"),"."),(0,r.kt)("h2",{id:"questions"},"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring this source, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}u.isMDXComponent=!0}}]);