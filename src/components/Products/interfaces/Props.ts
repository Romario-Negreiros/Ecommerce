import Product from "../../../pages/Main/interfaces/productsInterface";

export default interface Props {
    products: Product[]
    setProductsOnCart: (products: Product[]) => void
}