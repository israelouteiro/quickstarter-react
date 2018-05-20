import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './FormLogin.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) { 
        // sent login to server 
        window.location.href= "home"
        console.log('Form values: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Informe o email' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Informe a senha' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Senha" />
          )}
        </FormItem>
        <FormItem> 
          <Button type="primary" htmlType="submit" className="login-form-button">
            Entrar
          </Button> 
          <a className="login-form-forgot" href="/forgot">Recuperar senha</a>
        </FormItem>
      </Form>
    );
  }
}

const FormLogin = Form.create()(NormalLoginForm);
export default FormLogin; 