import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const MessagesDisplay = ({ data }) => {
  // Группировка сообщений по дате
  const groupedMessages = data.messages.reduce((acc, message) => {
    const date = message.date.split("T")[0];
    if (!acc[date]) {
      acc[date] = {
        messages: [],
        photos: [],
      };
    }
    acc[date].messages.push(message);
    if (message.photo) {
      acc[date].photos.push(message.photo);
    }
    return acc;
  }, {});

  // Рендер текста сообщения
  const renderMessageText = (text) => {
    if (Array.isArray(text)) {
      return text.map((item, index) => <p key={index}>{item.text}</p>);
    }
    return <p>{text}</p>;
  };

  // Рендер фотографий с фиксированным размером
  const renderPhotos = (photos, date) => {
    if (!photos.length) return null;
    const photoElements = photos.map((photo, index) => (
      <div
        key={index}
        style={{ flex: "1 0 auto", maxWidth: "30%", padding: "5px" }}
      >
        <img
          src={`/${photo}`}
          alt={`Фото ${index + 1} за ${date}`}
          style={{ width: "119px", height: "260px" }}
        />
      </div>
    ));
    return (
      <div>
        <h3>Фотографии за {date}:</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {photoElements}
        </div>
      </div>
    );
  };

  return (
    <Collapse>
      {Object.entries(groupedMessages).map(([date, { messages, photos }]) => (
        <Panel header={date} key={date}>
          {messages.map((msg) => (
            
            <div key={msg.id}>
              
              {msg.text_entities ? renderMessageText(msg.text_entities) : ""}
            </div>
          ))}
          {renderPhotos(photos, date)}
        </Panel>
      ))}
    </Collapse>
  );
};

export default MessagesDisplay;
