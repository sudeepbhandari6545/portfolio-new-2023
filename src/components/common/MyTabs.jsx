import { Tabs } from 'antd'
import React from 'react'
import Education from '../all-tabs-components/Education'
import Skills from '../all-tabs-components/Skills'

const MyTabs = () => {
  return (
    <>
      <Tabs
        centered
        defaultActiveKey="1"
        size="large"
        tabBarStyle={{ fontWeight: 'bold' }}
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
            children: 'sudeep 3',
          },

          {
            label: `CV`,
            key: '4',
            children: 'sudeep4',
          },
        ]}
      ></Tabs>
    </>
  )
}

export default MyTabs
