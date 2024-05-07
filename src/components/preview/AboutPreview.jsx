import './preview.css'

export function AboutPreview({aboutInfo}) {
    return (
        <div className="about-info-preview">
            <h2>About Me</h2>
            <p className="br" />
            <p>{aboutInfo}</p>
        </div>
    )
}