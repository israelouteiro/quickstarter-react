import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Home.css';
import { Link } from 'react-router-dom'
import { Layout, Menu, Icon } from 'antd'; 
import ListContent from '../../components/ListContent/ListContent';
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"> 
              <Link to="home">
                <Icon type="home" />
                <span>Inicio</span>
              </Link>
            </Menu.Item> 
            <Menu.Item key="3">
              <Link to="">
                <Icon type="upload" />
                <span>Sair</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <ListContent></ListContent>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Israel Labs ©2018
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
