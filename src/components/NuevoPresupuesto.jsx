import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {

    const [mensaje, setMensaje] = useState('') 

    const handlePresupuesto = (e) => {
        e.preventDefault();

        if(!Number(presupuesto) || presupuesto < 0) {
            setMensaje('El presupuesto es incorrecto')
        } else {
            console.log('El presupuesto es correcto')
        }

    }

  return (
    <div className='contenedor-preupuesto contenedor sombra'>
        <form className='formulario'>
            <div className='campo'>
                <label>Definir presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type='text'
                    placeholder='Ingresa tu presupuesto'
                    value={presupuesto}
                    onChage={ e => setPresupuesto(e.target.value)}
                />
            </div>
            <input type="submit" value='Añadir' />

            {mensaje && <Mensaje tipo={error}>{mensaje}</Mensaje>}

        </form>
    </div>
  )
}

export default NuevoPresupuesto
