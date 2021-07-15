import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { errorReducer } from "./error/error.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  error: errorReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [thunk, createLogger()];
const middlewareEnhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composeWithDevTools(middlewareEnhancer));

export default store;
