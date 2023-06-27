import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import exampleReducer from './reducers/exampleReducer';

const rootReducer = combineReducers({
    exampleReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
