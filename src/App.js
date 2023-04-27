import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MiOrg from './components/MiOrg/MiOrg';
import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradoes] = useState([
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: false
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }
]);

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    nombre: "Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    id: uuid(),
    nombre: "Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    id: uuid(),
    nombre: "Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    id: uuid(),
    nombre: "Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    id: uuid(),
    nombre: "UX y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    id: uuid(),
    nombre: "Mobile",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    id: uuid(),
    nombre: "Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  }
]); 

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario);
}

//Registrar colaborador
const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador);
  //Spread operator
  actualizarColaboradoes([...colaboradores, colaborador]);
}

//Eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador", id);
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradoes(nuevosColaboradores);
}

//Actualizar color de equipo
const actualizarColor = (color, id) => {
  const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
    return equipo
  })

  actualizarEquipos(equiposActualizados);

}

//Crear equipo
const crearEquipo = (nuevoEquipo) => {
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

//Like
const like = (id) => {
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradoes(colaboradoresActualizados);  
}

  return (
    <div className="App">
      <Header />
      {mostrarFormulario && <Form equipos={equipos.map((equipo) => equipo.nombre)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
      />}
      {/* { mostrarFormulario ?  <Form /> : <></> } */}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo) => <Team 
          datos={equipo} 
          key={equipo.nombre} 
          colaboradores={colaboradores.filter( (colaborador) => colaborador.equipo === equipo.nombre)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        /> )
      }
      <Footer />
    </div>
  );
}

export default App;
