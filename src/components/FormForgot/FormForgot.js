import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './FormForgot.css';

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
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Informe o email' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
          )}
        </FormItem> 
        <FormItem> 
          <Button type="primary" htmlType="submit" className="login-form-button">
            Recuperar
          </Button> 
          <a className="login-form-forgot" href="/">Voltar</a>
        </FormItem>
      </Form>
    );
  }
}

const FormForgot = Form.create()(NormalLoginForm);
export default FormForgot; 