import { combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./authReducer";
import eventReducer from "./eventReducer";
import { legacy_createStore as  createStore} from "redux";

const rootReducer = combineReducers({
    auth:authReducer,
    event:eventReducer,
});

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;