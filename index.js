



let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDicePhoto = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDicePhoto);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDicePhoto2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDicePhoto2);
function refresh() {
  window.location.reload("Refresh");
}






