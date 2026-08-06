//desenvolvedor 1 :
let frutas = ["pera", "Banana", "Morango", "Laranja"];
frutas.shift();
console.table(frutas);

frutas.unshift("uva");
console.table(frutas);


const frutaComM = frutas.find((fruta) => fruta.startsWith('M'));
console.log(frutaComM);
