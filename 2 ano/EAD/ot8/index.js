// 1. Criar e Adicionar Valores ao Set
const frutas = new Set();
frutas.add("maçã");
frutas.add("banana");
frutas.add("laranja");

frutas.add("maçã"); //tentando mais não vai dar
console.log("Frutas no Set:", frutas);
// 2. Verificar Valores no Set
const temBanana = frutas.has("banana");
console.log("O Set contém banana?", temBanana);
// 3. Remover Valores do Set
frutas.delete("laranja");
console.log("Frutas após remover a laranja:", frutas);
// 4. Limpar o Set
frutas.clear();
console.log("Frutas após limpar o Set:", frutas);
// 5. Tamanho do Set
const numeros = new Set([1, 2, 3, 4, 5, 5, 6]);
console.log("Tamanho do Set de números:", numeros.size);
// 6. Iterar Sobre um Set
for (const numero of numeros) {
  console.log("Número no Set:", numero);
}
// 7. Criar um Set a Partir de um Array
const arrayComDuplicatas = [1, 2, 2, 3, 4, 4, 5];
const setDeDuplicatas = new Set(arrayComDuplicatas);
console.log("Set a partir do array (removendo duplicatas):", setDeDuplicatas);
