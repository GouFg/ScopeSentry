import{d as e,Y as t,r as a,N as o,e as l,E as i,o as r,c as s,a as p,w as n,$ as m,Q as u,l as d,_ as c}from"./index-RTeQX4Z1.js";import{u as g}from"./useTable-C6AO1hlT.js";import{E as j}from"./el-card-DvuZ99w3.js";import{E as _}from"./el-select-2HzOgPi7.js";import"./el-tag-DQ-f6KyF.js";import"./el-popper-BiF-N6C2.js";import{E as f,a as h}from"./el-col-Clk25fNT.js";import{_ as v}from"./Table.vue_vue_type_script_lang-ZyLIndS7.js";import{u as b}from"./useCrudSchemas-0r96tsm6.js";import{l as x}from"./index-By1llXOp.js";import{_ as y}from"./Csearch.vue_vue_type_script_setup_true_lang-Bx1YW-Iz.js";import"./useInput-Bmcy5cuV.js";import"./debounce-DUkqpuCQ.js";import"./el-checkbox-bH4fVny5.js";import"./el-tooltip-l0sNRNKZ.js";import"./el-image-viewer-CRlDfJN9.js";import"./tsxHelper-b5SIzQmu.js";import"./el-dropdown-item-D_iEt1B1.js";import"./castArray-Cj9r5Aws.js";import"./refs-BEkOJGIm.js";import"./index-hI19neGk.js";import"./raf-BzIIckEj.js";import"./tree-BfZhwLPs.js";import"./index-EWI9jeY3.js";import"./ContentWrap.vue_vue_type_script_setup_true_lang-mUK4Q3hP.js";import"./el-text-CpyCtW8d.js";import"./el-divider-C9tmp1am.js";import"./el-form-item-Bth-RQFo.js";import"./Dialog.vue_vue_type_style_index_0_lang-k1HJRGzw.js";import"./useIcon-KJLOguoe.js";import"./exportData.vue_vue_type_script_setup_true_lang-BVgd2c1w.js";import"./el-tab-pane-C7IMVA71.js";import"./el-radio-group-C3cxfPRm.js";const S=c(e({__name:"SubdomainTakeover",setup(e){const{t:c}=d(),S=[{keyword:"domain",example:'domain="example.com"',explain:c("searchHelp.domain")},{keyword:"type",example:'type="github"',explain:c("searchHelp.subdomainType")},{keyword:"value",example:'value="exapmle.github.com"',explain:c("searchHelp.subdoaminValue")},{keyword:"response",example:'response="404 Not Found"',explain:c("searchHelp.body")},{keyword:"project",example:'project="Hackerone"',explain:c("searchHelp.project")}];t((()=>{k(),window.addEventListener("resize",k)}));const w=a(0),k=()=>{const e=window.innerHeight||document.documentElement.clientHeight;w.value=.7*e},z=a(""),H=e=>{z.value=e,R()},C=o([{field:"index",label:c("tableDemo.index"),type:"index",minWidth:10},{field:"host",label:"Domain",minWidth:50},{field:"value",label:c("subdomain.recordValue"),minWidth:30},{field:"type",label:"Type",minWidth:50},{field:"response",label:"Response",minWidth:50,formatter:(e,t,a)=>l(i,{"max-height":"100"},{default:()=>[l("div",{style:"whiteSpace: 'pre-line'"},[a])]})}]),{allSchemas:E}=b(C),{tableRegister:P,tableState:U,tableMethods:A}=g({fetchDataApi:async()=>{const{currentPage:e,pageSize:t}=U,a=await x(z.value,e.value,t.value);return{list:a.data.list,total:a.data.total}},immediate:!1}),{loading:D,dataList:I,total:T,currentPage:W,pageSize:N}=U;N.value=20;const{getList:R}=A;function L(){return{background:"var(--el-fill-color-light)"}}return(e,t)=>(r(),s(u,null,[l(y,{getList:p(R),handleSearch:H,searchKeywordsData:S,index:"SubdoaminTakerResult"},null,8,["getList"]),l(p(h),null,{default:n((()=>[l(p(f),null,{default:n((()=>[l(p(j),{style:{height:"min-content"}},{default:n((()=>[l(p(v),{pageSize:p(N),"onUpdate:pageSize":t[0]||(t[0]=e=>m(N)?N.value=e:null),currentPage:p(W),"onUpdate:currentPage":t[1]||(t[1]=e=>m(W)?W.value=e:null),columns:p(E).tableColumns,data:p(I),stripe:"","max-height":w.value,border:!0,loading:p(D),resizable:!0,onRegister:p(P),headerCellStyle:L,"tooltip-options":{offset:1,showArrow:!1,effect:"dark",enterable:!1,showAfter:0,popperOptions:{},popperClass:"test",placement:"bottom",hideAfter:0,disabled:!0},style:{fontFamily:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"}},null,8,["pageSize","currentPage","columns","data","max-height","loading","onRegister"])])),_:1})])),_:1}),l(p(f),{":span":24},{default:n((()=>[l(p(j),null,{default:n((()=>[l(p(_),{pageSize:p(N),"onUpdate:pageSize":t[2]||(t[2]=e=>m(N)?N.value=e:null),currentPage:p(W),"onUpdate:currentPage":t[3]||(t[3]=e=>m(W)?W.value=e:null),"page-sizes":[20,50,100,200,500,1e3],layout:"total, sizes, prev, pager, next, jumper",total:p(T)},null,8,["pageSize","currentPage","total"])])),_:1})])),_:1})])),_:1})],64))}}),[["__scopeId","data-v-4bcfaef8"]]);export{S as default};