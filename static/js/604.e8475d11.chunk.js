"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[604],{4604:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(2982);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var i=t(5861),c=t(885),s=t(7757),f=t.n(s),p=t(2791),d=t(3504),l="HomePage_wraper__oIsb2",v=t(8197),h=t(184),m=function(){var e=(0,p.useState)({items:[],loading:!1,error:null}),r=(0,c.Z)(e,2),t=r[0],a=r[1];(0,p.useEffect)((function(){var e=function(){var e=(0,i.Z)(f().mark((function e(){var r,t;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a((function(e){return o(o({},e),{},{loading:!0,error:null})})),e.next=4,(0,v.Df)();case 4:r=e.sent,t=r.results,a((function(e){return o(o({},e),{},{items:[].concat((0,n.Z)(e.items),(0,n.Z)(t))})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),a((function(r){return o(o({},r),{},{error:e.t0})}));case 12:return e.prev=12,a((function(e){return o(o({},e),{},{loading:!1})})),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var u=t.items,s=t.loading,m=t.error,b=u.map((function(e){var r=e.id,t=e.title,n=e.original_name;return(0,h.jsx)("li",{children:(0,h.jsx)(d.rU,{to:"/movies/".concat(r),children:t||n})},r)}));return(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h2",{children:"Trending today"}),(0,h.jsx)("ul",{children:b}),s&&(0,h.jsx)("p",{children:"...load movies"}),m&&(0,h.jsx)("p",{children:"...Movies load failed"})]})}},8197:function(e,r,t){t.d(r,{Df:function(){return c},IQ:function(){return p},IR:function(){return s},Jh:function(){return d},Pg:function(){return f}});var n=t(5861),a=t(7757),u=t.n(a),o=t(4569),i=t.n(o),c=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/trending/all/day?api_key=d320fda9f0a654278233a1e86d74d04d");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/search/movie?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&query=".concat(r,"&page=1&include_adult=false"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},2982:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(907);var a=t(181);function u(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=604.e8475d11.chunk.js.map