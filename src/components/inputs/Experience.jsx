import { Inputs } from "./Inputs";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Experience({expInfo, setExpInfo}) {
    const [company, setCompany] = useState('')
    const [position, setPosition] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [description, setDescription] = useState('')

    function handleAddExp(event) {
        event.preventDefault(event)

        const newExp = {
            company: company,
            position: position,
            startDate: startDate,
            endDate: endDate,
            description: description,
            id: uuid()
        }

        setExpInfo([...expInfo, newExp])
    }
    return(
        <form className="forms">
        <Inputs type="text" defaultValue={defaultValue.company} placeholder="Google" value={expInfo.company} mandatory={true} label="Company Name" onChange={e=> setCompany(e.target.value)} />  
        <Inputs type="text" defaultValue={defaultValue.position} placeholder="Software Engineer" value={expInfo.position} mandatory={true} label="Position Title" onChange={e=> setPosition(e.target.value)} />
        <Inputs type="text" defaultValue={defaultValue.startDate} placeholder="12/02/2020" value={expInfo.startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
        <Inputs type= "text" defaultValue={defaultValue.endDate} placeholder="Currently" value={expInfo.endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
        <Inputs textarea={true} defaultValue={defaultValue.description} placeholder="Develop all kinds of things" value={expInfo.description} mandatory={false} label="Job Description" onChange={e=> setDescription(e.target.value)}/>
        <button onClick={handleAddExp}>Add Experience</button>
        </form>
    )
}