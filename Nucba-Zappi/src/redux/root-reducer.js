import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categories-reducer";
import productsReducer from "./products/products-reducer";
import recommendedReducer from "./recommended/recommended-reducer";

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  recommended: recommendedReducer,
});


export default persistReducer(persistConfig, rootReducer);