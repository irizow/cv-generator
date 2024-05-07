import { Inputs } from "./Inputs"
import { IconRubbish } from "../../assets/icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export function Skills({skillsInfo, setSkillsInfo}) {

    const [skill, setSkill] = useState("")
    const [proficiency, setProficiency] = useState("")

    const handleAddSkill = (event) => {
        event.preventDefault()
        const newSkill = {
            skill: skill,
            proficiency: proficiency,
            id: uuid()
        }
        setSkillsInfo([...skillsInfo, newSkill])
    }

    const handleDelete = (id) => {
        const updInfo = skillsInfo.filter((info) => info.id !== id)
        setSkillsInfo(updInfo)
      }



    return (
        <>
        <form className="forms">
        <Inputs type="text" placeholder="Japanese anime level" value={skillsInfo.skill} mandatory={false} label="Skills" onChange={e=> setSkill(e.target.value)} />
        <Inputs type="range" value={skillsInfo.proficiency} mandatory={false} label="Proficiency level" onChange={e=> setProficiency(e.target.value)} />
        <button onClick={handleAddSkill}>Add Skill</button>
        </form>

        {skillsInfo.map((info) =>
        <div className="prev-container" key={info.id}>
        <div>
            <strong>{info.skill}</strong>
            <div>{"proficiency: " + info.proficiency}</div>
        </div>
        <div className="icon-box">
            <span onClick={()=>{handleDelete(info.id)}}><IconRubbish/></span>
        </div>
        </div>)}
        </>
    )
}