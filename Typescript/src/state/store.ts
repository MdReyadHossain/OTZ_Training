import createSagaMiddleware from 'redux-saga'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from "./rootReducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: false, serializableCheck: false}).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
