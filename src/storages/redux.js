import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { localStorageMiddleware } from '../middleWares/localStorage'
import rootReducer from '../reducers'

export default configureStore({
  middleware: [localStorageMiddleware, ...getDefaultMiddleware()],
  reducer: rootReducer
})
