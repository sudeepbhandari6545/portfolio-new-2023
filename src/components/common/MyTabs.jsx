import { Tabs } from 'antd'
import React from 'react'
import Education from '../all-tabs-components/Education'
import Skills from '../all-tabs-components/Skills'
import MyExperience from '../all-tabs-components/MyExperience'
import MyCv from '../all-tabs-components/MyCv'

const MyTabs = () => {
  return (
    <>
      <div className="max-w-[90rem] mx-auto ">
        <Tabs
          defaultActiveKey="1"
          tabBarGutter={40}
          size="large"
          tabBarStyle={{
            fontWeight: 'bold',
          }}
          className="my_tabs"
          items={[
            {
              label: `Education`,
              key: '1',
              children: <Education />,
            },
            {
              label: `Professional Skills`,
              key: '2',
              children: <Skills />,
            },

            {
              label: `Experience`,
              key: '3',
              children: <MyExperience />,
            },

            {
              label: `CV`,
              key: '4',
              children: <MyCv />,
            },
          ]}
        ></Tabs>
      </div>
    </>
  )
}

export default MyTabs
