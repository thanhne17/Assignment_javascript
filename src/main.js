import Navigo from "navigo";
import HomePage from "./page/HomePage";
import Product from "./page/product";
import DetailProduct from "./page/detailProduct";
import Dashboad from "./page/admin/dashboad";
import IndexProduct from "./page/admin/product";
import AddProduct from "./page/admin/product/addProduct";
import EditProduct from "./page/admin/product/editProduct";
import Sign_in from "./page/sign_in";
import SignUp from "./page/sign_up";

const render = async (content,id) => {
    document.querySelector(".container").innerHTML = await content.print(id);
    if (content.after) {
        content.after(id);
    }
};

const route = new Navigo("/");

route.on("/admin", () => {}, {
    before(done, match){
        if (JSON.parse(localStorage.getItem("user"))) {
            const id = JSON.parse(localStorage.getItem("user")).id;
            if (id == 2) {
                done();
                console.log(id);
            }
            else{
                document.location.href = "/";
            }
        }
        else{
            document.location.href = "/";
        }
    }
});

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
    "/admin": ()=>{
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
    "/signup": ()=>{
        render(SignUp);
    },
    "/signin": ()=>{
        render(Sign_in);
    }
});

route.resolve();