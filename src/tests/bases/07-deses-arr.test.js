import "@testing-library/jest-dom";
import { retornaArreglo, useState } from "../../bases/07-deses-arr";

describe("Prueba en el archivo  07-deses-arr", () => {
  test("Desestructuración de arreglo", () => {
    // const arr = retornaArreglo();
    // expect(arr).toEqual(["ABC", 123]);

    // const [letras, numeros] = retornaArreglo();
    // expect(letras).toBe("ABC");
    // expect(numeros).toBe(123);

    // Si tienes valores genericos entonces.
    const [letras, numeros] = retornaArreglo();
    expect(typeof letras).toBe("string");
    expect(typeof numeros).toBe("number");
  });

  test("Desestructuración de arreglo useState", () => {
    const [nombre, setNombre] = useState("Goku");
    expect(typeof nombre).toBe("string");
    expect(typeof setNombre).toBe("function");
  });
});
