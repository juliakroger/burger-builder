import React, { Component } from 'react';
import Order from '../components/Order/PastOrder';
import axios from '../axios-orders';
//add error handler
class PastOrders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
    axios.get('/orders.json')
        .then(res => {
            const fetchOrders = [];
            for (let key in res.data){
                fetchOrders.push({
                  ...res.data[key],
                  id: key
                })
            }
            this.setState({loading: false, orders: fetchOrders})
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }

    render(){
        return (
        <div>
            <h1>Past Orders</h1>
            {this.state.orders.map((order,index) => (

                <Order key={order.id}
                       index={index}
                       price={order.price}
                       ingredients={order.ingredients}/>
            ))}
        </div>
        );
    }
}

export default PastOrders;