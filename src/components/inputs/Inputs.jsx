import './forms.css'

export function Inputs({textarea=false, type, placeholder, id, label, value, onChange, mandatory, defaultValue}) {
    return (

        <div className="inputs">
            <label htmlFor={id}>
                {label}
                {mandatory && <span>*</span>}
            </label>
        {textarea ?
            <textarea 
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}/>
            
            :
            <input 
            type={type}
            id={id}
            onChange={onChange}
            placeholder={placeholder}
            defaultValue={defaultValue}/>
        }
        </div>
    )
}