import React from 'react'
import FeatureCards from '../common/FeatureCards'
import { Col, Row } from 'antd'
import { features } from '../../api/features'

const Features = () => {
  return (
    <>
      <div className="bg-[#212428] px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t-2 my-24"></div>
          <h1 className="text-lg font-medium text-[#ff014f]">Features</h1>
          <h1 className="text-6xl uppercase font-bold text-white pt-3">
            What I Do
          </h1>
          <div className="pt-10">
            <Row gutter={24}>
              {features &&
                features.map((item) => {
                  return (
                    <>
                      <Col lg={8} className="my-5">
                        <FeatureCards
                          title={item.title}
                          image={item.image}
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
