import {getNextCartItemId, getTotal, sortByProduct, getCartItemsByType} from '../util';
import {ICartItem, ICartItemsByType} from '../../../typings';

describe('Util', () => {
    it('should get the product with the largest ID', () => {
        expect(getNextCartItemId(cartItems)).toBe(5);
    });
    it('should sum the total cost of all products', () => {
        const ringPrice = 2395;
        const tShirtPrice1 = 35;
        const tShirtPrice2 = 35;
        const tShirtPrice3 = 35;

        expect(getTotal(cartItems)).toBe(ringPrice + tShirtPrice1 + tShirtPrice2 + tShirtPrice3);
    });
    it('should sort the products by product key', () => {
        const products: ICartItemsByType[] = [
            {
                productKey: 'c product 1',
                items: null,
                isVariation: false,
                variationName: null
            },
            {
                productKey: 'b product 2',
                items: null,
                isVariation: false,
                variationName: null
            },
            {
                productKey: 'a product 3',
                items: null,
                isVariation: false,
                variationName: null
            }
        ];
        const sortedProducts = sortByProduct(products);
        expect(sortedProducts[0].productKey).toBe('a product 3');
        expect(sortedProducts[1].productKey).toBe('b product 2');
        expect(sortedProducts[2].productKey).toBe('c product 1');
    });
    it('should return Cart Items grouped By Type considering prod variation', () => {
        const sortedProducts: ICartItemsByType[] = getCartItemsByType(cartItems);
        expect(sortedProducts[0].productKey).toBe('Gold-Sovereeign-Rings Sovereeign:9 carat Half Sovereeign');
        expect(sortedProducts[1].productKey).toBe('TSHIRT color:red , size:medium');
        expect(sortedProducts[1].items.length).toBe(2);
        expect(sortedProducts[1].items[0].product.price).toBe(35);
        expect(sortedProducts[1].items[1].product.price).toBe(35);
        expect(sortedProducts.length).toBe(3);
    });
});

const productTShirt = {
    type: 'TSHIRT',
    title: 'tshirt',
    description:
        "<div><p>Aotearoa T-Shirt by Hallenstein Brothers</p><ul>Represent New Zealand in our Aotearoa tee feautring the outline of New Zealand and Aotearoa graphic. The perfect tee for those lazy summer days.</ul><ul><li> Crew neck</li><li> New Zealand outline to the front</li><li> Aotearoa graphic to the front</li><li> Regular fit</li><li> Ribbed neck</li><li> Soft cotton</li><li> 160GSM cotton</li><li> Model wears size M/32 | 185cm/6'1 tall </li></ul><p></p><p>Product code: 9548505</p></div>",
    price: 35,
    image: 'strength-pit-red-tshirt.fw_.png',
    variations: [
        {
            title: 'Size',
            item: [
                {
                    optionValue: 'Pick 1...'
                },
                {
                    optionValue: 'Small'
                },
                {
                    optionValue: 'Medium'
                },
                {
                    optionValue: 'Large'
                }
            ]
        },
        {
            title: 'Color',
            item: [
                {
                    optionValue: 'Pick 1...',
                    image: 'blsck-t.png'
                },
                {
                    optionValue: 'Black',
                    image: 'strength-pit-black-tshirt01.jpg'
                },
                {
                    optionValue: 'Red',
                    image: 'strength-pit-red-tshirt.fw_.png'
                },
                {
                    optionValue: 'White',
                    image: 'strength-pit-white-tshirt.fw_.png'
                }
            ]
        }
    ]
};

const productGoldSovereeignRings = {
    type: 'Gold-Sovereeign-Rings',
    title: 'Gold Sovereeign Rings',
    description:
        '<strong> (Reserved for Pit Members Only) </strong>Custom branded sovereign and half sovereign signet rings for Strength Pit Otara.',
    image: 'gold-ring.png',
    variations: [
        {
            title: 'Sovereeign',
            item: [
                {
                    optionValue: 'Pick 1...',
                    price: -1
                },
                {
                    optionValue: '9 carat Full Sovereeign',
                    price: 2795
                },
                {
                    optionValue: '9 carat Half Sovereeign',
                    price: 2395
                }
            ]
        }
    ]
};

/*
  note as there are two Medium red shirts in the cart they will be squashed together
  on the checkout page 
*/

const cartItems: ICartItem[] = [
    {
        // a tshirt with size and color variations
        // and a dynamic image
        id: 1,
        product: productTShirt,
        selectedVariations: [
            {
                name: 'color',
                option: {
                    optionValue: 'red',
                    image: 'strength-pit-red-tshirt.fw_.png'
                }
            },
            {
                name: 'size',
                option: {optionValue: 'medium'}
            }
        ]
    },
    {
        // a tshirt with size and color variations
        // and a dynamic image
        id: 2,
        product: productTShirt,
        selectedVariations: [
            {
                name: 'color',
                option: {
                    optionValue: 'white',
                    image: 'strength-pit-red-tshirt.fw_.png'
                }
            },
            {
                name: 'size',
                option: {optionValue: 'large'}
            }
        ]
    },
    {
        // a tshirt with size and color variations
        // and a dynamic image
        id: 3,
        product: productTShirt,
        selectedVariations: [
            {
                name: 'color',
                option: {
                    optionValue: 'red',
                    image: 'strength-pit-red-tshirt.fw_.png'
                }
            },
            {
                name: 'size',
                option: {optionValue: 'medium'}
            }
        ]
    },
    {
        // a ring that has a dynamic price variation, note the price is copied over to product,
        // when it is added to the cart by the user as well
        id: 4,
        product: {...productGoldSovereeignRings, price: 2395},
        selectedVariations: [
            {
                name: 'Sovereeign',
                option: {
                    optionValue: '9 carat Half Sovereeign',
                    price: 2395
                }
            }
        ]
    }
];
