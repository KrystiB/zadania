import { useFormik } from 'formik';
import {
    Box,
    Button,
    Typography,
    FormControlLabel,
    Checkbox,
    TextField,
} from '@mui/material';
import { ApiService } from './ApiService';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';

const AddVolunteerForm = () => {
    const navigate = useNavigate()

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .min(5, 'Imię musi mieć minimum 5 znaków')
            .required('Imię jest wymagane'),
        age: Yup.number()
            .min(18, 'Wiek musi być minimum 18')
            .max(99, 'Maksymalny wiek to 99')
            .required('Wiek jest wymagany'),
        city: Yup.string()
            .min(3, 'Miasto musi mieć minimum 3 znaki')
            .required('Miasto jest wymagane'),
        volunteering: Yup.boolean().required('Musisz zaznaczyć pole'),
        imageLink: Yup.string().optional(),
        postalCode: Yup.string()
            .matches(/^\d{2}-\d{3}$/, 'Podaj kod pocztowy w formacie XX-XXX')
            .required('Kod pocztowy jest wymagany'),
        phoneNumber: Yup.string()
            .matches(/^\d{9}$/, 'Podaj numer telefonu zawierający 9 cyfr')
            .required('Numer telefonu jest wymagany'),
    });

    const formik = useFormik({
        initialValues: {
            firstName: '',
            age: '',
            city: '',
            volunteering: false,
            imageLink: '',
            postalCode: '',
            phoneNumber: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            try {
                await ApiService.addVolunteer(values);
                navigate('/profiles')
            } catch (error) {
                console.error('Błąd', error);
            }
        },
    });

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: 600,
                margin: 'auto',
                padding: 2,
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                mt: 4,
            }}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2, display: 'flex', justifyContent: 'space-between'}}>
                Dodaj Nowego Wolontariusza <Button component={Link} to='/profiles' color='secondary' variant='outlined'>Cofnij</Button>
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
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    fullWidth
                    id="age"
                    name="age"
                    label="Wiek"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.age && Boolean(formik.errors.age)}
                    helperText={formik.touched.age && formik.errors.age}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="city"
                    name="city"
                    label="Miasto"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    margin="normal"
                />
                <FormControlLabel
                    control={<Checkbox checked={formik.values.volunteering} />}
                    id='volunteering'
                    name='volunteering'
                    color='primary'
                    onChange={formik.handleChange}
                    label="Chcę być wolontariuszem"
                />
                <TextField
                    fullWidth
                    id="imageLink"
                    name="imageLink"
                    label="Link do zdjęcia"
                    value={formik.values.imageLink}
                    onChange={formik.handleChange}
                    error={formik.touched.imageLink && Boolean(formik.errors.imageLink)}
                    helperText={formik.touched.imageLink && formik.errors.imageLink}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="postalCode"
                    name="postalCode"
                    label="Kod pocztowy"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
                    helperText={formik.touched.postalCode && formik.errors.postalCode}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Numer telefonu"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    margin="normal"
                />
                <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ marginTop: 2 }}
                >
                    Dodaj
                </Button>
            </form>
        </Box>
    );
};

export default AddVolunteerForm;