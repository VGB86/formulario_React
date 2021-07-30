import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// eslint-disable-next-line 
const colores = {
    borde : "#F8485E",
    error : "#FFD523",
    exito: "#FFA900"
}

const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding:10px;
    min-height: 40px;
    cursor: pointer
    
    ${props => props.valido === 'false' && css `
        color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
    position: relative;
    z-index:90;
`;

const Input = styled.input`
    width:100%;
    background:#fff;
    border-radius:3px;
    height:45px;
    line-heigth:45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus{
        border:3px solid ${colores.borde};
        outline:none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.valido === 'true' && css `
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css `
        border: 3px solid ${colores.error};
    `}
`; 

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom:0;
    color: ${colores.error};
    display:none;
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position:absolute;
    left:92%;
    bottom:14px;
    z-index:100;
    font-size:16px;
    opacity:0;
`;

const ContenedorTerminos = styled.div`
    grid-column: span 2; 

    input{
        margin-right:10px;
    }
`;

const ContenedorBotonCentrado = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    grid-column: span 2;
`;

const Boton = styled.button`
    height:45px;
    line-height:45px;
    width:30%;
    background:#FFA900;
    color: #000 ;
    font-weight:bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition:.1s ease all;

    &:hover{
        box-shadow:3px 0px 30px rgba(163,163,163,1);
    }
`;

const MensajeExito = styled.p`
    font-size:14px;
    color:{color.exito};
    display:none
`;

const MensajeError = styled.div`
    heigth: 45px;
    line-height: 45px;
    background:${colores.error};
    padding:0px 15px;
    border-radius:3px;
    grid-column:span 2;
    p{
        margin:0;
    }
`;

export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError, 
    IconoValidacion, 
    ContenedorTerminos,
    ContenedorBotonCentrado, 
    Boton, 
    MensajeExito, 
    MensajeError};