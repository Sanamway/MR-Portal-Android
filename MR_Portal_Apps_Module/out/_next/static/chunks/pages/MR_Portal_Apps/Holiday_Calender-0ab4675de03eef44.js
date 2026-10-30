(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2179],{3881:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MR_Portal_Apps/Holiday_Calender",function(){return a(5668)}])},7248:function(e,t){"use strict";t.Z={src:"/_next/static/media/userimg.92245556.jpg",height:340,width:340,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAKAL/8QAHBAAAwABBQAAAAAAAAAAAAAAAQMEEgACIiNC/9oACAEBAAE/AHPgVXFSal7FdoLM+J8Ya//EABcRAQADAAAAAAAAAAAAAAAAAAEAMXH/2gAIAQIBAT8AC9n/xAAXEQADAQAAAAAAAAAAAAAAAAAAAkFx/9oACAEDAQE/AGmH/9k=",blurWidth:8,blurHeight:8}},5668:function(e,t,a){"use strict";a.r(t);var s=a(5893),r=a(7294),i=a(5675),o=a.n(i),l=a(4738),n=a(2729),d=a(9198),c=a.n(d);a(5843);var u=a(381),p=a.n(u),m=a(1163);a(6501),a(2879);var f=a(1409),g=a(7248);t.default=e=>{let t=(0,m.useRouter)(),a={"Content-Type":"application/json",secret:"fsdhfgsfuiweifiowefjewcewcebjw"},[i,d]=(0,r.useState)({uId:"",cId:"",bgId:"",buId:"",rId:"",zId:"",tId:"",roleId:"",empCode:"",reportingManager:"",developmentManager:"",hrManager:"",reportingHQ:""});(0,r.useEffect)(()=>{var e;d({uId:JSON.parse(window.localStorage.getItem("uid")),cId:null===(e=JSON.parse(window.localStorage.getItem("userinfo")))||void 0===e?void 0:e.c_id,bgId:JSON.parse(window.localStorage.getItem("userinfo")).bg_id,buId:JSON.parse(window.localStorage.getItem("userinfo")).bu_id,rId:JSON.parse(window.localStorage.getItem("userinfo")).r_id,zId:JSON.parse(window.localStorage.getItem("userinfo")).z_id,tId:JSON.parse(window.localStorage.getItem("userinfo")).t_id,clName:window.localStorage.getItem("user_name"),ulName:window.localStorage.getItem("phone_number"),empCode:window.localStorage.getItem("emp_code"),roleId:JSON.parse(window.localStorage.getItem("userinfo")).role_id,reportingManager:JSON.parse(window.localStorage.getItem("userinfo")).rp_manager,developmentManager:JSON.parse(window.localStorage.getItem("userinfo")).functional_mgr,hrManager:JSON.parse(window.localStorage.getItem("userinfo")).hr_name,reportingHQ:JSON.parse(window.localStorage.getItem("userinfo")).reporting_hq})},[]);let[u,h]=(0,r.useState)("2026"),[x,A]=(0,r.useState)([]),y=async e=>{try{let t=JSON.parse(window.localStorage.getItem("c_id")),s=await n.Z.get("".concat(l.H,"/api/holiday_list"),{headers:a,params:{bu_id:i.buId,bg_id:i.bgId,c_id:JSON.stringify(t),r_id:i.rId,z_id:i.zId,year:e,type:"Holiday"}}),r=await s.data.data;A(r.map((e,t)=>({id:t,holidayName:e.holiday_name,day:e.holiday_date,date:e.holiday_date,type:e.holiday_type,bu_id:i.buId,bg_id:i.bgId,c_id:i.cId,r_id:i.rId,z_id:i.zId})))}catch(e){A([])}};return(0,r.useEffect)(()=>{u&&y(u)},[u,i]),(0,s.jsxs)("form",{className:" bg-white rounded  w-full  overflow-auto pb-4",onSubmit:e=>e.preventDefault(),children:[(0,s.jsxs)("div",{className:"w-full flex h-12 bg-white-800 justify-between items-center px-4  shadow-lg lg:flex-col  ",children:[(0,s.jsxs)("span",{className:"text-black flex flex-row gap-4 font-bold   ",children:[(0,s.jsx)(f.Wuc,{className:"self-center ",onClick:()=>t.push({pathname:"/MR_Portal_Apps/MRHome"})}),(0,s.jsx)("span",{children:"Holiday Calender"})]})," ",(0,s.jsx)("span",{className:"text-white self-center"})]}),(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("div",{className:"flex mb-4 mt-2",children:[(0,s.jsx)("div",{className:"w-40 h-30 flex justify-center items-center",children:(0,s.jsx)(o(),{className:"h-[5.1rem] w-[5.1rem] rounded-full mt-2",src:g.Z,alt:"img"})}),(0,s.jsxs)("div",{className:"flex  flex-col  w-full mt-4 md:hidden",children:[(0,s.jsxs)("div",{className:"flex w-full  w-28",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Emp Code"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsx)("span",{className:"w-28 ml-3",children:i.empCode})]}),(0,s.jsxs)("div",{className:"flex   w-full  w-28 ",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Name"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsxs)("span",{className:"w-28 ml-3 whitespace-nowrap",children:[" ",i.clName]})]}),(0,s.jsxs)("div",{className:"flex w-full  w-28",children:[(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("p",{className:" font-bold text-sm text-blue-800 w-28",children:"Reporting HQ"}),(0,s.jsx)("span",{children:":"})]}),(0,s.jsx)("span",{className:"w-28 ml-3",children:i.reportingHQ})]})]})]})}),(0,s.jsxs)("h1",{className:"text-xl font-bold  flex w-full justify-center border-t-4 border-blue-800 shadow-xl mb-4",children:["Holiday Calender"," ",(0,s.jsxs)("select",{name:"type",className:"mx-4 text-sm h-6 flex  w-20 self-center",value:u,onChange:e=>h(e.target.value),children:[(0,s.jsx)("option",{value:"",children:"Select Year"}),(0,s.jsx)("option",{value:"2023",children:"2023"}),(0,s.jsx)("option",{value:"2024",children:"2024"}),(0,s.jsx)("option",{value:"2025",children:"2025"}),(0,s.jsx)("option",{value:"2026",children:"2026"}),(0,s.jsx)("option",{value:"2027",children:"2027"}),(0,s.jsx)("option",{value:"2028",children:"2028"}),(0,s.jsx)("option",{value:"2029",children:"2029"}),(0,s.jsx)("option",{value:"2030",children:"2030"}),(0,s.jsx)("option",{value:"2031",children:"2031"}),(0,s.jsx)("option",{value:"2032",children:"2032"}),(0,s.jsx)("option",{value:"2033",children:"2033"})]})]}),(0,s.jsxs)("table",{className:"min-w-full divide-y border divide-gray-200",children:[(0,s.jsx)("thead",{className:"border-b",children:(0,s.jsxs)("tr",{className:"bg-gray-50 font-arial",children:[(0,s.jsx)("th",{className:"px-2 py-2 text-left text-xs font-medium text-gray-500 tracking-wider whitespace-nowrap",children:"Holiday Name"}),(0,s.jsx)("th",{className:"px-2 py-2 text-left text-xs font-medium text-gray-500 tracking-wider",children:"Date"}),(0,s.jsx)("th",{className:"px-2 py-2 text-left text-xs font-medium text-gray-500 tracking-wider",children:"Day"}),(0,s.jsx)("th",{className:"px-2 py-2 text-left text-xs font-medium text-gray-500 tracking-wider",children:"Type"})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200 text-xs",children:x.map((e,t)=>(0,s.jsxs)("tr",{className:"border-b",children:[(0,s.jsx)("td",{className:"px-2 py-2",children:e.holidayName}),(0,s.jsx)("td",{className:"px-2 py-2",children:(0,s.jsx)(c(),{disabled:!0,selected:e.date?new Date(e.date):"",onChange:e=>handleDateChange(t,e),className:"border rounded px-2 py-1 w-24",dateFormat:"dd/MM/yyyy"})}),(0,s.jsx)("td",{className:"px-2 py-2",children:p()(e.day).format("dddd")}),(0,s.jsx)("td",{className:"px-2 py-2",children:e.type})]},t))})]})]})}},5843:function(){},6501:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return ep},ZP:function(){return em}});var i,o=a(7294);let l={data:""},n=e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||l},d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i="-"==i[1]?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,s,r)=>{var i;let o=f(e),l=m[o]||(m[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!m[l]){let t=o!==e?e:(e=>{let t,a,s=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?s.shift():t[3]?(a=t[3].replace(u," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);m[l]=p(r?{["@keyframes "+l]:t}:t,a?"":"."+l)}let n=a&&m.g;return a&&(m.g=m[l]),i=m[l],n?t.data=t.data.replace(n,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),l},h=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function x(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?h(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,n(t.target),t.g,t.o,t.k)}x.bind({g:1});let A,y,b,w=x.bind({k:1});function v(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let l=Object.assign({},i),n=l.className||r.className;a.p=Object.assign({theme:y&&y()},l),a.o=/go\d/.test(n),l.className=x.apply(a,s)+(n?" "+n:""),t&&(l.ref=o);let d=e;return e[0]&&(d=l.as||e,delete l.as),b&&d[0]&&b(l),A(d,l)}return t?t(r):r}}var j=e=>"function"==typeof e,N=(e,t)=>j(e)?e(t):e,I=(s=0,()=>(++s).toString()),_=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},E="default",C=(e,t)=>{let{toastLimit:a}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,a)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return C(e,{type:e.toasts.find(e=>e.id===s.id)?1:0,toast:s});case 3:let{toastId:r}=t;return{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},S=[],k={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},D={},O=(e,t=E)=>{D[t]=C(D[t]||k,e),S.forEach(([e,a])=>{e===t&&a(D[t])})},M=e=>Object.keys(D).forEach(t=>O(e,t)),Q=e=>Object.keys(D).find(t=>D[t].toasts.some(t=>t.id===e)),H=(e=E)=>t=>{O(t,e)},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={},t=E)=>{let[a,s]=(0,o.useState)(D[t]||k),r=(0,o.useRef)(D[t]);(0,o.useEffect)(()=>(r.current!==D[t]&&s(D[t]),S.push([t,s]),()=>{let e=S.findIndex(([e])=>e===t);e>-1&&S.splice(e,1)}),[t]);let i=a.toasts.map(t=>{var a,s,r;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(a=e[t.type])?void 0:a.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...a,toasts:i}},$=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||I()}),J=e=>(t,a)=>{let s=$(t,e,a);return H(s.toasterId||Q(s.id))({type:2,toast:s}),s.id},B=(e,t)=>J("blank")(e,t);B.error=J("error"),B.success=J("success"),B.loading=J("loading"),B.custom=J("custom"),B.dismiss=(e,t)=>{let a={type:3,toastId:e};t?H(t)(a):M(a)},B.dismissAll=e=>B.dismiss(void 0,e),B.remove=(e,t)=>{let a={type:4,toastId:e};t?H(t)(a):M(a)},B.removeAll=e=>B.remove(void 0,e),B.promise=(e,t,a)=>{let s=B.loading(t.loading,{...a,...null==a?void 0:a.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let r=t.success?N(t.success,e):void 0;return r?B.success(r,{id:s,...a,...null==a?void 0:a.success}):B.dismiss(s),e}).catch(e=>{let r=t.error?N(t.error,e):void 0;r?B.error(r,{id:s,...a,...null==a?void 0:a.error}):B.dismiss(s)}),e};var F=1e3,T=(e,t="default")=>{let{toasts:a,pausedAt:s}=P(e,t),r=(0,o.useRef)(new Map).current,i=(0,o.useCallback)((e,t=F)=>{if(r.has(e))return;let a=setTimeout(()=>{r.delete(e),l({type:4,toastId:e})},t);r.set(e,a)},[]);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),r=a.map(a=>{if(a.duration===1/0)return;let s=(a.duration||0)+a.pauseDuration-(e-a.createdAt);if(s<0){a.visible&&B.dismiss(a.id);return}return setTimeout(()=>B.dismiss(a.id,t),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[a,s,t]);let l=(0,o.useCallback)(H(t),[t]),n=(0,o.useCallback)(()=>{l({type:5,time:Date.now()})},[l]),d=(0,o.useCallback)((e,t)=>{l({type:1,toast:{id:e,height:t}})},[l]),c=(0,o.useCallback)(()=>{s&&l({type:6,time:Date.now()})},[s,l]),u=(0,o.useCallback)((e,t)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=t||{},o=a.filter(t=>(t.position||i)===(e.position||i)&&t.height),l=o.findIndex(t=>t.id===e.id),n=o.filter((e,t)=>t<l&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[a]);return(0,o.useEffect)(()=>{a.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=r.get(e.id);t&&(clearTimeout(t),r.delete(e.id))}})},[a,i]),{toasts:a,handlers:{updateHeight:d,startPause:n,endPause:c,calculateOffset:u}}},L=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,R=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,U=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${R} 0.15s ease-out forwards;
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
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=w`
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
  animation: ${Y} 1s linear infinite;
`,K=w`
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
}`,V=v("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,W=v("div")`
  position: absolute;
`,q=v("div")`
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
}`,et=v("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${ee} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,ea=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(et,null,t):t:"blank"===a?null:o.createElement(q,null,o.createElement(Z,{...s}),"loading"!==a&&o.createElement(W,null,"error"===a?o.createElement(X,{...s}):o.createElement(V,{...s})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ei=v("div")`
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
`,eo=v("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,el=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=_()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(a),er(a)];return{animation:t?`${w(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?el(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(ea,{toast:e}),l=o.createElement(eo,{...e.ariaProps},N(e.message,e));return o.createElement(ei,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:l}):o.createElement(o.Fragment,null,i,l))});i=o.createElement,p.p=void 0,A=i,y=void 0,b=void 0;var ed=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let i=o.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:a},r)},ec=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},eu=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ep=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,toasterId:i,containerStyle:l,containerClassName:n})=>{let{toasts:d,handlers:c}=T(a,i);return o.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...l},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},d.map(a=>{let i=a.position||t,l=ec(i,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return o.createElement(ed,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?eu:"",style:l},"custom"===a.type?N(a.message,a):r?r(a):o.createElement(en,{toast:a,position:i}))}))},em=B}},function(e){e.O(0,[5445,1778,4885,260,8907,9866,1579,5675,9961,9198,1664,2879,2888,9774,179],function(){return e(e.s=3881)}),_N_E=e.O()}]);