import './Collaborator.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Collaborator = (props) => {
    const { nombre, puesto, foto, equipo, id, fav } = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props

    return <div className="collaborator">
        <AiFillCloseCircle onClick={() => eliminarColaborador(id)} className='eliminar'/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info" >
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <AiFillHeart color='red' onClick={() => like(id)} /> : <AiOutlineHeart  onClick={() => like(id)} />  }
        </div>
    </div>
}

export default Collaborator;