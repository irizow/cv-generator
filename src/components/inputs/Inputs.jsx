export function Inputs({textarea=false, type, placeholder, id, label, value, onChange, mandatory}) {
    return (

        <div className="inputs">
            <label htmlFor={id}>
                {label}
                {mandatory && <span>*</span>}
            </label>
        {textarea ?
            <textarea 
            id={id}
            value={value}
            placeholder={placeholder}/>
            :
            <input 
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}/>
        }
        </div>
    )
}