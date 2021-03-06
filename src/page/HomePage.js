import Header from "../components/header";
import AllProduct from "../components/all_product";
// import Background from "../components/background";
import CateBranch from "../components/cate_branch";
import CateProduct from "../components/cateory_pr";
import Introduce from "../components/introduce";
// import OurProduct from "../components/our_product";
import Footer from "../components/footer";
import Slider from "../components/slide";

const HomePage = {
    async print(){
        return /* html */ `
            ${Header.print()}
            ${await Slider.print()}
            ${CateBranch.print()}
            ${await CateProduct.print()}
            ${await AllProduct.print()}
            ${Introduce.print()}
            ${Footer.print()}
        `;
    },
    after(){
        Header.after();
        AllProduct.after();
        Slider.after();
    }
};

export default HomePage;