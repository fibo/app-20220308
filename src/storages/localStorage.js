export const localStorageKey = {
  accessToken: 'accessToken',
  lastExitAccount: 'lastExitAccount'
}

const getString = (key) => () => {
  return localStorage.getItem(key) || ''
}

const setString = (key) => (value) => {
  localStorage.setItem(key, value)
}

const setTimeStamp = (key) => (value = new Date().toISOString()) => {
  localStorage.setItem(key, value)
}

export const getLocalStorageAccessToken = getString(localStorageKey.accessToken)

export const setLocalStorageAccessToken = setString(localStorageKey.accessToken)

export const delLocalStorageAccessToken = () => {
  localStorage.removeItem(localStorageKey.accessToken)
}

export const setLocalStorageLastExitAccount = setTimeStamp(
  localStorageKey.lastExitAccount
)
