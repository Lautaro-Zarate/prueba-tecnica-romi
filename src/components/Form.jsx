export const Form = () => {
    return(
        <section className="section-form">
            <h2>¿Cuáles son tus síntomas?</h2>
            <form>
                <fieldset>
                    <legend>¿Presenta dolor de cabeza?</legend>
                    <label>
                        <input type="radio" name="Dolor de cabeza" value="Sí"/>
                        Sí
                    </label>
                    <label>
                        <input type="radio" name="Dolor de cabeza" value="No"/>
                        No
                    </label>
                </fieldset>
            </form>
        </section>
    )
}