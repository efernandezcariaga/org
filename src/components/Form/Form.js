import { useState } from "react";
import "./Form.css";
import Input from "../Input/Input";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

const Form = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [nombreEquipo, setNombreEquipo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({
            nombre: nombreEquipo,
            colorPrimario: color
        })
    }

    return <section className="form">
        <form onSubmit={manejarEnvio}>
            <h2 className="form__title">
                Rellena el formulario para crear el colaborador
            </h2>
            <Input 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                value={nombre} 
                setValue={setNombre} 
            />
            <Input 
                title="Puesto" 
                placeholder="Ingresar puesto" 
                required 
                value={puesto} 
                setValue={setPuesto} 
            />
            <Input 
                title="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                value={foto} 
                setValue={setFoto} 
            />
            <OptionList 
                value={equipo}
                setValue={setEquipo}
                equipos={props.equipos}
            />
            <Button text="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2 className="form__title">
                Rellena el formulario para crear el colaborador
            </h2>
            <Input 
                title="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                value={nombreEquipo} 
                setValue={setNombreEquipo} 
            />
            <Input 
                title="Color" 
                placeholder="Ingresar el color en Hex" 
                required 
                value={color} 
                setValue={setColor}
                type="color"
            />
            <Button text="Registrar equipo" />
        </form>
    </section>
}
export default Form;