import { Navbar, Button } from 'trunx'
import { route } from '../routes'
import { useState, useCallback, useEffect } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addEventListenerStorage, exitAccount } from '../reducers/account'

export function Topbar() {
  const [redirect, setRedirect] = useState()
  const { pathname } = useLocation()
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addEventListenerStorage())
  }, [])

  const exit = useCallback(() => {
    dispatch(exitAccount())
  }, [dispatch])

  const goToPage = useCallback(
    (target) => () => {
      if (target !== pathname) {
        setRedirect(target)
      }
    },
    [pathname]
  )

  const toggleMenu = useCallback(() => {
    setMenuIsOpen((prev) => !prev)
  }, [])

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
            alt='home'
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
        <Navbar.End>
          <Navbar.Item>
            <Button onClick={exit}>Exit</Button>
          </Navbar.Item>
        </Navbar.End>
      </Navbar.Menu>
    </Navbar>
  )
}
