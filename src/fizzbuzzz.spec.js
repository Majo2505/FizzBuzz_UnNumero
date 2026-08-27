import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo número si no sigue una regla", () => {
    expect(fizzBuzz(2)).toEqual("2");
  });
  it("deberia generar el mismo número si no sigue una regla", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });
  it("deberia retornar 'Fizz' si el número es 3 o múltiplo de 3", () => {
    expect(fizzBuzz(3)).toEqual("Fizz");
  });
});


