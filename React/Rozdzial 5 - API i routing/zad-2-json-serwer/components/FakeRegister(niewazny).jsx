import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, TextField, Typography } from '@mui/material';
import { ApiServices } from './ApiService';

const FakeRegister = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('Imię jest wymagane')
            .min(3, 'Musi mieć przynajmniej 3 znaki'),
        lastName: Yup.string()
            .required('Nazwisko jest wymagane')
            .min(3, 'Musi mieć przynajmniej 3 znaki'),
        password: Yup.string()
            .required('Hasło jest wymagane')
            .min(8, 'Musi mieć przynajmniej 8 znaków'),
        confirmPassword: Yup.string()
            .required('Potwierdzenie hasła jest wymagane')
            .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await ApiServices.registerUser(values);
                console.log(response);
            } catch (error) {
                console.error('Błąd', error);
            }
        },
    });
    return (
        <Box
            sx={{
                width: 300,
                margin: 'auto',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
            }}
        >
            FakeRegister
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Rejestracja
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="firstName"
                    name="firstName"
                    label="Imię"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    margin="normal"
                ></TextField>
                <TextField
                    fullWidth
                    id="lastName"
                    name="lastName"
                    label="Nazwisko"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Hasło"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Powtórz hasło"
                    type="password"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.confirmPassword &&
                        Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                    }
                    margin="normal"
                />
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ marginTop: 2 }}
                >
                    Wyślij
                </Button>
            </form>
        </Box>
    );
};
export default FakeRegister;
