import { object, number, string } from 'yup';

const symptomSchema = object({
    hasSymptom: string().oneOf(['Yes', 'No'], 'Debes elegir una opción').required('Este campo es obligatorio'),
    painLevel: number().min(1, 'El mínimo nivel de dolor debe ser 1').max(10, 'El máximo nivel de dolor debe ser 10').when('hasSymptom', {
        is: 'Yes',
        then: (schema) => schema.required('Debes indicar el nivel de dolor'),
        otherwise: (schema) => schema.nullable().notRequired()
    })
})

export const formSchema = object({
    headache: symptomSchema,
    fever: symptomSchema,
    cough: symptomSchema,
    sorethroat: symptomSchema
    })
