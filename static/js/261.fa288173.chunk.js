"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[261],{8261:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(5861),a=n(885),s=n(7757),i=n.n(s),c=n(2791),u=n(3504),o=n(6871),d=n(8197),p="MovieDetails_datails__t6nSZ",v="MovieDetails_poster__Gw9Qy",l="MovieDetails_title__RBndM",f=n(184),h=function(e){var t=e.poster_path,n=e.title,r=e.overview,a=e.vote_average,s=e.genres,i=Math.round(10*Number(a)),c=s.map((function(e){return e.name})).join(" ");return(0,f.jsxs)("div",{className:p,children:[(0,f.jsx)("div",{className:v,children:t&&(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w220_and_h330_face".concat(t),alt:""})}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("h3",{children:n}),(0,f.jsxs)("p",{children:["User Score: ",i," %"]}),(0,f.jsx)("h4",{children:"Overview"}),(0,f.jsx)("p",{children:r}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)("p",{children:c})]})]})},g="MovieDetailsPage_menu__twLyt",_="MovieDetailsPage_link__rhdjc",m="MovieDetailsPage_active__52Wu-",x=function(){var e=(0,c.useState)(!1),t=(0,a.Z)(e,2),n=t[0],s=t[1],p=(0,c.useState)(null),v=(0,a.Z)(p,2),l=v[0],x=v[1],w=(0,c.useState)({}),j=(0,a.Z)(w,2),k=j[0],b=j[1],y=(0,o.UO)().movieId,Z=(0,o.s0)(),M=function(e){return e.isActive?"".concat(_," ").concat(m):_};(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s(!0),e.next=4,(0,d.Pg)(y);case 4:t=e.sent,console.log(t),b(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),x(e.t0);case 12:return e.prev=12,s(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var S=k.poster_path,D=k.title,N=k.overview,U=k.vote_average,O=k.genres;return(0,f.jsxs)("div",{children:[(0,f.jsx)("button",{onClick:function(){return Z(-1)},children:"Go back"}),Object.keys(k).length>0&&(0,f.jsx)(h,{poster_path:S,title:D,overview:N,vote_average:U,genres:O}),n&&(0,f.jsx)("p",{children:"...load movies"}),l&&(0,f.jsx)("p",{children:"...Movies load failed"}),(0,f.jsxs)("div",{className:g,children:[(0,f.jsx)(u.OL,{className:M,to:"/movies/".concat(y,"/cast"),children:"Cast"}),(0,f.jsx)(u.OL,{className:M,to:"/movies/".concat(y,"/reviews"),children:"Reviews"})]}),(0,f.jsx)(o.j3,{})]})}},8197:function(e,t,n){n.d(t,{Df:function(){return u},IQ:function(){return p},IR:function(){return o},Jh:function(){return v},Pg:function(){return d}});var r=n(5861),a=n(7757),s=n.n(a),i=n(4569),c=n.n(i),u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/trending/all/day?api_key=d320fda9f0a654278233a1e86d74d04d");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/search/movie?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&query=".concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=d320fda9f0a654278233a1e86d74d04d&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=261.fa288173.chunk.js.map