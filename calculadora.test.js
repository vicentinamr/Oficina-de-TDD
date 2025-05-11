const Calculadora = require('./calculadora');

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.soma(2 , 3)).toBe(5);
  });

  it('Deverá retornar a subtração de dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.subtrai(5, 3)).toBe(2);
  });

  it('Deverá retornar a multiplicação entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.multiplica(4, 2)).toBe(8);
  });

  it('Deverá retornar a divisão entre dois números', () => {
    const calculadora = new Calculadora();
    expect(calculadora.divide(10, 2)).toBe(5);
  });
});
