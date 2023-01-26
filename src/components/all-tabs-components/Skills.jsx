import React from 'react'
import Skillbar from 'react-skillbars'

const Skills = () => {
  const skills = [
    {
      type: 'HTML/CSS',
      level: 85,
      color: { bar: '#5795be', title: { text: '#fff', background: '#ff014f' } },
    },
    {
      type: 'Typescript',
      level: 52,
      color: { bar: '#0087a2', title: { text: '#fff', background: '#0087a2' } },
    },
    {
      type: 'Javascript',
      level: 65,
      color: { bar: '#f0db4f', title: { text: '#fff', background: '#f0db4f' } },
    },
    {
      type: 'React js',
      level: 80,
      color: { bar: '#25a0b9', title: { text: '#fff', background: '#25a0b9' } },
    },
    {
      type: 'Next Js',
      level: 77,
      color: { bar: '#0073e5', title: { text: '#fff', background: '#0073e5' } },
    },
    {
      type: 'Bootstrap',
      level: 93,
      color: { bar: '#520b99', title: { text: '#fff', background: '#520b99' } },
    },
    {
      type: 'TailwindCSS',
      level: 87,
      color: { bar: '#38bdf8', title: { text: '#fff', background: '#38bdf8' } },
    },
    {
      type: 'GitHub',
      level: 72,
      color: { bar: '#202020', title: { text: '#fff', background: '#202020' } },
    },
    {
      type: 'Hosting',
      level: 66,
      color: { bar: '#23bfbb', title: { text: '#fff', background: '#23bfbb' } },
    },
  ]
  return (
    <>
      <div className="max-w-[80rem] mx-auto px-5 overflow-hidden ">
        <div className="pt-5">
          <h1 className="text-lg text-[#ff014f] font-medium">Features</h1>
          <h1 className="text-3xl font-bold text-white pt-2">
            Development Skills
          </h1>
        </div>
        <div className="mt-12">
          <Skillbar skills={skills} height={40} animationDelay={100} />
        </div>
      </div>
    </>
  )
}

export default Skills
