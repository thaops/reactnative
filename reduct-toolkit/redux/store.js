import { configureStore } from '@reduxjs/toolkit';

import registerReducer from './reducers/RegisterSlice';
import loginReducer from './reducers/LoginSlice';
import searchReducer from './reducers/SearchSlice';
import categoryReducer from './reducers/CategorySlice';
import listProductReducer from './reducers/ListProductSlice';
import addCartReducer from './reducers/AddCartSlice';
import upDataReducer from './reducers/UpDataSlice';
import cartReducer from './reducers/CartSlice';
import deleteCartReducer from'./reducers/DeleteCartSlice';
import deleteManyCartReducer from'./reducers/DeleteManyCartSlice';
import buyReducer from'./reducers/BuySlice';
import userBillReducer from'./reducers/GetBillSlice';
import getUserReducer from'./reducers/GetUserSlice';
import dotReducer from'./reducers/DotSlice';


export const store = configureStore({
  reducer: {
    register: registerReducer,
    login: loginReducer,
    search:searchReducer,
    category:categoryReducer,
    listProduct:listProductReducer,
    addCart:addCartReducer,
    upData:upDataReducer,
    cart:cartReducer,
    deleteCart:deleteCartReducer,
    deleteManyCart:deleteManyCartReducer,
    buy:buyReducer,
    userBill:userBillReducer,
    getUser:getUserReducer,
    Dot:dotReducer,
  },
});