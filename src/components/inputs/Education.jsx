import { Inputs } from "./Inputs";
import { useState } from "react";
import { v4 as uuid } from "uuid"
import { IconRubbish, IconEdit } from "../../assets/icons";

export function Education({eduInfo, setEduInfo, isHidden, setIsHidden}) {
    const [defaultValue, setDefaultValue] = useState(" ")
    const [isEditing, setIsEditing] = useState(false)
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    function handleAddEdu(event, id) {

        const newEdu = {
            school: school ? school : defaultValue.school,
            degree: degree ? degree:  defaultValue.degree,
            startDate: startDate ? startDate : defaultValue.startDate,
            endDate: endDate ? endDate : defaultValue.endDate,
            id: uuid()
        }
        console.log("new Edu Id: " + newEdu.id)
        setEduInfo([...eduInfo, newEdu])

        isEditing ? handleDelete(currId) : null

        event.preventDefault()
        setIsHidden(true)
    }

    const handleDelete = (id) => {
        const updInfo = eduInfo.filter((info) => info.id !== id)
        setEduInfo(updInfo)
      }
      
      const handleEdit = (id, index)=>{
        setIsEditing(true)
        setDefaultValue(eduInfo[index])
        handleDelete(id)
      }

    return (
        <>
        {isHidden ? "" : <form className="forms">
            <Inputs type="text" defaultValue={isEditing ? defaultValue.school : ""} placeholder="University of Barcelona" mandatory={true} label="School/University" onChange={e=> setSchool(e.target.value)} />  
            <Inputs type="text" defaultValue={isEditing ? defaultValue.degree : ""}  placeholder="Software Engineering" value={eduInfo.degree} mandatory={true} label="Degree" onChange={e=> setDegree(e.target.value)} />
            <Inputs type="text" defaultValue={isEditing ? defaultValue.startDate : ""}  placeholder="12/02/2020" value={eduInfo.startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
            <Inputs type= "text" defaultValue={isEditing ? defaultValue.endDate : ""}  placeholder="Currently" value={eduInfo.endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
            <button onClick={handleAddEdu}>Add Education</button>
        </form>}
        

        {eduInfo.map((info, index) =>
            <div className="prev-container" key={info.id}>
                <div>
                    <strong>{info.degree}</strong>
                    <div>{info.school}</div>
                </div>
                <div className="icon-box">
                    <span onClick={()=>{handleDelete(info.id)}}><IconRubbish/></span>
                    <span onClick={()=>{handleEdit(info.id,index)}}><IconEdit/></span>
                </div>
                </div>)}
        </>
    )
}