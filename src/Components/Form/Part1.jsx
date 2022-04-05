import React, { useState,useEffect } from 'react'

const Part1 = ({setName,setFname}) => {
    const [nombre, setNombre] = useState("")
    const [nombre2, setNombre2] = useState("")
    const [apellido, setApellido] = useState("")
    const [apellido2, setApellido2] = useState("")
  const handlenombre = (e)=>{
    setNombre(e.target.value)
  }
  const handlenombre2 = (e)=>{
    setNombre2(e.target.value)
  }
  const handleapellido = (e)=>{
    setApellido(e.target.value)
  }
  const handleapellido2 = (e)=>{
    setApellido2(e.target.value)
  }

    useEffect(() => {
      if(apellido2){
       setName(`${nombre} ${nombre2} ${apellido} ${apellido2}`)
       setFname([nombre,nombre2,apellido,apellido2])
      }

    }, [apellido2, setName,nombre, nombre2,apellido])
    

  return (
    <>
      <h4>¿Cual es tu nombre?</h4>
      <input onChange={(e)=>handlenombre(e)} type="text" placeholder='Nombre'/>
      <input onChange={(e)=>handlenombre2(e)} type="text" placeholder='Segundo Nombre'/>
      <input onChange={(e)=>handleapellido(e)} type="text" placeholder='Apellido Materno'/>
      <input onChange={(e)=>handleapellido2(e)} type="text" placeholder='Apellido Paterno'/>
    </>
  )
}

export default Part1