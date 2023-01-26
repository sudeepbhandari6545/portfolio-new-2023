import React from 'react'
import FeatureCards from '../common/FeatureCards'
import { Col, Row } from 'antd'
import { features } from '../../api/features'

const Features = () => {
  return (
    <>
      <div id="feature" className="bg-[#212428] px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t-[1px] border-[#ff014f]  my-24"></div>
          <h1 className="text-lg font-medium text-[#ff014f]">Features</h1>
          <h1 className="text-4xl md:text-6xl uppercase font-bold text-white pt-3">
            What I Do
          </h1>
          <div className="pt-8">
            <Row gutter={24}>
              {features &&
                features.map((item) => {
                  console.log(item)
                  return (
                    <>
                      <Col xs={24} sm={24} lg={8}>
                        <FeatureCards
                          title={item.title}
                          icon={item.icon}
                          detail={item.detail}
                        />
                      </Col>
                    </>
                  )
                })}
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
