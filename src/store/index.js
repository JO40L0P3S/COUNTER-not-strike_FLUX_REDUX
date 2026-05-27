import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import contadorReducer from '../reducers/counterReducers'; 

const reducers = combineReducers({ contador: contadorReducer });

/*      Combinamos os reducers criados e endereçados com chaves em um objeto.  */


const store = configureStore({ reducer: reducers });

/* configura a store de estados globais. */

export default store;