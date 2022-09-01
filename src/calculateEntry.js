const data = require('../data/zoo_data');

const childPrice = data.prices.child;
const adultPrice = data.prices.adult;
const seniorPrice = data.prices.senior;

function countEntrants(entrants) {
  return {
    child: entrants.filter((entrant) => entrant.age < 18).length,
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return child.length * childPrice + adult.length * adultPrice + senior.length * seniorPrice;
}

module.exports = { calculateEntry, countEntrants };
