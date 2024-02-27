import React from 'react'
import BX24API from './bx24'
export const AddTask = () => {
    const add=async()=>{
        console.log("Начал думать")
        const result=await BX24API.callMethod(
            'tasks.task.add', 
            {fields:{TITLE:'task for test',DESCRIPTION:'Супер описания', RESPONSIBLE_ID:	42097}}, 
        );
        console.log(result)

    }
  return (
    <div><button onClick={add}>кнопка для регистрации</button>
    </div>
  )
}
