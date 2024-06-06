import { useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import { ApiService } from './ApiService';
import { Box, Typography, Button, CircularProgress } from '@mui/material';

const VolunteerProfile = () => {
    const { id } = useParams();
    const [volunteer, setVolunteer] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiService.fetchVolunteerById(id);
            setVolunteer(result);
        };
        fetchData();
    }, [id]);

    if (!volunteer) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <CircularProgress />
            </Box>
        );
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
                Profil Wolontariusza
            </Typography>
            <Typography variant="body1">
                <strong>Imię:</strong> {volunteer.firstName}
            </Typography>
            <Typography variant="body1">
                <strong>Wiek:</strong> {volunteer.age}
            </Typography>
            <Typography variant="body1">
                <strong>Chęć wolontariatu:</strong> {(volunteer.volunteering && 'Tak') || 'Nie'}
            </Typography>
            <Typography variant="body1">
                <strong>Miasto:</strong> {volunteer.city}
            </Typography>
            <Typography variant="body1">
                <strong>Kod Pocztowy:</strong> {volunteer.postalCode}
            </Typography>
            <Typography variant="body1">
                <strong>Numer Telefonu:</strong> {volunteer.phoneNumber}
            </Typography>
            {volunteer.imageLink && (
                <Box sx={{ textAlign: 'center', margin: '16px 0' }}>
                    <img
                        src={ volunteer.imageLink }
                        alt="Wolontariusz"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </Box>
            )}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Button
                    component={Link}
                    to={`/profiles/${volunteer.id}/edit`}
                    variant="contained"
                    color="primary"
                >
                    Edytuj
                </Button>
                <Button component={Link} to="/profiles" variant="outlined" color="secondary">
                    Powrót
                </Button>
            </Box>
        </Box>
    );
};

export default VolunteerProfile;
