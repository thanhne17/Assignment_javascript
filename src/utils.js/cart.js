let cart = [];

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct)=>{
    const exitsProduct = cart.find((Element)=>{
        return Element.id === newProduct.id;
    });
    if (!exitsProduct) {
        cart.push(newProduct);
    }
    else{
        console.log(exitsProduct);
        exitsProduct.quantily++;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const increaseCart = (id)=>{
    cart.find(Element => Element.id === id).quantily++;
    localStorage.setItem("cart", JSON.stringify(cart));
};

export const decreaseCart = (id)=>{
    const currentCart = cart.find((element)=> element.id === id);
    currentCart.quantily--;
    if (currentCart.quantily < 1) {
        if (window.confirm("Xóa sản phẩm này?")) {
            cart = cart.filter(element => element.id !== id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
};