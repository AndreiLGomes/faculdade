//1
let frutas = new Set();
frutas.add("laranja");
frutas.add("maça");
frutas.add("uva");
console.log(frutas.has("laranja"));
frutas.delete("laranja");
console.log(frutas.has("laranja"));
frutas.clear(); //limpou tudo
let valores = new Set();
valores.add(1);
valores.add("andrei");
valores.add("teste");
valores.add(0);
console.log(valores.size);

for (let valor of valores) {
  console.log(valor);
}
let numeros = [1, 3, 2, 4, 5, 3, 2, 1];
let unidos = new Set(numeros);
console.log([...unidos]);
