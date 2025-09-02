import { useState } from "react"

export const Fieldsets = ({label, title}) => {
    const [showPainLevel, setShowPainLevel] = useState(false);
    
    const handleRadioChange = (event) => {
        setShowPainLevel(event.target.value === 'Sí')
    }

    return(
        <div>
            <fieldset>
                <legend>{title}</legend>
                    <div className="radio-container">
                        <label>
                            <input type="radio" name={label} value="Sí" onChange={handleRadioChange}/>
                            Sí
                        </label>
                        <label>
                            <input type="radio" name={label} value="No" onChange={handleRadioChange}/>
                            No
                        </label>
                    </div>
                    {showPainLevel && (
                        <div className="pain-level-container">
                            <label>Nivel de dolor <span className="level">(1 al 10)</span></label>
                            <input 
                            type="number" 
                            min={1}
                            max={10}
                            />
                        </div>
                    )}
            </fieldset>
        </div>
    )
}