import React, {Component} from 'react';
import classes from "../components/Style.css";
import {connect} from 'react-redux';
import {auth} from '../store/actions/Auth';

class Auth extends Component {
  state = {
    email: '',
    password: ''
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onSubmit = (event) => {
    this.props.onAuth(this.state.email, this.state.password)
  }
  render () {
    return (
        <div>
          <form className={classes.Auth}>
            <h1>Welcome to the burger builder</h1>
            <input className={classes.Input} type="email" name="email" placeholder="Your email" required="required" onChange={this.onEmailChange}/>
            <input className={classes.Input} type="password" name="password" placeholder="******" required="required" onChange={this.onPasswordChange}/>
            <button className={classes.OrderButton} onClick={this.onSubmit}>SUBMIT</button>
          </form>
        </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(auth(email, password))
  }
}

export default connect(null, mapDispatchToProps)(Auth);