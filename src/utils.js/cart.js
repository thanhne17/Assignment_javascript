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