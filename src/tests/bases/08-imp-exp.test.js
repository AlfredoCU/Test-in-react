import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe de retornar un objeto", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    const heroeData = heroes.find((h) => h.id == id);
    expect(heroe).toEqual(heroeData);
  });

  test("getHeroeById debe de retornar un undefined si no encuentra nada", () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("getHeroesByOwner debe de retornar un arreglo de héroes de DC", () => {
    const owner = "DC";
    const heroesD = getHeroesByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroesD).toEqual(heroeData);
  });

  test("getHeroesByOwner debe de retornar la longitud del arreglo de héroes de Marvel", () => {
    const owner = "Marvel";
    const heroesD = getHeroesByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroesD.length).toBe(heroeData.length);
  });

  test("getHeroesByOwner debe de retornar un arreglo vacío si no encontro nada", () => {
    const owner = "DCMARVEL";
    const heroesD = getHeroesByOwner(owner);
    const heroeData = heroes.filter((h) => h.owner === owner);
    expect(heroesD).toEqual(heroeData);
  });
});
