import './preview.css'

export function AboutPreview({aboutInfo}) {
    return (
        <div className="about-info-preview">
            <h1>About</h1>
            <p>{aboutInfo}</p>
        </div>
    )
}