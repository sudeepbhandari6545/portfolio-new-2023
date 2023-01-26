import React from 'react'
import { IoIosSchool, IoLogoBuffer } from 'react-icons/io'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

const MyExperience = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl text-white font-bold lg:pl-32 mb-12">
          My Experience
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 Present"
            iconStyle={{ background: '#ff014f' }}
            dateClassName="text-white"
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Front-end-Developer (Reactjs/Nextjs)
            </h3>
            <h4>Star Company - dynoCRM</h4>
            <h5>Lokanthali Bus Stop, Bhakatpur</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            dateClassName="text-white"
            date="3 month"
            iconStyle={{ background: '#ff014f' }}
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Internship in Website Development (Reactjs/Nextjs)
            </h3>
            <h4>Semantic Creation</h4>
            <h5>Machhindra Marg, Lalitpur</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            dateClassName="text-white"
            iconStyle={{ background: '#ff014f' }}
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Unpaid Internship in Website Development (html/css/javascript)
            </h3>
            <h4>Neproid Academy</h4>
            <h5>Subhidanagar, Tinkune 32, Kathmandu</h5>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015-2019"
            dateClassName="text-white"
            iconStyle={{ background: '#ff014f' }}
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              College Project
            </h3>

            <h4>
              Build different website in College Project of every semester{' '}
            </h4>
            <h4>group-project and single project in 7 and 8 sem</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015-2019"
            dateClassName="text-white"
            iconStyle={{ background: '#ff014f' }}
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Data entry project
            </h3>

            <h4>
              Experience in data entry project both goverment and private
              organization
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2015-2019"
            dateClassName="text-white"
            iconStyle={{ background: '#ff014f' }}
            icon={<IoLogoBuffer color="white" />}
          >
            <h3 className="vertical-timeline-element-title font-bold text-xl">
              Awarness Campaign about Drugs Addiction
            </h3>
            <h4>Campaign about the Addiction of bad habit and it's effects </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon=""
          />
        </VerticalTimeline>
      </div>
    </>
  )
}

export default MyExperience
