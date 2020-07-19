import React,{Fragment,useState} from 'react'


const Formulario = () => {

    
    const [cita, actualizarCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    })

    const [error, setError] = useState(false)

    const actualizarState = e =>{
        actualizarCita({...cita,
            [e.target.name]:e.target.value
        })
    }
    const submitCita = e =>{
        e.preventDefault()
        // VALIDAR
        if (mascota.trim() === ''|| propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            console.log('hay un error')
            setError(true)
            return 
        }
        // ASIGNAR

        // CREAR CITA

        // REINICIAR FORM
    }
    const {mascota,propietario,fecha,hora,sintomas} = cita

    return ( 
        <Fragment>
            <h2>Citas</h2> 
            {error === true ? 
                <p className='alerta-error'>Todos los campos son obligatorios</p>
            :null}
            <form action=""
                  onSubmit={submitCita}
            >
                <label >Nombre Mascota</label>
                <input type='text'
                        name="mascota" 
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                        />
                
                <label >Nombre Dueño</label>
                <input type='text'
                        name="propietario" 
                        className="u-full-width"
                        placeholder="Nombre dueño"
                        onChange={actualizarState}
                        value={propietario}
                        />
                
                <label >Fecha</label>
                <input type='date'
                        name="fecha" 
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                        
                        />
                <label >Hora</label>
                <input type='time'
                        name="hora" 
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                        />
                <label >Sintomas</label>
                <textarea 
                    className='u-full-width' 
                    name='sintomas'
                    onChange={actualizarState}
                    value={sintomas}
                    ></textarea>
                <button type='submit' className="u-full-width button-primary">Agregar Cita</button>
            </form>
        </Fragment>
     );
}
 
export default Formulario;