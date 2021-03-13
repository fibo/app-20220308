const initialState = {}

export const EXIT_ACCOUNT = 'EXIT_ACCOUNT'
export const ADD_EVENTLISTENER_STORAGE = 'ADD_EVENTLISTENER_STORAGE'

const selectHasEventListenerStorage = (state) =>
  state.account.hasEventListenerStorage

export const addEventListenerStorage = () => (dispatch, getState) => {
  const state = getState()

  const hasEventListenerStorage = selectHasEventListenerStorage(state)

  if (hasEventListenerStorage) return

  dispatch({
    type: ADD_EVENTLISTENER_STORAGE
  })
}

export const exitAccount = () => ({
  type: EXIT_ACCOUNT
})

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case EXIT_ACCOUNT:
      return state
    case ADD_EVENTLISTENER_STORAGE: {
      return {
        ...state,
        hasEventListenerStorage: true
      }
    }
    default:
      return state
  }
}
