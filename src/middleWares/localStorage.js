import { EXIT_ACCOUNT } from '../reducers/account'
import { delLocalStorageAccessToken } from '../storages/localStorage'

export const localStorageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EXIT_ACCOUNT:
      delLocalStorageAccessToken()
      return next(action)
    default:
      return next(action)
  }
}
