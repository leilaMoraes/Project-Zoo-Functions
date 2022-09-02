const data = require('../data/zoo_data');

function countAnimals(animal) {
  const saida = {};
  data.species.forEach((specie) => {
    saida[specie.name] = specie.residents.length;
  });
  if (animal === undefined) {
    return saida;
  }
  const zooAnimal = data.species.find((element) => element.name === animal.specie);
  if (Object.keys(animal).length === 1) {
    const animalAmount = zooAnimal.residents.length;
    return animalAmount;
  } const animalSex = zooAnimal.residents.filter((resident) => resident.sex === animal.sex);
  return animalSex.length;
}

module.exports = countAnimals;
