!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var r=i("bpxeT"),s=i("2TvXO"),o=i("1ubxI"),c=i("cokon"),l=i("gQOBw"),u=i("fkNhc"),d=i("1HnB8"),f=i("6fKxr"),v=i("6QfM3"),g=i("8UO9k"),h=i("37FUf"),p=i("jcFG7");i("6JpON");var y=(0,u.initializeApp)(d.firebaseConfig),m=(0,c.getDatabase)(y),b=(0,l.getAuth)(y);new(0,v.default)({queue:{},watched:{}});var S=new(0,o.API_service),L=document.querySelector("#auth"),w=document.querySelector(".js-watched"),x=document.querySelector(".js-queue"),I=document.querySelector(".library__container-list"),q=document.querySelector(".library__mes");function O(){if(!w.classList.contains("current")){var e=h.spinerInit("body");(0,l.onAuthStateChanged)(b,(function(e){if(e){var t="users/".concat(e.uid,"/lib/watched/");(0,c.get)((0,c.ref)(m,t)).then((function(e){if(e.exists()){var t=Object.keys(e.val());localStorage.setItem("fetchType","watched"),localStorage.setItem("totalPages",Math.ceil(t.length/20));var n=localStorage.getItem("totalPages");(0,p.renderPagination)(n),localStorage.setItem("watched",JSON.stringify(e.val())),q.classList.contains("visually-hidden")||q.classList.add("visually-hidden"),k(t,localStorage.getItem("currentPage"))}else q.classList.contains("visually-hidden")&&q.classList.remove("visually-hidden"),I.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),h.removeSpiner(e),w.classList.add("is-active"),x.classList.remove("is-active")}}function k(e){return M.apply(this,arguments)}function M(){return M=e(r)(e(s).mark((function t(n){var a,i,o,c,l,u,d,v=arguments;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=v.length>1&&void 0!==v[1]?v[1]:1,t.prev=1,i=h.spinerInit("body"),console.log("spinner on"),o=20*(a-1),c=20*a,l=n.slice(o,c),u=l.map(function(){var t=e(r)(e(s).mark((function t(n){return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S.id=n,e.next=3,S.fetchMovieById();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,Promise.all(u);case 10:d=t.sent,(0,f.default)(d),console.log("spinner off"),h.removeSpiner(i),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])}))),M.apply(this,arguments)}x.addEventListener("click",(function(){if(x.classList.contains("is-active"))return;x.classList.add("is-active"),w.classList.remove("is-active");var e=h.spinerInit("body");(0,l.onAuthStateChanged)(b,(function(e){if(e){var t="users/".concat(e.uid,"/lib/queue/");(0,c.get)((0,c.ref)(m,t)).then((function(e){if(e.exists()){var t=Object.keys(e.val());localStorage.setItem("fetchType","queue"),localStorage.setItem("totalPages",Math.ceil(t.length/20));var n=localStorage.getItem("totalPages");(0,p.renderPagination)(n),localStorage.setItem("queued",JSON.stringify(e.val())),q.classList.contains("visually-hidden")||q.classList.add("visually-hidden"),k(t)}else q.classList.contains("visually-hidden")&&q.classList.remove("visually-hidden"),I.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),h.removeSpiner(e)})),w.addEventListener("click",O),L.addEventListener("click",g.onOpenModalAuth),O()}();
//# sourceMappingURL=library.f0075a7a.js.map