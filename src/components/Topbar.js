import { Navbar } from 'trunx'

export function Topbar() {
  return (
    <Navbar isLight>
      <Navbar.Brand>
        <Navbar.Item>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            width='112'
            height='28'
          />
        </Navbar.Item>
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Start>
          <Navbar.Item>Settings</Navbar.Item>
        </Navbar.Start>
      </Navbar.Menu>
    </Navbar>
  )
}
