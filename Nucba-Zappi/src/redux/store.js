import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import rootReducer from "./root-reducer";

const initialState = {};
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

// export const store = configureStore({
//   reducer: {
//     rootReducer,
//   },
//   composeWithDevTools: composeWithDevTools(applyMiddleware(...middleware)),
//   initialState
// })

export const persistor = persistStore(store);