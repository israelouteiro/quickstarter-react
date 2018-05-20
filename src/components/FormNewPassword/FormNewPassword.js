import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Link } from 'react-router-dom'
import './FormNewPassword.css';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) { 
        // sent login to server 
        window.location.href= ""
        console.log('Form values: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form"> 
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Informe a senha' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Senha" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('cpassword', {
            rules: [{ required: true, message: 'Confirme a senha' },{ equalsTo: 'password', message: 'Senha não confere' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirmar Senha" />
          )}
        </FormItem>
        <FormItem> 
          <Button type="primary" htmlType="submit" className="login-form-button">
            Criar
          </Button> 
          <Link to="">Voltar</Link> 
        </FormItem>
      </Form>
    );
  }
}

const FormNewPassword = Form.create()(NormalLoginForm);
export default FormNewPassword; 