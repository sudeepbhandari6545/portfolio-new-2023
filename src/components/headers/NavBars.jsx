import React, { useState } from 'react'
//react-icons
import { HiOutlineBars3 } from 'react-icons/hi2'
import { AiFillGithub, AiFillLinkedin, AiOutlineClose } from 'react-icons/ai'

import { Drawer } from 'antd'
import { FaFacebookF } from 'react-icons/fa'
import { navLinks } from '../../api/navLinks'

const NavBars = () => {
  const [sidebar, setSideBar] = useState(false)

  const showDrawer = () => {
    setSideBar(true)
  }

  const onClose = () => {
    setSideBar(false)
  }
  return (
    <>
      <div className="bg-[#212428] py-6 px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="lg:flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className=" relative w-[120px] lg:w-[175px] cursor-pointer">
                <img src={'assets/sudeep_logo.png'} alt="" />
              </div>
              <div className="block lg:hidden">
                <div className=" rounded-full p-2 shadow-lg bg-[#1A1C20]">
                  <HiOutlineBars3
                    size={30}
                    color="#FF014F"
                    onClick={showDrawer}
                  />
                </div>
              </div>
            </div>
            <div className="hidden lg:block ">
              <div className="flex items-center gap-12 ">
                {navLinks.map((item) => {
                  return (
                    <>
                      <h1 className="text-[#c4cfde] capitalize font-medium text-sm cursor-pointer hover:text-[#FF014F]">
                        {item.title.toUpperCase()}
                      </h1>
                    </>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar for small devices */}
      <Drawer
        title={
          <div className="flex items-center justify-between">
            <div>
              <img src={'assets/sudeep_logo.png'} alt="" width={120} />
            </div>
            <div className=" rounded-full p-2 shadow-lg bg-[#1A1C20]">
              <AiOutlineClose size={26} color="#FF014F" onClick={onClose} />
            </div>
          </div>
        }
        placement="left"
        onClose={onClose}
        open={sidebar}
        style={{
          backgroundColor: '#191B1E',
          height: '90vh',
          borderRadius: '8px',
        }}
      >
        <div className="pb-6">
          {navLinks &&
            navLinks.map((item) => {
              return (
                <>
                  <h1 className="text-[#c4cfde] text-[14px] uppercase py-3 hover:text-[#FF014F]">
                    {item.title}
                  </h1>
                </>
              )
            })}
        </div>
        <hr />
        <h1 className="text-white uppercase py-2 mt-5">Find with me</h1>
        <div className="pt-5 flex items-center gap-4">
          <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
            <a href="/">
              {' '}
              <FaFacebookF size={20} color="white" />
            </a>
          </div>
          <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
            <a href="/">
              {' '}
              <AiFillGithub size={20} color="white" />
            </a>
          </div>
          <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
            <a href="/">
              {' '}
              <AiFillLinkedin size={20} color="white" />
            </a>
          </div>
        </div>
      </Drawer>
    </>
  )
}

export default NavBars
