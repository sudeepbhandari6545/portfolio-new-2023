import { Card } from 'antd'
import React from 'react'
import { FaBars } from 'react-icons/fa'

const FeatureCards = ({ title, icon, detail }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 'auto', margin: '20px' }}
          className="bg-[#22262A] border-0 shadow-2xl lg:h-[32vh] card_image_portffolio"
        >
          <div>
            <div className="pb-5">
              <img src={icon} alt="" width={40} />
            </div>
            <h1 className="text-2xl text-[#c4cfde] font-bold capitalize">
              {title}
            </h1>
            <h2 className="text-[15px] font-medium text-[#c4cfde] pt-3 w-[85%]">
              {detail}
            </h2>
          </div>
          <div className="icon_s">
            <FaBars />
          </div>
        </Card>
      </div>
    </>
  )
}

export default FeatureCards
