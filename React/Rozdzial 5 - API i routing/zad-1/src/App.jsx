import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Profiles from './components/Profiles';
import ProfileDetail from './components/ProfileDetail';
import AddProfile from './components/AddProfile';
import EditProfile from './components/EditProfile';
// import Shops from './components/Shops';
// import ShopDetail from './components/ShopDetail';
import AddShop from './components/AddShop';
// import EditShop from './components/EditShop';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/profiles" />} />

            <Route path="/profiles" element={<Profiles></Profiles>}></Route>
            <Route path="/profiles/add" element={<AddProfile />} />
            <Route path="/profiles/:id" element={<ProfileDetail />} />
            <Route path="/profiles/:id/edit" element={<EditProfile />} />

            {/* <Route path="/shops" element={<Shops />} /> */}
            <Route path="/shops/add" element={<AddShop />} />
            {/* <Route path="/shops/:id" element={<ShopDetail />} />
            <Route path="/shops/:id/edit" element={<EditShop />} /> */}
        </Routes>
    );
}

export default App;
