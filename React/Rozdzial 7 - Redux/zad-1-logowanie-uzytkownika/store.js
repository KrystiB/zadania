import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/authSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
    },
});
