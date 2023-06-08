const navBtn = document.querySelector(".nav-icon-btn");

const navIcon = document.querySelector(".nav-icon");

const navHeader = document.querySelector(".header__top-row");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  navHeader.classList.toggle("header__top-row--mobile");
  document.body.classList.toggle("no-scroll");
};

//phone mask

mask("[data-tel-input]");

//delete + in number
const phoneInput = document.querySelectorAll("[data-tel-input]");
phoneInput.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value === "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value === "+") input.value = "";
  });
});

//Yendex  card

let map;

  main();
  async function main() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      await ymaps3.ready;

      // Создание карты
      map = new ymaps3.YMap(document.getElementById('map'), {
          location: {
              // Координаты центра карты
              // Порядок по умолчанию: «долгота, широта»
              center: [30.338928, 59.943543],

              // Уровень масштабирования
              // Допустимые значения: от 0 (весь мир) до 21.
              zoom: 16,
          }
      });

      // Добавляем слой для отображения схематической карты

      map.addChild(new ymaps3.YMapDefaultSchemeLayer());
  }
