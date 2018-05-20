import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './NotFound.css';
import { Link } from 'react-router-dom'
import { Button, Layout, Menu, Breadcrumb } from 'antd'; 
const { Header, Content, Footer } = Layout;

class NotFound extends Component {
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
            defaultSelectedKeys={['']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="">Entrar</Link></Menu.Item>
            <Menu.Item key="2" >Sobre</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Oops</Breadcrumb.Item> 
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280, display:'flex', alignItems:'center' , flexDirection:'column'}}>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <h2>Página não encontrada</h2>
            <p>&nbsp;</p>
            <p> 
              <Button type="dashed" size={'large'}>
                <Link to="">Voltar para o início</Link>
              </Button>
            </p> 
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Israel Labs ©2018
        </Footer>
      </Layout>
    );
  }
}

export default NotFound;
