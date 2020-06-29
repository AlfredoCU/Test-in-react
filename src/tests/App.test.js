import React from "react";
// import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import App from "../App";

describe("Prueba a <App />", () => {
  // test("Debe de renderizar el componente", () => {
  //   const name = "Alfredo CU";
  //   // const wrapper = render(<App dev="Alfredo CU" age={23} />);
  //   // wrapper.getByText()
  //   const { getByText } = render(<App dev={name} age={23} />);
  //   expect(getByText("React - " + name)).toBeInTheDocument();
  // });

  test("Prueba a <App />", () => {
    const name = "Alfredo CU";
    const wrapper = shallow(<App dev={name} age={23} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar la fecha mostrada por props", () => {
    const name = "Alfredo CU";
    const date = "11/02//1997";
    const wrapper = shallow(<App dev={name} age={23} date={date} />);
    //! Funciona sólo para un nodo, si existe más etiquetas b entonces mostara un error.
    const texto = wrapper.find("b").text();
    expect(texto).toBe(`Cumpleaños: ${date}`);
  });
});
