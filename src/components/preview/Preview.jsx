import { PresonalInfoPreview } from "./PersonalInfoPreview"
import { ExperiencePreview } from "./ExperiencePreview"
import { EducationPreview } from "./EducationPreview"
import { AboutPreview } from "./AboutPreview"
import { SkillsPreview } from "./SkillsPreview"
import './preview.css'

export function Preview({id, personalInfo, eduInfo, expInfo, aboutInfo, skillsInfo, color}) {
    return (
        <div className="preview-page" id={id}>
        <PresonalInfoPreview personalInfo={personalInfo} color={color} />
        <div className="preview-separator">
        <div className="left-column">
        <AboutPreview aboutInfo={aboutInfo} />
        <SkillsPreview skillsInfo={skillsInfo} color={color} />
        </div>
        <EducationPreview eduInfo={eduInfo} />
        <ExperiencePreview expInfo={expInfo} />
        </div>
        </div>
    )
}