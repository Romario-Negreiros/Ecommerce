import Props from "../interfaces/Props";

const removeAllItemsFromCart = (setProductsOnCart: (products: Props["productsOnCart"]) => void) => {
    localStorage.removeItem('cartItemsID')
    setProductsOnCart(null)   
}

export default removeAllItemsFromCart;