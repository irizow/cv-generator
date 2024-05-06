import { PresonalInfoPreview } from "./PersonalInfoPreview"
import { ExperiencePreview } from "./ExperiencePreview"
import { EducationPreview } from "./EducationPreview"
import { AboutPreview } from "./AboutPreview"
import './preview.css'

export function Preview({personalInfo, eduInfo, expInfo, aboutInfo}) {
    return (
        <div className="preview-page">

        <PresonalInfoPreview personalInfo={personalInfo} />
        <div className="preview-separator">
        <AboutPreview aboutInfo={aboutInfo} />
        <EducationPreview eduInfo={eduInfo} />
        <ExperiencePreview expInfo={expInfo} />
        </div>
        </div>
    )
}