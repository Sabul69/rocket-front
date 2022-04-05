import React from 'react'
import '../Styles/Title.styles.css'
import icon from '../img/encuesta.png'

const Title = () => {
  return (
    <div className='title flex'>
        <div className='text col7'>
            <h2>Titulo del Formulario</h2>
            <h4> En menos de 5 minutos</h4>
        </div>
        <div className='col5'>
            <img className='img' src={icon} alt="Icon" />
        </div>
    </div>
  )
}

export default Title