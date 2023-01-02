import React from 'react'
import { Button, Form, Input} from 'antd';

function AdminHome() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };


  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <div   className="d-flex justify-content-between my-2"  >
      <Form {...layout} name="nest-messages"  validateMessages={validateMessages}>
      <Form.Item  className="my-2"  name={['user', 'name']} label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item  className="my-2"  name={['user', 'password']} label="Password" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item  className="my-2"  name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item   className="my-2"  name={['user', 'adress']} label="Adress" >
        <Input />
      </Form.Item>
      <Form.Item  className="my-2"   name={['user', 'website']} label="Website">
        <Input />
      </Form.Item>
      <Form.Item   className="my-2" name={['user', 'introduction']} label="Introduction">
        <Input.TextArea />
      </Form.Item>
      <Form.Item   className="my-2"  wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default AdminHome