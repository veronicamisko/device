//CATALOG

const btnMenuCatalog = document.querySelector(".catalog-menu-button");

btnMenuCatalog.addEventListener("click", clickBtnCatalog);
function clickBtnCatalog(){
    btnMenuCatalog.classList.toggle("active");
}

//SLIDER

const btnSliderPrev = document.querySelector(".slider-button-prev");
const btnSliderNext = document.querySelector(".slider-button-next");
const slides = document.querySelectorAll(".slide");
const sliderCounter = document.querySelector(".slider-counter");
const btnSliderPagination = document.querySelectorAll(".slider-pagination-button");
let slideIndex;


function getActiveSlideIndex() {
  for(let i=0;i<slides.length;i++){
if (slides[i].classList.contains("slide--show")){
 return i;
}
}}

btnSliderNext.addEventListener("click", nextSlide);
function nextSlide() {
  setSlide(getActiveSlideIndex() + 1);
}

btnSliderPrev.addEventListener("click", previousSlide);
function previousSlide() {
  setSlide(getActiveSlideIndex() - 1);
}

btnSliderPagination.forEach((element, index) => {
  element.addEventListener("click", () => {
    setSlide(index);
    });
 })

function setSlide(n) {
   slideIndex = (n + slides.length) % slides.length;
  setActiveSlideElement();
  updateSlideText();
  setActiveSlideDot();
}

function updateSlideText(){
sliderCounter.innerText = "0" + (slideIndex +1);
}

function setActiveSlideDot(){
 for (let btn of btnSliderPagination) {
    btn.classList.remove("slider-pagination-button--current");
  }
  btnSliderPagination[slideIndex].classList.add("slider-pagination-button--current");
}

function setActiveSlideElement(){
  for (let slide of slides) {
      slide.classList.remove("slide--show");
  }
  slides[slideIndex].classList.add("slide--show");
}

// SERVICES

const serviceItem = document.querySelectorAll(".services-navigation-item");
const serviceBtn = document.querySelectorAll(".services-navigation-button");
const serviceDesc = document.querySelectorAll(".services-description-item");
let serviceIndex;

function showService(n) {
  serviceIndex = (n + serviceItem.length) % serviceItem.length;
  setActiveServiceItem();
setActiveServiceBtn();
}

function setActiveServiceItem(){
  for (let desc of serviceDesc) {
    desc.classList.remove("service--show");
}
serviceDesc[serviceIndex].classList.add("service--show");
}

function setActiveServiceBtn(){
for (let service of serviceItem) {
    service.classList.remove("services-navigation-item--active");
}
serviceItem[serviceIndex].classList.add("services-navigation-item--active");
}

serviceBtn.forEach((element, index) => {
    element.addEventListener("click", () => {
      showService(index);
    });
})


//MODAL

const btnDelivery = document.querySelector(".delivery");
const popup = document.querySelector(".modal");
const popupClose = document.querySelector(".modal-button-close");
const body = document.querySelector("body");

btnDelivery.addEventListener("click",togglePopup);
popupClose.addEventListener("click",togglePopup);

function togglePopup(){
  popup.classList.toggle("open");
  body.classList.toggle("lock");
 }
 popup.addEventListener("click", function(evt){
  if (!evt.target.closest(".modal-content")){
    body.classList.toggle("lock");
   popup.classList.toggle("open");
}});

