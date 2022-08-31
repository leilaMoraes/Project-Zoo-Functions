const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length > 0) {
    const animals = [];
    ids.forEach((element) => {
      animals.push(data.species.find((specie) => specie.id === element));
    });
    return animals;
  }
  return [];
}

module.exports = getSpeciesByIds;
