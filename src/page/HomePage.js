import Header from "../components/header";
import AllProduct from "../components/all_product";
import Background from "../components/background";
import CateBranch from "../components/cate_branch";
import CateProduct from "../components/cateory_pr";
import Introduce from "../components/introduce";
import OurProduct from "../components/our_product";
import Footer from "../components/footer";

const HomePage = {
    print(){
        return /* html */ `
            ${Header.print()}
            ${Background.print()}
            ${OurProduct.print()}
            ${CateBranch.print()}
            ${CateProduct.print()}
            ${AllProduct.print()}
            ${Introduce.print()}
            ${Footer.print()}
        `;
    }
};

export default HomePage;