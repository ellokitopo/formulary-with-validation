import React from 'react';
import { useState,useEffect} from 'react';

const Contador = () => {
    
  const [contador, setContador] = useState(0);
  const aumentar1 = () =>{
    setContador(contador +1);
    console.log(contador);
  }
  const aumentar10 = () =>{
    setContador(contador +10);
    console.log(contador);
  }
  const aumentar100 = () =>{
    setContador(contador +100);
    console.log(contador);
  }
    useEffect(() =>{
      console.log(`la cuenta es ${contador}`);
    });
  return (
      <>
        <h2>Contador</h2>
        <h3>{contador}</h3>
        <button className='btn btn-dark' onClick={aumentar1}>+1</button>
        <button className='btn btn-dark' onClick={aumentar10}>+10</button>
        <button className='btn btn-dark' onClick={aumentar100}>+100</button>
      
      </>
  )
};
export default Contador;

