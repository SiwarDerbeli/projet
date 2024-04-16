import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Gestion Enseignant', '/admin/gestionEnseignant', <PieChartOutlined />),
  getItem('Gestion Etudiant', '/admin/gestionEtudiant', <DesktopOutlined />),
  getItem('Gestion Groupes', '/admin/gestionGroupes', <ContainerOutlined />),
];

const SideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div

      className='p-10'
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        className='text-xl'
      >
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon} >
            <Link to={item.key}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SideNav;
