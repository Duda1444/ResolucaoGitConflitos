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

const frutasTransformadas = frutas.map(fruta => {
    const nomeMaiusculo = fruta.toUpperCase();
    return `fruta: ${nomeMaiusculo} - fresca`;
});
console.table(frutasTransformadas);


//Desenvolvedor B-1
const paises = ["Japão", "Turquia", "Noruega"];
console.table(paises);

paises.pop('Noruega');
console.table(paises);

//Desenvolvedor B-2
paises.push();
console.table(paises);

paises.push(...["Japão", "Turquia", "Noruega", "Alemanha"]);
console.table(paises);

//Desenvolvedor B-3


const paises = [
    { nome: 'Japão', continente: 'Ásia' },
    { nome: 'Brasil', continente: 'América' },
    { nome: 'Noruega', continente: 'Europa' },
];

console.table(paises.filter((pais) => pais.continente === 'América'));

paises.reverse();
console.table(paises);
