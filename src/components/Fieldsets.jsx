export const Fieldsets = ({label, title, onChange, hasSymptom, painLevel}) => {

const handleRadioChange = (event) => {
    const value = event.target.value === "Sí";
    onChange(label, value, painLevel);
};

const handlePainLevelChange = (event) => {
    onChange(label, hasSymptom, Number(event.target.value));
};

    return(
        <div>
            <fieldset>
                <legend>{title}</legend>
                    <div className="radio-container">
                        <label>
                            <input type="radio" name={label} value="Sí" checked={hasSymptom === true} onChange={handleRadioChange}/>
                            Sí
                        </label>
                        <label>
                            <input type="radio" name={label} value="No" checked={hasSymptom === false} onChange={handleRadioChange}/>
                            No
                        </label>
                    </div>
                    {hasSymptom && (
                        <div className="pain-level-container">
                            <label>Nivel de dolor <span className="level">(1 al 10)</span></label>
                            <input 
                            type="number" 
                            min={1}
                            max={10}
                            value={painLevel || ''}
                            onChange={handlePainLevelChange}
                            />
                        </div>
                    )}
            </fieldset>
        </div>
    )
}