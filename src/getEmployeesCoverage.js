const data = require('../data/zoo_data');

function getAnimalLocation(...animal) {
  const treatingParameter = animal.join('').split(',');
  const getingAnimals = [];
  treatingParameter.forEach((element) => {
    getingAnimals.push(data.species.find((specie) => specie.id === element));
  });
  const location = getingAnimals.map((specie) => specie.location);
  return location;
}

function getAnimalName(...ids) {
  const treatingParameterIds = ids.join('').split(',');
  const getingAnimalsId = [];
  treatingParameterIds.forEach((element) => {
    getingAnimalsId.push(data.species.find((specie) => specie.id === element));
  });
  const names = getingAnimalsId.map((animal) => animal.name);
  return names;
}

function getEmployeesCoverage(object) {
  const employeesInfo = data.employees.map((employee) => ({ id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimalName(employee.responsibleFor),
    locations: getAnimalLocation(employee.responsibleFor) }));
  if (object === undefined) {
    return employeesInfo;
  }
  if (Object.values(object).includes('Id inválido')) {
    throw new Error('Informações inválidas');
  }
  const getName = (employeesInfo.find((employ) => employ.fullName.includes(Object.values(object))));
  if (Object.keys(object).includes('name')) {
    return getName;
  }
  const employeeInfo = employeesInfo.find((element) => Object.values(object).includes(element.id));
  if (Object.keys(object).includes('id')) {
    return employeeInfo;
  }
}

module.exports = getEmployeesCoverage;
