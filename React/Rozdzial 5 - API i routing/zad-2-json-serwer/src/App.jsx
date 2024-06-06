import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import VolunteerList from '../components/VolunteerList';
import VolunteerProfile from '../components/VolunteerProfile';
import AddVolunteerForm from '../components/AddVolunteerForm';
import EditVolunteerForm from '../components/EditVolunteerForm';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/profiles" />} />
                <Route path="/profiles/add" element={<AddVolunteerForm/>} />
                <Route path="/profiles/:id" element={<VolunteerProfile/>} />
                <Route path="/profiles/:id/edit" element={<EditVolunteerForm/>} />
                <Route path="/profiles" element={<VolunteerList/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
