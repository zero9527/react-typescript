webpackJsonp([0],{56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(58),o=n(0),r=(n.n(o),n(60)),i=n(65),c=(n.n(i),function(t){function e(e){var n=t.call(this,e)||this;return n.state={},n}return a.a(e,t),e.prototype.render=function(){var t=this.props,e=t.history,n=t.location;return o.createElement("div",{style:{display:"/"===n.pathname?"":"none"}},o.createElement("p",null,"Hi App!"),o.createElement("p",null,o.createElement("a",{href:"javascript:;",onClick:function(){return e.push("/hello")}},"go hello")),o.createElement("hr",null),o.createElement(r.a,{text:"\u65e5\u5386"}))},e}(o.Component));e.default=c},58:function(t,e,n){"use strict";e.a=function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};var a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)}},59:function(t,e,n){"use strict";e.c=function(t){var e=t.timeStamp,n=t.splitChar,a=void 0===n?"-":n,o=new Date(e),r=o.getFullYear(),i=(o.getMonth()+1+"").padStart(2,"0"),c=(o.getDate()+"").padStart(2,"0"),s=(o.getHours()+"").padStart(2,"0"),l=(o.getMinutes()+"").padStart(2,"0"),p=(o.getSeconds()+"").padStart(2,"0");return""+r+a+i+a+c+" "+s+":"+l+":"+p},e.b=function(t){var e=void 0===t?{name:"\u5c0f\u660e",age:13}:t,n=e.name,a=e.age;return n+"\u4eca\u5e74"+a+"\u5c81\u4e86"},e.a=function(){"Notification"in window?"granted"===Notification.permission?t():"default"===Notification.permission?Notification.requestPermission().then(function(e){"granted"===e?t():"denied"===e&&console.warn("\u62d2\u7edd\u901a\u77e5\uff01")}):"denied"===Notification.permission&&console.warn("\u62d2\u7edd\u901a\u77e5\uff01"):console.log("\u6d4f\u89c8\u5668\u4e0d\u652f\u6301Notification!");function t(){var t=new Notification("\u63d0\u793a",{body:"\u4f60\u8981\u7684\u989d\u90fd\u5728\u8fd9\u91cc\uff01",icon:"img/store-bg.png"});t.onclick=function(){console.log("\u70b9\u51fb\u4e86\u901a\u77e5\uff01")}}}},60:function(t,e,n){"use strict";var a=n(0),o=(n.n(a),n(61)),r=n(59),i=a.useState,c=a.useEffect;e.a=function(t){var e=t.text,n=Object(r.b)(),s=i(Object(r.c)({timeStamp:Date.now(),splitChar:"/"})),l=s[0],p=s[1],A=setInterval(function(){p(Object(r.c)({timeStamp:Date.now(),splitChar:"/"}))},1e3);c(function(){return function(){clearInterval(A)}});var d={year:(new Date).getFullYear(),month:(new Date).getMonth()+1};return a.createElement("section",null,e,a.createElement("div",null,"\u65f6\u95f4\uff1a",l),n,a.createElement(o.a,{year:d.year,month:d.month}))}},61:function(t,e,n){"use strict";var a=n(0),o=(n.n(a),n(59)),r=n(62),i=n(63),c=n.n(i),s=a.useEffect,l=a.useState;e.a=function(t){var e=["\u65e5","\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d"],n=l(t),i=n[0],p=n[1],A=l([[]]),d=A[0],f=A[1],m=l(Object(o.c)({timeStamp:Date.now()}).split(" ")[0]),u=m[0],h=m[1];function g(t){var e=i.year,n=i.month,a={year:e,month:n};"prev"===t&&(n>1?a={year:e,month:+n-1}:1===n&&(a={year:+e-1,month:12})),"next"===t&&(n<12?a={year:e,month:+n+1}:12===n&&(a={year:+e+1,month:1})),setTimeout(function(){p(a),f(Object(r.a)(a))},0)}function y(t){var e=t.year,n=t.month,a=t.date,o=Date.now(),i=Object(r.b)(o),c=i.year,s=i.month,l=i.date;return e===c&&n===s&&a===l}return s(function(){Object(o.a)(),f(Object(r.a)(t))},[]),a.createElement("section",{className:c.a.calendar,"data-month":i.month},a.createElement("div",{className:c.a["year-month"]},a.createElement("span",{onClick:function(){return g("prev")}},"\u300a"),a.createElement("div",null,i.year,"/",(i.month+"").padStart(2,"0")),a.createElement("span",{onClick:function(){return g("next")}},"\u300b")),a.createElement("div",{className:c.a.weekday},e.map(function(t,n){return a.createElement("div",{key:n,className:0===n||n===e.length-1?c.a.weekend:""},t)})),a.createElement("div",{className:c.a["month-day"]},d.map(function(t,e){return a.createElement("section",{className:c.a["week-item"],key:e},t.map(function(t,e){return a.createElement("div",{key:e,className:c.a["date-item"]+" "+(y(t)?c.a["is-today"]:"")+" "+(function(t){var e=t.year,n=t.month,a=t.date,o=u.split("-"),r=o[0],i=o[1],c=o[2];return+r===e&&+i===n&&+c===a}(t)?c.a["active-date"]:""),onTouchStart:function(){return function(t){var e=t.year,n=t.month,a=t.date;a&&h(e+"-"+n+"-"+a)}(t)}},a.createElement("div",null,y(t)?"\u4eca\u5929":t.date))}))})))}},62:function(t,e,n){"use strict";function a(t){var e=t.year,n=t.month,a=t.date,r=o(new Date(e+"/"+n+"/"+a).getTime()),i=r.year,c=r.month,s=r.date;return e===i&&n===c&&a===s}function o(t){var e=new Date(t);return{year:e.getFullYear(),month:e.getMonth()+1,date:e.getDate()}}e.a=function(t){var e=void 0===t?{year:(new Date).getFullYear(),month:(new Date).getMonth()+1}:t,n=e.year,o=e.month,r=new Array(7).fill(""),i=new Date(n+"-"+o+"-01").getDay(),c=[[],[],[],[],[],[]];return r.map(function(t,e){c[0].push({year:n,month:o,date:e<i?"":e===i?1:c[0][e-1].date+1}),c[1].push({year:n,month:o,date:7-i+e+1}),c[2].push({year:n,month:o,date:c[1][e].date+7}),c[3].push({year:n,month:o,date:c[2][e].date+7}),a({year:n,month:o,date:c[3][e].date+7})?c[4].push({year:n,month:o,date:c[3][e].date+7}):c[4].push(""),a({year:n,month:o,date:c[4][e].date+7})?c[5].push({year:n,month:o,date:c[4][e].date+7}):c[5].push("")}),c.filter(function(t){return t[0]})},e.b=o},63:function(t,e,n){var a=n(64);"string"===typeof a&&(a=[[t.i,a,""]]);var o={hmr:!0,transform:void 0};n(52)(a,o);a.locals&&(t.exports=a.locals)},64:function(t,e,n){(e=t.exports=n(51)(void 0)).push([t.i,".calendar__ATftkf {\n  position: relative;\n  padding: 20px 4px;\n  color: #2b2b2b;\n  margin-top: attr(data-px); }\n  .calendar__ATftkf::before {\n    content: attr(data-month);\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: #f1f1f1;\n    font-size: 70px;\n    z-index: -1; }\n\n.year-month__2ASAwR {\n  display: flex;\n  justify-content: space-between;\n  text-align: center; }\n  .year-month__2ASAwR > div {\n    flex: 2; }\n  .year-month__2ASAwR > span {\n    flex: 1; }\n\n.weekday__nP5USm {\n  display: flex;\n  justify-content: flex-start;\n  padding: 8px 0;\n  color: #999; }\n  .weekday__nP5USm > div {\n    flex: 1;\n    text-align: center; }\n  .weekday__nP5USm .weekend__1wqiWA {\n    color: lightcoral; }\n\n.week-item__2nhQvl {\n  display: flex;\n  justify-content: flex-start; }\n\n.date-item__2FWmwW {\n  flex: 1;\n  padding: 12px 0;\n  text-align: center; }\n\n.is-today__38-OO- {\n  font-size: 80%; }\n  .is-today__38-OO-::before {\n    background: lightcoral;\n    opacity: .5; }\n\n.active-date__1hg6Lx::before {\n  opacity: 1; }\n\n.is-today__38-OO-,\n.active-date__1hg6Lx {\n  position: relative;\n  color: #fff; }\n  .is-today__38-OO-::before,\n  .active-date__1hg6Lx::before {\n    content: '';\n    width: 40px;\n    height: 40px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    display: block;\n    border-radius: 40px;\n    background: linear-gradient(-45deg, #f1a884, lightcoral);\n    box-shadow: 0 1px 6px -1px lightcoral;\n    z-index: -1; }\n",""]),e.locals={calendar:"calendar__ATftkf","year-month":"year-month__2ASAwR",weekday:"weekday__nP5USm",weekend:"weekend__1wqiWA","week-item":"week-item__2nhQvl","date-item":"date-item__2FWmwW","is-today":"is-today__38-OO-","active-date":"active-date__1hg6Lx"}},65:function(t,e,n){var a=n(66);"string"===typeof a&&(a=[[t.i,a,""]]);var o={hmr:!1,transform:void 0};n(52)(a,o);a.locals&&(t.exports=a.locals)},66:function(t,e,n){(t.exports=n(51)(!0)).push([t.i,".App{text-align:center}.App-logo{-webkit-animation:App-logo-spin infinite 20s linear;animation:App-logo-spin infinite 20s linear;height:80px}.App-header{background-color:#222;height:150px;padding:20px;color:#fff}.App-title{font-size:1.5em}.App-intro{font-size:large}@-webkit-keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes App-logo-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}","",{version:3,sources:["D:/code/react-ts/src/App.css"],names:[],mappings:"AAAA,KACE,iBAAmB,CACpB,AAED,UACE,oDAAqD,AAC7C,4CAA6C,AACrD,WAAa,CACd,AAED,YACE,sBAAuB,AACvB,aAAc,AACd,aAAc,AACd,UAAa,CACd,AAED,WACE,eAAiB,CAClB,AAED,WACE,eAAiB,CAClB,AAED,iCACE,GAAO,+BAAgC,AAAC,sBAAwB,CAAE,AAClE,GAAK,gCAAkC,AAAC,uBAA0B,CAAE,CACrE,AAED,yBACE,GAAO,+BAAgC,AAAC,sBAAwB,CAAE,AAClE,GAAK,gCAAkC,AAAC,uBAA0B,CAAE,CACrE",file:"App.css",sourcesContent:[".App {\n  text-align: center;\n}\n\n.App-logo {\n  -webkit-animation: App-logo-spin infinite 20s linear;\n          animation: App-logo-spin infinite 20s linear;\n  height: 80px;\n}\n\n.App-header {\n  background-color: #222;\n  height: 150px;\n  padding: 20px;\n  color: white;\n}\n\n.App-title {\n  font-size: 1.5em;\n}\n\n.App-intro {\n  font-size: large;\n}\n\n@-webkit-keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n\n@keyframes App-logo-spin {\n  from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n  to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.b21b16e5.chunk.js.map