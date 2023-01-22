import { Card } from 'antd'
import React from 'react'

const PortfolioCards = ({ title }) => {
  return (
    <>
      <Card
        style={{ width: 'auto' }}
        className="bg-[#22262A] border-0 shadow-xl  hover:ease-out"
        hoverable
        cover={
          <div className="p-6">
            <img
              src={
                'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'
              }
              alt=""
              className="scale-105 hover:scale-95 duration-1000"
            />
          </div>
        }
      >
        <div>
          <div className="flex items-center gap-3 mt-[-10px]"></div>
          <h1 className="text-[23px] font-bold text-[#c4cfde] hover:text-red-500 pt-5 hover:animate-pulse">
            {title}
          </h1>
        </div>
      </Card>
    </>
  )
}

export default PortfolioCards
