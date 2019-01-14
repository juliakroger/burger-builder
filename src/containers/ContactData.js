import React, { Component } from 'react';
import classes from '../components/Style.css';
import axios from '../axios-orders';
import Spinner from '../components/UI/Spinnerload/Spinner';

class ContactData extends Component {
    state = {
        address: {
            country: '',
            street: '',
            zipCode: ''
        },
        email: '',
        name: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Julia Kroger',
                adress: {
                 street: 'Teststreet',
                  zipCode: '41351',
                  country: 'Brazil'
                },
            email: 'test@test.com',
            },
            deliveryMethod: 'fastest'
        }
    axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/')
        })
        .catch(error => {
            this.setState({loading: false});
        })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name" />
                <input className={classes.Input} type="email" name="email" placeholder="Your email" />
                <input className={classes.Input} type="text" name="street" placeholder="Your street" />
                <input className={classes.Input} type="text" name="zipcode" placeholder="Your Zip Code" />
                <button className={classes.OrderButton} onClick={this.orderHandler}>Order</button>
            </form>

        );
        if (this.state.loading){
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

export default ContactData;