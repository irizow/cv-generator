import { ButtonShow } from './buttonShow'
import { IconEdu, IconPers, IconExp, IconAbout, IconSkills } from '../../assets/icons'
import { PersonalInfo } from './PersonalInfo'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { About } from './About'
import { useState } from 'react'
import './forms.css'

export function MainForm({personalInfo, expInfo, eduInfo, setPersonalInfo, setEduInfo, setExpInfo, aboutInfo, setAboutInfo, skillsInfo, setSkillsInfo}) {
    const [isHidden, setIsHidden] = useState(false)
    return (
        <div className="forms-div">
        <ButtonShow setIsHidden={setIsHidden} isHidden={isHidden} name="PERSONAL INFO" icon={<IconPers/>} shouldHide={false} form={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} isHidden={isHidden} />} />
        <ButtonShow setIsHidden={setIsHidden} isHidden={isHidden}  name="ABOUT" icon={<IconAbout/>} shouldHide={false} form={<About aboutInfo={aboutInfo} setAboutInfo={setAboutInfo} isHidden={isHidden} />}/>
        <ButtonShow setIsHidden={setIsHidden} isHidden={isHidden}  name="EDUCATION" icon={<IconEdu/>} shouldHide={true} infos={eduInfo} setInfo={setEduInfo}  form={<Education eduInfo={eduInfo} setEduInfo={setEduInfo} isHidden={isHidden} setIsHidden={setIsHidden} />}  />
        <ButtonShow setIsHidden={setIsHidden} isHidden={isHidden} name="EXPERIENCE" icon={<IconExp/>} shouldHide={true} infos={expInfo} setInfo={setExpInfo} form={<Experience expInfo={expInfo} setExpInfo={setExpInfo}isHidden={isHidden} setIsHidden={setIsHidden}/>} />
        <ButtonShow setIsHidden={setIsHidden} isHidden={isHidden} name="SKILLS" icon={<IconSkills/>} shouldHide={false} infos={expInfo} setInfo={setExpInfo} form={<Skills skillsInfo={skillsInfo} setSkillsInfo={setSkillsInfo} isHidden={isHidden} setIsHidden={setIsHidden}/>} />
        </div>
    )
}