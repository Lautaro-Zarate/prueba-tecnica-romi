import { Fieldsets } from "./Fieldsets"

export const Form = () => {
    return(
        <section className="section-form">
            <h2>¿Cuáles son tus síntomas?</h2>
            <form>
                <div className="fields-container">
                    <Fieldsets label="Headache" title="¿Presenta dolor de cabeza?"/>
                    <Fieldsets label="Fever" title="¿Presenta fiebre?"/>
                    <Fieldsets label="Cough" title="¿Presenta tos?"/>
                    <Fieldsets label="Sorethroat" title="¿Presenta dolor de garganta?"/>
                </div>
                <div className="buttons-container">
                    <button className="btn-cancel">Cancelar</button>
                    <button className="btn-submit">Enviar</button>
                </div>
            </form>
        </section>
    )
}