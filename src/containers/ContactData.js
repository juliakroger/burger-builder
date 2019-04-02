import React, { Component } from 'react';
import classes from '../components/Style.css';
import Spinner from '../components/UI/Spinnerload/Spinner';
import { connect } from 'react-redux'
import { purchaseBurgerStart } from '../store/actions/order';
class ContactData extends Component {
    state = {
        orderForm: {
            name: '',
            email: '',
            deliveryMethod: 'fastest',
            street: '',
            city: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();

        const order = {
            ingredients: this.props.ings,
            price: this.props.price,
            customer: {
                name: this.state.name,
                email: this.state.email,
                street: this.state.street,
                city: this.state.city
            },
            deliveryMethod: this.state.deliveryMethod
        }
        this.props.onOrderBurger(order);
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onStreetChange = (event) => {
        this.setState({street: event.target.value})
    }

    onCityChange = (event) => {
        this.setState({city: event.target.value})
    }

    onSelectChange = (event) => {
        this.setState({deliveryMethod: event.target.value})
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" onChange={this.onNameChange} required="required" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" onChange={this.onEmailChange} required="required" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" onChange={this.onStreetChange} required="required" />
                <input className={classes.Input} type="text" name="city" placeholder="Your City" onChange={this.onCityChange} required="required" />
                <select className={classes.Input} type="select" name="delivery" onChange={this.onSelectChange}>
                    <option value="fastest" disabled>Delivery method</option>
                    <option value="fastest">FASTEST</option>
                    <option value="cheapest">CHEAPEST</option>
                </select>
                <button className={classes.OrderButton} onClick={this.orderHandler} disabled={this.state.purchaseable}>ORDER</button>
            </form>

        );
        if (this.props.loading){
            form = <Spinner/>
        }
        return (
        <div className={classes.ContactData}>
            <h4>Enter your Contact Data</h4>
            {form}
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData) => dispatch(purchaseBurgerStart(orderData))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);