export const Fieldsets = ({label, title}) => {
    return(
        <div>
            <fieldset>
                <legend>{title}</legend>
                    <div className="radio-container">
                        <label>
                            <input type="radio" name={label} value="Sí"/>
                            Sí
                        </label>
                        <label>
                            <input type="radio" name={label} value="No"/>
                            No
                        </label>
                    </div>
                    <div className="pain-level-container">
                        <label>Nivel de dolor <span className="level">(1 al 10)</span></label>
                        <input 
                        type="number" 
                        min={1}
                        max={10}
                        />
                    </div>
            </fieldset>
        </div>
    )
}