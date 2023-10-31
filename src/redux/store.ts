import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import  cartReducer  from './features/cartReducer';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector