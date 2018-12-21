import React, {Component} from 'react';
import classes from './Style.css';
import ToolBar from './Nav/Toolbar';
import SideDrawer from './Nav/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    };

    sideDrawerClose = () => {
        this.setState({showSideDrawer: false});
    };
    sideDrawerOpen = () => {
        this.setState({showSideDrawer: true})
    };
    render() {
    return (
            <div>
                <div>
                    <ToolBar open={this.sideDrawerOpen}/>
                    <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClose}/>
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}


export default Layout;