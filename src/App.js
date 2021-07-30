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

  /* Expresiones regulares para las validaciones */
  const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

  return (
    //Creamos etiquetas de elementos y componentes que importamos

   <main>
     <Formulario action="">
       <Input
          estado = {usuario}
          cambiarEstado = {cambiarUsuario}
          tipo = "texto"
          label = "Usuario"
          placeholder = "troy mcclure"
          name = "usuario"
          leyendaError = "El usuario debe ser de 4 a 6 dígitos y solo puede contener letras, números y guión bajo."
          expresionRegular = {expresiones.usuario}
       />

       
       <ContenedorTerminos>
         <Label>
           <input type="checkbox" name="terminos" id="terminos"/>
           Acepto los Terminos y Condiciones
         </Label>
       </ContenedorTerminos>

      
      {false && <MensajeError> 
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b> Error:</b> Por favor rellene el formulario correctamente.
          </p>         
       </MensajeError>}

       <ContenedorBotonCentrado>
         <Boton type="submit">Enviar</Boton>
         <MensajeExito>El formulario se envió exitosamente.</MensajeExito>
       </ContenedorBotonCentrado>
     </Formulario>
   </main>
  );
}



export default App;