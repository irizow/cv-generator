import { Inputs } from "./Inputs";
import { useState } from "react";
import { v4 as uuid } from "uuid"

export function Education({eduInfo, setEduInfo, defaultValue}) {
    const [school, setSchool] = useState('')
    const [degree, setDegree] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')


    function handleAddEdu(event) {
        event.preventDefault()

        const newEdu = {
            school: school,
            degree: degree,
            startDate: startDate,
            endDate: endDate,
            id: uuid()
        }
        console.log("new Edu Id: " + newEdu.id)

        setEduInfo([...eduInfo, newEdu])
    }

    return (
        <form className="forms">
        <Inputs type="text" defaultValue={defaultValue.school} placeholder="University of Barcelona" value={eduInfo.school} mandatory={true} label="School/University" onChange={e=> setSchool(e.target.value)} />  
        <Inputs type="text" defaultValue={defaultValue.degree} placeholder="Software Engineering" value={eduInfo.degree} mandatory={true} label="Degree" onChange={e=> setDegree(e.target.value)} />
        <Inputs type="text" defaultValue={defaultValue.startDate} placeholder="12/02/2020" value={eduInfo.startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
        <Inputs type= "text" defaultValue={defaultValue.endDate} placeholder="Currently" value={eduInfo.endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
        <button onClick={handleAddEdu}>Add Education</button>
        </form>
    )
}