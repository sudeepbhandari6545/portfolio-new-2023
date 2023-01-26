import { Col, Row } from 'antd'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF, FaReact } from 'react-icons/fa'
import { TbBrandTailwind } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import Typed from 'react-typed'

const AboutMe = () => {
  return (
    <>
      <div className="bg-[#212428] py-5 px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <Row gutter={6} className="flex items-center">
            <Col xs={24} sm={24} md={24} lg={14}>
              <div>
                <div className="lg:pt-24">
                  <h1 className=" uppercase text-[#c4cfde] text-sm font-medium">
                    WELCOME TO MY WORLD
                  </h1>
                  <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white pt-5">
                    Hi, I’m{' '}
                    <span className="text-[#ff014f]">Sudeep Bhandari</span>
                  </h1>
                  <div className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white pt-5">
                    a{' '}
                    <Typed
                      className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold "
                      strings={['Front End Developer.', 'React Js Developer.']}
                      typeSpeed={24}
                      backSpeed={50}
                      loop
                    />
                  </div>
                  <h2 className="text-[#c4cfde] pt-5 text-lg font-medium lg:w-[85%]">
                    As a front-end developer, I have skilled in creating
                    engaging and intuitive user experiences through the use of
                    HTML, CSS, JavaScript, Reactjs and Nextjs. I have a strong
                    eye for design and are able to translate designs into
                    functional and visually appealing interfaces.
                  </h2>

                  <div className="grid md:flex gap-16 md:gap-32 items-center  pt-12 md:pt-20">
                    <div>
                      <div className="">
                        <h1 className="text-[#c4cfde] uppercase py-2 font-medium">
                          Find with me
                        </h1>
                        <div className="pt-2 flex items-center gap-5">
                          <div className="bg-[#343a40] p-3 rounded-xl shadow-2xl">
                            <a
                              href="https://www.facebook.com/sudeep.bhandari.1004"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaFacebookF size={32} color="white" />
                            </a>
                          </div>
                          <div className="bg-[#343a40] p-3 rounded-xl shadow-2xl">
                            <a
                              href="https://github.com/sudeepbhandari6545"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiFillGithub size={32} color="white" />
                            </a>
                          </div>
                          <div className="bg-[#343a40] p-3 rounded-xl shadow-2xl">
                            <a
                              href="https://www.linkedin.com/in/sudeep-bhandari-a6b507213"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <AiFillLinkedin size={32} color="white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" md:pt-0">
                      <div className="">
                        <h1 className="text-[#c4cfde] uppercase py-2 font-medium">
                          Best Skill on
                        </h1>
                        <div className="pt-2 flex items-center gap-5">
                          <div className="bg-[#343a40] p-3 rounded-lg shadow-2xl">
                            <FaReact size={32} color="white" />
                          </div>
                          <div className="bg-[#343a40] p-3 rounded-lg shadow-2xl">
                            <TbBrandTailwind size={32} color="white" />
                          </div>
                          <div className="bg-[#343a40] p-3 rounded-lg shadow-2xl">
                            <IoLogoJavascript size={32} color="white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={10} offset={{ 90: 60 }}>
              <div className="flex justify-center items-center lg:justify-end pt-28 ">
                <div className="bg-[#22262A]  md:h-[68vh] md:w-[28vw] md:mt-[10px] image_background shadow-2xl rounded-md flex items-center justify-center">
                  <img
                    src={
                      'https://media.discordapp.net/attachments/1011606648105746473/1068129973094850580/sudeep_bhandarisa.png?width=450&height=617'
                    }
                    alt=""
                    className="w-[300px] lg:w-[100%] relative mt-[-120px] md:h-[75vh] images"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AboutMe
