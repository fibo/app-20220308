import {
  ADD_EVENTLISTENER_STORAGE,
  EXIT_ACCOUNT,
  exitAccount
} from '../reducers/account'
import {
  localStorageKey,
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
          case localStorageKey.lastExitAccount: {
            store.dispatch(exitAccount())
          }
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
