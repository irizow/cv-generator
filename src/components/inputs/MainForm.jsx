import { ButtonShow } from './buttonShow'
import { IconEdu, IconPers, IconExp, IconAbout } from '../../assets/icons'
import { PersonalInfo } from './PersonalInfo'
import { Education } from './Education'
import { Experience } from './Experience'
import { About } from './About'

import './forms.css'

export function MainForm({personalInfo, expInfo, eduInfo, setPersonalInfo, setEduInfo, setExpInfo, aboutInfo, setAboutInfo}) {

    return (
        <div className="forms-div">
        <ButtonShow name="PERSONAL INFO" icon={<IconPers/>} form={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo}/>} />
        <ButtonShow name="ABOUT" icon={<IconAbout/>} form={<About aboutInfo={aboutInfo} setAboutInfo={setAboutInfo}/>}/>
        <ButtonShow name="EDUCATION" icon={<IconEdu/>} infos={eduInfo} setInfo={setEduInfo} form={<Education eduInfo={eduInfo} setEduInfo={setEduInfo} defaultValue=""/>}  />
        <ButtonShow name="EXPERIENCE" icon={<IconExp/>} infos={expInfo} setInfo={setExpInfo} form={<Experience expInfo={expInfo} setExpInfo={setExpInfo} defaultValue=""/>} />
        </div>
    )
}