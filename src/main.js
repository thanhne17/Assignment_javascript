import Navigo from "navigo";
import HomePage from "./page/HomePage";
import Product from "./page/product";
import DetailProduct from "./page/detailProduct";
import Dashboad from "./page/admin/dashboad";
import IndexProduct from "./page/admin/product";

const render = async (content,id) => {
    document.querySelector(".container").innerHTML = await content.print(id);
    if (content.after) {
        content.after();
    }
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
    },
    "/dashboad": ()=>{
        render(Dashboad);
    },
    "/admin/index": ()=>{
        render(IndexProduct);
    }
    
});

route.resolve();