import React, { useState, useEffect } from 'react'
import Datos from './Datos'
import Container from './Form/Container'
import Part1 from './Form/Part1'
import Part2 from './Form/Part2'
import Part3 from './Form/Part3'
import Part4 from './Form/Part4'
import '../Styles/Form.styles.css'
import axios from 'axios';

const Form = () => {

  const [name, setName] = useState(null)
  const [fname, setFname] = useState(null)
  const [birth, setBirth] = useState(null)
  const [contact, setContact] = useState(null)
  const [form, setForm] = useState(null)

  const handleInfo=async()=>{
    try {
			await axios.post('http://localhost:4000/api/v1/form', {
        nombre:fname[0], 
        segundo_nombre:fname[1],
        apellido_paterno:fname[2],
        apellido_materno:fname[3],
        fecha_nacimiento:form[1],
        correo:form[2],
        telefono:form[3]
      })
		 
	   } catch (error) {
		   console.log(error)
	   }
  }

  useEffect(() => {
    if (contact) {
      setForm([name,birth, ...contact])
    }
  }, [setForm,name,birth,contact])
  

  return (
    <div>
      <Container>
        <Part1
        setName={setName}
        setFname={setFname}
        />
      </Container>
     {name &&(<Datos 
      answers={[name]}
      data={['Nombre']}
      />)}
      {name && (<Container>
        <Part2 
        setBirth={setBirth}
        />
      </Container>)}
      {birth &&(<Datos 
        answers={[birth]}
        data={['Fecha de nacimiento']}
        />)}
      {birth && (<Container>
        <Part3
        setContact={setContact}
        />
      </Container>)}
      {contact &&(<Datos 
        answers={contact}
        data={['Correo', 'Telefono']}
        />)}
      {contact && (<Container>
        <Part4/>
      </Container>)}

      {
        form && (<button onClick={handleInfo} className='bttn col10'>Iniciar</button>)
      }

      {form &&(<Datos 
        answers={form}
        data = {['Nombre', 'Fecha de nacimiento', 'Correo', 'Telefono']}
        />)}
      
      

    </div>
  )
}

export default Form