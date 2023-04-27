import './Team.css';
import "../Collaborator/Collaborator.js";
import Collaborator from '../Collaborator/Collaborator.js';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Destructuracion
    const {nombre, colorPrimario, colorSecundario, id} = props.datos;
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

    return <>
        { 
            colaboradores.length > 0 && 
            <section className='team' style={{backgroundColor: hexToRgba(colorPrimario,0.6)}}>
                <input 
                    type='color'
                    className='input__color'
                    value={hexToRgba(colorPrimario,0.6)}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id);
                    }}
                />
                <h3 style={{borderColor: colorPrimario}}>{nombre}</h3>
                <div className="collaborators">
                    {
                        colaboradores.map((colaborador,index) => <Collaborator 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>  
        }
    </>
}

export default Team;