const initialState = {}

export const EXIT_ACCOUNT = 'EXIT_ACCOUNT'
export const ADD_EVENTLISTENER_STORAGE = 'ADD_EVENTLISTENER_STORAGE'

export const addEventListenerStorage = () => ({
  type: ADD_EVENTLISTENER_STORAGE
})

export const exitAccount = () => ({
  type: EXIT_ACCOUNT
})

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case EXIT_ACCOUNT:
      console.log('exit')
      return state
    case ADD_EVENTLISTENER_STORAGE: {
      return state
    }
    default:
      return state
  }
}
