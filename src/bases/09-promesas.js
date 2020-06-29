// Promesas.

import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p = getHeroeById(id);
      p ? resolve(p) : reject("La promesa fracaso :(");
    }, 1500);
  });
};
