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
