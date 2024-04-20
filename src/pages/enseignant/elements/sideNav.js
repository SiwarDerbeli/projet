import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined, DesktopOutlined, ContainerOutlined } from '@ant-design/icons';

const SideNav = () => {
  const isChefDepartment = true; // Remplacez true par votre logique pour déterminer si l'utilisateur est un chef de département ou non

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getItem = (label, key, icon, children, type, isDisabled) => {
    return {
      key,
      icon,
      children,
      label,
      type,
      isDisabled,
    };
  };

  const items = [
    getItem('Consulter Emploi', '/enseignant/emplois', <PieChartOutlined />),
    getItem('Gestion Emplois', '/enseignant/gestionEmplois', <DesktopOutlined />, null, null, !isChefDepartment),
    getItem('Présence', '/enseignant/marquerAbsence', <PieChartOutlined />),
    getItem('Saisir Notes', '/enseignant/notes', <ContainerOutlined />),
    
  ];

  return (
    <div className='p-10'>
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
          <Menu.Item key={item.key} icon={item.icon} disabled={item.isDisabled}>
            {/* Condition pour rendre le lien seulement s'il n'est pas désactivé */}
            {item.isDisabled ? (
                   <span className={item.label === 'Chef département :' ? 'text-sm text-blue-500' : ''}>
                   {item.label}
                 </span>
            ) : (
              <Link to={item.key}>{item.label}</Link>
            )}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default SideNav;
