import React from 'react'
import oper from '../../img/oper.png'
import '../../Styles/Form/container.styles.css'

const Container = ({children}) => {
  return (
    <div className='flex'>
    <div className='col2 chat_img'>
    <img className='col11' src={oper} alt="" />
    </div>
    <div className='flex column col8 chat'>
    {children}
    </div>
    </div>
  )
}

export default Container