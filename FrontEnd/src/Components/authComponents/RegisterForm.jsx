import React from "react";
import { Form, Input, Button } from "antd";
import { layout, tailLayout } from "./LoginForm";

// const layout = {
//   labelCol: {
//     span: 13,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };

// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const RegisterForm = (props) => {
  console.log(props);
  const {registerUser} = props;
  const submit = (value) => {
    console.log(value);
    registerUser(value);
  };

  return (
    <React.Fragment>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={submit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your mail Id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[
            {
              required: true,
              message: "Please input your Age!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="mobile"
          rules={[
            {
              required: true,
              message: "Please input your Phone Number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </React.Fragment>
  );
};

export default RegisterForm;
