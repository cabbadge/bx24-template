import React, { useState } from 'react';
import { AddTask } from './AddTask';
import Header from './menu/Header';
import FormAdd from './form/FormAdd';

const App = () => {
  const [currentMenu, setCurrentMenu] = useState('incoming');
  return (
    <div>
      <Header setCurrentMenu={setCurrentMenu} />
      <FormAdd currentMenu={currentMenu} />
      
    </div>
  );
};

export default App;
