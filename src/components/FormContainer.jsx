import { Form } from "./Form"
import { Greetings } from "./Greetings"

export const FormContainer = () => {
    return(
        <section className="form-container">
            <Greetings/>
            <Form/>
        </section>
    )
}