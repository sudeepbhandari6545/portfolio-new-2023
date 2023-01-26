import React from 'react'
import MyTabs from '../common/MyTabs'

const MyResume = () => {
  return (
    <>
      <div id="resume" className="bg-[#212428] px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t-[1px] border-[#ff014f]  my-24"></div>
          <MyTabs />
        </div>
      </div>
    </>
  )
}

export default MyResume
