const initialState = {}

export const EXIT_ACCOUNT = 'EXIT_ACCOUNT'

export const exitAccount = () => ({
  type: EXIT_ACCOUNT
})

export default function AccountReducer(state = initialState, action) {
  switch (action.type) {
    case EXIT_ACCOUNT:
      console.log('exit')
      return state
    default:
      return state
  }
}
