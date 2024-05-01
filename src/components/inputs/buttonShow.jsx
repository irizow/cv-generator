import { useState } from "react"
import './buttons.css'


export function ButtonShow({name, icon, form}) {
    const [isClicked, setIsClicked] = useState(false)
    const imgSrc = isClicked ? '../public/square-minus-solid.svg' : '../public/square-plus-solid.svg'
    const btnClassName = isClicked ? 'button-show on' : 'button-show off'

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    return (
      <>
      <div className={btnClassName} onClick={handleClick}>
        {icon}
        {name}
        <img src={imgSrc}></img>
      </div>
      {isClicked && form}
      
      
      </>
    )
}