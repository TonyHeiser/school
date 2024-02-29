let modal = document.querySelector(".modal-lesson");
let openModalLesson = document.querySelector(".card__button");

openModalLesson.addEventListener("click", function () {
  console.log("openModalLesson");
  modal.classList.add("show__modal-lesson");
});

modal.addEventListener("click", function (e) {
  if (e.target !== e.currentTarget) return;
  modal.classList.remove("show__modal-lesson");
});

let modalForm = document.querySelector(".modal-form");
let btn = document.querySelector(".get-lesson");

btn.addEventListener("click", function (e) {
  modalForm.classList.add("modal--show");
});

let closeBtn = document.querySelector(".close__modal-form");

closeBtn.addEventListener("click", function () {
  console.log(closeBtn);
  modalForm.classList.remove("modal--show");
  console.log(modalForm.className);
});

//? Calendar

const currentDate = document.querySelector(".calendar__current-date");
const daysTag = document.querySelector(".days");
const prevIcon = document.getElementById("prev");
const nextIcon = document.getElementById("next");

let date = new Date();
let currentYear = date.getFullYear();
let currentMonth = date.getMonth();

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const renderCalendar = () => {
  let firstDayofMonth = new Date(currentYear, currentMonth, 1).getDay();
  let lastDateofMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  let lastDateofLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  let lastDayofMonth = new Date(currentYear, currentMonth, 0).getDay();
  let liTag = "";

  for (let i = firstDayofMonth; i > 0; i--) {
    liTag += `<li class="last-month">${lastDateofLastMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currentMonth === new Date().getMonth() &&
      currentYear === new Date().getFullYear()
        ? "today"
        : "";
    liTag += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class="next-month">${i - lastDayofMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
  daysTag.innerHTML = liTag;
};

renderCalendar();

prevIcon.addEventListener("click", function (e) {
  currentMonth = currentMonth - 1;
  if (currentMonth < 0 || currentMonth > 11) {
    date = new Date(currentYear, currentMonth);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});

nextIcon.addEventListener("click", function () {
  currentMonth = currentMonth + 1;
  if (currentMonth < 0 || currentMonth > 11) {
    date = new Date(currentYear, currentMonth);
    currentYear = date.getFullYear();
    currentMonth = date.getMonth();
  } else {
    date = new Date();
  }
  renderCalendar();
});


//^ Exit Button

const exitBtn = document.querySelector(".expand");
const exitDiv = document.querySelector(".aside-exit")

exitBtn.addEventListener("click", () => {
  exitDiv.classList.toggle("show--exit")
})