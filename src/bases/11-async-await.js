// Async y await

export const info = async () => {
  try {
    const res = await fetch("https://api.covid19api.com/summary"); // Response -> Espera a que termine la promesa.
    const data = await res.json(); // Response -> Espera a que termine la promesa.

    const {
      Global: { TotalConfirmed },
    } = data;
    // const { Global } = data;
    // const { TotalConfirmed } = Global;
    return TotalConfirmed;
  } catch {
    return "La peticion fallo!";
  }
};
