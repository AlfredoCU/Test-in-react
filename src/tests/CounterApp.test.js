import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import CounterApp from "../CounterApp";

describe("Prueba a <CounterApp />", () => {
  //* INICIALIZA WRAPPER ANTES DE CADA PRUEBA.
  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Prueba a mostrar correctamente la estructura", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor a 100", () => {
    const v = 100;
    const wrapper = shallow(<CounterApp value={v} />);
    // Puedes poner id o class también.
    const valor = wrapper.find("p").text(); // trim(); borra los cambios
    expect(valor).toBe(`${v}`);
  });

  //! LAS PRUEBAS VAN EN SECUENCIA.

  test("Prueba al btn +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const valor = wrapper.find("p").text();
    expect(valor).toBe("1");
    // console.log(btn.html()); Muestra el html del btn.
  });

  test("Prueba al btn reset", () => {
    wrapper.find("button").at(1).simulate("click");
    const valor = wrapper.find("p").text();
    expect(valor).toBe("0");
  });

  test("Prueba al btn -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const valor = wrapper.find("p").text();
    expect(valor).toBe("-1");
  });
});

//* SE PUEDE REALIZAR LAS PRUEBAS DE ESTA FORMA TAMBIEN.
// test('Debe de colocar el valor por defecto con el btn reset', () => {
//   const wrapper = shallow( <CounterApp value={ 105 } /> );
//   wrapper.find('button').at(0).simulate('click');
//   wrapper.find('button').at(0).simulate('click');
//   wrapper.find('button').at(1).simulate('click');
//   const counterText = wrapper.find('h2').text().trim();
//   expect( counterText ).toBe('105');
// })
