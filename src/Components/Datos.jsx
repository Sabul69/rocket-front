import React from 'react'
import '../Styles/Datos.styles.css'

const Datos = ({answers,data}) => {
  return (
    <div className='flex column data_container col9'>
    {
        answers.map((answer,index)=>(<p key={index}>{data[index]}: {answer}</p>))
    }
    </div>
  )
}

export default Datos