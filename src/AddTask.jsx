import React from 'react'
import BX24API from './bx24'
import {
  Button,
} from 'antd';

export const AddTask = () => {
    const add=async()=>{
        console.log("Начал думать")
        var params = {
          'IBLOCK_TYPE_ID': 'lists',
          'IBLOCK_ID': '335',
          'ELEMENT_CODE':'element_1',
          'FIELDS': {
            NAME:'task for test',DETAIL_TEXT:'Супер описания'}
        };
        const result=await BX24API.callMethod(
          'lists.element.add',
          params, 
        );
        console.log(result)

    }
  return (
    <div>
      <Button onClick={add} type="primary" htmlType="submit">Кнопка для регистрации</Button>

    </div>
  )
}
