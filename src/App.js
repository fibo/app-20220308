import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Loading } from './components/Loading'
import Homepage from './pages/Homepage'
import { route } from './routes'
import store from './storages/redux'

const SettingsPage = lazy(() => import('./pages/Settings'))

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {[
            { path: route.home, component: Homepage },
            { path: route.settings, component: SettingsPage }
          ].map(({ path, component: Component }, i) => (
            <Route exact key={i} path={path}>
              <Suspense fallback={<Loading />}>
                <Component />
              </Suspense>
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
