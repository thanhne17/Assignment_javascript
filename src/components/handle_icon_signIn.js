const IconSignIn = {
    print(){
        if (localStorage.user) {
            const html = /* html */ `
                <a href="/#/personalPage">Hello ${JSON.parse(localStorage.getItem("user")).email}</a>
            `;
            document.querySelector(".iconSignIn").innerHTML = html;            
        }
       
    }
};

export default IconSignIn;