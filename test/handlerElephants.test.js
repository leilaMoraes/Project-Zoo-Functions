const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se a função `handlerElephants` tem o retorno esperado', () => {
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toStrictEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('location')).toStrictEqual('NW');
  });

  it('Testa se a função `handlerElephants` retorna `undefined` quando recebe parâmetro `undefined`', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  it('Testa se a função `handlerElephants` tem o retorno esperado quando não recebe uma string como parâmetro', () => {
    const phrase = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(8)).toBe(phrase);
    expect(handlerElephants({})).toBe(phrase);
    expect(handlerElephants([])).toBe(phrase);
  });

  it('Testa se a função `handlerElephants` tem o retorno esperado quando recebe o parâmetro `averageAge`', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });

  it('Testa se a função `handlerElephants` tem o retorno esperado quando recebe o parâmetro `count`', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  it('Testa se a função `handlerElephants` tem o retorno esperado quando recebe o parâmetro `names`', () => {
    expect(handlerElephants('names')).toStrictEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Testa se a função `handlerElephants` tem o retorno null quando recebe um parâmtro que não está no objeto elefante', () => {
    expect(handlerElephants('elefante')).toBeNull();
  });
});
