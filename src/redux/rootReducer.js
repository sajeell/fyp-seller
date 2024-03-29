import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import intermediaryReducer from './intermediary/intermediary.reducer'
import productReducer from './product/user.reducer'

import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  intermediary: intermediaryReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
}

export default persistReducer(persistConfig, rootReducer)
