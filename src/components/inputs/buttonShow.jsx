import { useState } from "react"
import { IconRubbish, IconEdit } from "../../assets/icons"
import './buttons.css'
import React from 'react';


export function ButtonShow({name, icon, form, infos, setInfo, defaultValue}) {
    const [isEditing, setIsEditing] = useState(false)
    let currEditInd;
    let formEdit
    const [isClicked, setIsClicked] = useState(false)
    const imgSrc = isClicked ? '../public/square-minus-solid.svg' : '../public/square-plus-solid.svg'
    const btnClassName = isClicked ? 'button-show on' : 'button-show off'

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const handleDelete = (id) => {
      const updInfo = infos.filter((info) => info.id !== id)
      setInfo(updInfo)
    }
    
    const handleEdit = (index)=>{
      let currEditInd = index;
      let formEdit = React.cloneElement(form,{ defaultValue: infos[currEditInd]})
      setIsEditing(true)
    }

    return (
      <>
      <div className={btnClassName} onClick={handleClick}>
        {icon}
        {name}
        <img src={imgSrc}></img>
      </div>
      {(isClicked && !isEditing)&& form}
      {isEditing && formEdit}
      
      {(name==="EDUCATION" || name==="EXPERIENCE") && infos.map((info, index) =>
      <div className="prev-container" key={info.id}>
        <div>
        <strong>{name==="EDUCATION" ? info.degree : info.position}</strong>
        <div>{name==="EDUCATION" ? info.school : info.company}</div>
        </div>
        <div className="icon-box">
        <span onClick={()=>{handleDelete(info.id)}}><IconRubbish/></span>
        <span onClick={()=>{handleEdit(index)}}><IconEdit/></span>
        </div>
        </div>
    
      )}

      
      
      </>
    )
}