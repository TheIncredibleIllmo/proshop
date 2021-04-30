import { CART_ADD_ITEM } from '../../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const product = action.payload;
            const existingProduct = state.cartItems?.find(
                (x) => x.productId === product.productId
            );

            if (existingProduct) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.productId === existingProduct.productId ? product : x
                    ),
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, product] };
            }
        default:
            return state;
    }
};
