import { Inputs } from "./Inputs";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { IconRubbish, IconEdit } from "../../assets/icons";

export function Experience({expInfo, setExpInfo, isHidden, setIsHidden}) {
    const [defaultValue, setDefaultValue] = useState(" ")
    const [isEditing, setIsEditing] = useState(false)
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    function handleAddExp(event) {
        event.preventDefault(event)

        const newExp = {
            company: company ? company : defaultValue.company,
            position: position ? position : defaultValue.position,
            startDate: startDate ? startDate : defaultValue.startDate,
            endDate: endDate ? endDate : defaultValue.endDate,
            description: description ? description : defaultValue, 
            id: uuid()
        }

        setExpInfo([...expInfo, newExp])
        setIsHidden(true)
    }

    const handleDelete = (id) => {
        const updInfo = expInfo.filter((info) => info.id !== id)
        setExpInfo(updInfo)
      }
      
      const handleEdit = (id, index)=>{
        console.log(expInfo[index])
        setIsEditing(true)
        setDefaultValue(expInfo[index])
        handleDelete(id)
      }

    return(
        <>
        <form className="forms">
        <Inputs type="text" defaultValue={isEditing ? defaultValue.company : ""}  placeholder="Google" value={expInfo.company} mandatory={true} label="Company Name" onChange={e=> setCompany(e.target.value)} />  
        <Inputs type="text" defaultValue={isEditing ? defaultValue.position : ""}  placeholder="Software Engineer" value={expInfo.position} mandatory={true} label="Position Title" onChange={e=> setPosition(e.target.value)} />
        <Inputs type="text" defaultValue={isEditing ? defaultValue.startDate : ""}  placeholder="12/02/2020" value={expInfo.startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
        <Inputs type= "text"defaultValue={isEditing ? defaultValue.endDate : ""}  placeholder="Currently" value={expInfo.endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
        <Inputs textarea={true} defaultValue={isEditing ? defaultValue.position : ""}  placeholder="Develop all kinds of things" value={expInfo.description} mandatory={false} label="Job Description" onChange={e=> setDescription(e.target.value)}/>
        <button onClick={handleAddExp}>Add Experience</button>
        </form>

        
        {expInfo.map((info, index) =>
            <div className="prev-container" key={info.id}>
                <div>
                    <strong>{info.position}</strong>
                    <div>{info.company}</div>
                </div>
                <div className="icon-box">
                    <span onClick={()=>{handleDelete(info.id)}}><IconRubbish/></span>
                    <span onClick={()=>{handleEdit(info.id,index)}}><IconEdit/></span>
                </div>
                </div>)}
        </>
    )
}