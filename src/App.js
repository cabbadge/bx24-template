import React from "react";
import { AddTask } from "./AddTask";
import Menu from "./Menu";
import FormAdd from "./menu/FormAdd";
const App = () => {
  return (
    <div>
      <Menu />
      <FormAdd />
      {/* <h1>Добавление задачи</h1>
      <AddTask /> */}
    </div>
  );
};

export default App;
