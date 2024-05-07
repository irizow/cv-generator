import './preview.css'
import { IconLocation, IconMail, IconPhone } from '../../assets/icons'

export function PresonalInfoPreview({personalInfo, color}) {
    let isBlack = (color==="rgb(0, 0, 0)" || color==="rgb(20, 7, 133)") ? true : false
    let styles = {
        backgroundColor: color,
        color: isBlack ? "white" : "black"
    }
    return (
        
        <div className="personal-info-preview" style={styles} >
        <h1>{personalInfo.fullName}</h1>
        <div>
        <div>
            {<IconMail/>}
            <span>{personalInfo.email}</span>
        </div>
        <div>
            {<IconPhone/>}
            <span>{personalInfo.phoneNum}</span>
        </div>
        <div>
            {<IconLocation/>}
            <span>{personalInfo.address}</span>
        </div>
        </div>
        </div>
    )
}