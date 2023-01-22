import { Tabs } from 'antd'
import React from 'react'

const MyTabs = () => {
  return (
    <>
      <Tabs
        centered
        tabBarGutter={100}
        defaultActiveKey="1"
        size="large"
        tabBarStyle={{ fontWeight: 'bold' }}
        className="my_tabs"
        items={[
          {
            label: `Course Details`,
            key: '1',
            children: 'sudeep 1',
          },
          {
            label: `Syllabus`,
            key: '2',
            children: 'sudeep2',
          },

          {
            label: `Q&A`,
            key: '3',
            children: 'sudeep 3',
          },

          {
            label: `Reviews`,
            key: '4',
            children: 'sudeep4',
          },
        ]}
      ></Tabs>
    </>
  )
}

export default MyTabs
