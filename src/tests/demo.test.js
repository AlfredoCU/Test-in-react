describe("Prueba del archivo demo.test.js", () => {
  test("Comparar que strings sean iguales", () => {
    // 1. Inicialización.
    const msj = "Hola Mundo";

    // 2. Estímulo
    const msj2 = "Hola Mundo";

    // 3. Observar el comportamiento.
    expect(msj).toBe(msj2);
  });
});
