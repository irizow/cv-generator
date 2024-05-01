import { Inputs } from "./Inputs";
import { useState } from "react";

export function Education() {
    const [ school, setSchool ] = useState('')
    const [ degree, setDegree ] = useState('')
    const [ startDate, setStartDate ] = useState('')
    const [ endDate, setEndDate ] = useState('')

    return (
        <form className="forms">
        <Inputs type="text" placeholder="University of Barcelona" value={school} mandatory={true} label="School/University" onChange={e=> setSchool(e.target.value)} />  
        <Inputs type="text" placeholder="Software Engineering" value={degree} mandatory={true} label="Degree" onChange={e=> setDegree(e.target.value)} />
        <Inputs type="text" placeholder="12/02/2020" value={startDate} mandatory={true} label="Start Date" onChange={e=> setStartDate(e.target.value)} />
        <Inputs type= "text" placeholder="Currently" value={endDate} mandatory={false} label="End Date" onChange={e=> setEndDate(e.target.value)} />
        </form>
    )
}