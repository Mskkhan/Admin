import { combineReducers } from "redux";
import authRedusers from "./auth.redusers";
import userReducer from './user.reducer';
import productReducer from './product.reducer';
import orderRreducer from './order.reducer';
import pageReducer from './page.reducer';
import categoryReducer from './category.reducer';


const rootReducer=combineReducers({
    auth:authRedusers,
    user:userReducer,
    category:categoryReducer,
    order:orderRreducer,
    product:productReducer,
    page: pageReducer
})

export default rootReducer;