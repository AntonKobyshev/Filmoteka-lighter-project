function e(e){return e&&e.__esModule?e.default:e}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=i.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var i=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,i.call(s.exports,s,s.exports),s.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,i){a[e]=i},i.parcelRequired7c6=s);var t,l=s("lOKsE"),o=s("jAzyG"),r=s("eyjy7"),d=s("gKkQl"),c=s("fEVjq");function u(i){return i.map((({poster_path:i,title:n,name:a,release_date:s,first_air_date:l,genre_ids:o,genres:r,vote_average:d,id:c})=>{let u;return r&&(u=r.map((({name:e})=>e)).join(", ")),o&&(u=e(t).filter((({id:e})=>o.includes(e))).map((({name:e})=>e)).join(", ")),`<li class="films__item" data-id=${c}>\n                \n                <img class="films__img" src=https://image.tmdb.org/t/p/original${i} alt="${n||a}" loading="lazy">\n                  <div class="films__description">\n                  <p class="films__title">${n||a}</p>\n                  <p class="movie-card__additionaly">${u||"Action"}  |  ${(s||l||"2023").slice(0,4)}</p>\n                    <span class="films__rating visually-hidden">${d||"-"}</span>\n                  </div>\n                </div>\n            </li>`})).join("")}t=JSON.parse('[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]');const m=document.querySelector(".library__container-list");function v(e){m.innerHTML=u(e)}var f=s("2tZq5"),y=s("e4m3s"),g=s("dSs1Y");const p=(0,d.initializeApp)(c.firebaseConfig),h=(0,o.getDatabase)(p),_=(0,r.getAuth)(p);new(0,f.default)({queue:{},watched:{}});const L=new(0,l.API_service),b=document.querySelector("#auth"),q=document.querySelector(".js-watched"),w=document.querySelector(".js-queue"),A=document.querySelector(".library__container-list"),S=document.querySelector(".library__mes");function j(){q.classList.contains("current")||(g.Loading.pulse({svgColor:"orange"}),(0,r.onAuthStateChanged)(_,(e=>{if(e){const i=`users/${e.uid}/lib/watched/`;(0,o.get)((0,o.ref)(h,i)).then((e=>{if(e.exists()){const i=Object.keys(e.val());S.classList.contains("visually-hidden")||S.classList.add("visually-hidden"),M(i)}else S.classList.contains("visually-hidden")&&S.classList.remove("visually-hidden"),A.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)})),g.Loading.remove()}})),q.classList.add("is-active"),w.classList.remove("is-active"))}async function M(e){try{g.Loading.pulse({svgColor:"orange"});const i=e.map((async e=>(L.id=e,await L.fetchMovieById())));v(await Promise.all(i)),g.Loading.remove()}catch(e){console.log(e)}}w.addEventListener("click",(function(){if(w.classList.contains("is-active"))return;w.classList.add("is-active"),q.classList.remove("is-active"),g.Loading.pulse({svgColor:"orange"}),(0,r.onAuthStateChanged)(_,(e=>{if(e){const i=`users/${e.uid}/lib/queue/`;(0,o.get)((0,o.ref)(h,i)).then((e=>{if(e.exists()){const i=Object.keys(e.val());S.classList.contains("visually-hidden")||S.classList.add("visually-hidden"),M(i)}else S.classList.contains("visually-hidden")&&S.classList.remove("visually-hidden"),A.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)}))}})),g.Loading.remove()})),q.addEventListener("click",j),b.addEventListener("click",y.onOpenModalAuth),j();
//# sourceMappingURL=library.508f1192.js.map
