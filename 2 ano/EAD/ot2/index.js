// 1
let animais = [];
animais.push("cavalo", "jacaré", "onça pintada");
console.log(animais);
// 2
animais.shift();
console.log(animais);
// 3
animais.unshift("galo", "galinha");
console.log(animais);
// 4
animais[1] = "Girafa";
console.log(animais);
// 5
let frutas = [];
frutas.push("maça", "pera", "laranja");
let totalFrutas = frutas.length;
console.log(totalFrutas);
// 6
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
