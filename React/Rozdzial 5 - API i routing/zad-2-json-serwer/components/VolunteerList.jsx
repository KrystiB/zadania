import { useEffect, useState } from 'react';
import { ApiService } from './ApiService';
import { Link } from 'react-router-dom';
import { Box, Typography, List, ListItem, Button } from '@mui/material';

const VolunteerList = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await ApiService.fetchVolunteers();
            setVolunteers(result);
        };
        fetchData();
    }, []);

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
                Lista Wolontariuszy
            </Typography>
            <List>
                {volunteers.map((volunteer) => (
                    <ListItem key={volunteer.id} sx={{ padding: '8px 0' }}>
                        <Button
                            component={Link}
                            to={`/profiles/${volunteer.id}`}
                            sx={{ textTransform: 'none', justifyContent: 'flex-start', width: '100%' }}
                        >
                            {volunteer.firstName} {volunteer.lastName}
                        </Button>
                    </ListItem>
                ))}
            </List>
            <Button
                component={Link}
                to="/profiles/add"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
            >
                Dodaj wolontariusza
            </Button>
        </Box>
    );
};

export default VolunteerList;
