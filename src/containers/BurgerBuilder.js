import React, { Component } from 'react';

import axios from '../axios-orders';
import { connect } from 'react-redux';

import Burger from '../components/Burger/Burger';
import BuildControls from '../components/BurgerControls/BuildControls';
import Modal from '../components/UI/Modal';
import OrderSummary from '../components/Order/OrderSummary';
import Spinner from '../components/UI/Spinnerload/Spinner';
import ErrorHandler from '../ErrorHandler/ErrorHandler';
import * as actions from "../store/actions";

class BurgerBuilder extends Component {
    state = {
        purchasing: false,
        loading: false
    }

    componentDidMount() {
        //axios.get('https://burger-builder-2019.firebaseio.com/ingredients.json')
         //   .then(response => {
         //       this.setState({ingredients: response.data})
         //   })
    }

    updatePurchaseState(ing){
        const sum = Object.keys(ing)
            .map(igKey => {
                return ing[igKey]
            }).reduce((sum, el) => {
                return sum + el;
            },0)
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHendler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
          ...this.props.ings
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null;
        let burger = <Spinner/>;

        if (this.props.ings) {
            burger = (
                <div>
                    <Burger ingredients={this.props.ings} />
                    <h3>Total Price: $<strong>{this.props.totalPrice.toFixed(2)}</strong></h3>
                    <BuildControls
                        ingredientRemoved = {this.props.onIngredientRemoved}
                        ingredientAdded = {this.props.onIngredientAdded}
                        disabled={disabledInfo}
                        purchasable={this.updatePurchaseState(this.props.ings)}
                        ingredients={this.props.ings}
                        ordered={this.purchaseHandler}
                    />
                </div>
            );

            orderSummary = <OrderSummary ingredients={this.props.ings}
                            totalPrice={this.props.totalPrice}
                            cancelPurchase={this.purchaseCancelHendler}
                            continuePurchase={this.purchaseContinueHandler} />
        }

        if (this.state.loading){
            orderSummary = <Spinner />;
        }

        return (
            <div>
                <Modal show={this.state.purchasing} modalClose={this.purchaseCancelHendler}>
                    {orderSummary}
                </Modal>
                {burger}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actions.ADD_INGREDIENT, ingredientName: ingName }),
        onIngredientRemoved: (ingName) => dispatch({type: actions.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorHandler(BurgerBuilder, axios));