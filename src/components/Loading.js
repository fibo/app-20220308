import { Topbar } from './Topbar'

export function Loading() {
  return (
    <>
      <Topbar />
      <div className='loading-dots'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  )
}
