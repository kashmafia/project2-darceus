(this["webpackJsonpproject2-darceus"]=this["webpackJsonpproject2-darceus"]||[]).push([[0],{27:function(e,t,s){},31:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);s(31);var a=s(0),i=s.n(a),r=s(18),n=s.n(r),c=s(11),l=(s(27),s(20)),o=s(23),d=s(40),m=s(39),x=s(1),j=function(e,t){return t.reset?{company_website:"",price:0,about:""}:Object(o.a)(Object(o.a)({},e),{},Object(l.a)({},t.name,t.value))};function h(e){var t=Object(a.useRef)(null),s=Object(a.useReducer)(j,{}),i=Object(c.a)(s,2),r=i[0],n=i[1],l=Object(a.useState)(!1),o=Object(c.a)(l,2),h=o[0],b=o[1],u=function(e){n({name:e.target.name,value:e.target.value})};return e.trigger?Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(d.a.Root,{show:e.trigger,as:a.Fragment,children:Object(x.jsx)(m.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:t,onClose:function(){return e.setTrigger(!1)},children:Object(x.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(x.jsx)(d.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(m.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(x.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(x.jsx)(d.a.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(x.jsx)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:Object(x.jsx)("div",{className:"md:grid md:grid-cols-3 md:gap-10",children:Object(x.jsxs)("div",{className:"mt-5 md:mt-0 md:col-span-10",children:[h&&Object(x.jsxs)("div",{children:["You are listing the following:",Object(x.jsx)("ul",{children:Object.entries(r).map((function(e){var t=Object(c.a)(e,2),s=t[0],a=t[1];return Object(x.jsxs)("li",{children:[Object(x.jsx)("strong",{children:s}),":",a.toString()]},s)}))})]}),Object(x.jsx)("form",{action:"#",method:"POST",onSubmit:function(e){e.preventDefault(),b(!0),setTimeout((function(){b(!1),n({reset:!0})}),3e3)},children:Object(x.jsx)("fieldset",{disabled:h,children:Object(x.jsxs)("div",{className:"shadow sm:rounded-md sm:overflow-hidden",children:[Object(x.jsxs)("div",{className:"px-4 py-5 bg-white space-y-6 sm:p-6",children:[Object(x.jsx)("div",{className:"grid grid-cols-3 gap-6",children:Object(x.jsxs)("div",{className:"col-span-3 md:col-span-2",children:[Object(x.jsx)("label",{htmlFor:"company_website",className:"block text-md font-medium text-gray-700",children:"Item name"}),Object(x.jsx)("div",{className:"mt-1 flex rounded-md shadow-sm",children:Object(x.jsx)("input",{type:"text",name:"company_website",id:"company_website",className:"focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300",placeholder:"Item's name",onChange:u,value:r.company_website||""})})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"price",className:"block text-sm font-medium text-gray-700",children:"Item Price"}),Object(x.jsx)("div",{className:"mt-1",children:Object(x.jsx)("input",{type:"text",id:"price",name:"price",className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"Enter Fixed Price",onChange:u,value:r.price||""})})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{htmlFor:"about",className:"block text-sm font-medium text-gray-700",children:"Description"}),Object(x.jsx)("div",{className:"mt-1",children:Object(x.jsx)("textarea",{id:"about",name:"about",rows:3,className:"shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md",placeholder:"An item",defaultValue:"",onChange:u,value:r.about||""})}),Object(x.jsx)("p",{className:"mt-2 text-sm text-gray-500",children:"Brief description for your item."})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Photo of your item"}),Object(x.jsx)("div",{className:"mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md",children:Object(x.jsxs)("div",{className:"space-y-1 text-center",children:[Object(x.jsx)("svg",{className:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true",children:Object(x.jsx)("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),Object(x.jsxs)("div",{className:"flex text-sm text-gray-600",children:[Object(x.jsxs)("label",{htmlFor:"file-upload",className:"relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500",children:[Object(x.jsx)("span",{children:"Upload a file"}),Object(x.jsx)("input",{id:"file-upload",name:"file-upload",type:"file",className:"sr-only"})]}),Object(x.jsx)("p",{className:"pl-1",children:"or drag and drop"})]}),Object(x.jsx)("p",{className:"text-xs text-gray-500",children:"PNG, JPG, GIF up to 5MB"})]})})]})]}),Object(x.jsxs)("div",{className:"px-4 py-3 bg-gray-50 text-right sm:px-6",children:[Object(x.jsx)("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Save"}),Object(x.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return e.setTrigger(!1)},ref:t,children:"Cancel"})]})]})})})]})})})})]})})})}):""}var b=function(){var e=Object(a.useState)(!1),t=Object(c.a)(e,2),s=t[0],i=t[1];return Object(x.jsx)("div",{children:Object(x.jsx)("main",{children:Object(x.jsxs)("div",{className:"mt-24 mx-auto max-w-7xl px-4 sm:mt-32 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:[Object(x.jsxs)("div",{className:"sm:text-center lg:text-left",children:[Object(x.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[Object(x.jsx)("span",{className:"block xl:inline",children:"Darceus's  "}),Object(x.jsx)("span",{className:"block text-indigo-600 xl:inline",children:"headless E-Commerce"})]}),Object(x.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:"Nowadays, marketplace website often overloaded with thousands of distractions and information that sometime confuse you. Hence, you end up buying something you not really need.Therefore, we create a seamless and straight-forward web application that has no ads, no distraction, and one click button for your convenience. Enjoy your time!"}),Object(x.jsx)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:Object(x.jsx)("div",{className:"rounded-md shadow",children:Object(x.jsx)("button",{onClick:function(){return i(!0)},className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 md:py-4 md:text-lg md:px-10",children:"Start selling"})})})]}),Object(x.jsx)(h,{trigger:s,setTrigger:i})]})})})},u=s.p+"static/media/chair.12939fbc.jpeg",g=s(30),f=s(12);function p(e){var t=e.item,s=e.open,i=e.setOpen,r=t;return console.log(r),Object(x.jsx)(d.a.Root,{show:s,as:a.Fragment,children:Object(x.jsx)(m.a,{as:"div",className:"fixed inset-0 overflow-hidden",onClose:i,children:Object(x.jsxs)("div",{className:"absolute inset-0 overflow-hidden",children:[Object(x.jsx)(d.a.Child,{as:a.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(x.jsx)(m.a.Overlay,{className:"absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(x.jsx)("div",{className:"fixed inset-y-0 right-0 pl-10 max-w-full flex",children:Object(x.jsx)(d.a.Child,{as:a.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:Object(x.jsx)("div",{className:"w-screen max-w-md",children:Object(x.jsxs)("div",{className:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll",children:[Object(x.jsxs)("div",{className:"flex-1 py-6 overflow-y-auto px-4 sm:px-6",children:[Object(x.jsxs)("div",{className:"flex items-start justify-between",children:[Object(x.jsx)(m.a.Title,{className:"text-lg font-medium text-gray-900",children:"Shopping cart"}),Object(x.jsx)("div",{className:"ml-3 h-7 flex items-center",children:Object(x.jsxs)("button",{type:"button",className:"-m-2 p-2 text-gray-400 hover:text-gray-500",onClick:function(){return i(!1)},children:[Object(x.jsx)("span",{className:"sr-only",children:"Close panel"}),Object(x.jsx)(f.f,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),Object(x.jsx)("div",{className:"mt-8",children:Object(x.jsx)("div",{className:"flow-root",children:Object(x.jsx)("ul",{className:"-my-6 divide-y divide-gray-200",children:r.map((function(e,t){return Object(x.jsxs)("li",{className:"py-6 flex",children:[Object(x.jsx)("div",{className:"flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden",children:Object(x.jsx)("img",{src:e.image,alt:"",className:"w-full h-full object-center object-cover"})}),Object(x.jsxs)("div",{className:"ml-4 flex-1 flex flex-col",children:[Object(x.jsx)("div",{children:Object(x.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[Object(x.jsx)("h3",{children:Object(x.jsx)("a",{href:"/#",children:e.name})}),Object(x.jsx)("p",{className:"ml-4",children:e.price})]})}),Object(x.jsx)("div",{className:"flex-1 flex items-end justify-between text-sm",children:Object(x.jsx)("div",{className:"flex",children:Object(x.jsx)("button",{type:"button",className:"font-medium text-indigo-600 hover:text-indigo-500",children:"Remove"})})})]})]},t)}))})})})]}),Object(x.jsxs)("div",{className:"border-t border-gray-200 py-6 px-4 sm:px-6",children:[Object(x.jsxs)("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[Object(x.jsx)("p",{children:"Subtotal"}),Object(x.jsx)("p",{children:"$262.00"})]}),Object(x.jsx)("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),Object(x.jsx)("div",{className:"mt-6",children:Object(x.jsx)("a",{href:"/#",className:"flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",children:"Checkout"})}),Object(x.jsx)("div",{className:"mt-6 flex justify-center text-sm text-center text-gray-500",children:Object(x.jsxs)("p",{children:["or"," ",Object(x.jsxs)("button",{type:"button",className:"text-indigo-600 font-medium hover:text-indigo-500",onClick:function(){return i(!1)},children:["Continue Shopping",Object(x.jsx)("span",{"aria-hidden":"true",children:" \u2192"})]})]})})]})]})})})})]})})})}var O=function(e){var t=e.item,s=e.products,i=e.setCart,r=Object(a.useState)(!1),n=Object(c.a)(r,2),l=n[0],o=n[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"bg-white",children:Object(x.jsxs)("div",{className:"max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8",children:[Object(x.jsx)("h2",{className:"sr-only",children:"Products"}),Object(x.jsx)("div",{className:"grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8",children:s.map((function(e,s){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("a",{href:"/#",className:"group",children:[Object(x.jsx)("div",{className:"w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8",children:Object(x.jsx)("img",{src:e.image,alt:e.description,className:"w-full h-full object-center object-cover group-hover:opacity-75"})}),Object(x.jsx)("h3",{className:"mt-4 text-sm text-gray-700",children:e.name}),Object(x.jsxs)("div",{className:"flex",children:[Object(x.jsxs)("p",{className:"flex-auto mt-1 text-lg font-medium text-gray-900",children:["$",e.price," "]}),Object(x.jsx)("button",{value:e,class:"w-1/4 flex-auto bg-transparent hover:text-indigo-600 items-center justify-center rounded-md border border-gray-300",type:"button",onClick:function(e){return function(e){console.log(e);var s=[].concat(Object(g.a)(t),[e]);i(s),o((function(e){return!e}))}(e.target.value)},children:"Add to bag"})]})]},s)})}))})]})}),Object(x.jsx)(p,{item:t,open:l,setOpen:o})]})},y=s(24),v=s.n(y),N=s(28),w=s(41),k=s(17),F=s(25),T=s(29),C=s.n(T),S=[{name:"Duc (Duketamin) Vu",description:"MS Azure is trashhhh",href:"https://github.com/Bodisoem",icon:f.a},{name:"Kash Mafia",description:"You know who",href:"https://github.com/kashmafia",icon:f.b},{name:"Derek (Big D) Yong",description:"Big D no cap",href:"#",icon:f.c},{name:"Johnathan Choi",description:"Humble God",href:"https://github.com/Jon2234",icon:f.e}],P=[{name:"PostgresQL",description:"Database",href:"#",icon:k.b},{name:"Flask",description:"Server/API side",href:"#",icon:k.c},{name:"ReactJS",description:"Client side",href:"#",icon:k.d},{name:"Heroku",description:"Deploy",href:"#",icon:k.a}];function D(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return t.filter(Boolean).join(" ")}var _=function(){var e=Object(N.a)(v.a.mark((function e(t){var s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/google",{method:"POST",body:JSON.stringify({token:t.tokenId}),headers:{"Content-Type":"application/json"}});case 2:return s=e.sent,e.next=5,s.json();case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var E=function(){return Object(x.jsxs)(w.a,{className:"relative bg-white",children:[Object(x.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6",children:Object(x.jsxs)("div",{className:"flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10",children:[Object(x.jsx)("div",{className:"flex justify-start lg:w-0 lg:flex-1",children:Object(x.jsxs)("a",{href:"/#",children:[Object(x.jsx)("span",{className:"sr-only",children:"Workflow"}),Object(x.jsx)("img",{className:"h-8 w-auto sm:h-10",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"workflow"})]})}),Object(x.jsx)("div",{className:"-mr-2 -my-2 md:hidden",children:Object(x.jsxs)(w.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(x.jsx)("span",{className:"sr-only",children:"Open menu"}),Object(x.jsx)(f.d,{className:"h-6 w-6","aria-hidden":"true"})]})}),Object(x.jsxs)(w.a.Group,{as:"nav",className:"hidden md:flex space-x-10",children:[Object(x.jsx)(w.a,{className:"relative",children:function(e){var t=e.open;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(w.a.Button,{className:D(t?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:[Object(x.jsx)("span",{children:"About us"}),Object(x.jsx)(F.a,{className:D(t?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})]}),Object(x.jsx)(d.a,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:Object(x.jsx)(w.a.Panel,{className:"absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2",children:Object(x.jsx)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",children:Object(x.jsx)("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",children:S.map((function(e){return Object(x.jsxs)("a",{href:e.href,className:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",children:[Object(x.jsx)(e.icon,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),Object(x.jsxs)("div",{className:"ml-4",children:[Object(x.jsx)("p",{className:"text-base font-medium text-gray-900",children:e.name}),Object(x.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:e.description})]})]},e.name)}))})})})})]})}}),Object(x.jsx)("a",{href:"/#",className:"text-base font-medium text-gray-500 hover:text-gray-900",children:"Pricing"}),Object(x.jsx)(w.a,{className:"relative",children:function(e){var t=e.open;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(w.a.Button,{className:D(t?"text-gray-900":"text-gray-500","group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"),children:[Object(x.jsx)("span",{children:"Tech Stack"}),Object(x.jsx)(F.a,{className:D(t?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"),"aria-hidden":"true"})]}),Object(x.jsx)(d.a,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",children:Object(x.jsx)(w.a.Panel,{className:"absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0",children:Object(x.jsx)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden",children:Object(x.jsx)("div",{className:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8",children:P.map((function(e){return Object(x.jsxs)("a",{href:e.href,className:"-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50",children:[Object(x.jsx)(e.icon,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),Object(x.jsxs)("div",{className:"ml-4",children:[Object(x.jsx)("p",{className:"text-base font-medium text-gray-900",children:e.name}),Object(x.jsx)("p",{className:"mt-1 text-sm text-gray-500",children:e.description})]})]},e.name)}))})})})})]})}})]}),Object(x.jsxs)("div",{className:"hidden md:flex items-center justify-end md:flex-1 lg:w-0",children:[Object(x.jsx)(C.a,{clientId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_GOOGLE_CLIENT_ID,buttonText:"Log in with Google",onSuccess:_,onFailure:_,cookiePolicy:"single_host_origin"}),Object(x.jsx)("a",{}),Object(x.jsx)("form",{method:"POST",action:"/logout",children:Object(x.jsx)("button",{className:"btn ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",children:"Log Out"})})]})]})}),Object(x.jsx)(d.a,{as:a.Fragment,enter:"duration-200 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:Object(x.jsx)(w.a.Panel,{focus:!0,className:"absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:Object(x.jsxs)("div",{className:"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50",children:[Object(x.jsxs)("div",{className:"pt-5 pb-6 px-5",children:[Object(x.jsxs)("div",{className:"flex items-center justify-between",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg",alt:"Workflow"})}),Object(x.jsx)("div",{className:"-mr-2",children:Object(x.jsxs)(w.a.Button,{className:"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",children:[Object(x.jsx)("span",{className:"sr-only",children:"Close menu"}),Object(x.jsx)(f.f,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),Object(x.jsx)("div",{className:"mt-6",children:Object(x.jsx)("nav",{className:"grid gap-y-8",children:S.map((function(e){return Object(x.jsxs)("a",{href:e.href,className:"-m-3 p-3 flex items-center rounded-md hover:bg-gray-50",children:[Object(x.jsx)(e.icon,{className:"flex-shrink-0 h-6 w-6 text-indigo-600","aria-hidden":"true"}),Object(x.jsx)("span",{className:"ml-3 text-base font-medium text-gray-900",children:e.name})]},e.name)}))})})]}),Object(x.jsxs)("div",{className:"py-6 px-5 space-y-6",children:[Object(x.jsxs)("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8",children:[Object(x.jsx)("a",{href:"/#",className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"Pricing"}),Object(x.jsx)("a",{href:"/#",className:"text-base font-medium text-gray-900 hover:text-gray-700",children:"Docs"})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("a",{href:"/#",className:"w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700",children:"Sign up"}),Object(x.jsxs)("p",{className:"mt-6 text-center text-base font-medium text-gray-500",children:["Existing customer?"," ",Object(x.jsx)("a",{href:"/#",className:"text-indigo-600 hover:text-indigo-500",children:"Sign in"})]})]})]})]})})})]})};var B=function(e){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("footer",{className:(e.absolute?"absolute w-full bottom-0 bg-gray-900":"relative")+" pb-6",children:Object(x.jsxs)("div",{className:"container mx-auto px-4",children:[Object(x.jsx)("hr",{className:"mb-6 border-b-1 border-gray-700"}),Object(x.jsxs)("div",{className:"flex flex-wrap items-center md:justify-between justify-center",children:[Object(x.jsx)("div",{className:"w-full md:w-4/12 px-4",children:Object(x.jsxs)("div",{className:"text-sm text-white font-semibold py-1",children:["Copyright \xa9 ",(new Date).getFullYear()," ",Object(x.jsx)("a",{href:"/#",className:"text-white hover:text-gray-400 text-sm font-semibold py-1",children:"Darceus"})]})}),Object(x.jsx)("div",{className:"w-full md:w-8/12 px-4",children:Object(x.jsxs)("ul",{className:"flex flex-wrap list-none md:justify-end  justify-center",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",className:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",children:"Darceus"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",className:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",children:"About Us"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"/#",className:"text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3",children:"Blog"})})]})})]})]})})})};var L=function(){var e=Object(a.useState)([{price:1e3,name:"Ergonomic chair",description:"fancy chair, like new",image:u},{name:"Throwback Hip Bag",price:90,quantity:1,image:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"}]),t=Object(c.a)(e,2),s=t[0],i=t[1],r=[{price:1e3,name:"Ergonomic chair",description:"fancy chair, like new",image:u},{price:1e3,name:"Ergonomic chair",description:"fancy chair, like new",image:u}];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(E,{}),Object(x.jsx)("main",{children:Object(x.jsxs)("section",{className:"relative w-full h-full",children:[Object(x.jsx)("div",{children:Object(x.jsx)(b,{})}),Object(x.jsx)("div",{children:Object(x.jsx)(O,{products:r,item:s,setCart:i,absolute:!0})}),Object(x.jsx)(B,{absolute:!0})]})})]})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,42)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,n=t.getTTFB;s(e),a(e),i(e),r(e),n(e)}))};n.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(L,{})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.9440fb30.chunk.js.map