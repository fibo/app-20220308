import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Topbar } from '../components/Topbar'
import { getLayout } from '../reducers/components'

export default function SettingsPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLayout())
  }, [])

  return (
    <>
      <Topbar />

      <h1>Settings</h1>
    </>
  )
}
