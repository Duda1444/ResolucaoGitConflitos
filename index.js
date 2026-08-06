//desenvolvedor 1 :
let frutas = ["pera", "Banana", "Morango", "Laranja"];

frutas.shift();
console.table(frutas);

frutas.unshift("uva");
console.table(frutas);

const frutaComM = frutas.find((fruta) => fruta.startsWith('M'));
console.log(frutaComM);

frutas.sort();
console.table(frutas);

// desenvolvedor A fazendo sua parte do trabalho de quem seria o desenvolvedor C

console.log("A quantidade de frutas é: " + frutas.length);

