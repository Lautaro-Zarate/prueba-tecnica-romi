import { Fieldsets } from "./Fieldsets"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "../schemas/formSchema";

export const Form = () => {

    const {
        register,
        handleSubmit, 
        formState: {errors}, 
        reset, 
        watch} = useForm({
        
        resolver: yupResolver(formSchema),
        defaultValues: {
            headache: { hasSymptom: null, painLevel: null },
            fever: { hasSymptom: null, painLevel: null },
            cough: { hasSymptom: null, painLevel: null },
            sorethroat: { hasSymptom: null, painLevel: null },
        },
    })

    const submitForm = (data) => {
    console.log("Form Data:", data)
    reset();
    }

    const handleCancel = () => {
        reset();
    }
    
    return(
        <section className="section-form">
            <h2>¿Cuáles son tus síntomas?</h2>
            <form onSubmit={handleSubmit(submitForm)}>
                <div className="fields-container">
                    <Fieldsets 
                    label="headache" 
                    title="¿Presenta dolor de cabeza?" 
                    register={register}
                    errors={errors}
                    watch={watch}/>
                    <Fieldsets 
                    label="fever" 
                    title="¿Presenta fiebre?" 
                    register={register}
                    errors={errors}
                    watch={watch}/>
                    <Fieldsets 
                    label="cough" 
                    title="¿Presenta tos?" 
                    register={register}
                    errors={errors}
                    watch={watch}/>
                    <Fieldsets 
                    label="sorethroat" 
                    title="¿Presenta dolor de garganta?" 
                    register={register}
                    errors={errors}
                    watch={watch}/>
                </div>
                <div className="buttons-container">
                    <button className="btn-cancel" type="button" onClick={handleCancel}>Cancelar</button>
                    <button className="btn-submit" type="submit" >Enviar</button>
                </div>
            </form>
        </section>
    )
}