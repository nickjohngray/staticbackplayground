import {getMax} from 'components/ecom/util';
import React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import {addToCart} from '../../redux/actions/cart.action';
import {ICartItem, IShop, IState, IProduct} from '../../typings';
import Product from './Product';

interface ShopProps extends IShop {
    addToCart: (cartItem: ICartItem, id: number) => void;
    nextCartItemId: number;
}

class Shop extends React.Component<ShopProps> {
    constructor(props: ShopProps) {
        super(props);
    }

    render = () => (
        <div className="shop">
            <div className="products">
                {this.props.products.map((prod, key) => (
                    <Product
                        type={prod.type}
                        title={prod.title}
                        description={prod.description}
                        image={prod.image}
                        price={prod.price}
                        variations={prod.variations}
                        key={key}
                        onAddToCart={cartItem => {
                            this.props.addToCart(cartItem, this.props.nextCartItemId);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addToCart: (cartItem: ICartItem, id: number) => {
        cartItem.id = id;
        dispatch(addToCart(cartItem));
    }
});

export default connect(
    (state: IState) => ({
        products: state.shop.products,
        nextCartItemId: getMax(state.cart.items)
    }),
    mapDispatchToProps
)(Shop);
