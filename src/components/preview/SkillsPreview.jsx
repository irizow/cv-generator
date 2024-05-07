import './preview.css'
import progress1 from '../../assets/1progress.png'
import progress2 from '../../assets/2progress.png'
import progress3 from '../../assets/3progress.png'
import progress4 from '../../assets/4progress.png'
import progress5 from '../../assets/5progress.png'


export function SkillsPreview({skillsInfo, color}) {
    let isBlack = (color==="rgb(0, 0, 0)" || color==="rgb(20, 7, 133)") ? true : false
    let invert = "invert(100%)"
    let styles = {
        backgroundColor: color,
        color: isBlack ? "white" : "black"
    }

    const renderCondition = (info) => {
        let prof = info.proficiency
        console.log("proficiency" + prof)
        if(prof >= 0 && prof < 20) {
            return progress1
        }
        else if (prof >= 20 && prof < 40) {
            return progress2
        }
        else if (prof >= 40 && prof < 60) {
            return progress3
        }
        else if (prof>= 60 && prof < 85) {
            return progress4
        }
        else {
            return progress5
        }
    }
    return (
        <div className="skills-info-preview" style={styles}>
            <h2>Skills</h2>
            {skillsInfo.map((info, index) =>
            <div key={index} className="skill-container">
            <p>{info.skill}</p>
            <img src={renderCondition(info)} style ={isBlack? {filter: invert} : null}></img>
            {console.log("img src + render " + renderCondition)}
            </div>)}

        </div>
    )
}