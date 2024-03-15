import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import BX24API from '../bx24';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from 'antd';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  console.log(e);

  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const FormAdd = () => {
  const [detailText, setDetailText] = useState('');
  const [detailPicture, setDetailPicture] = useState('');


  const handleSubmit = async () => {
    var params = {
      'IBLOCK_TYPE_ID': 'lists',
      'IBLOCK_ID': '335',
      'ELEMENT_CODE': 'element_1',
      'FIELDS': {
        'NAME': 'task for test',
        'DETAIL_TEXT': detailText,
        "PROPERTY_1411": detailPicture,
      }
    };

    const result = await BX24API.callMethod('lists.element.add', params);
    console.log(result);
  };
  return (
    <>
      
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={handleSubmit}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
      
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} value={detailText} onChange={e => setDetailText(e.target.value)} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={setDetailPicture}>
          <Upload  listType="picture-card">
            <button
              style={{
                border: 0,
                background: 'none',
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>

        {/* <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<PlusOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item> */}
        

    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
      </Form>
    </>
  );
};
export default () => <FormAdd />;