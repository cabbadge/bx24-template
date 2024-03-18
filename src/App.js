import React, { useState } from "react";

import "./App.css";
import SearchBox from "./SearchBox";
import data from "../dist/result.json";
import MessagesDisplay from "./MessagesDisplay";

const App = () => {
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (searchText, month, day) => {
    // Фильтрация данных в соответствии с условиями поиска
    const filtered = data.messages.filter((message) => {
      const messageDate = new Date(message.date);
      const monthMatch = month ? messageDate.getMonth() + 1 === parseInt(month, 10) : true;
      const dayMatch = day ? messageDate.getDate() === parseInt(day, 10) : true;
  
      let textMatch = false;
      if (typeof message.text_entities === 'string') {
        textMatch = message.text_entities.toLowerCase().includes(searchText.toLowerCase());
      } else if (Array.isArray(message.text_entities)) {
        textMatch = message.text_entities.some(part => part.text.toLowerCase().includes(searchText.toLowerCase()));
      }
  
      return textMatch && monthMatch && dayMatch;
    });
  
    setFilteredData({ ...data, messages: filtered });
  };
  

  return (
    <div>
      <SearchBox onSearch={handleSearch} />
      <MessagesDisplay data={filteredData} />
    </div>
  );
};

export default App;
