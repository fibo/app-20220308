import { Navbar } from 'trunx'
import { route } from '../routes'
import { useState, useCallback } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export function Topbar() {
  const [redirect, setRedirect] = useState()
  const { pathname } = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const goToPage = useCallback(
    (target) => () => {
      if (target !== pathname) {
        setRedirect(target)
      }
    },
    []
  )

  const toggleMenu = useCallback(() => {
    setMenuIsOpen((prev) => !prev)
  })

  if (redirect) {
    return <Redirect to={redirect} />
  }

  return (
    <Navbar isLight isFixedTop>
      <Navbar.Brand>
        <Navbar.Item onClick={goToPage(route.home)}>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            width='112'
            height='28'
          />
        </Navbar.Item>
        <Navbar.Burger isActive={menuIsOpen} onClick={toggleMenu} />
      </Navbar.Brand>
      <Navbar.Menu isActive={menuIsOpen}>
        <Navbar.Start>
          <Navbar.Item
            onClick={goToPage(route.settings)}
            isActive={pathname === route.settings}
          >
            Settings
          </Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
