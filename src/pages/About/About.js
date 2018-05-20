import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './About.css';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd'; 
const { Header, Content, Footer } = Layout;

class About extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="">Entrar</Link></Menu.Item>
            <Menu.Item key="2" >Sobre</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Sobre</Breadcrumb.Item> 
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, display:'flex', alignItems:'center' , flexDirection:'column'}}>
            <h2>RDQS - React Dashboard Quick Starter</h2>
            <p>&nbsp;</p>
            <p>this project was created with the intention of being a quick way to start a dashboard project in react using the ant design library</p>
            <p>&nbsp;</p>
            <p>Created by Israel Outeiro</p>
            <p>Last update: 05-20-2018</p>
            <p>Version: 0.001</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Israel Labs ©2018
        </Footer>
      </Layout>
    );
  }
}

export default About;
