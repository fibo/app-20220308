import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { route } from './routes'
import Homepage from './pages/Homepage'
import { lazy, Suspense } from 'react'
import { Loading } from './components/Loading'

const SettingsPage = lazy(() => import('./pages/Settings'))

export function App() {
  return (
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
  )
}
