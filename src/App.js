import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { route } from './routes'
import Homepage from './pages/Homepage'
import SettingsPage from './pages/Settings'

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        {[
          { path: route.home, component: Homepage },
          { path: route.settings, component: SettingsPage }
        ].map(({ path, component }, i) => (
          <Route exact key={i} path={path} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
