!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},t={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in t){var n=t[e];delete t[e];var a={id:e,exports:{}};return i[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=a);var r,s=a("bpxeT"),o=a("2TvXO"),c=a("1ubxI"),l=a("cokon"),d=a("gQOBw"),u=a("fkNhc"),f=a("1HnB8");function m(n){return n.map((function(n){var i,t=n.poster_path,a=n.title,s=n.name,o=n.release_date,c=n.first_air_date,l=n.genre_ids,d=n.genres,u=n.vote_average,f=n.id;return d&&(i=d.map((function(e){return e.name})).join(", ")),l&&(i=e(r).filter((function(e){var n=e.id;return l.includes(n)})).map((function(e){return e.name})).join(", ")),'<li class="films__item" data-id='.concat(f,'>\n                \n                <img class="films__img" src=https://image.tmdb.org/t/p/original').concat(t,' alt="').concat(a||s,'" loading="lazy">\n                  <div class="films__description">\n                  <p class="films__title">').concat(a||s,'</p>\n                  <p class="movie-card__additionaly">').concat(i||"Action","  |  ").concat((o||c||"2023").slice(0,4),'</p>\n                    <span class="films__rating visually-hidden">').concat(u||"-","</span>\n                  </div>\n                </div>\n            </li>")})).join("")}r=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');var v=document.querySelector(".library__container-list");function p(e){v.innerHTML=m(e)}var g=a("6QfM3"),h=a("8UO9k"),y=a("7rQOT"),_=(0,u.initializeApp)(f.firebaseConfig),L=(0,l.getDatabase)(_),b=(0,d.getAuth)(_);new(0,g.default)({queue:{},watched:{}});var w=new(0,c.API_service),x=document.querySelector("#auth"),S=document.querySelector(".js-watched"),O=document.querySelector(".js-queue"),q=document.querySelector(".library__container-list"),k=document.querySelector(".library__mes");function M(){S.classList.contains("current")||(y.Loading.pulse({svgColor:"orange"}),(0,d.onAuthStateChanged)(b,(function(e){if(e){var n="users/".concat(e.uid,"/lib/watched/");(0,l.get)((0,l.ref)(L,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());localStorage.setItem("watched",JSON.stringify(n)),k.classList.contains("visually-hidden")||k.classList.add("visually-hidden"),T(n)}else k.classList.contains("visually-hidden")&&k.classList.remove("visually-hidden"),q.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)})),y.Loading.remove()}})),S.classList.add("is-active"),O.classList.remove("is-active"))}function T(e){return A.apply(this,arguments)}function A(){return A=e(s)(e(o).mark((function n(i){var t,a,r,c,l,d=arguments;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:1,n.prev=1,y.Loading.pulse({svgColor:"orange"}),a=20*(t-1),r=20*t,c=i.slice(a,r),l=c.map(function(){var n=e(s)(e(o).mark((function n(i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.id=i,e.next=3,w.fetchMovieById();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=9,Promise.all(l);case 9:p(n.sent),y.Loading.remove(),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(1),console.log(n.t0);case 17:case"end":return n.stop()}}),n,null,[[1,14]])}))),A.apply(this,arguments)}O.addEventListener("click",(function(){if(O.classList.contains("is-active"))return;O.classList.add("is-active"),S.classList.remove("is-active"),y.Loading.pulse({svgColor:"orange"}),(0,d.onAuthStateChanged)(b,(function(e){if(e){var n="users/".concat(e.uid,"/lib/queue/");(0,l.get)((0,l.ref)(L,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());localStorage.setItem("queued",JSON.stringify(n)),k.classList.contains("visually-hidden")||k.classList.add("visually-hidden"),T(n)}else k.classList.contains("visually-hidden")&&k.classList.remove("visually-hidden"),q.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),y.Loading.remove()})),S.addEventListener("click",M),x.addEventListener("click",h.onOpenModalAuth),M()}();
//# sourceMappingURL=library.737a74c0.js.map
