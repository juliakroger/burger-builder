import * as actions from '../actions/actionTypes';
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const ingredientPrices = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.3,
    bacon: 0.7
}

const burgerBuilder = (state = initialState, action) => {
    switch (action.type) {
        case actions.INIT_PURCHASE:
            return initialState;

        case actions.ADD_INGREDIENT:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            },
            totalPrice: state.totalPrice + ingredientPrices[action.ingredientName]
        }

        case actions.REMOVE_INGREDIENT:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - ingredientPrices[action.ingredientName]
        }

        default:
            return state;
    }
};

export default burgerBuilder;