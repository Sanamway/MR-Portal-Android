(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9041],{5389:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MR_Portal_Apps/MR_Resignation",function(){return o(9237)}])},7248:function(e,t){"use strict";t.Z={src:"/_next/static/media/userimg.92245556.jpg",height:340,width:340,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKAL/8QAHBAAAwABBQAAAAAAAAAAAAAAAQMEEgACIiNC/9oACAEBAAE/AHPgVXFSal7FdoLM+J8Ya//EABcRAQADAAAAAAAAAAAAAAAAAAEAMXH/2gAIAQIBAT8AC9n/xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAEDAQE/AGmH/9k=",blurWidth:8,blurHeight:8}},4738:function(e,t,o){"use strict";o.d(t,{H:function(){return s}});let s="https://digital.willowood.com"},9237:function(e,t,o){"use strict";o.r(t);var s=o(5893),a=o(7294),r=o(5675),i=o.n(r),n=o(4738),l=o(2729),d=o(9198),c=o.n(d);o(5843);var u=o(381),p=o.n(u),m=o(1163),f=o(6501),g=o(2914),h=o(1409),x=o(7248);t.default=e=>{let t=(0,m.useRouter)(),o={"Content-Type":"application/json",secret:"fsdhfgsfuiweifiowefjewcewcebjw"},[r,d]=(0,a.useState)({uId:"",cId:"",bgId:"",buId:"",rId:"",zId:"",tId:"",roleId:"",empCode:"",reportingManager:"",developmentManager:"",hrManager:"",reportingHQ:""});(0,a.useEffect)(()=>{var e;d({uId:JSON.parse(window.localStorage.getItem("uid")),cId:null===(e=JSON.parse(window.localStorage.getItem("userinfo")))||void 0===e?void 0:e.c_id,bgId:JSON.parse(window.localStorage.getItem("userinfo")).bg_id,buId:JSON.parse(window.localStorage.getItem("userinfo")).bu_id,rId:JSON.parse(window.localStorage.getItem("userinfo")).r_id,zId:JSON.parse(window.localStorage.getItem("userinfo")).z_id,tId:JSON.parse(window.localStorage.getItem("userinfo")).t_id,clName:window.localStorage.getItem("user_name"),ulName:window.localStorage.getItem("phone_number"),empCode:window.localStorage.getItem("emp_code"),roleId:JSON.parse(window.localStorage.getItem("userinfo")).role_id,reportingManager:JSON.parse(window.localStorage.getItem("userinfo")).rp_manager,developmentManager:JSON.parse(window.localStorage.getItem("userinfo")).functional_mgr,hrManager:JSON.parse(window.localStorage.getItem("userinfo")).hr_name,reportingHQ:JSON.parse(window.localStorage.getItem("userinfo")).reporting_hq})},[]);let[u,b]=(0,a.useState)({resignReqDate:new Date,noticePeriod:15,lwd:new Date(p()().add(15,"days").format("MM DD YYYY")),reason:"",purposedLWD:new Date,comment:""}),w=async()=>{let{resignReqDate:e,noticePeriod:s,lwd:a,reason:i,purposedLWD:d,comment:c}=u;try{await l.Z.post("".concat(n.H,"/api/update_resignation"),JSON.stringify({resignation_request_date:e,notice_period_in_days:s,last_working_date:a,reason:i,proposed_lwd:d,comment:c,app_status:"Resignation Submitted"}),{headers:o,params:{emp_code:r.empCode,c_id:r.cId,app_status:"Resignation Submitted"}}).then(e=>{e&&(f.ZP.success(e.data.message),b({resignReqDate:new Date,noticePeriod:0,lwd:new Date,reason:"",purposedLWD:new Date,comment:""}),t.push({pathname:"/MR_Portal_Apps/MRHome"}))})}catch(t){var p,m;let e=null==t?void 0:null===(m=t.response)||void 0===m?void 0:null===(p=m.data)||void 0===p?void 0:p.message;console.log("pop",e),f.ZP.error(e)}},[A,y]=(0,a.useState)(!0),v=async()=>{try{let e=JSON.parse(window.localStorage.getItem("c_id")),t=await l.Z.get("".concat(n.H,"/api/get_employee"),{headers:o,params:{empcode:r.empCode,c_id:JSON.stringify(e)}}),s=await t.data.data;" "===s.notice_period_in_days?(y(!0),b({resignReqDate:new Date,noticePeriod:15,lwd:new Date(p()().add(15,"days").format("MM DD YYYY")),reason:"",purposedLWD:new Date,comment:""})):(y(!1),b({resignReqDate:new Date,noticePeriod:s.notice_period_in_days,lwd:new Date(s.last_working_date),reason:s.resignation_request_date,purposedLWD:new Date(s.proposed_lwd),comment:s.comment}))}catch(e){console.log("error : ",e)}};return(0,a.useEffect)(()=>{(r.empCode||r.cId)&&v()},[r.empCode,r.cId]),(0,s.jsxs)("form",{className:" bg-white rounded  w-full   pb-4 ",onSubmit:e=>e.preventDefault(),children:[(0,s.jsx)(f.x7,{position:"bottom-center",reverseOrder:!1}),(0,s.jsxs)("div",{className:"w-full flex h-12 bg-white-800 justify-between items-center px-4  shadow-lg lg:flex-col  ",children:[(0,s.jsxs)("span",{className:"text-black flex flex-row gap-4 font-bold  md:hidden ",children:[(0,s.jsx)(h.Wuc,{className:"self-center ",onClick:()=>t.push({pathname:"/MR_Portal_Apps/MRHome"})}),(0,s.jsx)("span",{children:"  MR Resignation"})]})," "]}),(0,s.jsx)("div",{className:"flex mb-4 ",children:(0,s.jsxs)("div",{className:"flex mb-4 mt-2",children:[(0,s.jsx)("div",{className:"w-40 h-30 flex justify-center items-center",children:(0,s.jsx)(i(),{className:"h-[5.1rem] w-[5.1rem] rounded-full mt-2",src:x.Z,alt:"img"})}),(0,s.jsxs)("div",{className:"flex  flex-col  w-full mt-4 md:hidden",children:[(0,s.jsxs)("div",{className:"flex w-full  w-28",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Emp Code"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsx)("span",{className:"w-28 ml-3",children:r.empCode})]}),(0,s.jsxs)("div",{className:"flex   w-full  w-28 ",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Name"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsxs)("span",{className:"w-28 ml-3 whitespace-nowrap",children:[" ",r.clName]})]}),(0,s.jsxs)("div",{className:"flex w-full  w-28",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Reporting HQ"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsx)("span",{className:"w-28 ml-3",children:r.reportingHQ})]})]})]})}),(0,s.jsxs)("div",{className:"overflow-auto w-full px-3",children:[(0,s.jsxs)("div",{className:"flex flex-col  w-full px-2",children:[(0,s.jsxs)("label",{className:"text-gray-700 text-sm font-bold mb-2 whitespace-nowrap",htmlFor:"inputField",children:["Resignation Request Date ",(0,s.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,s.jsx)(c(),{className:"w-full px-3 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",dateFormat:"dd-MM-yyyy",selected:u.resignReqDate,peekNextMonth:!0,showMonthDropdown:!0,onChange:e=>b({...u,resignReqDate:e}),showYearDropdown:!0,dropdownMode:"select",disabled:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full px-2 ",children:[(0,s.jsxs)("label",{className:"text-gray-700 text-sm font-bold mb-2 whitespace-nowrap",htmlFor:"inputField",children:["Notice Period in Days ",(0,s.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,s.jsx)("input",{className:"w-full px-3 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",type:"number",value:u.noticePeriod,onChange:e=>b({...u,noticePeriod:e.target.value}),disabled:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full px-2 ",children:[(0,s.jsxs)("label",{className:"text-gray-700 text-sm font-bold mb-2 whitespace-nowrap",htmlFor:"inputField",children:["Last Working Date ",(0,s.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,s.jsx)(c(),{className:"w-full px-3 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",dateFormat:"dd-MM-yyyy",selected:u.lwd,peekNextMonth:!0,showMonthDropdown:!0,onChange:e=>b({...u,lwd:e}),showYearDropdown:!0,dropdownMode:"select",disabled:!0})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full px-2 ",children:[(0,s.jsxs)("label",{className:"text-gray-700 text-sm font-bold mb-2 whitespace-nowrap",htmlFor:"inputField",children:["Reason ",(0,s.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,s.jsxs)("select",{className:"w-full px-3 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",id:"userSelect",value:u.reason,onChange:e=>b({...u,reason:e.target.value}),children:[(0,s.jsx)("option",{value:"",className:"focus:outline-none focus:border-b bg-white",children:"Reason"}),(0,s.jsx)("option",{value:"Salary Growth",children:"Salary Growth"}),(0,s.jsx)("option",{value:"Benifit",children:"Benifit"}),(0,s.jsx)("option",{value:"Reporting Manager Issue",children:"Reporting Manager Issue"}),(0,s.jsx)("option",{value:"Disatisfaction",children:"Disatisfaction"}),(0,s.jsx)("option",{value:"Job Role",children:"Job Role"}),(0,s.jsx)("option",{value:"Re-Location",children:"Re-Location"}),(0,s.jsx)("option",{value:"Higher Study",children:"Higher Study"}),(0,s.jsx)("option",{value:"Growth Opportunity",children:"Growth Opportunity"}),(0,s.jsx)("option",{value:"Personal Reason",children:"Personal Reason"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full px-2 ",children:[(0,s.jsxs)("label",{className:"text-gray-700 text-sm font-bold mb-2 whitespace-nowrap",htmlFor:"inputField",children:["Proposed LWD ",(0,s.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,s.jsx)(c(),{className:"w-full px-3 py-1.5 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",dateFormat:"dd-MM-yyyy",selected:u.purposedLWD,peekNextMonth:!0,showMonthDropdown:!0,onChange:e=>b({...u,purposedLWD:e}),showYearDropdown:!0,dropdownMode:"select"})]}),(0,s.jsx)("div",{className:"flex flex-col gap-1 w-full px-2 ",children:(0,s.jsx)("textarea",{className:"w-full px-2 py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500 mt-2",id:"textareaField",placeholder:"Remarks",rows:"3",value:u.comment,onChange:e=>b({...u,comment:e.target.value})})})]}),A?(0,s.jsxs)("div",{className:"mt-100  flex flex-row gap-2 justify-center lg:hidden px-3 mt-4",children:[(0,s.jsx)("button",{type:"button",className:"inline-flex justify-center  text-white rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>w(),children:"Submit"}),(0,s.jsx)("button",{type:"button",className:"inline-flex justify-center text-white rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium  hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>{t.push({pathname:"/MR_Portal_Apps/MRHome"})},children:"Close"})]}):(0,s.jsxs)("div",{className:"mt-100  flex flex-row gap-2 justify-center lg:hidden px-3 mt-4",children:[(0,s.jsx)("button",{type:"button",className:"hidden inline-flex justify-center  text-white rounded-md border border-transparent bg-green-400 px-4 py-2 text-sm font-medium hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>w(),children:"Submit"}),(0,s.jsx)("button",{type:"button",className:"inline-flex justify-center text-white rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium  hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:()=>{t.push({pathname:"/MR_Portal_Apps/MRHome"})},children:"Close"})]}),(0,s.jsx)("div",{className:"flex justify-end w-full",children:(0,s.jsx)(g.PcH,{size:42,className:"self-center size-120 text-black-400 text-blue-400  ",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})})})]})}},5843:function(){},6501:function(e,t,o){"use strict";let s,a;o.d(t,{x7:function(){return ep},ZP:function(){return em}});var r,i=o(7294);let n={data:""},l=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||n},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let o="",s="",a="";for(let r in e){let i=e[r];"@"==r[0]?"i"==r[1]?o=r+" "+i+";":s+="f"==r[1]?p(i,r):r+"{"+p(i,"k"==r[1]?"":t)+"}":"object"==typeof i?s+=p(i,t?t.replace(/([^,])+/g,e=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):r):null!=i&&(r="-"==r[1]?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(r,i):r+":"+i+";")}return o+(t&&a?t+"{"+a+"}":a)+s},m={},f=e=>{if("object"==typeof e){let t="";for(let o in e)t+=o+f(e[o]);return t}return e},g=(e,t,o,s,a)=>{var r;let i=f(e),n=m[i]||(m[i]=(e=>{let t=0,o=11;for(;t<e.length;)o=101*o+e.charCodeAt(t++)>>>0;return"go"+o})(i));if(!m[n]){let t=i!==e?e:(e=>{let t,o,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(o=t[3].replace(u," ").trim(),s.unshift(s[0][o]=s[0][o]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);m[n]=p(a?{["@keyframes "+n]:t}:t,o?"":"."+n)}let l=o&&m.g;return o&&(m.g=m[n]),r=m[n],l?t.data=t.data.replace(l,r):-1===t.data.indexOf(r)&&(t.data=s?r+t.data:t.data+r),n},h=(e,t,o)=>e.reduce((e,s,a)=>{let r=t[a];if(r&&r.call){let e=r(o),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;r=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==r?"":r)},"");function x(e){let t=this||{},o=e.call?e(t.p):e;return g(o.unshift?o.raw?h(o,[].slice.call(arguments,1),t.p):o.reduce((e,o)=>Object.assign(e,o&&o.call?o(t.p):o),{}):o,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,w,A,y=x.bind({k:1});function v(e,t){let o=this||{};return function(){let s=arguments;function a(r,i){let n=Object.assign({},r),l=n.className||a.className;o.p=Object.assign({theme:w&&w()},n),o.o=/go\d/.test(l),n.className=x.apply(o,s)+(l?" "+l:""),t&&(n.ref=i);let d=e;return e[0]&&(d=n.as||e,delete n.as),A&&d[0]&&A(n),b(d,n)}return t?t(a):a}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,_=(s=0,()=>(++s).toString()),D=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},I="default",C=(e,t)=>{let{toastLimit:o}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,o)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return C(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},S=[],E={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},M={},k=(e,t=I)=>{M[t]=C(M[t]||E,e),S.forEach(([e,o])=>{e===t&&o(M[t])})},R=e=>Object.keys(M).forEach(t=>k(e,t)),O=e=>Object.keys(M).find(t=>M[t].toasts.some(t=>t.id===e)),P=(e=I)=>t=>{k(t,e)},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},H=(e={},t=I)=>{let[o,s]=(0,i.useState)(M[t]||E),a=(0,i.useRef)(M[t]);(0,i.useEffect)(()=>(a.current!==M[t]&&s(M[t]),S.push([t,s]),()=>{let e=S.findIndex(([e])=>e===t);e>-1&&S.splice(e,1)}),[t]);let r=o.toasts.map(t=>{var o,s,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(o=e[t.type])?void 0:o.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...o,toasts:r}},Q=(e,t="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...o,id:(null==o?void 0:o.id)||_()}),L=e=>(t,o)=>{let s=Q(t,e,o);return P(s.toasterId||O(s.id))({type:2,toast:s}),s.id},J=(e,t)=>L("blank")(e,t);J.error=L("error"),J.success=L("success"),J.loading=L("loading"),J.custom=L("custom"),J.dismiss=(e,t)=>{let o={type:3,toastId:e};t?P(t)(o):R(o)},J.dismissAll=e=>J.dismiss(void 0,e),J.remove=(e,t)=>{let o={type:4,toastId:e};t?P(t)(o):R(o)},J.removeAll=e=>J.remove(void 0,e),J.promise=(e,t,o)=>{let s=J.loading(t.loading,{...o,...null==o?void 0:o.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?N(t.success,e):void 0;return a?J.success(a,{id:s,...o,...null==o?void 0:o.success}):J.dismiss(s),e}).catch(e=>{let a=t.error?N(t.error,e):void 0;a?J.error(a,{id:s,...o,...null==o?void 0:o.error}):J.dismiss(s)}),e};var $=1e3,B=(e,t="default")=>{let{toasts:o,pausedAt:s}=H(e,t),a=(0,i.useRef)(new Map).current,r=(0,i.useCallback)((e,t=$)=>{if(a.has(e))return;let o=setTimeout(()=>{a.delete(e),n({type:4,toastId:e})},t);a.set(e,o)},[]);(0,i.useEffect)(()=>{if(s)return;let e=Date.now(),a=o.map(o=>{if(o.duration===1/0)return;let s=(o.duration||0)+o.pauseDuration-(e-o.createdAt);if(s<0){o.visible&&J.dismiss(o.id);return}return setTimeout(()=>J.dismiss(o.id,t),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[o,s,t]);let n=(0,i.useCallback)(P(t),[t]),l=(0,i.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),d=(0,i.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),c=(0,i.useCallback)(()=>{s&&n({type:6,time:Date.now()})},[s,n]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:a=8,defaultPosition:r}=t||{},i=o.filter(t=>(t.position||r)===(e.position||r)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[o]);return(0,i.useEffect)(()=>{o.forEach(e=>{if(e.dismissed)r(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[o,r]),{toasts:o,handlers:{updateHeight:d,startPause:l,endPause:c,calculateOffset:u}}},z=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Y=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,T=y`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,W=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Y} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${T} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,q=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=v("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${q} 1s linear infinite;
`,G=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=y`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,X=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,K=v("div")`
  position: absolute;
`,V=v("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,eo=({toast:e})=>{let{icon:t,type:o,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===o?null:i.createElement(V,null,i.createElement(Z,{...s}),"loading"!==o&&i.createElement(K,null,"error"===o?i.createElement(W,{...s}):i.createElement(X,{...s})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=v("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,en=(e,t)=>{let o=e.includes("top")?1:-1,[s,a]=D()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(o),ea(o)];return{animation:t?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:o,children:s})=>{let a=e.height?en(e.position||t||"top-center",e.visible):{opacity:0},r=i.createElement(eo,{toast:e}),n=i.createElement(ei,{...e.ariaProps},N(e.message,e));return i.createElement(er,{className:e.className,style:{...a,...o,...e.style}},"function"==typeof s?s({icon:r,message:n}):i.createElement(i.Fragment,null,r,n))});r=i.createElement,p.p=void 0,b=r,w=void 0,A=void 0;var ed=({id:e,className:t,style:o,onHeightUpdate:s,children:a})=>{let r=i.useCallback(t=>{if(t){let o=()=>{s(e,t.getBoundingClientRect().height)};o(),new MutationObserver(o).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:r,className:t,style:o},a)},ec=(e,t)=>{let o=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:D()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(o?1:-1)}px)`,...o?{top:0}:{bottom:0},...s}},eu=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:o,gutter:s,children:a,toasterId:r,containerStyle:n,containerClassName:l})=>{let{toasts:d,handlers:c}=B(o,r);return i.createElement("div",{"data-rht-toaster":r||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(o=>{let r=o.position||t,n=ec(r,c.calculateOffset(o,{reverseOrder:e,gutter:s,defaultPosition:t}));return i.createElement(ed,{id:o.id,key:o.id,onHeightUpdate:c.updateHeight,className:o.visible?eu:"",style:n},"custom"===o.type?N(o.message,o):a?a(o):i.createElement(el,{toast:o,position:r}))}))},em=J}},function(e){e.O(0,[5445,1778,4885,1579,5675,9961,9198,2888,9774,179],function(){return e(e.s=5389)}),_N_E=e.O()}]);