(this["webpackJsonpmd-note"]=this["webpackJsonpmd-note"]||[]).push([[7],{99:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(3),c=t(24),i=function(e){var n,t=e.name,a=e.maxLength,o=void 0===a?5:a,c=e.store,i=void 0===c?window:c,l=e.children,u="__keep_alive_cache__",s="function"===typeof l;Object(r.useEffect)((function(){s||console.warn('children\u4f20\u9012\u51fd\u6570\uff0c\u5982:\n <KeepAlive name="list">{(props) => <List {...props} />}</KeepAlive>')}),[]);var f=function(e,n,r){var a=i[u].findIndex((function(e){return e.name===t}));-1!==a?i[u].splice(a,1,{name:t,cache:e,scrollTop:n,state:r}):i[u].unshift({name:t,cache:e,scrollTop:n,state:r}),i[u].length>o&&i[u].pop()},d=function(){return i[u]||(i[u]=[]),i[u].find((function(e){return e.name===t}))||null},v={beforeRouteLeave:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;f((function(){return l(v)}),e,n)},scrollRestore:function(){var e=d();return(null===e||void 0===e?void 0:e.scrollTop)||null},stateRestore:function(){var e=d();return(null===e||void 0===e?void 0:e.state)||null},deleteCache:function(){var e=i[u].findIndex((function(e){return e.name===t}));-1!==e&&(i[u].splice(e,1),console.log("deleteCache-name: ".concat(t)))},getKeepAlive:function(){return d()}};return null!==(n=function(){i[u]||(i[u]=[]);var e=i[u].find((function(e){return e.name===t}));return(null===e||void 0===e?void 0:e.cache())||null}())&&void 0!==n?n:s&&l(v)},l=t(4),u=t(57),s=function(e){var n=e.pathname,t=e.children;Object(r.useEffect)((function(){n.includes("/detail/")?o("MD-NOTE|\u8be6\u60c5"):n.includes("/md-editor/")?o("MD-NOTE|\u7f16\u8f91"):n.includes("/note-add")?o("MD-NOTE|\u6dfb\u52a0"):o("MD-NOTE")}),[n]);var o=function(e){return document.title=e};return a.a.createElement(a.a.Fragment,null,t)},f=Object(r.lazy)((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,100))}));n.default=function(){var e=Object(o.useLocation)().pathname,n=Object(u.a)((function(e){return[e.setIsMobile]})).setIsMobile;return Object(r.useEffect)((function(){var e=c.a.test(window.navigator.userAgent);n(e)}),[]),a.a.createElement(s,{pathname:e},a.a.createElement(r.Suspense,{fallback:a.a.createElement(l.a,null)},a.a.createElement(i,{name:"list"},(function(e){return a.a.createElement(f,e)}))))}}}]);