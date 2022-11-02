import React from 'react'

export const Buttons = ({tipo, clase="", texto, click}) => {
  return (
    <>
        <button type={tipo} className={clase} onClick={click} >{texto}</button>
    </>
  )
}
