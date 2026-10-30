(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3926],{8014:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MR_Portal_Apps/MRHome/help",function(){return s(2331)}])},4738:function(e,t,s){"use strict";s.d(t,{H:function(){return r}});let r="https://digital.willowood.com"},2331:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return h}});var r=s(5893),a=s(7294),o=s(2729),i=s(4738),l=s(381),n=s.n(l),d=()=>{let[e,t]=(0,a.useState)(null),[s,l]=(0,a.useState)(""),d={"Content-Type":"application/json",secret:"fsdhfgsfuiweifiowefjewcewcebjw"};(0,a.useEffect)(()=>{window.localStorage&&(window.localStorage.getItem("userinfo"),l(window.localStorage.getItem("uid")))},[]);let c=async()=>{try{let e=await o.Z.get("".concat(i.H,"/api/get_serviceticket?c_id=1&user_id=").concat(s),{headers:d}),r=await e.data.data;t(r),console.log("resdata",r)}catch(e){}};return(0,a.useEffect)(()=>{s&&c()},[s]),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"max-w-2xl mx-auto p-4",children:null==e?void 0:e.map((e,t)=>(0,r.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-4 mb-4",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[(0,r.jsxs)("h3",{className:"text-lg font-semibold",children:["Complaint Number: ",e.complaintNo]}),(0,r.jsx)("span",{className:"bg-yellow-500 text-white text-sm font-bold py-1 px-2 rounded",children:e.status})]}),(0,r.jsxs)("div",{className:"text-left",children:[(0,r.jsxs)("p",{children:["Date: ",n()(e.serv_date).format("DD/MM/Y")]}),(0,r.jsxs)("p",{children:["Complaint Type: ",e.priority]}),(0,r.jsxs)("p",{children:["Complaint Description: ",e.additional_desc]}),(0,r.jsxs)("p",{children:["Username: ",e.username]}),(0,r.jsxs)("p",{children:["Role: ",e.role]}),(0,r.jsxs)("p",{children:["Mobile Number: ",e.mobile]}),(0,r.jsxs)("p",{children:["BST: ",e.BST]})]})]},t))})})},c=s(2914),u=s(6501),p=()=>{let e={"Content-Type":"application/json",secret:"fsdhfgsfuiweifiowefjewcewcebjw"},[t,s]=(0,a.useState)({store_data:"",complaint_type:"",serv_date:new Date,priority:"",attached_photo:null,additional_desc:"",user_id:"",status:"pending",user_name:"",user_role:"",user_number:"",user_bst:"",c_id:1,additional_description:""}),[l,n]=(0,a.useState)(null),d=(e,r)=>{s({...t,[r]:e.target.value})},p=async s=>{s.preventDefault(),console.log("Form submitted",t);try{let s=await o.Z.post("".concat(i.H,"/api/add_serviceticket"),t,{headers:e}),r=await s.data;console.log("posted",r),r.status&&u.ZP.success(r.message)}catch(e){console.log("error",e)}},m=()=>{document.getElementById("file-upload").click()};return(0,a.useEffect)(()=>{if(window.localStorage){let e=window.localStorage.getItem("userinfo"),r=window.localStorage.getItem("user_name"),a=window.localStorage.getItem("phone_number"),o=window.localStorage.getItem("uid");s({...t,user_id:o}),n(JSON.parse(e)),n(e=>({...e,username:r,phone_number:a}))}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("form",{className:" bg-white rounded  w-full  overflow-auto p-3",onSubmit:p,children:[(0,r.jsx)(u.x7,{position:"bottom-center",reverseOrder:!1}),(0,r.jsx)("div",{className:"flex my-2",children:(0,r.jsxs)("div",{className:"w-full  text-left",children:[(0,r.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"store_data",children:[(0,r.jsx)("span",{className:"border-l-4 border-teal-500 pl-2",children:"Store Name "}),(0,r.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,r.jsx)("input",{className:"w-full  py-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",type:"text",id:"store_data",value:t.store_data,onChange:e=>d(e,"store_data"),required:!0})]})}),(0,r.jsxs)("div",{className:"w-full text-left",children:[(0,r.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"complaint_type",children:[(0,r.jsx)("span",{className:"border-l-4 border-teal-500 pl-2",children:"Complaint Type "}),(0,r.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,r.jsxs)("select",{className:"w-full  py-2 my-4 mb border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",id:"complaint_type",value:t.complaint_type,onChange:e=>d(e,"complaint_type"),required:!0,children:[(0,r.jsx)("option",{value:"",className:"focus:outline-none focus:border-b bg-white",children:"Select complaint Type"}),(0,r.jsx)("option",{value:"Roling Plan",children:"Roling Plan"}),(0,r.jsx)("option",{value:"Collection Plan",children:"Collection Plan"}),(0,r.jsx)("option",{value:"Digital On",children:"Digital On"}),(0,r.jsx)("option",{value:"MR App-Target",children:"MR App-Target"}),(0,r.jsx)("option",{value:"MR App-Activity",children:"MR App-Activity"}),(0,r.jsx)("option",{value:"MR App-Expenses",children:"MR App-Expenses"}),(0,r.jsx)("option",{value:"MR App-Feedback",children:"MR App-Feedback"})]}),(0,r.jsxs)("select",{className:"w-full py-2 my-2 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",id:"priority",value:t.priority,onChange:e=>d(e,"priority"),required:!0,children:[(0,r.jsx)("option",{value:"",className:"focus:outline-none focus:border-b bg-white",children:"Select Priority"}),(0,r.jsx)("option",{value:"High",children:"High"}),(0,r.jsx)("option",{value:"Medium",children:"Medium"}),(0,r.jsx)("option",{value:"Low",children:"Low"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2 text-left",htmlFor:"photo",children:(0,r.jsx)("span",{className:"border-l-4 border-teal-500 pl-2",children:"Attach Photo "})}),(0,r.jsx)("div",{className:"flex flex-col items-center justify-center py-2 mx-2 border-2 border-dashed border-black rounded-lg",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[t.photo?(0,r.jsx)("img",{src:t.photo,alt:"Selected",className:"w-full h-32 object-cover"}):(0,r.jsx)(c.Dmm,{size:45,onClick:m}),(0,r.jsx)("input",{id:"file-upload",type:"file",className:"hidden",accept:"image/*",onChange:e=>{if(e.target.files&&e.target.files[0]){let r=e.target.files[0];s({...t,attached_photo:URL.createObjectURL(r)})}}}),!t.photo&&(0,r.jsx)("button",{onClick:m,children:"Upload image"})]})})]}),(0,r.jsx)("div",{className:"flex my-2",children:(0,r.jsxs)("div",{className:"w-full px-2 text-left",children:[(0,r.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"additional_description",children:[(0,r.jsx)("span",{className:"border-l-4 border-teal-500 pl-2",children:"Additional Details "}),(0,r.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,r.jsx)("textarea",{className:"w-full h-40 px-2 py-2 flex flex-wrap border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",id:"additional_desc",value:t.additional_desc,onChange:e=>d(e,"additional_desc"),required:!0})]})}),(0,r.jsx)("div",{className:"flex my-2",children:(0,r.jsxs)("div",{className:"w-full  text-left",children:[(0,r.jsxs)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"userDetails",children:[(0,r.jsx)("span",{className:"border-l-4 border-teal-500 pl-2",children:"User Details "})," ",(0,r.jsx)("small",{className:"text-red-600",children:"*"})]}),(0,r.jsxs)("div",{className:"p-1",children:[(0,r.jsxs)("div",{className:" flex gap-2 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500",children:[(0,r.jsx)("label",{className:" pt-2 font-semibold",htmlFor:"name",children:"Name:"}),(0,r.jsx)("input",{type:"text",name:"name",id:"user_name",value:null==l?void 0:l.username,disabled:!0,className:"w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",onChange:e=>d(e,"user_name"),required:!0})]}),(0,r.jsxs)("div",{className:" flex gap-2 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 mt-2",children:[(0,r.jsx)("label",{className:"pt-2 font-semibold",htmlFor:"email",children:"Role:"}),(0,r.jsx)("input",{type:"text",name:"name",id:"user_role",value:null==l?void 0:l.U_profile_name,disabled:!0,className:"w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",onChange:e=>d(e,"user_role"),required:!0})]}),(0,r.jsxs)("div",{className:" flex gap-2 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 mt-2",children:[(0,r.jsxs)("label",{className:"pt-2 font-semibold",htmlFor:"number",children:["Phone:"," "]}),(0,r.jsx)("input",{type:"number",name:"number",id:"user_number",disabled:!0,value:null==l?void 0:l.phone_number,className:"w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",onChange:e=>{e.target.value.length>10||d(e,"user_number")},pattern:"\\d{10}",title:"Phone number must be 10 digits",required:!0})]}),(0,r.jsxs)("div",{className:" flex gap-2 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500 mt-2",children:[(0,r.jsx)("label",{className:" pt-2 font-semibold",htmlFor:"address",children:"BST:"}),(0,r.jsx)("input",{type:"text",name:"bst",id:"user_bst",disabled:!0,value:(null==l?void 0:l.business_unit_name)+" "+(null==l?void 0:l.business_segment)+" "+(null==l?void 0:l.territory_name),className:"w-full px-3 py-2 mt-1 border rounded-lg border-gray-300 focus:outline-none focus:border-indigo-500",onChange:e=>d(e,"user_bst"),required:!0})]})]})]})}),(0,r.jsx)("div",{className:"flex items-center justify-center w-full py-2 ",children:(0,r.jsx)("button",{type:"submit",className:"bg-indigo-500 text-white  px-4 py-2 rounded-lg",children:"Submit"})})]})})},m=s(1337),f=s(7680),b=s(1163),x=()=>{let e=(0,b.useRouter)(),[t,s]=(0,a.useState)("NEW");return(0,r.jsxs)("div",{className:"max-w-md mx-auto mt-8 bg-white rounded-md",children:[(0,r.jsxs)("div",{className:"flex justify-between mb-5",children:[(0,r.jsxs)("div",{className:"pb-2 flex gap-2 font-bold text-lg ",children:[(0,r.jsx)(f.u1R,{onClick:()=>e.back(),className:"pt-0",size:26})," Support"]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(m.wB6,{size:25,className:"mr-6"})," "]})]}),(0,r.jsxs)("div",{className:"flex gap-18  border-b border-gray-300",children:[(0,r.jsx)("button",{className:"py-2 px-20 ".concat("NEW"===t?"border-b-2 border-blue-500 text-blue-500":"text-gray-500"),onClick:()=>s("NEW"),children:"New"}),(0,r.jsx)("button",{className:"py-2 px-4 ".concat("COMPLAINT_STATUS"===t?"border-b-2 border-blue-500 text-blue-500":"text-gray-500"),onClick:()=>s("COMPLAINT_STATUS"),children:"Complaint Status"})]}),(0,r.jsx)("div",{className:"form-container",children:"NEW"===t?(0,r.jsx)(p,{}):"COMPLAINT_STATUS"===t?(0,r.jsx)(d,{}):void 0})]})},h=()=>(0,r.jsx)(x,{})},6501:function(e,t,s){"use strict";let r,a;s.d(t,{x7:function(){return ep},ZP:function(){return em}});var o,i=s(7294);let l={data:""},n=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let s="",r="",a="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":r+="f"==o[1]?p(i,o):o+"{"+p(i,"k"==o[1]?"":t)+"}":"object"==typeof i?r+=p(i,t?t.replace(/([^,])+/g,e=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o="-"==o[1]?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(o,i):o+":"+i+";")}return s+(t&&a?t+"{"+a+"}":a)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},b=(e,t,s,r,a)=>{var o;let i=f(e),l=m[i]||(m[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!m[l]){let t=i!==e?e:(e=>{let t,s,r=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?r.shift():t[3]?(s=t[3].replace(u," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[l]=p(a?{["@keyframes "+l]:t}:t,s?"":"."+l)}let n=s&&m.g;return s&&(m.g=m[l]),o=m[l],n?t.data=t.data.replace(n,o):-1===t.data.indexOf(o)&&(t.data=r?o+t.data:t.data+o),l},x=(e,t,s)=>e.reduce((e,r,a)=>{let o=t[a];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==o?"":o)},"");function h(e){let t=this||{},s=e.call?e(t.p):e;return b(s.unshift?s.raw?x(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,n(t.target),t.g,t.o,t.k)}h.bind({g:1});let g,y,v,w=h.bind({k:1});function j(e,t){let s=this||{};return function(){let r=arguments;function a(o,i){let l=Object.assign({},o),n=l.className||a.className;s.p=Object.assign({theme:y&&y()},l),s.o=/go\d/.test(n),l.className=h.apply(s,r)+(n?" "+n:""),t&&(l.ref=i);let d=e;return e[0]&&(d=l.as||e,delete l.as),v&&d[0]&&v(l),g(d,l)}return t?t(a):a}}var N=e=>"function"==typeof e,_=(e,t)=>N(e)?e(t):e,k=(r=0,()=>(++r).toString()),C=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},E="default",S=(e,t)=>{let{toastLimit:s}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,s)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return S(e,{type:e.toasts.find(e=>e.id===r.id)?1:0,toast:r});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},A=[],T={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},D={},M=(e,t=E)=>{D[t]=S(D[t]||T,e),A.forEach(([e,s])=>{e===t&&s(D[t])})},O=e=>Object.keys(D).forEach(t=>M(e,t)),P=e=>Object.keys(D).find(t=>D[t].toasts.some(t=>t.id===e)),I=(e=E)=>t=>{M(t,e)},R={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},F=(e={},t=E)=>{let[s,r]=(0,i.useState)(D[t]||T),a=(0,i.useRef)(D[t]);(0,i.useEffect)(()=>(a.current!==D[t]&&r(D[t]),A.push([t,r]),()=>{let e=A.findIndex(([e])=>e===t);e>-1&&A.splice(e,1)}),[t]);let o=s.toasts.map(t=>{var s,r,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(s=e[t.type])?void 0:s.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||R[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...s,toasts:o}},$=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),z=e=>(t,s)=>{let r=$(t,e,s);return I(r.toasterId||P(r.id))({type:2,toast:r}),r.id},L=(e,t)=>z("blank")(e,t);L.error=z("error"),L.success=z("success"),L.loading=z("loading"),L.custom=z("custom"),L.dismiss=(e,t)=>{let s={type:3,toastId:e};t?I(t)(s):O(s)},L.dismissAll=e=>L.dismiss(void 0,e),L.remove=(e,t)=>{let s={type:4,toastId:e};t?I(t)(s):O(s)},L.removeAll=e=>L.remove(void 0,e),L.promise=(e,t,s)=>{let r=L.loading(t.loading,{...s,...null==s?void 0:s.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?_(t.success,e):void 0;return a?L.success(a,{id:r,...s,...null==s?void 0:s.success}):L.dismiss(r),e}).catch(e=>{let a=t.error?_(t.error,e):void 0;a?L.error(a,{id:r,...s,...null==s?void 0:s.error}):L.dismiss(r)}),e};var H=1e3,U=(e,t="default")=>{let{toasts:s,pausedAt:r}=F(e,t),a=(0,i.useRef)(new Map).current,o=(0,i.useCallback)((e,t=H)=>{if(a.has(e))return;let s=setTimeout(()=>{a.delete(e),l({type:4,toastId:e})},t);a.set(e,s)},[]);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=s.map(s=>{if(s.duration===1/0)return;let r=(s.duration||0)+s.pauseDuration-(e-s.createdAt);if(r<0){s.visible&&L.dismiss(s.id);return}return setTimeout(()=>L.dismiss(s.id,t),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[s,r,t]);let l=(0,i.useCallback)(I(t),[t]),n=(0,i.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,i.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,i.useCallback)(()=>{r&&l({type:6,time:Date.now()})},[r,l]),u=(0,i.useCallback)((e,t)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:o}=t||{},i=s.filter(t=>(t.position||o)===(e.position||o)&&t.height),l=i.findIndex(t=>t.id===e.id),n=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...r?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+a,0)},[s]);return(0,i.useEffect)(()=>{s.forEach(e=>{if(e.dismissed)o(e.id,e.removeDelay);else{let t=a.get(e.id);t&&(clearTimeout(t),a.delete(e.id))}})},[s,o]),{toasts:s,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}},q=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,W=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
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
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,X=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Y=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${X} 1s linear infinite;
`,J=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=w`
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
}`,K=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
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
`,Q=j("div")`
  position: absolute;
`,V=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,ee=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,et=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,es=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?i.createElement(et,null,t):t:"blank"===s?null:i.createElement(V,null,i.createElement(Y,{...r}),"loading"!==s&&i.createElement(Q,null,"error"===s?i.createElement(W,{...r}):i.createElement(K,{...r})))},er=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,eo=j("div")`
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
`,ei=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,el=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[er(s),ea(s)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=i.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(es,{toast:e}),l=i.createElement(ei,{...e.ariaProps},_(e.message,e));return i.createElement(eo,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:o,message:l}):i.createElement(i.Fragment,null,o,l))});o=i.createElement,p.p=void 0,g=o,y=void 0,v=void 0;var ed=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let o=i.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return i.createElement("div",{ref:o,className:t,style:s},a)},ec=(e,t)=>{let s=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...r}},eu=h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,toasterId:o,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=U(s,o);return i.createElement("div",{"data-rht-toaster":o||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(s=>{let o=s.position||t,l=ec(o,c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}));return i.createElement(ed,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?eu:"",style:l},"custom"===s.type?_(s.message,s):a?a(s):i.createElement(en,{toast:s,position:o}))}))},em=L}},function(e){e.O(0,[5445,4885,260,9866,1579,2888,9774,179],function(){return e(e.s=8014)}),_N_E=e.O()}]);