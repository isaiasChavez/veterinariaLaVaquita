import React, { Fragment, useState, useEffect } from 'react';
import IngresarCitas from './components/IngresarCitas';
import ListadoCitas from './components/ListadoCitas';
import NavBar from './components/NavBar';
import TarjetaRecuperados from './components/TarjetaRecuperados'
import Footer from './components/Footer'
import SideMenu from './components/SideMenu';
function App() {
  
  const [condicionales, setCondicionales] = useState({
    isIngresar:false,
    isListar: false,
    isShowMenu: false
  })
  //RECUPERANDO DATOS DEL LOCAL STORAGE
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales) {
    citasIniciales = [];
  }
  let recuperadosIniciales = JSON.parse(localStorage.getItem('recuperados'));

  if(!recuperadosIniciales) {
    recuperadosIniciales = [];
  }

  // Arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales);
  
  const [recuperados, setRecuperados] = useState(recuperadosIniciales);



  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    let recuperadosIniciales = JSON.parse(localStorage.getItem('recuperados'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }

    if(recuperadosIniciales) {
      localStorage.setItem('recuperados', JSON.stringify(recuperados))
    } else {
      localStorage.setItem('recuperados', JSON.stringify([]));
    }

  }, [citas,recuperados] );
  
  const clickIngresarPaciente = () =>{
    setCondicionales({
      isIngresar:true,
      isListar: false
    })
  }
  const clickVerPacientes = ()=>{
    console.log('Clic ver')
    setCondicionales({
      isIngresar:false,
      isListar: true
    })
  }
  const blureo =()=>{
    
  }
  return (
    <Fragment>
       <NavBar
        setCondicionales={setCondicionales}
        condicionales={condicionales}
       />
      <div className='principal'>
     
      <div className='contenido'>
      { (!condicionales.isIngresar && !condicionales.isListar) ? 
      <>
      <div className='botones-principales'>
      <button 
            className='button button-clasic'
            onClick={clickIngresarPaciente}
            onMouseEnter={blureo}
      >Ingresar Paciente &times;</button>
      <button 
            className=' button button-clasic'
            onClick={clickVerPacientes}
      >Ver citas &times;</button>
      </div>

      </>
      : null }
       <SideMenu
          condicionales={condicionales}
       />



      {condicionales.isIngresar ?
      <IngresarCitas
        citas={citas}
        guardarCitas={guardarCitas}
        setCondicionales={setCondicionales}
      />
      : null}
      {condicionales.isListar ?
      <ListadoCitas
        citas={citas}
        guardarCitas={guardarCitas}
        setCondicionales={setCondicionales}
        setRecuperados={setRecuperados}
        recuperados={recuperados}
      />
      : null}
      
        
      </div>
      { (!condicionales.isIngresar && !condicionales.isListar) ? 
      <div className='listado-recuperados'>
        {recuperados.length != 0 ?<h2>Ultimos Recuperados</h2>
        :null}
        {
          recuperados.map(recuperado=>(
            <TarjetaRecuperados
              key={recuperados.id}
              recuperado={recuperado}
            />
          ))
        }
      </div>
      : null}
        <Footer/>
     </div>
    </Fragment>
  );
}

export default App;