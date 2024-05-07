import './preview.css'

export function ExperiencePreview({expInfo}) {
    return (
        <div className="exp-info-preview">
            <h1>Experience</h1>
        {expInfo.map((exp, index) =>
        <div className="info-wrapper" key={index}>
        <div className="date-and-location">
            <p>{exp.startDate} - {exp.endDate}</p>
        </div>
        <div className="job-and-description">
            <strong>{exp.company}</strong>
            <div>{exp.position}</div>
            <p>{exp.description}</p>
        </div>
        </div>
        )}
        </div>
    )
}

