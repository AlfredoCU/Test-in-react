import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../../data/heroes";
import "@testing-library/jest-dom";

describe("Prueba en el archivo 09-promesas", () => {
  test("Retorna un héroe ASYNC", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]); // Esta comparando si es el mismo obj (su direccion de memoria es la misma).
      expect(heroe).toEqual(heroes[0]); // Esta comparando las propiedades del obj (clave y valor).
      done();
    });
  });

  test("Retorna un error sino exite el héroe", (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe("La promesa fracaso :(");
      done();
    });
  });
});

/*
const heroesD = {
  id: 1,
  name: "Batman",
  owner: "DC",
};

//! NO VA A PASAR. 
expect(heroe).toBe(heroesD); // Esta comparando si es el mismo obj (su direccion de memoria es la misma).

//* SI VA A PASAR.
expect(heroe).toEqual(heroesD); // Esta comparando las propiedades del obj (clave y valor).
*/
