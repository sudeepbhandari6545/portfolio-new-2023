import { Button, Card } from 'antd'
import React from 'react'
import { FaHandPointRight } from 'react-icons/fa'

const PortfolioCards = ({ title, image, path }) => {
  return (
    <>
      <a href={path} rel="noreferrer" target="_blank">
        <Card
          style={{ width: 'auto' }}
          size="small"
          className="bg-[#22262A] border-0 shadow-xl  hover:bg-[#22262c] m-3"
          hoverable
          cover={
            <div className="">
              <div className="bg-[#22262c] p-6">
                <img
                  src={image}
                  alt=""
                  className=" scale-95 hover:scale-90 duration-1000 card_image_portffolio w-[100%]"
                />
              </div>
            </div>
          }
        >
          <div className="px-6 mt-[-25px]">
            <div className="flex items-center gap-3 truncate ... overflow-hidden ">
              <h1 className="text-sm md:text-lg font-bold text-[#c4cfde] hover:text-red-500 pt-5 hover:animate-pulse flex items-center gap-2 ">
                <FaHandPointRight />
                {title}
              </h1>
            </div>
          </div>
        </Card>
      </a>
    </>
  )
}

export default PortfolioCards
