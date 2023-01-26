import React from 'react'
import { IoIosSchool } from 'react-icons/io'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

const Education = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white pt-2 lg:pl-32 py-12">
        My Education
      </h1>
      <VerticalTimeline animate={true} lineColor="#ff014f">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015-2019"
          iconStyle={{ background: '#ff014f' }}
          dateClassName="text-white"
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Bachelor in Computer Application (BCA)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            CITE-College of Information Technology and Engineering{' '}
          </h4>
          <h5>Subhidanagar, Tinkune 32, Kathmandu</h5>
          <p>Purbanchal, University</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          dateClassName="text-white"
          date="2012 - 2015"
          iconStyle={{ background: '#ff014f' }}
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            Higher Secondary School (+2)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Tilottama Campus
          </h4>
          <h5>Yogikuti, Shankarnagar-2, Butwal</h5>
          <p>H.S.E.B</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012"
          dateClassName="text-white"
          iconStyle={{ background: '#ff014f' }}
          icon={<IoIosSchool color="white" />}
        >
          <h3 className="vertical-timeline-element-title font-bold text-xl">
            School Leaving Certificate (SLC)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Polaris Secondary Boarding School
          </h4>
          <h5>Turang-2, Gulmi</h5>
          <p>Government of Nepal</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon=""
        />
      </VerticalTimeline>
    </div>
  )
}

export default Education
