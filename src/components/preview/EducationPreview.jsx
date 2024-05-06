import './preview.css'


export function EducationPreview({eduInfo}) {
    return (
        <div className="exp-info-preview">
            <h1>Education</h1>
        {eduInfo.map((edu, index) =>
        <div key={index} className="info-wrapper">
        <div className="date-and-location">
            <p>{edu.startDate} - {edu.endDate}</p>
        </div>
        <div className="job-and-description">
            <strong>{edu.school}</strong>
            <div>{edu.degree}</div>
        </div>
        </div>
        )}
        </div>
    )
}

