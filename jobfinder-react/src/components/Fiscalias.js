import React, {useEffect, useReducer} from 'react';
import fiscaliasReducer from '../reducers/fiscalias'

//estructura de las fiscalias:
// {
//     id: int
//     name: String,
//     lat: String,
//     lon: String,
//     phone: String,
//     dept: String
// }

const Fiscalias = ({ token, dispatcher }) => { //componente para mostrar la lista de fiscalias
  
    const [fiscalias, fiscaliasDispatcher] = useReducer(fiscaliasReducer, [])
    
    useEffect(() => { //comportamiento como componentdidmount, corre solo una vez y nos permite llenar la lista de fiscalias
      
      fetch('http://localhost:8080/Fiscalias/fiscalias', {method: 'GET'}) //consumo de la REST API para la lista de fiscalias
      .then(res => res.json())
      .then(json => {
        const fiscalias = json
        if(fiscalias){
          fiscaliasDispatcher({type: 'POPULATE_FISCALIA', fiscalias})
        }
      });
    }, [])
  
    return ( //cuerpo del componente.
      <div className='content-container'>
        
        {fiscalias.map((fiscalia) => (
          <div key={fiscalia.id} className='content-fiscalia'>
            <h3>Nombre: {fiscalia.name}</h3>
            <p>Departamento: {fiscalia.dept}</p>
            <p>Telefono: {fiscalia.phone}</p>
            <a href={'http://maps.google.com/maps?q=' + fiscalia.lat + ',' + fiscalia.lon} className="button-link">Ver en Mapa</a>
            <a href={'/edit/' + fiscalia.id} className='button-warning'>Modificar</a>
            </div>
        
        ))}
      </div>
    )
  }

  export {Fiscalias as default}