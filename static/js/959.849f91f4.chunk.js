"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[959],{959:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(439),a=n(689),s=n(87),c=n(791),i=n(905),u=n(502),o="MovieInfo_movieInfoContainner__8HDKh",l="MovieInfo_movieInfoText__TnfAD",p="MovieInfo_genresList__XamDA",f="MovieInfo_genreItem__3iPen",d=n(184),h=function(e){var t=e.movie,n=t.poster_path,r=t.title,a=t.overview,s=t.release_date,c=t.genres,i=s.slice(0,4);return(0,d.jsxs)("div",{className:o,children:[(0,d.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500".concat(n):u,alt:"poster",style:{width:264,height:426}}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("h1",{children:[r,"(",i,")"]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:a}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("ul",{className:p,children:c.map((function(e){var t=e.id,n=e.name;return(0,d.jsx)("li",{className:f,children:n},t)}))})]})]})},m=n(33),v=function(){var e,t,n=(0,a.UO)().movieId,u=(0,c.useState)(),o=(0,r.Z)(u,2),l=o[0],p=o[1],f=(0,a.TH)(),v=(0,c.useRef)(null!==(e=null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){(0,i.Pg)(n).then((function(e){return p(e)})).catch((function(e){return console.log(e)}))}),[n]),(0,d.jsx)("main",{children:(0,d.jsx)("section",{className:m.Z.section,children:(0,d.jsxs)("div",{className:m.Z.containeer,children:[(0,d.jsx)(s.rU,{to:v.current,children:(0,d.jsx)("button",{className:m.Z.buttonBack,type:"button",children:"Go back"})}),l&&(0,d.jsx)(h,{movie:l}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)(c.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(a.j3,{})})]})})})}},905:function(e,t,n){n.d(t,{Gb:function(){return i},M1:function(){return f},Pg:function(){return l},_L:function(){return u},qF:function(){return v},tx:function(){return h}});var r=n(861),a=n(757),s=n.n(a),c=n(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d063a3c1ffdc1b15e46a20f479fc1290"}}),i="https://image.tmdb.org/t/p/w500";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/movie/day");case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={query:t,include_adults:!1,language:"es-US",page:1},e.next=3,c.get("search/movie",{params:n});case 3:return r=e.sent,a=r.data,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},33:function(e,t){t.Z={section:"page_styles_section__yCKPn",containeer:"page_styles_containeer__WMJX4",buttonBack:"page_styles_buttonBack__mWl5k"}},502:function(e,t,n){e.exports=n.p+"static/media/logo_imt_small2_medium.f147cce9b72afa444184.jpg"}}]);
//# sourceMappingURL=959.849f91f4.chunk.js.map