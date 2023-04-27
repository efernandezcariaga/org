import './OptionList.css'

const OptionList = (props) => {
    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Sciente",
    //     "Devops",
    //     "UX y Diseño",
    //     "Mobile",
    //     "Innovación y Gestión"
    // ];

    const manejarCambio = (e) => {
        props.setValue(e.target.value);
    }

    return <div className="optionList">
        <label>Equipos</label>
        <select value={props.value} onChange={manejarCambio}> 
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            { props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default OptionList;