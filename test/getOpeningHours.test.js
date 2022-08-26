const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closedMessage = 'The zoo is closed';
  it('Testa se a função `getOpeningHours` tem o retorno esperado', () => {
    expect(getOpeningHours('Monday', '8:00-am')).toBe(closedMessage);
    expect(getOpeningHours('thursday', '10:00-am')).toBe('The zoo is open');
  });

  it('Testa se a função `getOpeningHours` é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Testa se o parâmetro da função `getOpeningHours` não é Case Sensitive', () => {
    expect(getOpeningHours('Monday', '8:00-AM')).toBe(closedMessage);
    expect(getOpeningHours('MONDAY', '8:00-am')).toBe(closedMessage);
    expect(getOpeningHours('MoNdAy', '8:00-aM')).toBe(closedMessage);
  });
});
