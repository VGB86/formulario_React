import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos,
        ContenedorBotonCentrado, Boton, MensajeError, MensajeExito} from './elementos/Formularios';
import { faExclamationTriangle  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Input from './componentes/Input';


const App = () => {

  /* Usamos el useState para la validación de los campos a traves del Input como propiedad*/
  const [usuario, cambiarUsuario] = useState({ campo:'', valido: null});
  const [nombre, cambiarNombre] = useState({ campo:'', valido: null});
  const [password, cambiarPassword] = useState({ campo:'', valido: null});
  const [password2, cambiarPassword2] = useState({ campo:'', valido: null});
  const [correo, cambiarCorreo] = useState({ campo:'', valido: null});
  const [telefono, cambiarTelefono] = useState({ campo:'', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  /* Expresiones regulares para las validaciones */
  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  const validarPassword2 = () =>{
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        cambiarPassword2((prevState) => {
          // prevState: para volver el campo al 'estado anterior'
          return {...prevState, valido:'false'}
        });
      } else{
        cambiarPassword2((prevState) => {
           return {...prevState, valido:'true'}
        });
      }
    }
  }

  const onChangeTerminos = (event) =>{
    cambiarTerminos(event.target.checked);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if(
       usuario.valido === 'true' && 
       nombre.valido === 'true' &&
       password.valido === 'true' &&
       password2.valido === 'true' &&
       correo.valido === 'true' &&
       telefono.valido === 'true' &&
       terminos
    ){
        cambiarFormularioValido(true);

        //Vaciamos campos:
        cambiarUsuario({campo: '', valido: null})
        cambiarNombre({campo: '', valido: null})
        cambiarPassword({campo: '', valido: null})
        cambiarPassword2({campo: '', valido: null})
        cambiarCorreo({campo: '', valido: null})
        cambiarTelefono({campo: '', valido: null})

      } else{

        cambiarFormularioValido(false);
      }
  }

  
  return (
    //Creamos etiquetas de elementos y componentes que importamos

   <main>
     <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado = {usuario}
          cambiarEstado = {cambiarUsuario}
          tipo = "texto"
          label = "Usuario"
          placeholder = "troy72"
          name = "usuario"
          leyendaError = "El usuario debe ser de 4 a 6 dígitos y solo puede contener letras, números y guión bajo."
          expresionRegular = {expresiones.usuario}
        />

        <Input
          estado = {nombre}
          cambiarEstado = {cambiarNombre}
          tipo = "texto"
          label = "Nombre"
          placeholder = "Troy Mcclure"
          name = "name"
          leyendaError = "Debes escribir tu nombre"
          expresionRegular = {expresiones.nombre}
        />

        <Input
          estado = {password}
          cambiarEstado = {cambiarPassword}
          tipo = "password"
          label = "Contraseña"
          placeholder = "Escribe aquí tu contraseña"
          name = "password"
          leyendaError = "La contraseña debe tener entre 4 y 12 dígitos"
          expresionRegular = {expresiones.password}
        />

        <Input
          estado = {password2}
          cambiarEstado = {cambiarPassword2}
          tipo = "password"
          label = "Confirma contraseña"
          placeholder = "Escribe aquí tu contraseña"
          name = "password2"
          leyendaError = "La contraseña no coincide"
          funcion = {validarPassword2}
        
        />


        <Input
          estado = {correo}
          cambiarEstado = {cambiarCorreo}
          tipo = "email"
          label = "Email"
          placeholder = "troy@mcclure.com"
          name = "correo"
          leyendaError = "Escribe un correo válido"
          expresionRegular = {expresiones.correo}
        /> 

        <Input
          estado = {telefono}
          cambiarEstado = {cambiarTelefono}
          tipo = "telefono"
          label = "Telefono"
          placeholder = "Escribe tu teléfono"
          name = "telefono"
          leyendaError = "Teléfono no válido"
          expresionRegular = {expresiones.telefono}
        />   

       
       <ContenedorTerminos>
         <Label>
           <input 
              type="checkbox" 
              name="terminos" 
              id="terminos" 
              checked={terminos} 
              onChange={onChangeTerminos}
            />
           Acepto los Terminos y Condiciones
         </Label>
       </ContenedorTerminos>

      
      { formularioValido === false  && <MensajeError> 
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b> Error:</b> Por favor rellene el formulario correctamente.
          </p>         
       </MensajeError>}

       <ContenedorBotonCentrado>
         <Boton type="submit">Enviar</Boton>
         {formularioValido  === true && <MensajeExito>El formulario se envió exitosamente.</MensajeExito>}
       </ContenedorBotonCentrado>
     </Formulario>
   </main>
  );
}



export default App;