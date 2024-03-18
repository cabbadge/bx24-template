import React, { useState } from 'react';
import { Input, Select } from 'antd';

const { Search } = Input;
const { Option } = Select;

const SearchBox = ({ onSearch }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // Опции для месяцев
  const months = [
    { value: '', label: 'Любой месяц' },
    { value: '01', label: 'Январь' },
    { value: '02', label: 'Февраль' },
    { value: '03', label: 'Март' },
    { value: '04', label: 'Апрель' },
    { value: '05', label: 'Май' },
    { value: '06', label: 'Июнь' },
    { value: '07', label: 'Июль' },
    { value: '08', label: 'Август' },
    { value: '09', label: 'Сентябрь' },
    { value: '10', label: 'Октябрь' },
    { value: '11', label: 'Ноябрь' },
    { value: '12', label: 'Декабрь' },
  ];

  // Генерация опций для дней месяца
  const dayOptions = [<Option key="all" value="">Любой день</Option>];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push(<Option key={i} value={i.toString()}>{i}</Option>);
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Select
        value={month}
        onChange={setMonth}
        placeholder="Выберите месяц"
        style={{ width: 120, marginRight: 10 }}
      >
        {months.map(month => (
          <Option key={month.value} value={month.value}>{month.label}</Option>
        ))}
      </Select>
      <Select
        value={day}
        onChange={setDay}
        placeholder="Выберите день"
        style={{ width: 100, marginRight: 10 }}
      >
        {dayOptions}
      </Select>
      <Search
        placeholder="Введите текст для поиска"
        onSearch={value => onSearch(value, month, day)}
        style={{ width: 200 }}
      />
    </div>
  );
};
export default SearchBox