import { useState, useEffect } from "react";
export const Fieldsets = ({label, title, register, errors, watch}) => {

    const [showPainLevel, setShowPainLevel] = useState(false);

    const hasSymptomValue = watch(`${label}.hasSymptom`);
    useEffect(() => {
        setShowPainLevel(hasSymptomValue === 'Yes')
    }, [hasSymptomValue]);

    return(
        <div>
            <fieldset>
                <legend>{title}</legend>
                    <div className="radio-container">
                        <label>
                            <input type="radio" name={label} value="Yes" {...register(`${label}.hasSymptom`)}
                            />
                            Sí
                        </label>
                        <label>
                            <input type="radio" name={label} value="No" {...register(`${label}.hasSymptom`)}/>
                            No
                        </label>
                    </div>
                    {errors[label]?.hasSymptom && (
                        <p className="error-message" aria-live="assertive">{errors[label].hasSymptom.message}</p>
                    )}
                    {showPainLevel && (
                        <div className="pain-level-container fade-in">
                            <div className="pain-level-wrapper">
                                <label>Nivel de dolor <span className="level">(1 al 10)</span></label>
                            </div>
                            <input 
                            type="number" 
                            min={1}
                            max={10}
                            name={label}
                            {...register(`${label}.painLevel`)}
                            />
                            {errors[label]?.painLevel && (
                            <p className="error-message" aria-live="assertive">{errors[label].painLevel.message}</p>
                            )}
                        </div>
                    )}
            </fieldset>
        </div>
    )
}