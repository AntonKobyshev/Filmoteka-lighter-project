!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},t=n.parcelRequired7c6;null==t&&((t=function(e){if(e in i)return i[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){a[e]=n},n.parcelRequired7c6=t);var s,r=t("bpxeT"),o=t("2TvXO"),c=t("1ubxI"),l=t("cokon"),d=t("gQOBw"),u=t("fkNhc"),f=t("1HnB8");function m(n){return n.map((function(n){var i,a=n.poster_path,t=n.title,r=n.name,o=n.release_date,c=n.first_air_date,l=n.genre_ids,d=n.genres,u=n.vote_average,f=n.id;return d&&(i=d.map((function(e){return e.name})).join(", ")),l&&(i=e(s).filter((function(e){var n=e.id;return l.includes(n)})).map((function(e){return e.name})).join(", ")),'<li class="films__item" data-id='.concat(f,'>\n                \n                <img class="films__img" src=https://image.tmdb.org/t/p/original').concat(a,' alt="').concat(t||r,'" loading="lazy">\n                  <div class="films__description">\n                  <p class="films__title">').concat(t||r,'</p>\n                  <div class="films__meta">\n                    <p class="films__genres">').concat(i||"Action",'</p>\n                    <p class="films__data">').concat((o||c||"2023").slice(0,4),'</p>\n                    <span class="films__rating visually-hidden">').concat(u||"-","</span>\n                  </div>\n                </div>\n            </li>")})).join("")}s=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');var v=document.querySelector(".library__container-list");function p(e){v.innerHTML=m(e)}var g=t("6QfM3"),h=t("8UO9k"),y=t("7rQOT"),_=(0,u.initializeApp)(f.firebaseConfig),L=(0,l.getDatabase)(_),b=(0,d.getAuth)(_);new(0,g.default)({queue:{},watched:{}});var w=new(0,c.API_service),x=document.querySelector("#auth"),k=document.querySelector(".js-watched"),q=document.querySelector(".js-queue"),M=document.querySelector(".library__container-list"),O=document.querySelector(".library__mes");function T(){k.classList.contains("current")||(y.Loading.pulse({svgColor:"orange"}),(0,d.onAuthStateChanged)(b,(function(e){if(e){var n="users/".concat(e.uid,"/lib/watched/");(0,l.get)((0,l.ref)(L,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());O.classList.contains("visually-hidden")||O.classList.add("visually-hidden"),A(n)}else O.classList.contains("visually-hidden")&&O.classList.remove("visually-hidden"),M.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)})),y.Loading.remove()}})),k.classList.add("is-active"),q.classList.remove("is-active"))}function A(e){return S.apply(this,arguments)}function S(){return S=e(r)(e(o).mark((function n(i){var a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,y.Loading.pulse({svgColor:"orange"}),a=i.map(function(){var n=e(r)(e(o).mark((function n(i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w.id=i,e.next=3,w.fetchMovieById();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=5,Promise.all(a);case 5:p(n.sent),y.Loading.remove(),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])}))),S.apply(this,arguments)}q.addEventListener("click",(function(){if(q.classList.contains("is-active"))return;q.classList.add("is-active"),k.classList.remove("is-active"),y.Loading.pulse({svgColor:"orange"}),(0,d.onAuthStateChanged)(b,(function(e){if(e){var n="users/".concat(e.uid,"/lib/queue/");(0,l.get)((0,l.ref)(L,n)).then((function(e){if(e.exists()){var n=Object.keys(e.val());O.classList.contains("visually-hidden")||O.classList.add("visually-hidden"),A(n)}else O.classList.contains("visually-hidden")&&O.classList.remove("visually-hidden"),M.innerHTML="",console.log("No data available")})).catch((function(e){console.error(e)}))}})),y.Loading.remove()})),k.addEventListener("click",T),x.addEventListener("click",h.onOpenModalAuth),T()}();
//# sourceMappingURL=library.569974d1.js.map
