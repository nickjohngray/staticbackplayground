import {ICartItem, ICartItemsByType} from '../../typings';

export const getCartTotal = (items: ICartItem[]) => {
    const max = items.reduce((max, item) => {
        return item.product.price + max;
    }, 0);
    return max;
};

export const getCartItemsByType = (items: ICartItem[]) => {
    // group by type
    const cartItemsByType: ICartItemsByType[] = [];

    //clone
    let cartItems = items.map(obj => obj);

    for (let i = 0; i < cartItems.length; i++) {
        let isVariation = false;
        let variationName = '';
        if (cartItems[i].selectedVariations.length > 0) {
            isVariation = true;
            for (let j = 0; j < cartItems[i].selectedVariations.length; j++) {
                variationName += ` ${cartItems[i].selectedVariations[j].name}:${cartItems[i].selectedVariations[j].option.optionValue} `;
                if (j + 1 < cartItems[i].selectedVariations.length) {
                    variationName += ',';
                }
            }
        }
        let prodKey = isVariation ? cartItems[i].product.type + variationName : cartItems[i].product.type;
        prodKey = prodKey.trim();
        // has this product type been added yet ?
        const found = cartItemsByType.find(item => item.productKey === prodKey);

        if (!found) {
            cartItemsByType.push({
                productKey: prodKey,
                items: [],
                isVariation: isVariation,
                variationName: variationName
            });
        }
        const sortItems = cartItemsByType.find(item => item.productKey === prodKey).items;

        sortItems.push(cartItems[i]);
    }
    return sortByProduct(cartItemsByType);
};

export const sortByProduct = (items: ICartItemsByType[] = []) =>
    items.sort((a, b) => {
        const textA = a.productKey.toUpperCase();
        const textB = b.productKey.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

export const getTotal = (items: ICartItem[]) => {
    const total = items.reduce((value, item) => {
        return item.product.price + value;
    }, 0);
    return total;
};

export const getNextCartItemId = (items: ICartItem[]) => {
    const max = items.reduce((max, item) => {
        return item.id > max ? item.id : max;
    }, 0);
    return max + 1;
};
