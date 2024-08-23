// 1
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//3
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
//4
for (let i = 0; i <= 100; i++) {
  if (i === 50) {
    break;
  }

  console.log(i);
}
//5
for (let i = 0; i < 20; i++) {
  if (i === 13) {
    continue;
  }
  console.log(i);
}
//6
let animais = ["cão", "gato", "cavalo"];
for (let animal of animais) {
  console.log(animal);
}
