import React from "react";
import { Form, Input, Button } from "antd";
import { layout, tailLayout } from "../authComponents/LoginForm";

const AddTweet = (props) => {
  const submit = (value) => {
    console.log(value);
    value.email = props.email;
    props.addNewTweet(value);
  };
  return (
    <>
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={submit}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title of the tweet!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" loading={props.addTweetSending}>
              Add Tweet
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddTweet;
