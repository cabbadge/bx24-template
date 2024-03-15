import React from 'react'
import BX24API from './bx24'
import {
  Button,
} from 'antd';


export const AddTask = ({ detailText }) => {
    const add=async()=>{
        console.log("Начал думать")
        var params = {
          'IBLOCK_TYPE_ID': 'lists',
          'IBLOCK_ID': '335',
          'ELEMENT_CODE':'element_3',
          'FIELDS': {
            NAME:'task for test',DETAIL_TEXT: detailText}
        };
        const result=await BX24API.callMethod(
          'lists.element.add',
          params, 
        );
        console.log(result)

    }
  return (
    <div>
<Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: 'Light',
                value: 'light',
                children: [
                  {
                    title: 'Bamboo',
                    value: 'bamboo',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>



      <Button onClick={add} type="primary" htmlType="submit">Кнопка для регистрации</Button>

    </div>
  )
}
