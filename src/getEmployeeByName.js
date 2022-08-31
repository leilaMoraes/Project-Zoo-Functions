const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const local = data.employees;
  return local.find((element) => element
    .firstName === employeeName || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
