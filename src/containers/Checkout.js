import React, { Component } from 'react';
import CheckoutSummary from '../components/Order/CheckoutSummary';
import { Route, Redirect } from "react-router-dom";
import ContactData from './ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    checkOutHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render (){
        let summary = <Redirect to="/buildburger"/>
        if (this.props.price > 4) {
          summary = (
              <div>
              <CheckoutSummary  price={this.props.price} ingredients={this.props.ings} onCheckout={this.checkOutHandler} />
              <Route path={this.props.match.path + '/contact-data'}component={ContactData}/>
              </div>
          );
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);