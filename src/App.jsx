import React from 'react';

import { Layout, Menu } from 'antd';
// import Header from './components/Header/index';

import 'antd/dist/antd.css';
import './index.scss';
import s from './components/Header/Header.module.scss';

// import { ReactComponent as ReactLogoSvg } from './components/Header/img/logo.svg';

const { Header, Content } = Layout;

const App = () => {
  return (
    <>
      <Layout className="page-wrapper">
        <Header className={s.header}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className="header-menu">
            <Menu.Item key="1" className="menu__item">Разминка</Menu.Item>
            <Menu.Item key="2" className="menu__item">Воробьиные</Menu.Item>
            <Menu.Item key="3" className="menu__item">Лесные птицы</Menu.Item>
            <Menu.Item key="4" className="menu__item">Певчие птицы</Menu.Item>
            <Menu.Item key="5" className="menu__item">Хищные птицы</Menu.Item>
            <Menu.Item key="6" className="menu__item">Морские птицы</Menu.Item>
          </Menu>
        </Header>
        <Content>Content</Content>
      </Layout>
    </>
  );
}

export default App;
