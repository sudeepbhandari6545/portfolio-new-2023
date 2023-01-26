import { Button, Card, Col, Form, Input, Row } from 'antd'
import React from 'react'
//react-icons
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import FooterBottom from './FooterBottom'

const Footers = () => {
  const onFinish = (e) => {
    console.log(e)
  }
  return (
    <>
      <div id="contact" className="bg-[#212428] py-6 px-5 overflow-hidden">
        <div className="max-w-[100rem] mx-auto">
          <div className="border-t-[1px] border-[#ff014f]  my-24"></div>
          <div className="">
            <h1 className="text-3xl md:text-6xl uppercase font-bold text-white pt-3 flex justify-center pb-8">
              Contact With Me
            </h1>
          </div>
          <Row className="mt-12" gutter={24}>
            <Col lg={8}>
              <div className=" shadow-xl">
                <Card
                  hoverable
                  className="bg-[#212428] border-0 shadow-xl rounded-lg"
                  style={{ width: 'auto' }}
                  cover={
                    <>
                      <div>
                        <img
                          src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                          alt=""
                          className="p-5 footer_image scale-100 hover:scale-90 duration-1000"
                          width="100%"
                        />
                      </div>
                    </>
                  }
                >
                  <div className="px-6 mt-[-15px]">
                    <h1 className="text-xl text-white font-semibold">
                      Sudeep Bhandari
                    </h1>
                    <h2 className="text-[#c4cfde] text-lg pt-1 capitalize">
                      front-end-Developer -- Reactjs
                    </h2>
                    <p className="pt-1 text-[#c4cfde]">
                      I am available for work. Connect with me via and call in
                      to my account
                    </p>
                    <div className="pt-6 text-[#c4cfde] font-semibold text-[16px]">
                      <h1 className="text-[#c4cfde]">Phone: +9779867106545</h1>
                      <h1 className="pt-2 text-[#c4cfde]">
                        Email: sudeepbhandari6545@gmail.com
                      </h1>
                    </div>
                    <div className="pb-3">
                      <h1 className="text-[#c4cfde] uppercase py-2 mt-5">
                        Find with me
                      </h1>
                      <div className="pt-2 flex items-center gap-4">
                        <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
                          <a href="/">
                            <FaFacebookF size={28} color="white" />
                          </a>
                        </div>
                        <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
                          <a href="/">
                            <AiFillGithub size={28} color="white" />
                          </a>
                        </div>
                        <div className="bg-[#22262A] p-3 rounded-lg shadow-lg">
                          <a href="/">
                            <AiFillLinkedin size={28} color="white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
            <Col xs={24} lg={16}>
              <div className="lg:mx-6 px-5 lg:px-16 py-10 shadow-2xl rounded-lg">
                <Form
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  autoComplete="off"
                  requiredMark={false}
                  layout="vertical"
                >
                  <div className="grid lg:flex items-center lg:justify-between ">
                    <Form.Item
                      name="name"
                      label="YOUR NAME"
                      className="w-[100%] lg:w-[400px]"
                      labelAlign="pl-3"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your full name!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        placeholder=""
                        className="h-[50px] bg-[#191b1e] border-0"
                        bordered={true}
                      />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="PHONE NUMBER"
                      className="w-[100%] lg:w-[400px]"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your number!',
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        placeholder=""
                        className="h-[50px] bg-[#191b1e] border-0"
                      />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="EMAIL"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email!',
                      },
                    ]}
                  >
                    <Input className="h-[50px]" />
                  </Form.Item>
                  <Form.Item
                    label="SUBJECT"
                    name="text"
                    rules={[
                      {
                        required: true,
                        message: 'please provide subject',
                      },
                    ]}
                  >
                    <Input className="h-[50px]" />
                  </Form.Item>
                  <Form.Item label="YOUR MESSAGE" name="area">
                    <Input.TextArea rows={6} className="" />
                  </Form.Item>
                  <br />
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      className="bg-[#191b1e] text-white h-[65px] font-medium w-[100%] text-[16px] border-0"
                    >
                      SEND MESSAGE
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <FooterBottom />
    </>
  )
}

export default Footers
