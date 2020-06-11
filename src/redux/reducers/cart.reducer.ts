import produce from 'immer';
import {handleActions} from 'redux-actions';
import {ICart} from '../../typings';
import cartActions, {addToCartAction, removeFromCartAction} from '../actions/cart.action';

// empty cart
export const initialState = {items: []};

export default handleActions<ICart, any>(
    {
        [cartActions.ADD_TO_CART]: produce((draft: ICart, action: addToCartAction) => {
            draft.items.push(action.payload);
        }),

        [cartActions.REMOVE_FROM_CART]: produce((state: ICart, action: removeFromCartAction) => {
            const items2 = state.items.filter(cartItem => cartItem.id !== action.payload.id);
            state.items = items2;
        }),

        [cartActions.EMPTY_CART]: produce((state: ICart) => {
            state.items = [];
        })
    },
    initialState
);
