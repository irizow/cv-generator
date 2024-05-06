import './preview.css'
import { IconLocation, IconMail, IconPhone } from '../../assets/icons'

export function PresonalInfoPreview({personalInfo}) {
    return (
        <div className="personal-info-preview">
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