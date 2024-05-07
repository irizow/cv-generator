import { useState } from "react"
import './buttons.css'
import React from 'react';



export function ButtonShow({name, icon, form, isHidden, setIsHidden, shouldHide}) {
   const [isClicked, setIsClicked] = useState(false)
    const imgSrc = (isClicked && isHidden === false) ? './square-minus-solid.svg' : './square-plus-solid.svg'
    const btnClassName = (isClicked && isHidden === false) ? 'button-show on' : 'button-show off'

    if(isHidden && isClicked && shouldHide) {
      setIsClicked(false)
    }

    const handleClick = () => {
        setIsHidden(false)
        setIsClicked(!isClicked)
    }


    return (
      <>
      <div className={btnClassName} onClick={handleClick}>
        {icon}
        {name}
        <img src={imgSrc}></img>
      </div>
      {isClicked===true && form }
     
      

      
      
      </>
    )
}