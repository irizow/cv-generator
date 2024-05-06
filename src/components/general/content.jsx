import { MainForm } from "../inputs/MainForm";
import { Preview } from "../preview/Preview";
import { useState } from "react";
import './general.css'

export function Content() {
    const [personalInfo, setPersonalInfo] = useState({
                                            fullName: '',
                                            email: '',
                                            phoneNum: '',
                                            address: '',
    })
    const [eduInfo, setEduInfo] = useState([])

    const[expInfo, setExpInfo] = useState([])
    
    const[aboutInfo, setAboutInfo] = useState('')

    const[skillsInfo, setSkillsInfo] = useState([''])

    return (
        <div className="content">
            <MainForm personalInfo={personalInfo} eduInfo={eduInfo} expInfo={expInfo} aboutInfo={aboutInfo} setAboutInfo={setAboutInfo} setEduInfo={setEduInfo} setPersonalInfo={setPersonalInfo} setExpInfo={setExpInfo}/>
            <Preview personalInfo={personalInfo} eduInfo={eduInfo} aboutInfo={aboutInfo} expInfo={expInfo} />
        </div>
    )
}

