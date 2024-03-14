import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import rootReducer from "../reducers";

const persistConfig = {
    key : "root",
    storage,
}
const presistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(presistedReducer);

export const persistor = persistStore(store)