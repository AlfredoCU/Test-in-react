import "@testing-library/jest-dom";
import { getSaludo } from "../../bases/02-template-string";

describe("Pruebas a 02-template-string", () => {
  test("getSaludo debe de retornar Hola Alfredo!", () => {
    const nombre = "Alfredo";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}!`);
  });

  test("getSaludo debe de retornar Hola Victor! Sino hay argumento nombre", () => {
    const saludo = getSaludo();
    expect(saludo).toBe("Hola Victor!");
  });
});
