import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ApiService } from './ApiService';
import { useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';

const EditVolunteerForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [volunteer, setVolunteer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedVolunteer = await ApiService.fetchVolunteerById(id);
            setVolunteer(fetchedVolunteer);
        };
        fetchData();
    }, [id]);

    const initialValues = {
        city: volunteer?.city || '',
        imageLink: volunteer?.imageLink || '',
        postalCode: volunteer?.postalCode || '',
        phoneNumber: volunteer?.phoneNumber || '',
    };

    const validationSchema = Yup.object({
        city: Yup.string()
            .min(3, 'Miasto musi mieć minimum 3 znaki')
            .required('Miasto jest wymagane'),
        imageLink: Yup.string().optional(),
        postalCode: Yup.string()
            .matches(/^\d{2}-\d{3}$/, 'Podaj kod pocztowy w formacie XX-XXX')
            .required('Kod pocztowy jest wymagany'),
        phoneNumber: Yup.string()
            .matches(/^\d{9}$/, 'Podaj numer telefonu zawierający 9 cyfr')
            .required('Numer telefonu jest wymagany'),
    });

    const formik = useFormik({
        initialValues,
        enableReinitialize: true,
        validationSchema,
        onSubmit: async (values) => {
            try {
                const updatedVolunteer = {
                    ...volunteer,
                    ...values,
                };
                await ApiService.updateVolunteer(id, updatedVolunteer);
                navigate(`/profiles/${id}`);
            } catch (error) {
                console.error('Błąd', error);
            }
        },
    });

    if (!volunteer) {
        return <div>Wczytywanie...</div>;
    }

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
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 2 }}>
                Edytuj Profil Wolontariusza
            </Typography>
            <form onSubmit={formik.handleSubmit}>
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
                    error={
                        formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
                    }
                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                    margin="normal"
                />
                <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 2}}>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        Zapisz
                    </Button>
                    <Button
                        component={Link}
                        to={`/profiles/${volunteer.id}`}
                        variant="contained"
                        color="secondary"
                    >
                        Cofnij
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default EditVolunteerForm;
