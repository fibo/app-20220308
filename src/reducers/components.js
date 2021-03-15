import { get } from '../client'
import { endpoint } from '../endpoint'

function asyncActions(NAME) {
  return {
    REQUEST: `${NAME}_REQUEST`,
    SUCCESS: `${NAME}_SUCCESS`,
    FAILURE: `${NAME}_FAILURE`
  }
}

const initialState = {
  layout: null,
  pages: [],
  getLayoutRequest: {
    // isWaiting: true
    // hasError: false
  },
  getPagesRequest: {}
}

const GET_LAYOUT = asyncActions('GET_LAYOUT')
const GET_PAGES = asyncActions('GET_PAGES')

/*
 * Selectors
 */

const selectLayout = (state) => state.components.layout

const selectLayoutRequest = (state) => state.components.getLayoutRequest

const selectPages = (state) => state.components.pages

const selectPagesRequest = (state) => state.components.getPagesRequest

/*
 * Actions
 */

export const getLayout = () => (dispatch, getState) => {
  const { REQUEST, SUCCESS, FAILURE } = GET_LAYOUT

  const state = getState()

  const { isWaiting } = selectLayoutRequest(state)
  if (isWaiting) return

  const layout = selectLayout(state)
  if (layout !== null) return

  dispatch({ type: REQUEST })

  return get({ url: endpoint.layout() }).then(
    (data) => {
      dispatch({ type: SUCCESS, data })
    },
    (error) => {
      dispatch({ type: FAILURE, error })
    }
  )
}

export const getPages = () => (dispatch, getState) => {
  const { REQUEST, SUCCESS, FAILURE } = GET_PAGES

  const state = getState()

  const { isWaiting } = selectPagesRequest(state)
  if (isWaiting) return

  const pages = selectPages(state)
  if (pages.length > 0) return

  dispatch({ type: REQUEST })

  return get({ url: endpoint.pages() }).then(
    (data) => {
      dispatch({ type: SUCCESS, data })
    },
    (error) => {
      dispatch({ type: FAILURE, error })
    }
  )
}

export default function componentsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LAYOUT.REQUEST: {
      return {
        ...state,
        getLayoutRequest: {
          isWaiting: true
        }
      }
    }

    case GET_LAYOUT.SUCCESS: {
      return {
        ...state,
        layout: action.data,
        getLayoutRequest: {}
      }
    }

    case GET_LAYOUT.FAILURE: {
      return {
        ...state,
        getLayoutRequest: {
          hasError: true
        }
      }
    }

    case GET_PAGES.REQUEST: {
      return {
        ...state,
        getPagesRequest: {
          isWaiting: true
        }
      }
    }

    case GET_PAGES.SUCCESS: {
      return {
        ...state,
        layout: action.data,
        getPagesRequest: {}
      }
    }

    case GET_PAGES.FAILURE: {
      return {
        ...state,
        getPagesRequest: {
          hasError: true
        }
      }
    }

    default:
      return state
  }
}
