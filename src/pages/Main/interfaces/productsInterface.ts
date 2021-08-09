export default interface Product {
    id: number,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string,
    quantity: number,
    isSaved: boolean,
    isOnCart: boolean
}