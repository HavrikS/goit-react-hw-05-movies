"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[748],{7748:function(e,t,n){n.r(t);var r=n(2982),a=n(5861),u=n(885),i=n(7757),o=n.n(i),c=n(2791),s=n(8197),f=n(6871),d=n(184);t.default=function(){var e=(0,c.useState)(!1),t=(0,u.Z)(e,2),n=t[0],i=t[1],p=(0,c.useState)(null),l=(0,u.Z)(p,2),h=l[0],v=l[1],m=(0,c.useState)([]),g=(0,u.Z)(m,2),y=g[0],x=g[1],b=(0,c.useState)([]),w=(0,u.Z)(b,2),k=w[0],Z=w[1],S=(0,c.useState)(!1),_=(0,u.Z)(S,2),j=_[0],I=_[1],U=(0,f.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,a.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,(0,s.Jh)(U);case 4:t=e.sent,n=t.results,x((0,r.Z)(n)),I(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),v(e.t0);case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[U]),(0,c.useEffect)((function(){if(0!==y.length){var e=y.map((function(e){var t=e.id,n=e.content,r=e.author_details;return(0,d.jsxs)("li",{children:[(0,d.jsxs)("h4",{children:["Author: ",r.username]}),(0,d.jsx)("p",{children:n})]},t)}));Z(e)}}),[y]),(0,d.jsxs)("div",{children:[k.length>0?(0,d.jsx)("ul",{children:k}):j&&(0,d.jsx)("p",{children:"We don`t have any reviews for this movie."}),n&&(0,d.jsx)("p",{children:"...load information"}),h&&(0,d.jsx)("p",{children:"...Information load failed"})]})}},8197:function(e,t,n){n.d(t,{Df:function(){return c},IQ:function(){return d},IR:function(){return s},Jh:function(){return p},Pg:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),i=n(4569),o=n.n(i),c=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/trending/all/day?api_key=d320fda9f0a654278233a1e86d74d04d");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/search/movie?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},2982:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(907);var a=n(181);function u(e){return function(e){if(Array.isArray(e))return(0,r.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=748.31197635.chunk.js.map