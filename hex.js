const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()]; //co nghia la dau thang voi bat ki ki tu nao
  }
  // console.log(hexColor);

  color.textContent = hexColor; //tuc la cai gia tri text content cua color se la value hex color
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
//o day co nghia no se select random number trong nhung cai so tren 16 nhan 0.1 = 1,6 1