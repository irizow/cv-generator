import { Inputs } from "./Inputs"
import { useState } from "react"
import './forms.css'

export function PersonalInfo({personalInfo, setPersonalInfo}) {
    return (
        <form className="forms">
        <Inputs type="text" placeholder="Full name" value={personalInfo.fullName} mandatory={true} label="Full Name" onChange={e=> setPersonalInfo({...personalInfo, fullName: e.target.value})} />  
        <Inputs type="email" placeholder="moniidoe@bmail.com" value={personalInfo.email} mandatory={false} label="Your Email" onChange={e=> setPersonalInfo({...personalInfo, email: e.target.value})} />
        <Inputs type="text" placeholder="+34-XXX-XXX-XXX" value={personalInfo.phoneNum} mandatory={false} label="Phone Number" onChange={e=> setPersonalInfo({...personalInfo, phoneNum: e.target.value})} />
        <Inputs type="address" placeholder="Barcelona, Spain" value={personalInfo.address} mandatory={false} label="Your Address" onChange={e=> setPersonalInfo({...personalInfo, address: e.target.value})} />
        </form>
    )
}

