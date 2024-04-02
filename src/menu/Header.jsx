import React, { useState } from 'react';

import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
const items = [
  {
    label: 'Регистрация документа',
    key: 'registration',
    icon: <MailOutlined />,
  },
  {
    label: 'Входящие',
    key: 'incoming',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: 'Исходящие',
    key: 'outgoing',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Приказы',
    key: 'Orders',
    icon: <AppstoreOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
    
  },
  {
    label: 'Настройки',
    key: 'settings',
    icon: <SettingOutlined />,
  },
];
const  Header  = ({ setCurrentMenu }) => {
  const [current, setCurrent] = useState('registration');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setCurrentMenu(e.key); 
    console.log(`setCurrentMenu ${e.key}`);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;

          