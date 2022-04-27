let btn_resetar = document.getElementById('btn_resetar');
let idHumor = window.location.pathname.split('/')[2];

console.log(btn_resetar.href)
console.log(idHumor)

window.onload = function() {
  btn_resetar.href += idHumor
  console.log(btn_resetar)
}

console.log("Vinculação feita!")