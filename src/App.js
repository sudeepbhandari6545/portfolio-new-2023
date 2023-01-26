import React, { useState } from 'react'
//components
import Home from './components/Home'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { AiOutlineArrowUp } from 'react-icons/ai'

const App = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)
  return (
    <>
      <div className="hidden lg:block">
        <div className="scrollTop flex justify-end pr-14">
          <AiOutlineArrowUp
            className=" bg-[#ff014f] rounded-full p-2"
            onClick={scrollTop}
            color="white"
            style={{ display: showScroll ? 'block' : 'none' }}
            size={48}
          />
        </div>
      </div>

      <Home />
    </>
  )
}

export default App
