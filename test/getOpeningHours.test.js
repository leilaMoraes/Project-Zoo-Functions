const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const closedMessage = 'The zoo is closed';
  it('Testa se a função `getOpeningHours` tem o retorno esperado', () => {
    expect(getOpeningHours('Monday', '8:00-am')).toBe(closedMessage);
    expect(getOpeningHours('thursday', '10:00-am')).toBe('The zoo is open');
  });

  it('Testa se a função `getOpeningHours` retorna o esperado quando não recebe parâmetro', () => {
    const zooOperation = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 } };
    expect(getOpeningHours()).toStrictEqual(zooOperation);
  });

  it('Testa se o parâmetro da função `getOpeningHours` não é Case Sensitive', () => {
    expect(getOpeningHours('Monday', '8:00-AM')).toBe(closedMessage);
    expect(getOpeningHours('MONDAY', '8:00-am')).toBe(closedMessage);
    expect(getOpeningHours('MoNdAy', '8:00-aM')).toBe(closedMessage);
  });

  it('Testa se a mensagem de erro das horas está sendo passada corretamente', () => {
    function errorHour() {
      getOpeningHours('monday', 'oito horas');
    }
    expect(errorHour).toThrowError(new Error('The hour should represent a number'));
  });

  it('Testa se a mensagem de erro da abraviação das horas está sendo passada corretamente', () => {
    function errorAbbreviation() {
      getOpeningHours('friday', '4:00-dm');
    }
    expect(errorAbbreviation).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Testa se a mensagem de erro dos número das horas está sendo passada corretamente', () => {
    function errorHourAndMinutes() {
      getOpeningHours('friday', '13:00-pm');
    }
    expect(errorHourAndMinutes).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  it('Testa se a mensagem de erro do número dos minutos está sendo passada corretamente', () => {
    function errorHourAndMinutes() {
      getOpeningHours('friday', '12:60-pm');
    }
    expect(errorHourAndMinutes).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  it('Testa se a mensagem de erro dos dias da semana está sendo passada corretamente', () => {
    function errorDay() {
      getOpeningHours('domingo', '4:00-pm');
    }
    expect(errorDay).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
});
