import { Fieldsets } from "./Fieldsets"
import { useState } from "react"
export const Form = () => {
    const [formData, setFormData] = useState({
        Headache: { hasSymptom: null, painLevel: null},
        Fever: { hasSymptom: null, painLevel: null},
        Cough: { hasSymptom: null, painLevel: null},
        Sorethroat: { hasSymptom: null, painLevel: null},
    })

    const handleFieldsetChange = (label, hasSymptom, painLevel) => {
        setFormData((prevData) => ({
        ...prevData,
        [label]: { hasSymptom, painLevel },
        }));
    };

    const handleCancel = () => {
        setFormData({
            Headache: { hasSymptom: null, painLevel: null },
            Fever: { hasSymptom: null, painLevel: null },
            Cough: { hasSymptom: null, painLevel: null },
            Sorethroat: { hasSymptom: null, painLevel: null },
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form enviado", formData)
    }
    return(
        <section className="section-form">
            <h2>¿Cuáles son tus síntomas?</h2>
            <form>
                <div className="fields-container">
                    <Fieldsets 
                    label="Headache" 
                    title="¿Presenta dolor de cabeza?" 
                    onChange={handleFieldsetChange} 
                    hasSymptom={formData.Headache.hasSymptom} 
                    painLevel={formData.Headache.painLevel}/>
                    <Fieldsets 
                    label="Fever" 
                    title="¿Presenta fiebre?" 
                    onChange={handleFieldsetChange} 
                    hasSymptom={formData.Fever.hasSymptom} 
                    painLevel={formData.Fever.painLevel}/>
                    <Fieldsets 
                    label="Cough" 
                    title="¿Presenta tos?" 
                    onChange={handleFieldsetChange} 
                    hasSymptom={formData.Cough.hasSymptom} 
                    painLevel={formData.Cough.painLevel}/>
                    <Fieldsets 
                    label="Sorethroat" 
                    title="¿Presenta dolor de garganta?" 
                    onChange={handleFieldsetChange} 
                    hasSymptom={formData.Sorethroat.hasSymptom} 
                    painLevel={formData.Sorethroat.painLevel}/>
                </div>
                <div className="buttons-container">
                    <button className="btn-cancel" type="button" onClick={handleCancel}>Cancelar</button>
                    <button className="btn-submit" type="submit" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>
        </section>
    )
}