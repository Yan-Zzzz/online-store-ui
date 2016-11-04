import React, {Component} from 'react';

class LoginForm extends Component {

  getInitialState() {
    return { email: '', password: '', rememberMe: false };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1 className="form-heading">登录</h1>
        <div className="form-group">
          
        </div>
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

  }
}

export default LoginForm;