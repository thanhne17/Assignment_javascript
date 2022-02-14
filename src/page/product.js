import AllProduct from "../components/all_product";
import Header from "../components/header";
import Footer from "../components/footer";
import Introduce from "../components/introduce";
import Fillter from "../components/all_pr_fillter";

const Product = {
    async print(id){
        return /* html */ `
            ${Header.print()}
            ${await AllProduct.print(id)}
            ${Introduce.print()}
            ${Footer.print()}
         `;
    },
    after(id){
        Header.after();
        AllProduct.after(id);
        // console.log(AllProduct.after(id));
        Fillter.after();
    }
};

export default Product;