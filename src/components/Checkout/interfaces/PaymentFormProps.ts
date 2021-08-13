import Product from "../../../pages/Main/interfaces/productsInterface";
import Inputs from "./Inputs";

export default interface Props {
    shippingData: Inputs,
    productsOnCart: Product[] | null,
    backStep: () => void,
    nextStep: () => void
}