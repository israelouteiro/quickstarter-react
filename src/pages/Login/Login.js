import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import FormLogin from '../../components/FormLogin/FormLogin';
const { Header, Content, Footer } = Layout;




class Login extends Component {
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
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Entrar</Menu.Item>
            <Menu.Item key="2" ><Link to="about">Sobre</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Login</Breadcrumb.Item> 
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, display:'flex', alignItems:'center' , flexDirection:'column'}}>
            <h2>Dashboard Starter</h2>
            <p>&nbsp;</p>
            <FormLogin></FormLogin>

          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Israel Labs ©2018
        </Footer>
      </Layout>
    );
  }
}

export default Login;
