import React from "react";
import PropTypes from "prop-types";

const App = ({ dev, age, date }) => {
  // console.log(dev, age, date);
  return (
    <>
      <h1>Hola Mundo</h1>
      <p>React - {dev}</p>
      <p>Edad: {age}</p>
      <b>Cumpleaños: {date}</b>
    </>
  );
};

//* Las propTypes, nos ayudan a solicitar un tipo de dato en especifico que recibira el componente.
//* También podemos forzar a que las props sean requeridas o obligatorias.
App.propTypes = {
  dev: PropTypes.string.isRequired,
  age: PropTypes.number,
  date: PropTypes.string, //* Aunque el valor sea por defecto, se le puede asignar un tipo de dato.
};

//* Valores por defecto.
App.defaultProps = {
  date: "11/02//1997",
};

export default App;
