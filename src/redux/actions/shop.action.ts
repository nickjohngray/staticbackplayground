import {createAction} from 'redux-actions';
import {IShop} from '../../typings';

export enum ShopActions {
    LOAD_SHOP_DATA = 'SHOP/LOAD_SHOP_DATA'
}

export const loadShop = createAction(ShopActions.LOAD_SHOP_DATA, (shopData: IShop) => shopData);

export type loadShopAction = ReturnType<typeof loadShop>;

export default ShopActions;
