function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n);var s,l=n("lOKsE"),o=n("jAzyG"),r=n("eyjy7"),c=n("gKkQl"),d=n("fEVjq");function u(t){return t.map((({poster_path:t,title:i,name:a,release_date:n,first_air_date:l,genre_ids:o,genres:r,vote_average:c,id:d})=>{let u;return r&&(u=r.map((({name:e})=>e)).join(", ")),o&&(u=e(s).filter((({id:e})=>o.includes(e))).map((({name:e})=>e)).join(", ")),`<li class="films__item" data-id=${d}>\n                \n                <img class="films__img" src=https://image.tmdb.org/t/p/original${t} alt="${i||a}" loading="lazy">\n                  <div class="films__description">\n                  <p class="films__title">${i||a}</p>\n                  <p class="movie-card__additionaly">${u||"Action"}  |  ${(n||l||"2023").slice(0,4)}</p>\n                    <span class="films__rating visually-hidden">${c||"-"}</span>\n                  </div>\n                </div>\n            </li>`})).join("")}s=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');const m=document.querySelector(".library__container-list");function g(e){m.innerHTML=u(e)}var f=n("2tZq5"),y=n("e4m3s"),v=n("bITeO"),h=n("2nhTy");n("7Y9D8");const p=(0,c.initializeApp)(d.firebaseConfig),_=(0,o.getDatabase)(p),S=(0,r.getAuth)(p);new(0,f.default)({queue:{},watched:{}});const L=new(0,l.API_service),b=document.querySelector("#auth"),q=document.querySelector(".js-watched"),w=document.querySelector(".js-queue"),I=document.querySelector(".library__container-list"),M=document.querySelector(".library__mes");function T(){if(q.classList.contains("current"))return;let e=v.spinerInit("body");(0,r.onAuthStateChanged)(S,(e=>{if(e){const t=`users/${e.uid}/lib/watched/`;(0,o.get)((0,o.ref)(_,t)).then((e=>{if(e.exists()){const t=Object.keys(e.val());localStorage.setItem("fetchType","watched"),localStorage.setItem("totalPages",Math.ceil(t.length/20));const i=localStorage.getItem("totalPages");(0,h.renderPagination)(i),localStorage.setItem("watched",JSON.stringify(e.val())),M.classList.contains("visually-hidden")||M.classList.add("visually-hidden"),A(t,localStorage.getItem("currentPage"))}else M.classList.contains("visually-hidden")&&M.classList.remove("visually-hidden"),I.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)}))}})),v.removeSpiner(e),q.classList.add("is-active"),w.classList.remove("is-active")}async function A(e,t=1){try{let i=v.spinerInit("body");console.log("spinner on");const a=20*(t-1),n=20*t,s=e.slice(a,n).map((async e=>(L.id=e,await L.fetchMovieById())));g(await Promise.all(s)),console.log("spinner off"),v.removeSpiner(i)}catch(e){console.log(e)}}w.addEventListener("click",(function(){if(w.classList.contains("is-active"))return;w.classList.add("is-active"),q.classList.remove("is-active");let e=v.spinerInit("body");(0,r.onAuthStateChanged)(S,(e=>{if(e){const t=`users/${e.uid}/lib/queue/`;(0,o.get)((0,o.ref)(_,t)).then((e=>{if(e.exists()){const t=Object.keys(e.val());localStorage.setItem("fetchType","queue"),localStorage.setItem("totalPages",Math.ceil(t.length/20));const i=localStorage.getItem("totalPages");(0,h.renderPagination)(i),localStorage.setItem("queued",JSON.stringify(e.val())),M.classList.contains("visually-hidden")||M.classList.add("visually-hidden"),A(t)}else M.classList.contains("visually-hidden")&&M.classList.remove("visually-hidden"),I.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)}))}})),v.removeSpiner(e)})),q.addEventListener("click",T),b.addEventListener("click",y.onOpenModalAuth),T();
//# sourceMappingURL=library.d7ba881d.js.map