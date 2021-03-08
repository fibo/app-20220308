import { ADD_EVENTLISTENER_STORAGE, EXIT_ACCOUNT } from '../reducers/account'
import {
  delLocalStorageAccessToken,
  setLocalStorageLastExitAccount
} from '../storages/localStorage'

export const localStorageMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case EXIT_ACCOUNT:
      delLocalStorageAccessToken()
      setLocalStorageLastExitAccount()
      return next(action)
    case ADD_EVENTLISTENER_STORAGE: {
      window.addEventListener('storage', (event) => {
        switch (event.key) {
          default:
            return
        }
      })
      return next(action)
    }
    default:
      return next(action)
  }
}
