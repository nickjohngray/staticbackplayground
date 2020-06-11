export interface IPage {
    name: string;
    path: string;
    images?: IImage[];
    sections?: ISection[];
}

export interface ISection {
    image?: IImage;
    header: string;
    body: string;
    sections?: ISection[];
    list?: string[];
    link?: string;
    opener?: SectionOpener;
}

export interface SectionOpener {
    type: OPENER_TYPE;
    open: boolean;
}

export enum OPENER_TYPE {
    TAB = 'TAB',
    EXPANDER = 'EXPANDER'
}

export interface IImage {
    src: string;
    url?: string;
}

export interface IManifest {
    appName: string;
    imagePath: string;
    pages: IPage[];
    products: IProduct[];
}

export interface ICart {
    items: ICartItem[];
}

export interface IHistory {
    URL: string;
}

export interface ICartItem {
    id: number;
    product: IProduct;
    selectedVariations: SingleVariation[];
}

export interface IProduct {
    title: string;
    description: string;
    price?: number;
    image: string;
    type: string;
    variations: Variation[];
}

export interface ICartItemsByType {
    productKey: string;
    items: ICartItem[];
    isVariation: boolean;
    variationName: string;
}

/*export interface ProductVariation {
    name: string,
    value: string
}*/

export type SingleVariation = {
    name: string;
    option: VariationItem;
};

export type Variation = {
    title: string;
    item: VariationItem[];
};

export type VariationItem = {
    optionValue: string;
    image?: string;
    price?: number;
};

export enum PRODUCT_TYPES {
    TSHIRT = 'TSHIRT',
    RING = 'RING'
}

export type IShop = {
    products: IProduct[];
};

export interface IState {
    localize: any;
    cart: ICart;
    shop: IShop;
    history: IHistory;
}
