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
import PersonalPage from "./page/personalPage";
import SearchProduct from "./components/product_form";
import CateBranchProduct from "./page/admin/cate/cate";
import Slider from "./page/admin/slide/slide";
import EditCate from "./page/admin/cate/editCate";
import AddCate from "./page/admin/cate/addCate";
import AddSlide from "./page/admin/slide/addSlide";
import EditSlide from "./page/admin/slide/editSlide";

const render = async (content,id) => {
    document.querySelector(".container").innerHTML = await content.print(id);
    if (content.after) {
        await content.after(id);
    }
};

const route = new Navigo("/", {linksSelector: "a", hash: true});

route.on("/admin/*", () => {}, {
    before: (done) => {
        if (JSON.parse(localStorage.getItem("user"))) {
            const id = JSON.parse(localStorage.getItem("user")).id;
            if (id == 2) {
                done();
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
    "/personalPage": ()=>{
        render(PersonalPage);
    },  
    "/detailPr/:id": (res) => {
        render(DetailProduct,res.data.id);
    },
    "/admin": ()=>{
        render(Dashboad);
    },
    "/admin/index": ()=>{
        render(IndexProduct);
    },
    "/admin/cate": ()=>{
        render(CateBranchProduct);
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
    },   
    "/product/:id": (res)=>{
        render(Product, res.data.id);
    },
    "/product?(.*)": (res)=>{
        render(SearchProduct, res.queryString);
    },
    "/admin/slide": ()=>{
        render(Slider);
    },
    "/admin/:id/editCate": (res)=>{
        render(EditCate, res.data.id);
    },
    "admin/addCate": ()=>{
        render(AddCate);
    },
    "admin/addSlide":()=>{
        render(AddSlide);
    },
    "admin/:id/editSlide": ({ data })=>{
        render(EditSlide, data.id);
    }
    
});

route.resolve();