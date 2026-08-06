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
