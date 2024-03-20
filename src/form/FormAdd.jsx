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
import { v4 as uuidv4 } from 'uuid';

const { RangePicker } = DatePicker;
const { TextArea } = Input;



const FormAdd = () => {
  const [detailText, setDetailText] = useState('');
  const [fileList, setFileList] = useState([]);

  const encodeFileToBase64 = (fileBlob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(fileBlob);
      reader.onload = () => resolve(reader.result.split(',')[1]); // Удаляем префикс data:*/*;base64, для чистого base64 содержимого
      reader.onerror = error => reject(error);
    });
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleSubmit = async () => {
    if (fileList.length > 0) {
      const elementCode = uuidv4();
      
      try {
        const base64File = await encodeFileToBase64(fileList[0].originFileObj);
        const uploadResult = await BX24API.callMethod('disk.folder.uploadfile', {
          id: '207717', // Укажите ID вашей папки
          data: {
            NAME: fileList[0].name,
          },
          fileContent: base64File,
        });

        if (uploadResult && uploadResult.result) {
     
          const fileId = uploadResult.result.ID; 
console.log(fileId);

          const params = {
            'IBLOCK_TYPE_ID': 'lists',
            'IBLOCK_ID': '335',
            'ELEMENT_CODE': elementCode,
            'FIELDS': {
              'NAME': 'task for test',
              'DETAIL_TEXT': detailText,
              "PROPERTY_1411": fileId,
            }
          };

          const result = await BX24API.callMethod('lists.element.add', params);
          console.log(result);
        }
      } catch (error) {
        console.error('Ошибка при загрузке файла или добавлении элемента', error);
      }
    }
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
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
            beforeUpload={() => false} // Возвращаем false, чтобы предотвратить автоматическую загрузку
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>
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