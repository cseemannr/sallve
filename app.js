const headerLime = document.getElementById("header-nav-lime");
const headerLimeArray = [
  "frete grátis acima de R$109 😎",
  "descontudo com até 40% OFF 😍",
];
const testimonials = document.querySelector(".testimonials").children;
const brandTestimonials = document.querySelector(".brands").children;

const userDropdown = document.querySelector(".nav-main-user");
const userDropdownContent = document.querySelector(".nav-main-user-dropdown");

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
