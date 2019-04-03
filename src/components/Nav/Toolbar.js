import React from 'react';
import classes from './Style.css';
import Logo from './Logo';
import {connect} from 'react-redux';

const ToolBar = (props) => (
    <header className={classes.ToolBar}>
        <div>
          {
            (props.authenticated) ? <i className="material-icons" onClick={props.open}>menu</i> : null
          }
        </div>
        <Logo height="46px"/>
    </header>
);

const mapStateToProps = state => {
  return {
    authenticated: state.auth.token
  }
}

export default connect(mapStateToProps)(ToolBar);