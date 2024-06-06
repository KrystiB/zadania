import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Box,
    Button,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
} from '@mui/material';
import { ApiServices } from './ApiService';

const FakeLogin = () => {
    const validationSchema = Yup.object({
        login: Yup.string()
            .required('Login jest wymagany')
            .min(3, 'Musi mieć minimum 3 znaki'),
        password: Yup.string()
            .required('Hasło jest wymagane')
            .min(8, 'Musi mieć przynajmniej 8 znaków'),
        rememberMe: Yup.boolean(),
    });

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: true,
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await ApiServices.loginUsers(values);
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
            FakeLogin
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Logowanie
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="login"
                    name="login"
                    label="Login"
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    error={formik.touched.login && Boolean(formik.errors.login)}
                    helperText={formik.touched.login && formik.errors.login}
                    margin="normal"
                ></TextField>
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
                <FormControlLabel
                    control={<Checkbox checked={formik.values.rememberMe} />}
                    id="rememberMe"
                    name="rememberMe"
                    color="primary"
                    onChange={formik.handleChange}
                    label="Zapamiętaj mnie"
                ></FormControlLabel>
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ marginTop: 2 }}
                >
                    Zaloguj się
                </Button>
            </form>
        </Box>
    );
};

export default FakeLogin;
