import { Col, Row } from 'antd'
import React from 'react'
import PortfolioCards from '../common/PortfolioCards'
import { allPortfolio } from '../../api/allPortfolio'

const MyPortfolio = () => {
  return (
    <>
      <div className="bg-[#212428] px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t-2 my-24"></div>
          <h1 className="text-sm text-[#f9004d] text-center pt-8">
            VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
          </h1>
          <div>
            <h1 className="text-6xl uppercase font-bold text-white pt-3 flex justify-center">
              My Portfolio
            </h1>
          </div>
          <div className="pt-10">
            <Row gutter={24}>
              {allPortfolio &&
                allPortfolio.map((item) => {
                  return (
                    <>
                      <Col lg={8} className="my-8">
                        <PortfolioCards title={item.title} />
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

export default MyPortfolio
