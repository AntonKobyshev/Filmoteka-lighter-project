var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in a){var s=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,s.call(i.exports,i,i.exports),i.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},e.parcelRequired7c6=s);var i=s("lOKsE"),n=s("jAzyG"),l=s("eyjy7"),o=s("gKkQl"),c=s("fEVjq"),r=s("a14sY"),d=s("2tZq5"),u=s("e4m3s"),g=s("bITeO"),f=s("2nhTy");s("7Y9D8");const h=(0,o.initializeApp)(c.firebaseConfig),v=(0,n.getDatabase)(h),y=(0,l.getAuth)(h);new(0,d.default)({queue:{},watched:{}});const m=new(0,i.API_service),p=document.querySelector("#auth"),S=document.querySelector(".js-watched"),L=document.querySelector(".js-queue"),b=document.querySelector(".library__container-list"),w=document.querySelector(".library__mes");function I(){if(S.classList.contains("current"))return;let e=g.spinerInit("body");(0,l.onAuthStateChanged)(y,(e=>{if(e){const t=`users/${e.uid}/lib/watched/`;(0,n.get)((0,n.ref)(v,t)).then((e=>{if(e.exists()){const t=Object.keys(e.val());localStorage.setItem("fetchType","watched"),localStorage.setItem("totalPages",Math.ceil(t.length/20));const a=localStorage.getItem("totalPages");(0,f.renderPagination)(a),localStorage.setItem("watched",JSON.stringify(e.val())),w.classList.contains("visually-hidden")||w.classList.add("visually-hidden"),q(t,localStorage.getItem("currentPage"))}else w.classList.contains("visually-hidden")&&w.classList.remove("visually-hidden"),b.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)}))}})),g.removeSpiner(e),S.classList.add("is-active"),L.classList.remove("is-active")}async function q(e,t=1){try{let a=g.spinerInit("body");console.log("spinner on");const s=20*(t-1),i=20*t,n=e.slice(s,i).map((async e=>(m.id=e,await m.fetchMovieById()))),l=await Promise.all(n);(0,r.default)(l),console.log("spinner off"),g.removeSpiner(a)}catch(e){console.log(e)}}L.addEventListener("click",(function(){if(L.classList.contains("is-active"))return;L.classList.add("is-active"),S.classList.remove("is-active");let e=g.spinerInit("body");(0,l.onAuthStateChanged)(y,(e=>{if(e){const t=`users/${e.uid}/lib/queue/`;(0,n.get)((0,n.ref)(v,t)).then((e=>{if(e.exists()){const t=Object.keys(e.val());localStorage.setItem("fetchType","queue"),localStorage.setItem("totalPages",Math.ceil(t.length/20));const a=localStorage.getItem("totalPages");(0,f.renderPagination)(a),localStorage.setItem("queued",JSON.stringify(e.val())),w.classList.contains("visually-hidden")||w.classList.add("visually-hidden"),q(t)}else w.classList.contains("visually-hidden")&&w.classList.remove("visually-hidden"),b.innerHTML="",console.log("No data available")})).catch((e=>{console.error(e)}))}})),g.removeSpiner(e)})),S.addEventListener("click",I),p.addEventListener("click",u.onOpenModalAuth),I();
//# sourceMappingURL=library.0aa03efb.js.map
