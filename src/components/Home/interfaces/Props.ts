import Product from "../../../pages/Main/interfaces/productsInterface";

export default interface Props {
    products: Product[],
    filter: string,
    setProductsOnCart: (products: Product[] | null) => void
}