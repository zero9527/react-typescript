(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[3],{85:function(e,t,n){e.exports={"note-detail":"styles_note-detail__A1Xhj","article-404":"styles_article-404__9jkpq",header:"styles_header__1o7G2",title:"styles_title__GgtK4",back:"styles_back__9_d1y"}},88:function(e,t,n){e.exports={"md-container":"styles_md-container__3fIh7","md-content":"styles_md-content__1BZgI","md-detail":"styles_md-detail__3E1ZT","md-preview":"styles_md-preview__eyAuJ",drag:"styles_drag__2fE19"}},89:function(e,t,n){e.exports={"pic-preview":"styles_pic-preview___6dgh",content:"styles_content__mGjqF",close:"styles_close__3QtS_",loading:"styles_loading__3N7qD","img-content":"styles_img-content__34pOG",text:"styles_text__GGazT"}},90:function(e,t,n){e.exports={catalog:"styles_catalog__hhxic",bg:"styles_bg__3QQdk",catelist:"styles_catelist__1RfRZ",close:"styles_close__21oXG",head:"styles_head__2fJ2w",desc:"styles_desc__1_ac3","cate-content":"styles_cate-content__Mg1oD","header-2":"styles_header-2__2WGgC","cate-item":"styles_cate-item__2jpto","header-3":"styles_header-3__jF45q","header-4":"styles_header-4__NLaOk",active:"styles_active__I10Pt","cate-show":"styles_cate-show__23hX9"}},93:function(e,t,n){"use strict";n.r(t);var a=n(63),c=n.n(a),o=n(64),r=n(15),s=n(14),l=n(0),i=n.n(l),u=n(3),d=n(60),m=n(61),f=n(84),v=n.n(f),p=n(57),h=n(66),b=n(58),g=n(7),_=n(65),y=n(68),E=n(67),O=n(86),j=n.n(O),w=n(55),x=n.n(w),N=(n(87),n(59)),k=function(e){var t=e.className,n=void 0===t?"":t,a=e.onPosChange,c=(Object(N.a)(e,["className","onPosChange"]),Object(l.useRef)()),o=Object(l.useState)({posX:0,posY:0,posRight:10,posBottom:80}),u=Object(s.a)(o,2),d=u[0],m=u[1];Object(l.useEffect)((function(){return f(),function(){var e,t;null===(e=c.current)||void 0===e||e.removeEventListener("touchstart",v,{passive:!1}),null===(t=c.current)||void 0===t||t.removeEventListener("touchmove",p,{passive:!1})}}));var f=function(){var e,t;c.current=document.querySelector(".".concat(n)),null===(e=c.current)||void 0===e||e.addEventListener("touchstart",v,{passive:!1}),null===(t=c.current)||void 0===t||t.addEventListener("touchmove",p,{passive:!1})},v=function(e){e.preventDefault(),e.stopPropagation();var t=e.touches[0],n=t.pageX,a=t.pageY;m(Object(r.a)({},d,{posX:n,posY:a}))},p=function(e){e.preventDefault(),e.stopPropagation(),h(e)},h=function(e){var t=d.posX,n=d.posY,c=d.posRight,o=d.posBottom,r=e.touches[0],s=r.pageX,l=r.pageY,i=0,u=0;s>20&&s<window.innerWidth-20&&(i=s-t<0?c+Math.abs(s-t):c-Math.abs(s-t)),l>20&&l<window.innerHeight-20&&(u=l-n<0?o+Math.abs(l-n):o-Math.abs(l-n)),(s<=20||s>=window.innerWidth-20)&&(i=c),(l<=20||l>=window.innerHeight-20)&&(u=o),u=Math.round(u),i=Math.round(i),m({posX:s,posY:l,posBottom:u,posRight:i}),a({posBottom:u,posRight:i})};return i.a.createElement("div",{className:"btn ".concat(n)})},S=n(88),R=n.n(S),C=i.a.memo((function(e){var t=e.isEdit,n=e.mdtext,a=e.className,c=e.scrollTopRate,o=e.onMdRendered,r=Object(l.useRef)(),u=Object(l.useState)(!0),d=Object(s.a)(u,2),m=d[0],f=d[1],v=Object(l.useState)({posBottom:50,posRight:10}),p=Object(s.a)(v,2),h=p[0],b=p[1];Object(l.useEffect)((function(){c&&(r.current=document.querySelector(".".concat(R.a["md-content"])),r.current&&(r.current.scrollTop=r.current.scrollHeight*c))}),[c]);var g=function(e,t){var n=x.a.getLanguage(t)?t:"plaintext";return x.a.highlight(n,e,!0).value},_=Object(l.useMemo)((function(){return"container ".concat(R.a["md-container"]," ").concat(t?R.a["md-preview"]:R.a["md-detail"]," ").concat(a||"")}),[t,a]),y=Object(l.useMemo)((function(){var e="".concat(h.posBottom,"px"),n="".concat(h.posRight,"px");return t?{marginBottom:e,marginRight:n}:{}}),[t,h.posBottom,h.posRight]);return i.a.createElement("div",{className:_,style:y},t&&m&&i.a.createElement(k,{className:R.a.drag,onPosChange:function(e){var t=e.posBottom,n=e.posRight;b({posBottom:t,posRight:n})}}),(!t||m)&&i.a.createElement("section",{"data-text":t&&"\u9884\u89c8",className:R.a["md-content"],id:"md-content",dangerouslySetInnerHTML:{__html:j()(n,(function(){var e=new j.a.Renderer;e.heading=function(e,t){var n=e.replace("<code>","`").replace("</code>","`");return"<h".concat(t,' class="heading-h').concat(t,'" id="').concat(n,'" title="').concat(n,'"><span>').concat(e,"</span></h").concat(t,">")},e.code=function(e,t){var n=encodeURI(e);return'<pre>\n        <div class="languange">\n          <span>'.concat(t,'</span>\n          <span class="copy-code" data-code="').concat(n,'">').concat('<span>\u590d\u5236\u4ee3\u7801</span>\n      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copy" class="svg-inline--fa fa-copy fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">\n      <path fill="currentColor" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path>\n      </svg>','</span>\n        </div>\n        <div class="code-wrapper"><code class="').concat(t,'">').concat(g(e,t),"</code></div>\n      </pre>")},e.link=function(e,t,n){var a=t||e||"";return'<a href="'.concat(e,'" class="link" title="').concat(a,'" target="_blank" rel="noopener noreferrer">').concat(n,'\n      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-alt" class="svg-inline--fa fa-external-link-alt fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n      <path fill="currentColor" d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z">\n      </path></svg>\n      </a>')},e.image=function(e,t){return'<img src="'.concat(e,'" alt="').concat(t||"",'" class="md-img" />')},j.a.setOptions({renderer:e,highlight:g,langPrefix:"",pedantic:!1,gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,xhtml:!1})}(),void(null===o||void 0===o||o())))}}),t&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{textAlign:"right"}},i.a.createElement("button",{className:"btn",onClick:function(){f(!m)}},m?"\u5173\u95ed\u9884\u89c8":"\u663e\u793a\u9884\u89c8"))))}),(function(e,t){return!t.isEdit||!Object.keys(t).some((function(n){return t[n]!==e[n]}))})),T=n(91),L=n(90),B=n.n(L),M=function(e){var t=e.mdtext,n=e.defaultActive,a=e.onCateClick,c=e.onGetTitle,o=Object(N.a)(e,["mdtext","defaultActive","onCateClick","onGetTitle"]),r=Object(u.useHistory)(),f=Object(u.useLocation)(),v=Object(b.a)(),p=v.scrollTop,h=v.prevScrollTop,g=Object(l.useRef)(!0),_=Object(l.useState)(!1),y=Object(s.a)(_,2),E=y[0],O=y[1],j=Object(l.useState)([]),w=Object(s.a)(j,2),x=w[0],k=w[1],S=Object(l.useState)(""),R=Object(s.a)(S,2),C=R[0],L=R[1],M=Object(l.useState)(""),H=Object(s.a)(M,2),I=H[0],q=H[1],A=Object(l.useState)([]),G=Object(s.a)(A,2),Y=G[0],P=G[1];Object(l.useEffect)((function(){I&&(document.title="MD-NOTE|".concat(I),null===c||void 0===c||c(I))}),[I]),Object(l.useEffect)((function(){q(t.slice(2,t.indexOf("\n"))),k(X(t))}),[]),Object(l.useEffect)((function(){n&&L(n)}),[n]),Object(l.useEffect)((function(){document.body.style.overflowY=E?"hidden":"auto"}),[E]),Object(l.useEffect)((function(){P(function e(t){var n=[];return t.forEach((function(t){var a;(null===t||void 0===t||null===(a=t.child)||void 0===a?void 0:a.length)?n.push.apply(n,[t].concat(Object(T.a)(e(t.child)))):n.push(t)})),n}(x))}),[x]),Object(l.useEffect)((function(){g.current&&setTimeout(V,0)}),[p]);var V=function(){try{var e=Y.reverse().find((function(e){var t=document.getElementById(e.id),n=null===t||void 0===t?void 0:t.getBoundingClientRect();return(null===n||void 0===n?void 0:n.top)<30&&(null===n||void 0===n?void 0:n.bottom)>0}));e&&(L(e.id),D(e))}catch(t){console.error(t)}},X=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\n##",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if("\n#####"===n)return[];var c=[],o=t.slice(t.indexOf("\n"),t.length),r=o.split("".concat(n," "));return r.shift(),r.forEach((function(t){var a=t.substring(0,t.indexOf("\n")).trim(),o={id:a,header:"catelog-".concat(a),label:a,child:[]},r=e(t,"".concat(n,"#"));r.length&&(o.child=r),c.push(o)})),a.concat(c)},D=function(e){var t=document.getElementById("catelog-".concat(e.id));null===t||void 0===t||t.scrollIntoView(),r.replace({pathname:f.pathname,hash:e.id})},F=function(e){var t;null===(t=document.querySelector("#md-note"))||void 0===t||t.classList[e]("blur")},z=Object(l.useCallback)((function(e,t){return e.map((function(e,n){return i.a.createElement("ul",{className:B.a["header-".concat(t)],key:e.id},Z(e,n),e.child&&e.child.length>0&&i.a.createElement("li",null,z(e.child,t+1)))}))}),[x,C]),Z=Object(l.useCallback)((function(e,t){var n="".concat(B.a["cate-item"]," ").concat(C===e.id?B.a.active:"");return i.a.createElement("li",{key:"".concat(e.id,"-").concat(t),"data-id":e.id,id:e.header,title:e.id,className:n,onClick:function(){return function(e){g.current=!1,F("remove"),L(e.id),null===a||void 0===a||a(e.id),setTimeout((function(){O(!1),g.current=!0}),0)}(e)}},e.label)}),[C]),J=Object(l.useMemo)((function(){return E?B.a["cate-show"]:""}),[E]);return i.a.createElement("div",{id:"catalog",className:B.a.catalog},i.a.createElement(d.a,{className:"btn",icon:m.d,onClick:function(){F("add"),setTimeout((function(){return O(!0)}),0)}}),i.a.createElement("div",{className:B.a.bg,style:{display:E?"block":"none"}}),i.a.createElement("div",{style:{marginTop:p>50&&p>h?"0":""},className:"".concat(B.a.catelist," ").concat(J)},E&&i.a.createElement("span",{className:B.a.close,onClick:function(){O(!1),F("remove")}},i.a.createElement(d.a,{icon:m.c})),i.a.createElement("section",{className:B.a.head,title:I},"\u76ee\u5f55: ",I),i.a.createElement("section",{className:B.a["cate-content"]},x.length>0?z(x,2):i.a.createElement((function(){return i.a.createElement("div",{className:B.a.desc},i.a.createElement("p",null,"\u4e00\u7ea7\u6807\u9898'#'\u4e3a\u6587\u7ae0\u540d\uff0c"),i.a.createElement("p",null,"\u4e8c\u7ea7\u6807\u9898'##'\u4e3a\u4e00\u7ea7\u76ee\u5f55\uff0c"),i.a.createElement("p",null,"\u4e09\u7ea7\u6807\u9898'###'\u4e3a\u4e09\u7ea7\u76ee\u5f55"),i.a.createElement("p",null,"\u56db\u7ea7\u6807\u9898'####'\u4e3a\u56db\u7ea7\u76ee\u5f55"))}),null))),o.children)},H=n(9),I=n.n(H),q=n(89),A=n.n(q),G=function(e){var t=e.show,n=e.src,a=e.alt,c=e.onClose;return Object(l.useEffect)((function(){var e=document.querySelector("#md-note"),n=document.querySelector("#catalog");return t?(e.classList.add("blur"),n.classList.add("blur"),document.body.style.overflowY="hidden"):(e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""),function(){e.classList.remove("blur"),n.classList.remove("blur"),document.body.style.overflowY=""}}),[t]),I.a.createPortal(i.a.createElement(i.a.Fragment,null,t&&i.a.createElement("section",{className:A.a["pic-preview"]},i.a.createElement("div",{className:A.a.content},i.a.createElement("button",{className:"btn ".concat(A.a.close),onClick:c},"X"),i.a.createElement("div",{className:A.a["img-content"]},n?i.a.createElement("img",{src:n,alt:a}):i.a.createElement("span",{className:A.a.loading},"\u6b63\u5728\u751f\u6210\u622a\u56fe\u3002\u3002\u3002")),i.a.createElement("div",{className:A.a.text},"\u5bfc\u51fa\u56fe\u7247\u9884\u89c8\uff0c\u53f3\u952e\u53e6\u5b58/\u957f\u6309\u4fdd\u5b58\uff01")))),document.body)},Y=n(85),P=n.n(Y);t.default=function(){var e=Object(p.a)((function(e){return[e.stickyRightStyle]})).stickyRightStyle,t=Object(h.a)((function(e){return[e.getNoteById,e.fetchNoteByName]})),n=t.getNoteById,a=t.fetchNoteByName,f=Object(u.useParams)(),O=f.tag,j=f.name,w=Object(u.useHistory)(),x=Object(u.useLocation)(),N=Object(b.a)().scrollTop,k=Object(l.useState)(!1),S=Object(s.a)(k,2),R=S[0],T=S[1],L=Object(l.useState)(""),B=Object(s.a)(L,2),H=B[0],I=B[1],q=Object(l.useState)(),A=Object(s.a)(q,2),Y=A[0],V=A[1],X=Object(l.useState)(!1),D=Object(s.a)(X,2),F=D[0],z=D[1],Z=Object(l.useState)(),J=Object(s.a)(Z,2),Q=J[0],U=J[1],W=Object(l.useRef)(),K=Object(l.useState)({show:!1,src:"",alt:"",onClose:function(){te((function(e){return Object(r.a)({},e,{show:!1})}))}}),$=Object(s.a)(K,2),ee=$[0],te=$[1];Object(l.useEffect)((function(){ne()}),[]),Object(l.useEffect)((function(){se()}),[N]);var ne=function(){var e=Object(o.a)(c.a.mark((function e(){var t,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===(t=n(j))||void 0===t?void 0:t.data)){e.next=4;break}return V(t.data),e.abrupt("return");case 4:return e.prev=4,e.next=7,a(O,j);case 7:if(0!==(null===(o=e.sent)||void 0===o?void 0:o.code)){e.next=14;break}if(!o.data.substring(0,20).includes("<!DOCTYPE html>")){e.next=11;break}return e.abrupt("return");case 11:V(o.data),e.next=17;break;case 14:console.log("\u6570\u636e\u6ca1\u6709\u4e86\uff01"),V(""),T(!0);case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.error(e.t0);case 22:case"end":return e.stop()}}),e,null,[[4,19]])})));return function(){return e.apply(this,arguments)}}(),ae=function(){document.querySelector("#md-content").onclick=function(e){oe(e),ce(e)};var e=document.querySelectorAll("#md-content .copy-code");Array.from(e).forEach((function(e){e.onmouseenter=function(e){oe(e)}}))},ce=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.closest(".md-img");n&&window.open(n.src)},oe=function(e){var t,n=null===(t=e.target)||void 0===t?void 0:t.closest(".copy-code");if(n&&n.dataset.code){var a=n.querySelector("span"),c=decodeURI(n.dataset.code);W.current=new v.a(n,{action:function(){return"copy"},text:function(){return c}}),W.current.on("success",(function(){return o("\u590d\u5236\u6210\u529f")})),W.current.on("error",(function(){return o('<span style="color:red;">\u590d\u5236\u5931\u8d25</span>')}));var o=function(e){var t;a.innerHTML=e,null===(t=W.current)||void 0===t||t.destroy(),setTimeout((function(){a.innerHTML="\u590d\u5236\u4ee3\u7801"}),2e3)}}},re=function(e){if(e){U(e);var t=document.getElementById(e);if(t){var n=t.offsetTop-10;document.body.scrollTop=document.documentElement.scrollTop=n}}},se=function(){z((function(){return N>window.innerHeight}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{className:P.a.header},i.a.createElement("div",{className:"center-content"},i.a.createElement(d.a,{icon:m.b,className:P.a.back,title:"\u8fd4\u56de\u9996\u9875",onClick:function(){w.push("/")}}),i.a.createElement("span",{className:P.a.title,title:"\u6587\u7ae0\u6807\u9898"},"\xa0",H))),i.a.createElement("main",{className:"center-content ".concat(P.a["note-detail"])},Y?i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{mdtext:Y,onMdRendered:function(){var e=x.hash.substr(1,x.hash.length);setTimeout((function(){re(decodeURI(e)),ae()}),0)}}),i.a.createElement(G,ee),i.a.createElement(E.a,null,i.a.createElement(M,{mdtext:Y,defaultActive:Q,onCateClick:function(e){re(e)},onGetTitle:function(e){I(e)}}))):!R&&i.a.createElement(g.a,null),R&&i.a.createElement((function(){return i.a.createElement("div",{className:P.a["article-404"]},"\u6587\u7ae0\u4e0d\u89c1\u4e86\u3002\u3002\u3002")}),null),F&&i.a.createElement(y.a,{position:e})))}}}]);