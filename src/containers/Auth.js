import React, {Component} from 'react';
import classes from "../components/Style.css";
import {connect} from 'react-redux';
import {signUp, signIn} from '../store/actions/Auth';
import Sppiner from '../components/UI/Spinnerload/Spinner';

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
  onSignUp = (event) => {
    this.props.signUp(this.state.email, this.state.password)
  }
  onSignIn = (event) => {
    this.props.signIn(this.state.email, this.state.password)
  }
  render () {
    return (
        <div>
          <form className={classes.Auth}>
            <h1>Welcome to the burger builder</h1>
            <input className={classes.Input} type="email" name="email" placeholder="Your email" required="required" onChange={this.onEmailChange}/>
            <input className={classes.Input} type="password" name="password" placeholder="******" required="required" onChange={this.onPasswordChange}/>
            {(this.props.error) ? <p style={{color: 'red'}}>{this.props.error}</p> : null}
            {
              (this.props.loading) ? <Sppiner/>
              :
                  <div style={{display:'inline-block'}}>
                  <p className={classes.OrderButton} style={{width: '200px'}} onClick={this.onSignUp}>SIGN UP</p>
                  <p className={classes.OrderButton} style={{width: '200px'}} onClick={this.onSignIn}>SIGN IN</p>
                  </div>
            }

          </form>
        </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
    signIn: (email, password) => dispatch(signIn(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);