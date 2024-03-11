import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import movieSlice from './slices/movieSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['searchData'],
};

const rootReducer = combineReducers({
  searchData: searchSlice,
  moviesData: movieSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 100,
      },
    }),
});

export const persistor = persistStore(store);
