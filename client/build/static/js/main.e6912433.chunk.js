/*! For license information please see main.e6912433.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(t,e,r){t.exports=r(136)},135:function(t,e,r){},136:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(9),i=r.n(o),c=r(182),l=r(20),u=r(172),s=r(139),f=r(174),p=r(187),h=r(175),d=r(35),m=r(168),v=r(171),g=Object(m.a)((function(t){return{appBar:{borderRadius:5,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center",justifyContent:"space-between"},brandContainer:{display:"flex",alignItems:"center",justifyContent:"space-between"},logout:{display:"flex",alignItems:"center",justifyContent:"space-between"},purple:{color:t.palette.getContrastText(v.a[500]),backgroundColor:v.a[500]}}})),y=r(81),b=r.n(y),w=r(16),E=r(12),x=r(82),O=function(){var t=g(),e=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),r=Object(l.a)(e,2),o=r[0],i=r[1],c=Object(w.b)(),m=Object(E.f)(),v=Object(E.g)();Object(n.useEffect)((function(){var t=null===o||void 0===o?void 0:o.token;t&&(1e3*Object(x.a)(t).exp<(new Date).getTime()&&y());i(JSON.parse(localStorage.getItem("profile")))}),[v]);var y=function(){c({type:"LOGOUT"}),m.push("/"),i(null)};return a.a.createElement(u.a,{className:t.appBar,position:"sticky",color:"inherit"},a.a.createElement("div",{className:t.brandContainer},a.a.createElement(s.a,{component:d.b,to:"/",className:t.heading,variant:"h2",align:"center"},"MemoGram"),a.a.createElement("img",{className:t.image,src:b.a,alt:"memories",height:"60"})),a.a.createElement(f.a,{className:t.toolbar,position:"static"},o?a.a.createElement("div",{className:t.profile},a.a.createElement(p.a,{className:t.purple,alt:o.result.name,src:o.result.imageUrl},o.result.name.charAt(0)),a.a.createElement(s.a,{className:t.userName,variant:"h6"},o.result.name),a.a.createElement(h.a,{variant:"contained",className:t.logout,onClick:y,color:"secondary"},"Logout")):a.a.createElement(h.a,{component:d.b,to:"/auth",variant:"contained",color:"primary"},"Sign In")))},j=r(186),L=r(181),k=Object(m.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),N=r(176),_=r(177),S=r(178),C=r(179),I=r(85),T=r.n(I),P=r(87),F=r.n(P),G=r(86),A=r.n(G),D=r(64),U=r.n(D),W=r(83),z=r.n(W),B=r(23),R=r(84),H=r.n(R).a.create({baseURL:"http://localhost:55555"});H.interceptors.request.use((function(t){return localStorage.getItem("profile")&&(t.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),t}));var J=function(t,e){return H.patch("/posts/".concat(t),e)},Y=function(t){return H.delete("/posts/".concat(t))},M=function(t){return H.patch("/posts/".concat(t,"/likePost"))},K=function(t){return H.post("/user/signIn",t)},q=function(t){return H.post("/user/signUp",t)};function V(){V=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var y=d.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var Q=function(t){return function(){var e=Object(B.a)(V().mark((function e(r){var n,a;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o=t,H.post("/posts",o);case 3:n=e.sent,a=n.data,r({type:"CREATE",payload:a}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}var o}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},X=function(t,e){return function(){var r=Object(B.a)(V().mark((function r(n){var a,o;return V().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,J(t,e);case 3:a=r.sent,o=a.data,n({type:"UPDATE",payload:o}),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(t){return r.apply(this,arguments)}}()},Z=JSON.parse(localStorage.getItem("profile")),$=function(t){var e,r,n=t.post,o=t.setCurrentId,i=k(),c=Object(w.b)(),l=function(){return n.likes.length>0?n.likes.find((function(t){var e,r;return t===((null===Z||void 0===Z||null===(e=Z.result)||void 0===e?void 0:e.googleId)||(null===Z||void 0===Z||null===(r=Z.result)||void 0===r?void 0:r._id))}))?a.a.createElement(a.a.Fragment,null,a.a.createElement(T.a,{fontSize:"small"}),"\xa0",n.likes.length>2?"You and ".concat(n.likes.length-1," others"):"".concat(n.likes.length," like").concat(n.likes.length>1?"s":"")):a.a.createElement(a.a.Fragment,null,a.a.createElement(U.a,{fontSize:"small"}),"\xa0",n.likes.length," ",1===n.likes.length?"Like":"Likes"):a.a.createElement(a.a.Fragment,null,a.a.createElement(U.a,{fontSize:"small"}),"\xa0Like")};return a.a.createElement(N.a,{className:i.card},a.a.createElement(_.a,{className:i.media,image:n.selectedFile,title:n.title}),a.a.createElement("div",{className:i.overlay},a.a.createElement(s.a,{variant:"h6"},n.name),a.a.createElement(s.a,{variant:"body2"},z()(n.createdAt).fromNow())),(null===Z||void 0===Z||null===(e=Z.result)||void 0===e?void 0:e._id)===(null===n||void 0===n?void 0:n.creator)&&a.a.createElement("div",{className:i.overlay2},a.a.createElement(h.a,{style:{color:"white"},size:"small",onClick:function(){o(n._id)}},a.a.createElement(A.a,{fontSize:"default"}))),";",a.a.createElement("div",{className:i.details},a.a.createElement(s.a,{variant:"body2",color:"textSecondary"},n.tags.map((function(t){return"#".concat(t," ")}))," ")),a.a.createElement(s.a,{className:i.title,variant:"h5",color:"gutterButton"},n.title," "),a.a.createElement(S.a,null,a.a.createElement(s.a,{className:i.title,variant:"body2",color:"textSecondary",component:"p"},n.message," ")),a.a.createElement(C.a,{className:i.cardActions},a.a.createElement(h.a,{size:"small",color:"primary",disabled:!(null===Z||void 0===Z?void 0:Z.result),onClick:function(){return c((t=n._id,function(){var e=Object(B.a)(V().mark((function e(r){return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M(t);case 3:r({type:"LIKE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var t}},a.a.createElement(l,null)),(null===Z||void 0===Z||null===(r=Z.result)||void 0===r?void 0:r._id)===(null===n||void 0===n?void 0:n.creator)&&a.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){var t;c((t=n._id,function(){var e=Object(B.a)(V().mark((function e(r){return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(t);case 3:r({type:"DELETE",payload:t}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()))}},a.a.createElement(F.a,{fontSize:"small"}),"Delete")))},tt=Object(m.a)((function(t){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:t.spacing(1)},actionDiv:{textAlign:"center"}}})),et=r(180),rt=function(t){var e=t.setCurrentId,r=tt(),n=Object(w.c)((function(t){return t.posts}));return n.length?a.a.createElement(L.a,{className:r.container,container:!0,alignItems:"stretch",spacing:3},n.map((function(t){return a.a.createElement(L.a,{key:t._id,item:!0,xs:12,sm:6,md:6},a.a.createElement($,{post:t,setCurrentId:e}))}))):a.a.createElement(et.a,null)},nt=r(8),at=Object(m.a)((function(t){return{root:{"& .MuiTextField-root":{margin:t.spacing(1)}},paper:{padding:t.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ot=r(88),it=r.n(ot),ct=r(95),lt=r(185);function ut(){ut=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var y=d.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var st=function(t){var e,r=t.currentId,o=t.setCurrentId,i=Object(w.c)((function(t){return r?t.posts.find((function(t){return t._id===r})):null})),c=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),u=Object(l.a)(c,2),f=u[0],p=u[1],d=at(),m=Object(w.b)(),v=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){i&&p(i)}),[i]);var g=function(){var t=Object(B.a)(ut().mark((function t(e){var n,a;return ut().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),r?(m(X(r,Object(nt.a)(Object(nt.a)({},f),{},{name:null===v||void 0===v||null===(n=v.result)||void 0===n?void 0:n.name}))),y()):(m(Q(Object(nt.a)(Object(nt.a)({},f),{},{name:null===v||void 0===v||null===(a=v.result)||void 0===a?void 0:a.name}))),y());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){o(0),p({title:"",message:"",tags:"",selectedFile:""})};return(null===v||void 0===v||null===(e=v.result)||void 0===e?void 0:e.name)?a.a.createElement(ct.a,{className:d.paper},a.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:g},a.a.createElement(s.a,{variant:"h6"},r?"Editing":"Creating"," memories"),a.a.createElement(lt.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:f.title,onChange:function(t){return p(Object(nt.a)(Object(nt.a)({},f),{},{title:t.target.value}))}}),a.a.createElement(lt.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,value:f.message,onChange:function(t){return p(Object(nt.a)(Object(nt.a)({},f),{},{message:t.target.value}))}}),a.a.createElement(lt.a,{name:"tags",variant:"outlined",label:"Tags",fullWidth:!0,value:f.tags,onChange:function(t){return p(Object(nt.a)(Object(nt.a)({},f),{},{tags:t.target.value.split(",")}))}}),a.a.createElement("div",{className:d.fileInput},a.a.createElement(it.a,{type:"file",multiple:!1,onDone:function(t){var e=t.base64;return p(Object(nt.a)(Object(nt.a)({},f),{},{selectedFile:e}))}})),a.a.createElement(h.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),a.a.createElement(h.a,{variant:"contained",color:"secondary",size:"small",onClick:y,fullWidth:!0},"clear"))):a.a.createElement("paper",{className:d.paper},a.a.createElement(s.a,{variant:"h6",align:"center"},"please sign in to create your own memories and to like"))},ft=r(41),pt=Object(m.a)((function(t){return Object(ft.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},t.breakpoints.down("md"),{mainContaier:{flexDirection:"column-reverse",display:"flex"}})})),ht=function(){var t=Object(n.useState)(null),e=Object(l.a)(t,2),r=e[0],o=e[1],i=pt(),u=Object(w.b)();return Object(n.useEffect)((function(){u(function(){var t=Object(B.a)(V().mark((function t(e){var r,n;return V().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,H.get("/posts");case 3:r=t.sent,n=r.data,e({type:"FETCH_ALL",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[r,u]),a.a.createElement(j.a,{in:!0},a.a.createElement(c.a,null,a.a.createElement(L.a,{className:i.mainContainer,container:!0,justify:"space-between",alignItems:"stretch",spacing:3},a.a.createElement(L.a,{item:!0,xs:12,sm:7},a.a.createElement(rt,{setCurrentId:o})),a.a.createElement(L.a,{item:!0,xs:12,sm:4},a.a.createElement(st,{currentId:r,setCurrentId:o})))))},dt=Object(m.a)((function(t){return{paper:{marginTop:t.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:t.spacing(2)},root:{"& .MuiTextField-root":{margin:t.spacing(1)}},avatar:{margin:t.spacing(1),backgroundColor:t.palette.secondary.main},form:{width:"100%",marginTop:t.spacing(3)},submit:{margin:t.spacing(3,0,2)},googleButton:{marginBottom:t.spacing(2)}}})),mt=r(91),vt=r.n(mt),gt=r(183),yt=r(184),bt=r(89),wt=r.n(bt),Et=r(90),xt=r.n(Et),Ot=function(t){var e=t.name,r=t.handleChange,n=t.label,o=t.half,i=t.autoFocus,c=t.type,l=t.handleShowPassword;return a.a.createElement(L.a,{item:!0,xs:12,sm:o?6:12},a.a.createElement(lt.a,{name:e,onChange:r,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:i,type:c,InputProps:"password"===e?{endAdornment:a.a.createElement(gt.a,{position:"end"},a.a.createElement(yt.a,{onClick:l},"password"===c?a.a.createElement(wt.a,null):a.a.createElement(xt.a,null)))}:null}))};function jt(){jt=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(_){l=function(t,e,r){return t[e]=r}}function u(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:E(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=u;var f={};function p(){}function h(){}function d(){}var m={};l(m,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==e&&r.call(g,o)&&(m=g);var y=d.prototype=p.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var a;n(this,"_invoke",{value:function(n,o){function i(){return new e((function(a,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(n,o,a,i)}))}return a=a?a.then(i,i):i()}})}function E(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return h.prototype=d,n(y,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:h,configurable:!0}),h.displayName=l(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(w.prototype),l(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),l(y,c,"Generator"),l(y,o,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var Lt={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},kt=function(){Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).CLIENT_ID;var t=Object(E.f)(),e=Object(w.b)(),r=dt(),o=Object(n.useState)(Lt),i=Object(l.a)(o,2),u=i[0],f=i[1],d=Object(n.useState)(!1),m=Object(l.a)(d,2),v=m[0],g=m[1],y=Object(n.useState)(v),b=Object(l.a)(y,2),x=(b[0],b[1],Object(n.useState)(!1)),O=Object(l.a)(x,2),j=O[0],k=O[1],N=function(t){f(Object(nt.a)(Object(nt.a)({},u),{},Object(ft.a)({},t.target.name,t.target.value)))};return a.a.createElement(c.a,{component:"main",maxWidth:"xs"},a.a.createElement(ct.a,{className:r.paper,elevation:3},a.a.createElement(p.a,{className:r.avatar},a.a.createElement(vt.a,null)),a.a.createElement(s.a,{component:"h1",variant:"h5"},v?"sign up":"sign in"),a.a.createElement("form",{className:r.form,onSubmit:function(r){r.preventDefault(),e(v?function(t,e){return function(){var r=Object(B.a)(jt().mark((function r(n){var a,o;return jt().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,q(t);case 3:a=r.sent,o=a.data,n({type:"AUTH",data:o}),e.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}()}(u,t):function(t,e){return function(){var r=Object(B.a)(jt().mark((function r(n){var a,o;return jt().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,K(t);case 3:a=r.sent,o=a.data,n({type:"AUTH",data:o}),e.push("/"),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),console.log(r.t0);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})));return function(t){return r.apply(this,arguments)}}()}(u,t))}},a.a.createElement(L.a,{container:!0,spacing:2},v&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ot,{name:"firstName",label:"First Name",handleChange:N,autoFocus:!0,half:!0}),a.a.createElement(Ot,{name:"lastName",label:"Last Name",handleChange:N,half:!0})),a.a.createElement(Ot,{name:"email",label:"Email Address",handleChange:N,type:"email"}),a.a.createElement(Ot,{name:"password",label:"password",handleChange:N,type:j?"text":"password",handleShowPassword:function(){return k(!j)}}),v&&a.a.createElement(Ot,{name:"confirmPassword",label:"Repeat Password",handleChange:N,type:"password"})),a.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:r.submit},v?"sign up":"sign in"),a.a.createElement(L.a,{container:!0,justifyContent:"flex-end"},a.a.createElement(L.a,{item:!0},a.a.createElement(h.a,{onClick:function(){f(Lt),g((function(t){return!t})),k(!1)}},v?"Already have an account? sign in":"Don't have an account?  sign up"))))))},Nt=(r(137),function(){return a.a.createElement(d.a,null,a.a.createElement(c.a,{maxwidth:"lg"},a.a.createElement(O,null),a.a.createElement(E.c,null,a.a.createElement(E.a,{path:"/",exact:!0,component:ht}),a.a.createElement(E.a,{path:"/auth",exact:!0,component:kt}))))}),_t=(r(135),r(47)),St=r(92),Ct=r(93),It=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(nt.a)({},null===e||void 0===e?void 0:e.data))),Object(nt.a)(Object(nt.a)({},t),{},{authData:null===e||void 0===e?void 0:e.data});case"LOGOUT":return localStorage.clear(),Object(nt.a)(Object(nt.a)({},t),{},{authData:null});default:return t}},Tt=Object(_t.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCH_ALL":return e.payload;case"CREATE":return[].concat(Object(Ct.a)(t),[e.payload]);case"UPDATE":return t.map((function(t){return t._id===e.payload._id?e.payload:t}));case"DELETE":return t.filter((function(t){return t._id!==e.payload}));case"LIKE":return t.map((function(t){return t._id===e.payload._id?e.payload:t}));default:return t}},auth:It}),Pt=Object(_t.d)(Tt,Object(_t.c)(Object(_t.a)(St.a)));i.a.render(a.a.createElement(w.a,{store:Pt},a.a.createElement(Nt,null)),document.getElementById("root"))},81:function(t,e,r){t.exports=r.p+"static/media/logo192.afbfa2f0.png"}},[[102,1,2]]]);
//# sourceMappingURL=main.e6912433.chunk.js.map