import Navigo from "navigo";
import HomePage from "./page/HomePage";
import Product from "./page/product";
import DetailProduct from "./page/detailProduct";
import Dashboad from "./page/admin/dashboad";
import IndexProduct from "./page/admin/product";
import AddProduct from "./page/admin/product/addProduct";
import EditProduct from "./page/admin/product/editProduct";

const render = async (content,id) => {
    document.querySelector(".container").innerHTML = await content.print(id);
    if (content.after) {
        content.after(id);
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
    },
    "/admin/:id/editProduct": ( {data} )=>{
        render(EditProduct, data.id);
    },
    "/admin/addpr": ()=>{
        render(AddProduct);
    },
});

route.resolve();