import { Inputs } from "./Inputs"

export function About({aboutInfo, setAboutInfo}) {

    return (
        <form className="forms">
        <Inputs textarea={true} placeholder="I am a highly motivated software engineer who is willing to ..." value={aboutInfo} mandatory={false} label="Explain who you are" onChange={e=> setAboutInfo(e.target.value)} />  
        </form>
    )
}