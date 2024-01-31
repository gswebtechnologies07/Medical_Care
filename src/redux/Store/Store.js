// import { createStore, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import { combineReducer } from '../Reducer/CombineReducer'

export const store = configureStore({
  reducer: combineReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});