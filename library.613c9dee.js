!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=i);var r,s=i("bpxeT"),o=i("2TvXO"),c=i("1ubxI"),l=i("cokon"),d=i("gQOBw"),u=i("fkNhc"),f=i("1HnB8");function m(n){return n.map((function(n){var t,a=n.poster_path,i=n.title,s=n.name,o=n.release_date,c=n.first_air_date,l=n.genre_ids,d=n.genres,u=n.vote_average,f=n.id;return d&&(t=d.map((function(e){return e.name})).join(", ")),l&&(t=e(r).filter((function(e){var n=e.id;return l.includes(n)})).map((function(e){return e.name})).join(", ")),'<li class="films__item" data-id='.concat(f,'>\n                \n                <img class="films__img" src=https://image.tmdb.org/t/p/original').concat(a,' alt="').concat(i||s,'" loading="lazy">\n                  <div class="films__description">\n                  <p class="films__title">').concat(i||s,'</p>\n                  <p class="movie-card__additionaly">').concat(t||"Action","  |  ").concat((o||c||"2023").slice(0,4),'</p>\n                    <span class="films__rating visually-hidden">').concat(u||"-","</span>\n                  </div>\n                </div>\n            </li>")})).join("")}r=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');var v=document.querySelector(".library__container-list");function p(e){v.innerHTML=m(e)}var g=i("6QfM3"),h=i("8UO9k"),y=i("37FUf"),_=i("jcFG7");i("6JpON");var b=(0,u.initializeApp)(f.firebaseConfig),S=(0,l.getDatabase)(b),L=(0,d.getAuth)(b);new(0,g.default)({queue:{},watched:{}});var w=new(0,c.API_service),x=document.querySelector("#auth"),I=document.querySelector(".js-watched"),q=document.querySelector(".js-queue"),M=document.querySelector(".library__container-list"),O=document.querySelector(".library__mes");function T(){if(!I.classList.contains("current")){var e=y.spinerInit("body");(0,d.onAuthStateChanged)(L,(function(e){if(e){var n="users/".concat(e.uid,"/lib/watched/");(0,l.get)((0,l.ref)(S,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());localStorage.setItem("fetchType","watched"),localStorage.setItem("totalPages",Math.ceil(n.length/20));var t=localStorage.getItem("totalPages");(0,_.renderPagination)(t),localStorage.setItem("watched",JSON.stringify(e.val())),O.classList.contains("visually-hidden")||O.classList.add("visually-hidden"),k(n)}else O.classList.contains("visually-hidden")&&O.classList.remove("visually-hidden"),M.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),y.removeSpiner(e),I.classList.add("is-active"),q.classList.remove("is-active")}}function k(e){return A.apply(this,arguments)}function A(){return A=e(s)(e(o).mark((function n(t){var a,i,r,c,l,d,u=arguments;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:1,n.prev=1,i=y.spinerInit("body"),console.log("spinner on"),r=20*(a-1),c=20*a,l=t.slice(r,c),d=l.map(function(){var n=e(s)(e(o).mark((function n(t){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.id=t,e.next=3,w.fetchMovieById();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=10,Promise.all(d);case 10:p(n.sent),console.log("spinner off"),y.removeSpiner(i),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(1),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[1,16]])}))),A.apply(this,arguments)}q.addEventListener("click",(function(){if(q.classList.contains("is-active"))return;q.classList.add("is-active"),I.classList.remove("is-active");var e=y.spinerInit("body");(0,d.onAuthStateChanged)(L,(function(e){if(e){var n="users/".concat(e.uid,"/lib/queue/");(0,l.get)((0,l.ref)(S,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());localStorage.setItem("fetchType","queue"),localStorage.setItem("totalPages",Math.ceil(n.length/20));var t=localStorage.getItem("totalPages");(0,_.renderPagination)(t),localStorage.setItem("queued",JSON.stringify(e.val())),O.classList.contains("visually-hidden")||O.classList.add("visually-hidden"),k(n)}else O.classList.contains("visually-hidden")&&O.classList.remove("visually-hidden"),M.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),y.removeSpiner(e)})),I.addEventListener("click",T),x.addEventListener("click",h.onOpenModalAuth),T()}();
//# sourceMappingURL=library.613c9dee.js.map
