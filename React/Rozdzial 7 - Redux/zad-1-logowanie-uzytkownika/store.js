import { configureStore } from '@reduxjs/toolkit';
import authReducer from './src/authSlice';
import bankReducer from './src/bankSlice';

export default configureStore({
    reducer: {
        auth: authReducer,
        bank: bankReducer,
    },
});
