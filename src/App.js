import React from "react";
import { AddTask } from "./AddTask";
import Demo from "./menu/Header";
import FormAdd from "./form/FormAdd";
const App = () => {
  return (
    <div>
      <Demo />
      <FormAdd />
      {/* <h1>Добавление задачи</h1>
      <AddTask /> */}
    </div>
  );
};

export default App;
