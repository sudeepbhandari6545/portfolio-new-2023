import React from 'react'
import NavBars from './NavBars'

const Header = () => {
  return (
    <>
      <div className="sticky top-0 overflow-hidden z-50 ">
        <NavBars />
      </div>
    </>
  )
}

export default Header
