import React,{Fragment,useState} from 'react'

import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita,setCondicionales}) => {

    
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
        setError(false)
        // ASIGNAR
            cita.id = uuid()
        // CREAR CITA
            crearCita(cita)

        // REINICIAR FORM
        actualizarCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
    const {mascota,propietario,fecha,hora,sintomas} = cita

    return ( 
        <Fragment>
            {error === true ? 
                <p className='alerta-error'>Todos los campos son obligatorios</p>
            :null}
            <form action=""
                  onSubmit={submitCita}
                  className="formulario"
            >
                <div  className='form-field'>
                <label >Nombre Mascota</label>
                <input type='text'
                        name="mascota" 
                        className="u-full-width"
                        placeholder="Nombre Mascota"
                        onChange={actualizarState}
                        value={mascota}
                        />
                </div>
                <div className='form-field'>
                <label >Nombre Dueño</label>
                <input type='text'
                        name="propietario" 
                        className="u-full-width"
                        placeholder="Nombre dueño"
                        onChange={actualizarState}
                        value={propietario}
                        />
                </div>
                <div className='form-field'>
                <label >Fecha</label>
                <input type='date'
                        name="fecha" 
                        className="u-full-width"
                        onChange={actualizarState}
                        value={fecha}
                        
                        />
                </div>
                <div className='form-field'>        
                <label >Hora</label>
                <input type='time'
                        name="hora" 
                        className="u-full-width"
                        onChange={actualizarState}
                        value={hora}
                        />
                </div>
                <div className='form-field'>
                <label >Sintomas</label>
                <textarea 
                    className='u-full-width' 
                    name='sintomas'
                    onChange={actualizarState}
                    value={sintomas}
                    ></textarea>
                </div>    
                <div className='botones-form'>
                <button type='submit' className="button button-clasic">Agregar Cita</button>
                <button type='button' className=" button  button-clasic" onClick={()=>{
                    setCondicionales({
                        isIngresar:false,
                        isListar: false
                      })
                }}>Cancelar</button>
                </div>
            </form>
        </Fragment>
     );
}
 
Formulario.propTypes ={
    crearCita: PropTypes.func.isRequired
}
export default Formulario;