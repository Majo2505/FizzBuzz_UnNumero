import fizzBuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo número si no sigue una regla", () => {
    expect(fizzBuzz(2)).toEqual("2");
  });
  it("deberia generar el mismo número si no sigue una regla", () => {
    expect(fizzBuzz(1)).toEqual("1");
  });
});


