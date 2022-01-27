import AllProduct from "../components/all_product";
import Header from "../components/header";
import Footer from "../components/footer";
import Introduce from "../components/introduce";

const Product = {
    print(){
        return /* html */ `
            ${Header.print()}
            ${AllProduct.print()}
            ${Introduce.print()}
            ${Footer.print()}
         `;
    }
};

export default Product;