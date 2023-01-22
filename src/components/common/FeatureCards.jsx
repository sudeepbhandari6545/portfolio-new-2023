import { Card } from 'antd'
import React from 'react'

const FeatureCards = ({ title, icon, detail }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 'auto' }}
          className="bg-[#22262A] border-0 shadow-xl lg:h-[35vh]"
        >
          <div>
            <div className="pb-5">
              <img src={icon} alt="" width={80} />
            </div>
            <h1 className="text-2xl text-[#c4cfde] font-bold capitalize">
              {title}
            </h1>
            <h2 className="text-[16px] font-medium text-[#c4cfde] pt-3 w-[80%]">
              {detail}
            </h2>
          </div>
        </Card>
      </div>
    </>
  )
}

export default FeatureCards
