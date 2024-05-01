import { Inputs } from "./Inputs"
import { useState } from "react"
import './forms.css'

export function PersonalInfo() {
    const [ fullName, setFullName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phoneNum , setPhoneNum ] = useState('')
    const [ address, setAddress ] = useState('')
    return (
        <form className="forms">
        <Inputs type="text" placeholder="Full name" value={fullName} mandatory={true} label="Full Name" onChange={e=> setFullName(e.target.value)} />  
        <Inputs type="email" placeholder="moniidoe@bmail.com" value={email} mandatory={false} label="Your Email" onChange={e=> setEmail(e.target.value)} />
        <Inputs type="number" placeholder="+34-XXX-XXX-XXX" value={phoneNum} mandatory={false} label="Phone Number" onChange={e=> setPhoneNum(e.target.value)} />
        <Inputs type="address" placeholder="Barcelona, Spain" value={address} mandatory={false} label="Your Address" onChange={e=> setAddress(e.target.value)} />
        </form>
    )
}