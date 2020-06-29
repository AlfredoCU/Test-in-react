import { info } from "../../bases/11-async-await";
import "@testing-library/jest-dom";

describe("Prueba 11-async-await", () => {
  test("Petición a la API", async () => {
    const data = await info();
    console.log(data);
    // expect(data).toBe(9905480);
    expect(typeof data).toBe("number");
  });
});
