import React from 'react';
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Mentions,
  Select,
  TreeSelect,
} from 'antd';
import { AddTask } from '../AddTask';
const options = [];
for (let i = 1; i < 4; i++) {
  options.push({
    label: i.toString() + i,
    value: i.toString() + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const { RangePicker } = DatePicker;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};
const FormAdd = () => (
  <Form
    {...formItemLayout}
    variant="filled"
    style={{
      marginTop:'50px',
      maxWidth: 600,
    }}
  >
    <Form.Item
      label="Названия"
      name="Title"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="ID"
      name="ID"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <InputNumber
        style={{
          width: '100%',
        }}
      />
    </Form.Item>

    <Form.Item
      label="Описания"
      name="Description"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <Input.TextArea />
    </Form.Item>

    <Form.Item
      label="Mentions"
      name="Mentions"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <Mentions />
    </Form.Item>

    <Form.Item
      label="Select"
      name="Select"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
      
    >
       <Select
      mode="multiple"
      allowClear
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      defaultValue={['11', '22']}
      onChange={handleChange}
      options={options}
    />
    </Form.Item>

    <Form.Item
      label="Cascader"
      name="Cascader"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <Cascader />
    </Form.Item>

    <Form.Item
      label="TreeSelect"
      name="TreeSelect"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <TreeSelect />
    </Form.Item>

    <Form.Item
      label="DatePicker"
      name="DatePicker"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      label="RangePicker"
      name="RangePicker"
      rules={[
        {
          required: false,
          message: 'Please input!',
        },
      ]}
    >
      <RangePicker />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 6,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default FormAdd;