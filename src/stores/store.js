import { configureStore } from '@reduxjs/toolkit';
import countSlice from './slices/countSlice';

const store = configureStore({
    reducer: {
        count: countSlice,  // count: nome etichetta // azioni che può fare
    },
});

export default store;