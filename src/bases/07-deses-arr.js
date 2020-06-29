// Desestructuración de arreglos.

export const retornaArreglo = () => {
  return ["ABC", 123];
};

export const useState = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};
