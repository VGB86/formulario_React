import React from 'react';
import {Label, Input, GrupoInput, LeyendaError, IconoValidacion} from '../elementos/Formularios';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'


const ComponenteInput = ({estado, cambiarEstado, tipo, label,placeholder, name, leyendaError, expresionRegular}) => {
    //Creamos un componente para reutilizar 

    const onChange = (event) =>{
        cambiarEstado({...estado, // (operador spread: almacena dentro de el parametro 'estado' del 'componenteInput'  las propiedades del useState, campo y valido.
            campo:event.target.value}) //sobre escribe el campo, util para la validacion multiple! 
    };

    const validacion = () => {
        if(expresionRegular){
            if(expresionRegular.test(estado.campo))
            {
                cambiarEstado({...estado, valido:'true'}) //debe ser un string no un booleano!!!
            } else {
                cambiarEstado({...estado, valido:'false'})
            }
            
        }
    };


    return (
        <div>
          <Label htmlFor={name} valido={estado.valido}> {label}</Label>
          <GrupoInput>
              <Input 
                type ={tipo}
                placeholder ={placeholder} 
                id ={name}
                value = {estado.campo} //para que cargue el evento de teclado correspondiente al UseState
                onChange = {onChange} //para que el campo permita el input
                onKeyUp = {validacion} // eventos de teclado
                onBlur = {validacion} //click fuera del input
                valido = {estado.valido}
               />  
              <IconoValidacion icon={faCheckCircle}/>
          </GrupoInput>
          <LeyendaError>{leyendaError}</LeyendaError>
       </div>
    );
}

export default ComponenteInput;