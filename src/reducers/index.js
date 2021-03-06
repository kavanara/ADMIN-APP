import productReducer from './product.reducers';
import categoryReducer from './category.reducers';
import orderReducer from './order.reducers';
import { combineReducers } from 'redux';


const rootReducer =combineReducers({
      category:categoryReducer,
      product:productReducer,
      order:orderReducer

});

export default rootReducer;