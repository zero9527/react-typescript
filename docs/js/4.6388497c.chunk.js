(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[4],{94:function(e,t,a){e.exports={"note-list":"noteList_note-list__Fam2w",add:"noteList_add__u0lP1",header:"noteList_header__3RY1r",container:"noteList_container__1WzjR",item:"noteList_item__396LG",title:"noteList_title__1HJGK",desc:"noteList_desc__2V7-8",tag:"noteList_tag__3sPyx",time:"noteList_time__1eDmB",skeleton:"noteList_skeleton__3OL71",loading:"noteList_loading__2b5RR",iframe:"noteList_iframe__9QERC",calendar:"noteList_calendar__1jIYK",mask:"noteList_mask__3Y-hC"}},95:function(e,t,a){e.exports={"home-tools":"Tools_home-tools__DybrX",setting:"Tools_setting__Yd_F9",wrapper:"Tools_wrapper__2jnU8",content:"Tools_content__3HLk1",item:"Tools_item__cFLmv",show:"Tools_show__NAxc5"}},96:function(e,t,a){e.exports={modal:"modal_modal__O3rSP",wrapper:"modal_wrapper__4qigB",show:"modal_show__2QC9Q",title:"modal_title__3Z28K","svg-inline--fa":"modal_svg-inline--fa__1huMp",content:"modal_content__1FVFz"}},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(59),l=a(67),i=a(60),r=a(64),s=a(13),m=a(54),u=a(55),d=a(56),_=function(){var e=Object(d.a)((function(e){return[e.theme,e.setTheme]})),t=e.theme,a=e.setTheme;return o.a.createElement("span",{onClick:function(){a("dark"===t?"light":"dark")}},"light"===t?o.a.createElement(m.a,{icon:u.k}):o.a.createElement(m.a,{icon:u.i}))},f=a(57),p=a(9),v=a.n(p),E=a(96),h=a.n(E),b=function(e){var t=e.visible,a=e.title,c=e.wrapperClassName,l=e.maskCloseable,i=void 0===l||l,r=e.onClose,s=e.children;Object(f.a)(e,["visible","title","wrapperClassName","maskCloseable","onClose","children"]);Object(n.useEffect)((function(){if(t?(d("add"),document.body.style.overflowY="hidden"):(d("remove"),document.body.style.overflowY=""),i){var e=function e(){setTimeout((function(){return r()}),0),window.removeEventListener("click",e)};t?window.addEventListener("click",e):window.removeEventListener("click",e)}return function(){d("remove"),document.body.style.overflowY=""}}),[t]);var d=function(e){var t;null===(t=document.querySelector("#md-note"))||void 0===t||t.classList[e]("blur")},_="".concat(h.a.content," ").concat(t?h.a.show:"");return t?v.a.createPortal(o.a.createElement((function(){return o.a.createElement("div",{className:h.a.modal},o.a.createElement("div",{className:"".concat(h.a.wrapper," ").concat(c||""),onClick:function(e){return e.stopPropagation()}},o.a.createElement("section",{className:h.a.title},o.a.createElement("span",null,a),o.a.createElement(m.a,{className:h.a.close,icon:u.m,onClick:r})),o.a.createElement("section",{className:_},s)))}),null),document.body):null},g=a(95),w=a.n(g),k=function(){var e=Object(n.useRef)(null),t=Object(n.useRef)(null),a=Object(n.useState)(!1),l=Object(s.a)(a,2),i=l[0],r=l[1],d=Object(n.useState)(!1),f=Object(s.a)(d,2),p=f[0],v=f[1],E=Object(c.a)((function(e){return[e.clearCache,e.noteList,e.updateNoteList]})),h=E.clearCache,g=E.noteList,k=E.updateNoteList,N=function(e){var t,a=null===(t=e.target.files)||void 0===t?void 0:t[0],n=new FileReader;n.readAsText(a),n.onload=function(e){var t,a=null===(t=e.target)||void 0===t?void 0:t.result;try{var n=JSON.parse(a||"");if(!n||0===n.length||!Array.isArray(n))return;var o=n[0];Object.keys(o).some((function(e){return!o[e]}))||k(n)}catch(c){console.error("\u5bfc\u5165\u6587\u4ef6\u5931\u8d25\uff01",c),alert("\u6587\u4ef6\u683c\u5f0f\u4e0d\u6b63\u786e\uff01")}}};return o.a.createElement("div",{className:w.a["home-tools"]},o.a.createElement(_,null),o.a.createElement(m.a,{className:w.a.setting,icon:u.e,onClick:function(e){e.stopPropagation(),r(!0)}}),o.a.createElement(b,{visible:i,title:"\u8bbe\u7f6e",wrapperClassName:w.a.wrapper,onClose:function(){return r(!1)}},o.a.createElement("section",{className:w.a.content},o.a.createElement("div",{className:w.a.item,onClick:function(e){e.stopPropagation(),h(),setTimeout((function(){alert("\u7f13\u5b58\u6e05\u7406\u6210\u529f\uff01"),r(!1)}),0)}},"\u6e05\u7f13\u5b58"),o.a.createElement("div",{className:w.a.item,onClick:function(t){if(t.stopPropagation(),!p){v(!0);var a=window.URL,n=new Blob([JSON.stringify(g)],{type:"application/json"});e.current.href=a.createObjectURL(n),setTimeout((function(){e.current.click(),v(!1),r(!1)}),0)}}},o.a.createElement("a",{ref:e,href:"href",download:"md-note\u5907\u4efd.json",hidden:!0}),"\u5bfc\u51fa\u5230\u6587\u4ef6(*.josn) ",p?"...":""),o.a.createElement("div",{className:w.a.item,onClick:function(e){var a,n;e.stopPropagation(),null===(a=t.current)||void 0===a||a.addEventListener("change",N),null===(n=t.current)||void 0===n||n.click()}},o.a.createElement("input",{ref:t,type:"file",accept:"application/json",hidden:!0}),"\u4ece\u6587\u4ef6\u5bfc\u5165(*.json)"))))},N=a(68),L=a(15),j=a(94),y=a.n(j);t.default=function(e){var t,a=Object(c.a)(),s=a.loading,m=a.noteList,u=Object(i.a)().scrollTop,_=Object(d.a)((function(e){return[e.stickyRightStyle]})).stickyRightStyle;Object(n.useEffect)((function(){f()}),[]);var f=function(){var t=e.scrollRestore();setTimeout((function(){document.body.scrollTop=t||0,document.documentElement.scrollTop=t||0}),0)},p=function(){e.beforeRouteLeave(u,{})},v=Object(n.useMemo)((function(){return u>window.innerHeight}),[u]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{className:y.a.header},o.a.createElement("div",{className:"center-content content"},o.a.createElement("span",null,"MD-NOTE"),o.a.createElement(k,null))),o.a.createElement("main",{className:"center-content ".concat(y.a["note-list"])},o.a.createElement("section",{id:s?y.a.skeleton:"",className:y.a.container},(null===m||void 0===m?void 0:m.length)>0?null===m||void 0===m||null===(t=m.map)||void 0===t?void 0:t.call(m,(function(e){return o.a.createElement("a",{className:"link ".concat(y.a.item),key:"".concat(e.tag,"-").concat(e.name),href:"./#/detail/".concat(e.tag,"/").concat(e.name),onClick:p},o.a.createElement("div",{className:y.a.title},e.title),o.a.createElement("div",{className:y.a.desc},o.a.createElement("span",{className:y.a.tag},"\u6807\u7b7e\uff1a",o.a.createElement("span",null,e.tag)),o.a.createElement("span",{className:y.a.time},"\u521b\u5efa\u65f6\u95f4\uff1a",e.create_time)))})):o.a.createElement("div",null,"\u6ca1\u6709\u6570\u636e")),v&&o.a.createElement(N.a,{position:_}),o.a.createElement(l.a,{className:y.a.iframe},!L.b&&o.a.createElement(o.a.Fragment,null,o.a.createElement("iframe",{src:"https://zero9527.github.io/vue-calendar",className:y.a.calendar}),o.a.createElement("div",{className:y.a.mask})))))}}}]);