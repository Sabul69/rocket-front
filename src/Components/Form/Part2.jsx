import React, { useEffect, useState } from 'react'

const Part2 = ({setBirth}) => {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  const handleday = (e)=>{
    setDay(e.target.value)
  }
  const handlemonth = (e)=>{
    setMonth(e.target.value)
  }
  const handleyear = (e)=>{
    setYear(e.target.value)
  }

  useEffect(() => {
    if (year){
      setBirth(`${day}/${month}/${year}`) 
      console.log("first")
    } 

  }, [day,month,year,setBirth])
  

  return (
    <>
    <h4>¿Cual es tu fecha de nacimineto?</h4>
      <input onChange={(e)=>handleday(e)} type="number" placeholder='Dia'/>
      <input onChange={(e)=>handlemonth(e)} type="number" placeholder='Mes'/>
      <input onChange={(e)=>handleyear(e)} type="number" placeholder='Año'/>
    </>
  )
}

export default Part2