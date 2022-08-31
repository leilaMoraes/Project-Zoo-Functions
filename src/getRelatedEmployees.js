const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const managers = employees.filter((employee) => employee.managers.includes(managerId));
  if (managers.length === 0) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return managers.map((manager) => `${manager.firstName} ${manager.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
