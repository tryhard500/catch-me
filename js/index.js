let alien = document.querySelector(`.alien`);
let result = document.querySelector(`.result`);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

let counter = 0;

alien.addEventListener(`click`,function(){
  counter++;
  result.innerHTML = counter;
  alien.style.left = getRandomArbitrary(50,window.innerWidth-50) + `px`;
  alien.style.top = getRandomArbitrary(50,window.innerHeight-50) + `px`;
});