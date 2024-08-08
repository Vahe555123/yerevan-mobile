import * as yup from 'yup';
// import { useTranslation } from 'react-i18next';

export const yupResolver = (validationSchema) => async (values) => {
    try {
        await validationSchema.validate(values, { abortEarly: false });
        return {
            values,
            errors: {},
        };
    } catch (errors) {
        const yupErrors = {};
        errors.inner.forEach((error) => {
            yupErrors[error.path] = error.message;
        });
        return {
            values: {},
            errors: yupErrors,
        };
    }
};

export const useValidation = () =>{

    return yup.object().shape({
        name: yup.string().required("Заполните поле"),
        password: yup.string()
        .min(8,("Пароль должен быть от 8 до 16 символов"))
        .max(16,("Пароль должен быть от 8 до 16 символов")),
        ageCheck: yup.boolean().oneOf([true],
        "Обязаткльно для выбора"),
    })
}