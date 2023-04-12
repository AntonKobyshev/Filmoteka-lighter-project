document.body.onload = function () {
  setTimeout(function () {
    let preloader = document.getElementById('page-preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 250);
};

// document.body.onload = function loader() {
//     // Получаем контейнер и создаем лоадер
// let preloader = document.getElementById('page-preloader');
// if (!preloader.classList.contains('done')) {
//     preloader.classList.remove('done');
// }
// // Выполняем асинхронный запрос
// fetch('../genres.json')
//   .then(response => response.json())
//     .then(data => {
//       console.log(data)
//     // Скрываем лоадер
//     if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//         }
//   })
//   .catch(error => {
//     // Скрываем лоадер в случае ошибки
//     if (!preloader.classList.contains('done')) {
//             preloader.classList.add('done');
//     }
//     console.error(error);
//   });
// }
