(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[7],{280:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(3),c=n(22),r=n(53),s=n(59),u=Object(s.createModel)((function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(0),c=Object(r.a)(i,2),s=c[0],u=c[1];return Object(a.useEffect)((function(){u(window.innerHeight)}),[]),{isMobile:n,setIsMobile:o,height:s}})),l=n(56),d=n(54),m=n(55),f=n(76),v=n.n(f),h=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useState)(!1),i=Object(r.a)(n,2),c=i[0],s=i[1],u=Object(a.useState)(!1),f=Object(r.a)(u,2),h=f[0],p=f[1],b=Object(a.useState)("0"),g=Object(r.a)(b,2),_=g[0],w=g[1],O=Object(l.a)((function(e){return[e.clearCache,e.noteList,e.updateNoteList]})),j=O.clearCache,E=O.noteList,L=O.updateNoteList;Object(a.useEffect)((function(){function e(){window.innerWidth>=1100?w("".concat((window.innerWidth-1100)/2,"px")):w("0")}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),Object(a.useEffect)((function(){var e=function e(){setTimeout((function(){return s(!1)}),0),window.removeEventListener("click",e)};c?window.addEventListener("click",e):window.removeEventListener("click",e)}),[]);var N=function(e){var t,n=null===(t=e.target.files)||void 0===t?void 0:t[0],a=new FileReader;a.readAsText(n),a.onload=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.result;try{var a=JSON.parse(n||"");if(!a||0===a.length||!Array.isArray(a))return;var o=a[0];Object.keys(o).some((function(e){return!o[e]}))||L(a)}catch(i){console.error("\u5bfc\u5165\u6587\u4ef6\u5931\u8d25\uff01",i),alert("\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\uff01")}}},y="".concat(v.a.content," ").concat(c?v.a.show:"");return o.a.createElement("div",{className:v.a["home-tools"]},o.a.createElement(d.a,{className:v.a.setting,icon:m.c,onClick:function(e){e.stopPropagation(),s(!0)}}),o.a.createElement("div",{className:v.a.wrapper,style:{display:c?"block":"",left:_}},o.a.createElement("section",{className:y},o.a.createElement("div",{className:v.a.title},o.a.createElement("span",null,"\u8bbe\u7f6e")),o.a.createElement("div",{className:v.a.item,onClick:function(e){e.stopPropagation(),j(),setTimeout((function(){alert("\u7f13\u5b58\u6e05\u7406\u6210\u529f\uff01"),s(!1)}),0)}},"\u6e05\u7f13\u5b58"),o.a.createElement("div",{className:v.a.item,onClick:function(t){if(t.stopPropagation(),!h){p(!0);var n=window.URL,a=new Blob([JSON.stringify(E)],{type:"application/json"});e.current.href=n.createObjectURL(a),setTimeout((function(){e.current.click(),p(!1),s(!1)}),0)}}},o.a.createElement("a",{ref:e,href:"href",download:"md-note\u5907\u4efd.json",hidden:!0}),"\u5bfc\u51fa\u5230\u6587\u4ef6(*.josn) ",h?"...":""),o.a.createElement("div",{className:v.a.item,onClick:function(e){var n,a;e.stopPropagation(),null===(n=t.current)||void 0===n||n.addEventListener("change",N),null===(a=t.current)||void 0===a||a.click()}},o.a.createElement("input",{ref:t,type:"file",accept:"application/json",hidden:!0}),"\u4ece\u6587\u4ef6\u5bfc\u5165(*.json)"))))},p=n(77),b=n.n(p);var g=function(e){var t,n=e.show,i=void 0===n||n,c=Object(a.useRef)(),s=u().height,d=Object(l.a)(),m=d.loading,f=d.noteList,v=Object(a.useState)(),p=Object(r.a)(v,2),g=p[0],_=p[1],w=Object(a.useState)(0),O=Object(r.a)(w,2),j=O[0],E=O[1];function L(){var e=document.body.clientWidth,t=e>1100?{left:"".concat((e-1100)/2+1100-60,"px")}:{right:"12px"};_(t)}return Object(a.useEffect)((function(){return L(),window.addEventListener("resize",L),function(){window.removeEventListener("resize",L)}}),[]),Object(a.useEffect)((function(){var e;function t(e){E(e.target.scrollTop||j)}return c.current=document.querySelector(".".concat(b.a["note-list"])),null===(e=c.current)||void 0===e||e.addEventListener("scroll",t),function(){var e;null===(e=c.current)||void 0===e||e.removeEventListener("scroll",t)}}),[]),Object(a.useEffect)((function(){i&&c.current&&(c.current.scrollTop=j)}),[i]),o.a.createElement("div",{className:"center-content ".concat(b.a["note-list"]),style:{height:s,display:i?"block":"none"}},o.a.createElement("div",{className:"border-1px-bottom title"},o.a.createElement("span",null,"md-note"),o.a.createElement(h,null)),o.a.createElement("section",{id:m?b.a.skeleton:"",className:b.a["month-item"]},(null===f||void 0===f?void 0:f.length)>0?null===f||void 0===f||null===(t=f.map)||void 0===t?void 0:t.call(f,(function(e,t){return o.a.createElement("a",{className:"link ".concat(b.a["note-item"]),key:t,href:"./#/detail/".concat(e.id)},o.a.createElement("div",{className:b.a["item-date"]},o.a.createElement("div",{className:b.a.time},e.date.substr(11,5)),o.a.createElement("div",{className:b.a.date},e.date.substr(5,5))),o.a.createElement("div",{className:b.a["item-desc"]},e.desc))})):o.a.createElement("div",null,"\u6ca1\u6709\u6570\u636e")),o.a.createElement("a",{href:"./#/note-add",className:"link btn ".concat(b.a.add),style:g},"+"))},_=function(e){var t=e.pathname,n=e.children;Object(a.useEffect)((function(){t.includes("/detail/")?i("md-note|\u8be6\u60c5"):t.includes("/md-editor/")?i("md-note|\u7f16\u8f91"):t.includes("/note-add")?i("md-note|\u6dfb\u52a0"):i("md-note")}),[t]);var i=function(e){return document.title=e};return o.a.createElement(o.a.Fragment,null,n)};t.default=function(e){var t=e.children,n=u().setIsMobile,r=Object(i.useLocation)().pathname;return Object(a.useEffect)((function(){var e=c.a.test(window.navigator.userAgent);n(e)}),[]),o.a.createElement(_,{pathname:r},t,o.a.createElement(g,{show:"/"===r}))}},56:function(e,t,n){"use strict";var a=n(57),o=n.n(a),i=n(58),c=n(61),r=n(53),s=n(0),u=n(59);var l=n(12),d=n(11),m=n.n(d),f={testApi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("/api/file/getFile",{params:e,data:{showLoading:!0}})},getDemo1Md:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/demo1.md",{data:Object(l.a)({},e)})},getReactHookMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/React-Hook.md",{data:Object(l.a)({},e)})},getPromiseMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/promise_This_is.md",{data:Object(l.a)({},e,{showLoading:!0})})},getCalendarMd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return m.a.get("./md/uni-app_calendar.md",{data:Object(l.a)({},e)})},updateFile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};m.a.post("/api/file/updateFile",e)}},v=n(13),h={0:0,"24h":864e5,"7day":6048e5},p=[{id:"",date:"",desc:"",data:""}];t.a=Object(u.createModel)((function(){var e=Object(s.useState)("".concat(Date.now())),t=Object(r.a)(e,2),a=t[0],u=t[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),m=d[0],b=d[1],g=Object(s.useRef)(function(e){var t=e.type,n=void 0===t?"localStorage":t,a=e.cacheKey,o=e.version,i=o;return{cacheKey:a,localVersion:i,getData:function(){var e=window[n].getItem(a);return e?JSON.parse(e).data:null},setData:function(e){var t={version:i,data:e};window[n].setItem(a,JSON.stringify(t))},updateVersion:function(e){i=e;var t=window[n].getItem(a);(t?JSON.parse(t).version:o)!==i&&window[n].removeItem(a)},clear:function(){window[n].removeItem(a)}}}({cacheKey:"note-list",version:a})),_=Object(s.useState)(g.current.getData()||p),w=Object(r.a)(_,2),O=w[0],j=w[1];Object(s.useEffect)((function(){var e;E(),""===(null===(e=O[0])||void 0===e?void 0:e.id)&&(b(!0),n.e(8).then(n.bind(null,279)).then((function(e){var t=e.default;L(function(e){var t=[].concat(Object(c.a)(O),Object(c.a)(e)),n=[];return t.forEach((function(e){e.id&&!n.some((function(t){return t.id===e.id}))&&n.push(e)})),n}(t)),b(!1)})))}),[]),Object(s.useEffect)((function(){O&&g.current.setData(O)}),[O]);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"24h";Number(a)+h[e]<=Date.now()&&(console.log("\u6e05\u7f13\u5b58"),u("".concat(Date.now())),L([]),g.current.updateVersion("".concat(Date.now())));var t=g.current.getData();t&&L(t)},L=function(e){var t=N(e);j((function(){return t}))},N=function e(t){if(t.length<=1)return t;var n=t.shift(),a=[],o=[];return t.forEach((function(e){var t=new Date(n.date).getTime();new Date(e.date).getTime()<=t?a.push(e):o.push(e)})),e(o).concat(n).concat(e(a))},y=function(e){return e.includes("\n")?e.substring(0,e.indexOf("\n")):e};return{loading:m,noteList:O,getNoteList:function(){return O},getNoteById:function(e){E();var t=null===O||void 0===O?void 0:O.find((function(t){return t.id===e}));return t||null},updateNoteById:function(e,t){e||(e="".concat(Date.now())),j((function(n){var a=n.findIndex((function(t){return t.id===e})),o=Object(v.a)({timeStamp:Date.now(),splitChar:"/"});return a<0?n.push({id:e,data:t,date:o,desc:y(t)}):n[a]={id:e,data:t,date:o,desc:y(t)},N(n).map((function(e){return e}))}))},updateNoteList:L,fetchNoteById:function(){var e=Object(i.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=["getDemo1Md","getReactHookMd","getPromiseMd","getCalendarMd"],t){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,f[n[t]]();case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.error("fetch error: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),clearCache:function(){g.current.clear()}}}))},76:function(e,t,n){e.exports={"home-tools":"homeTools_home-tools__3j60r",setting:"homeTools_setting__3IuNE",wrapper:"homeTools_wrapper__18a-d",content:"homeTools_content__14P2G",title:"homeTools_title__2hZYy",item:"homeTools_item__3gz-k",show:"homeTools_show__3-9Hy",move:"homeTools_move__CC0rV"}},77:function(e,t,n){e.exports={"note-list":"noteList_note-list__Fam2w",add:"noteList_add__u0lP1","month-item":"noteList_month-item__1ik4y","item-month":"noteList_item-month__1eENs","item-month-en":"noteList_item-month-en__1k0sL","note-item":"noteList_note-item__2tDXJ","item-date":"noteList_item-date__2d5pd",time:"noteList_time__1eDmB",date:"noteList_date__3z7yY","item-desc":"noteList_item-desc__2pf3i",skeleton:"noteList_skeleton__3OL71",loading:"noteList_loading__2b5RR"}}}]);