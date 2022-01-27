import Navigo from "navigo";
import HomePage from "./page/HomePage";
import Product from "./page/product";
const render = (content) => {
    document.querySelector(".container").innerHTML = content.print();
};

const route = new Navigo("/");

route.on({
    "/": ()=>{
        render(HomePage);
    },
    "/product": ()=>{
        render(Product);
    }
});

route.resolve();