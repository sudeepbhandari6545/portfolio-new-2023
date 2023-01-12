import { Card } from 'antd'
import React from 'react'

const FeatureCards = ({ title, image, detail }) => {
  return (
    <>
      <div>
        <Card
          hoverable
          style={{ width: 'auto' }}
          className="bg-[#22262A] border-0 shadow-xl"
          cover={
            <div className="flex items-center pt-10 pl-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                color="#ff014f"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-book-open"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
          }
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
