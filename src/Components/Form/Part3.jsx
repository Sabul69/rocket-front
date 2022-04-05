import React, { useEffect, useState } from 'react'

const Part3 = ({setContact}) => {
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")

  const handleMail = (e)=>{
    setMail(e.target.value)
  }
  const handlePhone = (e)=>{
    setPhone(e.target.value)
  }

  useEffect(() => {
    if (phone) setContact([mail,phone])
  }, [mail,phone,setContact])
  

  return (
    <>
      <h4>Datos de contacto</h4>
      <input onChange={(e)=> handleMail(e)} type="mail" placeholder='Correo electronico'/>
      <input onChange={(e)=> handlePhone(e)} type="number" placeholder='Telefono celular'/>
    </>
  )
}

export default Part3