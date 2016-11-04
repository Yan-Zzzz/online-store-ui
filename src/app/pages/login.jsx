import React, { Component } from 'react';
import { Col,Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="header">
          <div className="container width-full">
            <a className="header-logo" href="/">Logo</a>
          </div>
        </div>
        <div className="login-form">
          <Form>
            <div className="login-form-header">
              <h1>Online Store</h1>
            </div>
            <div className="login-form-body">
              <FormGroup controlId="username">
                <ControlLabel>用户名/邮箱</ControlLabel>
                <FormControl type="text" name="username" required />
              </FormGroup>
              <FormGroup controlId="password">
                <ControlLabel>密码</ControlLabel>
                <FormControl type="password" name="password" required />
              </FormGroup>
              <Button type="submit" bsStyle="primary">登录</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
