import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

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


export const useValidation = () => {
    const { t } = useTranslation()
    return yup.object().shape({
        name: yup.string().required(t("Заполните поле!")),
        lastName: yup.string().required(t("Заполните поле!")),
        email: yup.string().required(t("Заполните поле!"))
            .email(t('Неправильная электронная почта')),
        password: yup.string()
            .min(8, t('Пароль должен быть от 8 до 16 симовлов'))
            .max(16, t('Пароль должен быть от 8 до 16 симовлов')),
        ageCheck: yup.boolean().oneOf([true], 'Обязательно для выбора'),
        privacyCheck: yup.boolean().oneOf([true], 'Обязательно для выбора'),
    });
};
