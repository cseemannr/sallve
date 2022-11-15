const headerLime = document.getElementById("header-nav-lime");
const headerLimeArray = [
  "frete grátis acima de R$109 😎",
  "descontudo com até 40% OFF 😍",
];
const testimonials = document.querySelector(".testimonials").children;
const brandTestimonials = document.querySelector(".brands").children;

const userDropdown = document.querySelector(".nav-main-user");
const userDropdownContent = document.querySelector(".nav-main-user-dropdown");

const bagDropDown = document.querySelector(".nav-main-bag");
const bagDropDownContent = document.querySelector(
  ".nav-main-bag-dropdown-content"
);
const bagDropDownClose = document.querySelector(".bag-dropdown-close");
const bodyBg = document.querySelector(".nav-main-bag-dropdown-bg");
const body = document.querySelector("body");

const mobileBtnOpen = document.querySelector(".mobile-btn-open");
const mobileBtnClose = document.querySelector(".mobile-btn-close");
const mobileNav = document.querySelector(".mobile-nav");

//change lime nav text
let i = 0;
function changeText() {
  headerLime.innerHTML = headerLimeArray[i];
  if (i < headerLimeArray.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
changeText();
setInterval(changeText, 5000);

//user dropdown
userDropdown.addEventListener("click", () => {
  userDropdownContent.classList.toggle("active");
});

userDropdown.addEventListener("blur", () => {
  userDropdownContent.classList.remove("active");
});

//bag dropdown
bagDropDown.addEventListener("click", () => {
  bagDropDownContent.classList.add("bag-active");
  body.classList.toggle("fixed");
  bodyBg.classList.toggle("active");
});

bagDropDownClose.addEventListener("click", () => {
  bagDropDownContent.classList.remove("bag-active");
  body.classList.toggle("fixed");
  bodyBg.classList.toggle("active");
});

//mobile nav
mobileBtnOpen.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  mobileBtnOpen.classList.toggle("active");
  mobileBtnClose.classList.toggle("active");
  body.classList.toggle("fixed");
});

mobileBtnClose.addEventListener("click", function () {
  mobileNav.classList.toggle("active");
  mobileBtnOpen.classList.toggle("active");
  mobileBtnClose.classList.toggle("active");
  body.classList.toggle("fixed");
});
//testimonials
for (let i = 0; i < brandTestimonials.length; i++) {
  brandTestimonials[i].addEventListener("click", function () {
    for (let j = 0; j < brandTestimonials.length; j++) {
      brandTestimonials[j].classList.remove("active");
    }
    brandTestimonials[i].classList.add("active");

    for (let k = 0; k < testimonials.length; k++) {
      testimonials[k].classList.remove("active");
    }
    testimonials[i].classList.add("active");
  });
}
