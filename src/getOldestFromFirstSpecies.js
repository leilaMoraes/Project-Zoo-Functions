const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getEmployee = data.employees.find((employee) => employee.id === id);
  const getFirstAnimal = getEmployee.responsibleFor.find((animal) => animal);
  const getAnimal = data.species.find((specie) => specie.id === getFirstAnimal);
  const animalResident = getAnimal.residents.map((resident) => resident.age);
  const olderAnimal = animalResident.reduce((acc, curr) => (curr > acc ? curr : acc));
  const findOlderAnimal = getAnimal.residents.find((old) => old.age === olderAnimal);
  const { name, sex, age } = findOlderAnimal;

  return [name, sex, age];
}

module.exports = getOldestFromFirstSpecies;
