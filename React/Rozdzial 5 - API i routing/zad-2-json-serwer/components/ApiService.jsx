export const ApiService = {
    addVolunteer: async (volunteerData) => {
        try {
            const response = await fetch('http://localhost:3001/volunteers', {
                method: 'POST',
                headers: { 'Content-type': 'application/json;charset=UTF-8' },
                body: JSON.stringify(volunteerData),
            });
            if (!response.ok) {
                throw new Error('response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Błąd', error);
        }
    },

    // loginUsers: async (userData) => {
    //     try {
    //         const response = await fetch('http://localhost:3001/login', {
    //             method: 'POST',
    //             headers: { 'Content-type': 'application/json;charset=UTF-8' },
    //             body: JSON.stringify(userData),
    //         });
    //         if (!response.ok) {
    //             throw new Error('response was not ok');
    //         }
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         console.error('Błąd', error);
    //     }
    // },

    fetchVolunteers: async () => {
        try {
            const response = await fetch('http://localhost:3001/volunteers', {
                method: 'GET',
                headers: { 'Content-type': 'application/json;charset=UTF-8' },
            });
            if (!response.ok) {
                throw new Error('response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Błąd', error);
        }
    },

    fetchVolunteerById: async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/volunteers/${id}`, {
                method: 'GET',
                headers: { 'Content-type': 'application/json;charset=UTF-8' },
            });
            if (!response.ok) {
                throw new Error('response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Błąd', error);
        }
    },

    updateVolunteer: async (id, volunteerData) => {
        try {
            const response = await fetch(`http://localhost:3001/volunteers/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json;charset=UTF-8' },
                body: JSON.stringify(volunteerData),
            });
            if (!response.ok) {
                throw new Error('response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Błąd', error);
        }
    },
};
