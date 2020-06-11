import produce from 'immer';
import {handleActions} from 'redux-actions';
import {IShop} from '../../typings';
import shopActions, {loadShopAction} from '../actions/shop.action';

const initialState: IShop = {
    products: []
};

export default handleActions<IShop, any>(
    {
        [shopActions.LOAD_SHOP_DATA]: produce((draft: IShop, action: loadShopAction) => {
            draft.products = action.payload.products;
        })
    },
    initialState
);
