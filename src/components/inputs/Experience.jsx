import { Inputs } from "./Inputs";
import { useState } from "react";

export function Experience() {
   const [ company, setCompany ] = useState('')
    const [ position, setPosition ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')
    const [ description, setDescription ] = useState('')
    return(
        <form className="forms">
        <Inputs type="text" placeholder="Google" value={company} mandatory={true} label="Company Name" onChange={e=> setCompany(e.target.value)} />  
        <Inputs type="text" placeholder="Software Engineer" value={position} mandatory={true} label="Position Title" onChange={e=> setPosition(e.target.value)} />
        <Inputs type="text" placeholder="12/02/2020" value={startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
        <Inputs type= "text" placeholder="Currently" value={endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
        <Input type=
        </form>
    )
}