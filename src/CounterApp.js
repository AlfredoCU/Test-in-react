import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <p>{counter}</p>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 0,
};

export default CounterApp;

/* 
  const handleAdd = (e) => {
    console.log(e);
    // No retorna nada.
  };
  
  Ejemplo de funcion:
  <button onClick={(e) => console.log(e)}>Incrementar</button>
  
  Sólo si es necesario pasar agumentos:
  <button onClick={(e) => handleAdd(e)}>Incrementar</button>
  Pero podemos reducir el código sólo si cumple con lo siguiente o sino enviaremos argumentos ->

  Tenemos una función de flecha, el primer argumento que recibe es enviado como primer argumento 
  a una función que está adentro.
  Por consecuencia, podríamos borrar esto y dejar únicamente la referencia a la función que yo quiero ejecutar.
  
  Pasamos la referencia de la función para que esta sea ejectuda:
  <button onClick={handleAdd}>Incrementar</button>

  Otro caso retorna un undefined y no funciona, para que funcione la funcion handleAdd debe de retornar una función:
  <button onClick={handleAdd()}>Incrementar</button>
  Aparte esto hace que se ejecute la función cuando se renderiza, ignorando el onClick, esto sólo debe de ser usado
  cuando es necesario ejecutar una función de forma automatica.
*/
