import "./Input.css";

const Input = (props) => {
    const placeholderModificado = `${props.placeholder}...`;

    const { type = "text" } = props;

    const manejarCambio = (e) => {
        props.setValue(e.target.value);
    }

    return <div className={`campo campo__${type}`}>
        <label>{props.title}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.value} 
            onChange={manejarCambio} 
            type={type}
        />
    </div>
}

export default Input;