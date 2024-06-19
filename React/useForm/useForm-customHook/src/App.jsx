import './App.css';
import * as Yup from 'yup';
import useForm from './components/useForm';

const validationSchema = Yup.object({
    username: Yup.string().required('Imię jest wymagane'),
    email: Yup.string().email('Niepoprawny adres email').required('Email jest wymagany'),
});

const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};

const initialValues = {
    username: '',
    email: '',
};

const App = () => {
    const { values, touched, errors, isDirty, handleChange, handleBlur, handleSubmit } =
        useForm(initialValues, onSubmit, validationSchema);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Username</label>
                <input
                    type="text"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.username && errors.username && <div>{errors.username}</div>}
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
            </div>
            <button type="submit" disabled={Object.keys(errors).some(key => errors[key]) || !isDirty}>
                Submit
            </button>
        </form>
    );
};

export default App;
