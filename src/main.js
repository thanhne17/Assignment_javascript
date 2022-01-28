import Navigo from "navigo";
import HomePage from "./page/HomePage";
import Product from "./page/product";
import DetailProduct from "./page/detailProduct";
const render = async (content,id) => {
    document.querySelector(".container").innerHTML = await content.print(id);
};

const route = new Navigo("/");

route.on({
    "/": ()=>{
        render(HomePage);
    },
    "/product": ()=>{
        render(Product);
    },  
    "/detailPr/:id": ({data}) => {
        render(DetailProduct,data.id);
    }
});

route.resolve();