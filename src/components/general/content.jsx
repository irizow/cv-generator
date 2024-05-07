import { MainForm } from "../inputs/MainForm";
import { Preview } from "../preview/Preview";
import Footer from "./Footer";
import Customize from "./Customize";
import { useState } from "react";
import genPDF from "../../utils/exportPDF";
import './general.css'

export function Content() {
    const [color, setColor] = useState("")

    const [personalInfo, setPersonalInfo] = useState({
                                            fullName: '',
                                            email: '',
                                            phoneNum: '',
                                            address: '',
    })
    const [eduInfo, setEduInfo] = useState([])

    const[expInfo, setExpInfo] = useState([])
    
    const[aboutInfo, setAboutInfo] = useState('')

    const[skillsInfo, setSkillsInfo] = useState([])


    return (
        <>
        <div className="content">
            <div>
            <MainForm personalInfo={personalInfo} eduInfo={eduInfo} expInfo={expInfo} skillsInfo={skillsInfo} aboutInfo={aboutInfo} setAboutInfo={setAboutInfo} setEduInfo={setEduInfo} setPersonalInfo={setPersonalInfo} setExpInfo={setExpInfo} setSkillsInfo={setSkillsInfo}/>
            <Customize color={color} setColor={setColor}/>
            <button onClick={genPDF} className="convert-pdf">Convert to PDF</button>
            </div>
            <div id="preview-page">
            <Preview id={"preview"} personalInfo={personalInfo} eduInfo={eduInfo} aboutInfo={aboutInfo} expInfo={expInfo} skillsInfo={skillsInfo} color={color}/>
            </div>
        </div>
        <Footer />
        </>
    )
}

