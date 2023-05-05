const inputEl = document.querySelector(".btn");
const popupEl = document.querySelector(".popup-container");
const containerEl = document.querySelector(".container");
const closeEl = document.querySelector(".close-icon");

function updateclass1() {
    popupEl.classList.remove("active");
    containerEl.classList.add("active");
}

inputEl.addEventListener("click",(event) => {
    updateclass1();
});

function updateclass2() {
    popupEl.classList.add("active");
    containerEl.classList.remove("active");
}

closeEl.addEventListener("click",(event) => {
    updateclass2();
});