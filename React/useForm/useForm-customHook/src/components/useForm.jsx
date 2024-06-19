import { useState } from 'react';

const useForm = (initialValues, onSubmit, validationSchema) => {
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [isDirty, setIsDirty] = useState(false);

    const validateField = async (name, value) => {
        try {
            await validationSchema.validateAt(name, { [name]: value });
            return { [name]: '' };
        } catch (error) {
            return { [name]: error.message };
        }
    };

    const validateForm = async () => {
        try {
            await validationSchema.validate(values, { abortEarly: false });
            return {};
        } catch (err) {
            const validationErrors = err.inner.reduce((acc, error) => {
                return { ...acc, [error.path]: error.message };
            }, {});
            return validationErrors;
        }
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        setIsDirty(true);
        const fieldError = await validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...fieldError,
        }));
    };

    const handleBlur = async (e) => {
        const { name, value } = e.target;
        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
        const fieldError = await validateField(name, value);
        setErrors((prevErrors) => ({
            ...prevErrors,
            ...fieldError,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = await validateForm();
        setErrors(formErrors);
        setTouched(
            Object.keys(values).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {})
        );
        if (Object.keys(formErrors).length === 0) {
            onSubmit(values);
        }
    };

    return {
        values,
        touched,
        errors,
        isDirty,
        handleChange,
        handleBlur,
        handleSubmit,
    };
};

export default useForm;
