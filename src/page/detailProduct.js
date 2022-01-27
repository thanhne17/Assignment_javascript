import Header from "../components/header";
import Introduce from "../components/introduce";
import Footer from "../components/footer";

const DetailProduct = {
    print(id){
        return /* html */ `
            ${Header.print()}
            ${Introduce.print()}
            ${Footer.print()}
        `;
    }
};

export default DetailProduct;