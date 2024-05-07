import './preview.css'


export function SkillsPreview({skillsInfo, color}) {
    const imgSrc = "../../src/assets/"
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
            return "1progress.png"
        }
        else if (prof >= 20 && prof < 40) {
            return "2progress.png"
        }
        else if (prof >= 40 && prof < 60) {
            return "3progress.png"
        }
        else if (prof>= 60 && prof < 85) {
            return "4progress.png"
        }
        else {
            return "5progress.png"
        }
    }
    return (
        <div className="skills-info-preview" style={styles}>
            <h2>Skills</h2>
            {skillsInfo.map((info, index) =>
            <div key={index} className="skill-container">
            <p>{info.skill}</p>
            <img src={imgSrc + renderCondition(info)} style ={isBlack? {filter: invert} : null}></img>
            {console.log("img src + render " + imgSrc + renderCondition)}
            </div>)}

        </div>
    )
}