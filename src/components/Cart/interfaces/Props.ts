import Product from "../../../pages/Main/interfaces/productsInterface";

export default interface Props {
    productsOnCart: Product[] | null,
    setProductsOnCart: (products: Product[] | null) => void
}