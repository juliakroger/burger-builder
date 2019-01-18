import React, { Component } from 'react';
import CheckoutSummary from '../components/Order/CheckoutSummary';
import { Route } from "react-router-dom";
import ContactData from './ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {

    componentDidMount(){
        console.log(this.props.ings)
    }

    checkOutHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render (){
        return (
        <div>
            <CheckoutSummary  price={this.props.price} ingredients={this.props.ings} onCheckout={this.checkOutHandler} />
            <Route path={this.props.match.path + '/contact-data'}
                   component={ContactData}
            />
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);