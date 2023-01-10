/* eslint-disable jsx-a11y/img-redundant-alt */
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
      <div className="bg-[#212428] py-6 px-5 overflow-hidden">
        <div className="max-w-[110rem] mx-auto">
          <Row gutter={12}>
            <Col lg={14}>
              <div>
                <div className="px-16 pt-16">
                  <h1 className=" uppercase text-[#c4cfde] text-sm font-medium">
                    WELCOME TO MY WORLD
                  </h1>
                  <h1 className="text-6xl font-bold text-white pt-5">
                    Hi, I’m{' '}
                    <span className="text-[#ff014f]">Sudeep Bhandari</span>
                  </h1>
                  <div className="text-6xl font-bold text-white pt-5">
                    a{' '}
                    <Typed
                      className="text-white text-6xl"
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

                  <div className="flex items-center gap-56 pt-24">
                    <div>
                      <div className="">
                        <h1 className="text-[#c4cfde] uppercase py-2 font-medium">
                          Find with me
                        </h1>
                        <div className="pt-2 flex items-center gap-5">
                          <div className="bg-[#22262A] p-3 rounded-xl shadow-2xl">
                            <a href="/">
                              {' '}
                              <FaFacebookF size={32} color="white" />
                            </a>
                          </div>
                          <div className="bg-[#22262A] p-3 rounded-xl shadow-2xl">
                            <a href="/">
                              {' '}
                              <AiFillGithub size={32} color="white" />
                            </a>
                          </div>
                          <div className="bg-[#22262A] p-3 rounded-xl shadow-2xl">
                            <a href="/">
                              {' '}
                              <AiFillLinkedin size={32} color="white" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="">
                        <h1 className="text-[#c4cfde] uppercase py-2 font-medium">
                          Best Skill on
                        </h1>
                        <div className="pt-2 flex items-center gap-5">
                          <div className="bg-[#22262A] p-3 rounded-lg shadow-2xl">
                            {' '}
                            <FaReact size={32} color="white" />
                          </div>
                          <div className="bg-[#22262A] p-3 rounded-lg shadow-2xl">
                            {' '}
                            <TbBrandTailwind size={32} color="white" />
                          </div>
                          <div className="bg-[#22262A] p-3 rounded-lg shadow-2xl">
                            {' '}
                            <IoLogoJavascript size={32} color="white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={10}>
              <div>
                <div className="bg-[#22262A] h-[68vh] w-[28vw] mt-36 image_background shadow-2xl rounded-md flex items-center justify-center">
                  <img
                    src={
                      'https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png'
                    }
                    alt=""
                    className=" absolute mt-[-50px] h-[670px] w-[100%] object-contain"
                  />
                </div>
                {/* <div className="">
                  <img
                    width="700"
                    height="960"
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
                    class="attachment-full size-full"
                    alt="Banner image 01"
                    decoding="async"
                    loading="lazy"
                    srcset="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png 700w, https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01-219x300.png 219w"
                    sizes="(max-width: 700px) 100vw, 700px"
                  />
               
                </div> */}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default AboutMe
