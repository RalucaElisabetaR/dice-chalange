# [JavaScript Dice Challange](https://ralucaelisabetar.github.io/dice-chalange/)
 ##### Math.random function is not “random enough” for serious things like cryptograph or anything related to security, but is fair enough to be used in this case.
 ##### Fun little chalange for those of you who wants to practice the basics of the Document Object Model. :computer: :dancers:
```javascript
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDicePhoto = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDicePhoto);

let randomNumber2 = Math.floor(Math.random() * 6) +1;
let randomDicePhoto2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDicePhoto2);
function refresh(){
window.location.reload("Refresh");
}
```
