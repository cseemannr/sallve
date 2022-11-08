const headerLime = document.getElementById("header-nav-lime");
const headerLimeArray = [
  "frete grátis acima de R$109 😎",
  "descontudo com até 40% OFF 😍",
];

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
