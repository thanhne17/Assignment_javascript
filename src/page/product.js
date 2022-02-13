import AllProduct from "../components/all_product";
import Header from "../components/header";
import Footer from "../components/footer";
import Introduce from "../components/introduce";
import Fillter from "../components/all_pr_fillter";

const Product = {
    async print(){
        return /* html */ `
            ${Header.print()}
            ${await AllProduct.print()}
            ${Introduce.print()}
            ${Footer.print()}
         `;
    },
    after(){
        Header.after();
        AllProduct.after();
        Fillter.after();
    }
};

export default Product;