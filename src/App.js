import React, { useState } from 'react';
import { AddTask } from './AddTask';
import Demo from './menu/Header';
import FormAdd from './form/FormAdd';

const App = () => {

  return (
    <div>
      <Demo />
      <FormAdd/>
      {/* Передаем detailText как prop в AddTask */}
      {/* <AddTask detailText={detailText} /> */}
      
    </div>
  );
};

export default App;
