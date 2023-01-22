import { Card } from 'antd'
import React from 'react'

const FeatureCards = ({ title, image, detail }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 'auto' }}
          className="bg-[#22262A] border-0 shadow-xl h-[30vh]"
        >
          <div>
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
