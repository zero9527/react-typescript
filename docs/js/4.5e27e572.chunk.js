(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[4],{103:function(e,t,n){"use strict";n.r(t);var a=n(59),c=n.n(a),o=n(60),i=n(13),l=n(0),r=n.n(l),u=n(3),s=n(55),d=n(56),m=n(57),f=n(4),b=n(71),v=n(62),p=n(69),h=n(66),E=n(63),g=n(70),O=n(64),_=n(58),j=n(85),w=n.n(j),x=function(e){var t=e.mdtext,n=e.defaultActive,a=e.onCateClick,c=e.onGetTitle,o=Object(_.a)(e,["mdtext","defaultActive","onCateClick","onGetTitle"]),u=Object(E.a)().scrollTop,m=Object(l.useRef)(!0),f=Object(l.useState)(!1),b=Object(i.a)(f,2),v=b[0],p=b[1],h=Object(l.useState)([]),g=Object(i.a)(h,2),j=g[0],x=g[1],y=Object(l.useState)(""),k=Object(i.a)(y,2),N=k[0],C=k[1],S=Object(l.useState)(""),L=Object(i.a)(S,2),B=L[0],I=L[1],T=Object(l.useState)([]),R=Object(i.a)(T,2),M=R[0],P=R[1];Object(l.useEffect)((function(){B&&(document.title+="|".concat(B),null===c||void 0===c||c(B))}),[B]),Object(l.useEffect)((function(){n&&C(n)}),[]),Object(l.useEffect)((function(){F()}),[N]),Object(l.useEffect)((function(){D()}),[]),Object(l.useEffect)((function(){document.body.style.overflowY=v?"hidden":"auto"}),[v]),Object(l.useEffect)((function(){P(function e(t){var n=[];return t.forEach((function(t){var a;(null===t||void 0===t||null===(a=t.child)||void 0===a?void 0:a.length)?n.push.apply(n,[t].concat(Object(O.a)(e(t.child)))):n.push(t)})),n}(j))}),[j]),Object(l.useEffect)((function(){m.current&&A()}),[u]);var A=function(){try{M.forEach((function(e){var t=document.getElementById(e.id);t&&(t.getBoundingClientRect().top<0&&C(e.id))}))}catch(e){console.error(e)}},D=function(){var e=[],n=[],a=t.slice(t.indexOf("\n"),t.length);I(t.slice(1,t.indexOf("\n"))),a.split("\n## ").forEach((function(t){var a=t.substring(0,t.indexOf("\n")).trim(),c=t.split("\n### ");c.shift();var o=[];c.forEach((function(e){var t=e.substring(0,e.indexOf("\n")).trim();o.push({id:t,header:"catelog-".concat(t),label:t})}));var i={id:a,header:"catelog-".concat(a),label:a,child:[]};e.push(a),o.length>0&&(i.child=o,e=e.concat(o.map((function(e){return e.id})))),n.push(i)})),x((function(){return n.filter((function(e){return Boolean(e.id)}))}))},F=function(){var e=document.getElementById("catelog-".concat(N));null===e||void 0===e||e.scrollIntoView(),null===a||void 0===a||a(N)},W=function(e){var t;null===(t=document.querySelector("#md-note"))||void 0===t||t.classList[e]("blur")},Y=Object(l.useCallback)((function(e){var t="".concat(w.a["cate-item"]," ").concat(N===e.id?w.a.active:"");return r.a.createElement("div",{"data-id":e.id,id:e.header,className:t,onClick:function(){return function(e){var t=document.getElementById(e.id);null===t||void 0===t||t.scrollIntoView(),m.current=!1,W("remove"),C(e.id),null===a||void 0===a||a(e.id),setTimeout((function(){p(!1),m.current=!0}),0)}(e)}},e.label)}),[N]),q=Object(l.useMemo)((function(){return v?w.a["cate-show"]:""}),[v]);return r.a.createElement("div",{id:"catalog",className:w.a.catalog},r.a.createElement(s.a,{className:"btn",icon:d.h,onClick:function(){W("add"),setTimeout((function(){return p(!0)}),0)}}),r.a.createElement("div",{className:w.a.bg,style:{display:v?"block":"none"}}),r.a.createElement("div",{className:"".concat(w.a.catelist," ").concat(q),onClick:function(e){return e.stopPropagation()}},v&&r.a.createElement("span",{className:w.a.close,onClick:function(){p(!1),W("remove")}},r.a.createElement(s.a,{icon:d.d})),r.a.createElement("section",{className:w.a.head,title:B},"\u76ee\u5f55: ",B),r.a.createElement("section",{className:w.a["cate-content"]},j.length>0?j.map((function(e){var t,n;return r.a.createElement("ul",{key:e.id},Y(e),e.child&&(null===(t=e.child)||void 0===t?void 0:t.length)>0&&(null===(n=e.child)||void 0===n?void 0:n.map((function(e){return r.a.createElement("ul",{key:e.id},Y(e))}))))})):r.a.createElement((function(){return r.a.createElement("div",{className:w.a.desc},r.a.createElement("p",null,"\u4e00\u7ea7\u6807\u9898'#'\u4e3a\u6587\u7ae0\u540d\uff0c"),r.a.createElement("p",null,"\u4e8c\u7ea7\u6807\u9898'##'\u4e3a\u4e00\u7ea7\u76ee\u5f55\uff0c"),r.a.createElement("p",null,"\u4e09\u7ea7\u6807\u9898'###'\u4e3a\u4e09\u7ea7\u76ee\u5f55"))}),null))),o.children)},y=n(9),k=n.n(y),N=n(88),C=n.n(N),S=function(e){var t=e.show,n=e.src,a=e.alt,c=e.onClode;return Object(l.useEffect)((function(){var e=document.querySelector("#md-note"),n=document.querySelector("#catalog");return t?(e.classList.add("blur"),n.classList.add("blur"),document.body.style.overflowY="hidden"):(e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""),function(){e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""}}),[t]),k.a.createPortal(r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("section",{className:C.a["pic-preview"]},r.a.createElement("div",{className:C.a.content},r.a.createElement("button",{className:"btn ".concat(C.a.close),onClick:c},"X"),r.a.createElement("div",{className:C.a["img-content"]},n?r.a.createElement("img",{src:n,alt:a}):r.a.createElement("span",{className:C.a.loading},"\u6b63\u5728\u751f\u6210\u622a\u56fe\u3002\u3002\u3002")),r.a.createElement("div",{className:C.a.text},"\u5bfc\u51fa\u56fe\u7247\u9884\u89c8\uff0c\u53f3\u952e\u53e6\u5b58/\u957f\u6309\u4fdd\u5b58\uff01")))),document.body)},L=n(86),B=n.n(L),I=n(67);var T=function(e){e.id,e.position;var t=e.mdtext,a=Object(_.a)(e,["id","position","mdtext"]),u=Object(m.a)((function(e){return[e.theme]})).theme,f=Object(l.useState)(""),b=Object(i.a)(f,2),v=b[0],p=b[1],h=Object(l.useState)(""),E=Object(i.a)(h,2),g=E[0],j=E[1],w=Object(l.useState)(""),x=Object(i.a)(w,2),y=x[0],k=x[1],N=Object(l.useState)(!1),C=Object(i.a)(N,2),L=C[0],T=C[1],R=Object(l.useState)(!1),M=Object(i.a)(R,2),P=M[0],A=M[1],D=Object(l.useState)(!1),F=Object(i.a)(D,2),W=F[0],Y=F[1],q=Object(l.useState)(!1),V=Object(i.a)(q,2),X=V[0],G=V[1];Object(l.useEffect)((function(){var e=t.substring(0,t.indexOf("\n")).split("# ")[1];k(e||"\u5bfc\u51fa")}),[]),Object(l.useEffect)((function(){function e(){!L&&window.innerWidth>=1100&&(T(!0),A(!1)),window.innerWidth<1100&&(T(!1),A(!0))}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]);var K=function(e,t){var a=t+50;e.style.width=a+"px",setTimeout(Object(o.a)(c.a.mark((function t(){var o,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o={scale:1,x:0,y:0,scrollX:0,scrollY:0,width:a,useCORS:!0,backgroundColor:"dark"===u?"#232426":"#fff"},P||(o.windowWidth=a),t.next=4,Promise.resolve().then(n.t.bind(null,54,7));case 4:i=t.sent,(0,i.default)(e,o).then((function(t){p((function(){return t.toDataURL("image/png")})),e.style.width="auto"}));case 7:case"end":return t.stop()}}),t)}))),100)},U=function e(){setTimeout((function(){return T(!1)}),0),window.removeEventListener("click",e)},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:g,className:"export-md",download:"".concat(y,".md"),hidden:!0},"\u5bfc\u51famd\u6587\u4ef6"),r.a.createElement("button",{className:"btn",onClick:function(e){return function(e){if(e.stopPropagation(),e.nativeEvent.stopPropagation(),!X){G(!0);var n=window.URL,a=new Blob([t],{type:"application/text"});j(n.createObjectURL(a)),setTimeout((function(){var e;null===(e=document.querySelector(".export-md"))||void 0===e||e.click(),G(!1)}),0)}}(e)}},"\u5bfc\u51famd\u6587\u4ef6",X?"...":""),r.a.createElement("button",{className:"btn",onClick:function(e){return function(e){if(e.stopPropagation(),!W){T(!1),Y(!0);var t=document.getElementById("md-content"),n=0,a=null===t||void 0===t?void 0:t.querySelectorAll("pre>code");if(a){var c=Array.from(a).map((function(e){return e.offsetWidth}));n=Math.max.apply(Math,Object(O.a)(c)),console.log("maxCodeWidth: ",n),K(t,n)}}}(e)}},"\u5bfc\u51fa\u56fe\u7247"),a.children)};return r.a.createElement("div",{className:B.a.export},r.a.createElement("button",{className:"btn ".concat(B.a.toggle),onClick:function(){T(!L),setTimeout((function(){L?window.removeEventListener("click",U):window.addEventListener("click",U)}),0)}},r.a.createElement(s.a,{icon:d.l})),P?r.a.createElement(I.a,{title:"",visible:L,onClose:function(){return T(!1)}},r.a.createElement("div",{className:B.a.tools},z())):r.a.createElement("div",{className:B.a.tools},z()),r.a.createElement(S,{show:W,src:v,alt:"".concat(y,".png"),onClode:function(){Y(!1),p("")}}))},R=n(80),M=n.n(R);t.default=function(){Object(m.a)((function(e){return[e.theme]})).theme;var e=Object(v.a)((function(e){return[e.getNoteById,e.updateNoteById,e.fetchNoteById]})),t=e.getNoteById,n=e.updateNoteById,a=e.fetchNoteById,O=Object(u.useParams)(),_=O.tag,j=O.tid,w=Object(u.useHistory)(),y=Object(u.useLocation)(),k=Object(E.a)().scrollTop,N=Object(m.a)((function(e){return[e.stickyRightStyle]})).stickyRightStyle,C=Object(l.useState)(!1),S=Object(i.a)(C,2),L=S[0],B=S[1],I=Object(l.useState)(""),R=Object(i.a)(I,2),P=R[0],A=R[1],D=Object(l.useState)(),F=Object(i.a)(D,2),W=F[0],Y=F[1],q=Object(l.useState)(!1),V=Object(i.a)(q,2),X=V[0],G=V[1],K=Object(l.useState)(),U=Object(i.a)(K,2),z=U[0],H=U[1];Object(l.useEffect)((function(){J()}),[]),Object(l.useEffect)((function(){Z()}),[k]);var J=function(){var e=Object(o.a)(c.a.mark((function e(){var o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(o=t(j))||void 0===o?void 0:o.data)){e.next=4;break}return Y(o.data),e.abrupt("return");case 4:return e.prev=4,e.next=7,a(_,j);case 7:if(0!==(null===(i=e.sent)||void 0===i?void 0:i.code)){e.next=15;break}if(!i.data.substring(0,20).includes("<!DOCTYPE html>")){e.next=11;break}return e.abrupt("return");case 11:n(j,i.data),Y(i.data),e.next=18;break;case 15:console.log("\u6570\u636e\u6ca1\u6709\u4e86\uff01"),Y(""),B(!0);case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(){return e.apply(this,arguments)}}(),Q=function(e){if(e){var t=document.getElementById(e);null===t||void 0===t||t.scrollIntoView(),H(e)}},Z=function(){G((function(){return k>window.innerHeight}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{className:M.a.header},r.a.createElement("div",{className:"center-content"},r.a.createElement(s.a,{icon:d.c,className:M.a.back,title:"\u8fd4\u56de\u9996\u9875",onClick:function(){w.push("/")}}),r.a.createElement("span",{title:"\u6587\u7ae0\u6807\u9898"},"\xa0",P))),r.a.createElement("main",{className:"center-content ".concat(M.a["note-detail"])},W?r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{mdtext:W,onMdRendered:function(){var e=y.hash.substr(1,y.hash.length);setTimeout((function(){return Q(decodeURI(e))}),0)}}),r.a.createElement(p.a,null,r.a.createElement(x,{mdtext:W,defaultActive:z,onCateClick:function(e){w.replace({pathname:y.pathname,hash:e})},onGetTitle:function(e){A(e)}},r.a.createElement(T,{id:j,position:N,mdtext:W},r.a.createElement("a",{href:"./#/md-editor/".concat(_,"/").concat(j),className:"link"},r.a.createElement("button",{className:"btn"},"\u7f16\u8f91")))))):!L&&r.a.createElement(f.a,null),L&&r.a.createElement((function(){return r.a.createElement("div",{className:M.a["article-404"]},"\u6587\u7ae0\u4e0d\u89c1\u4e86\u3002\u3002\u3002")}),null),X&&r.a.createElement(b.a,{position:N})))}},80:function(e,t,n){e.exports={"note-detail":"note-detail_note-detail__300Me","article-404":"note-detail_article-404__o-fL3",header:"note-detail_header__w4hse",back:"note-detail_back__1cf7y"}},85:function(e,t,n){e.exports={catalog:"mdCatalog_catalog__3r75B",bg:"mdCatalog_bg__3VFDw",catelist:"mdCatalog_catelist__VMStr",close:"mdCatalog_close__1gQeK",head:"mdCatalog_head__3D1zK",desc:"mdCatalog_desc__2yoDB","cate-content":"mdCatalog_cate-content__2W5XA","cate-item":"mdCatalog_cate-item__3f3Dt",active:"mdCatalog_active__KtXHX","cate-show":"mdCatalog_cate-show__vLLRv"}},86:function(e,t,n){e.exports={export:"export_export__aMcjj",tools:"export_tools__2Eo1y","export-a":"export_export-a__37G93",toggle:"export_toggle__2iKaM"}},88:function(e,t,n){e.exports={"pic-preview":"index_pic-preview__1b7eL",content:"index_content__NRfaT",close:"index_close__28ht6",loading:"index_loading__gupw7","img-content":"index_img-content__3wpFr",text:"index_text__teOB-"}}}]);