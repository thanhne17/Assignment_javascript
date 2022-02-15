const IconSignIn = {
    print(){
        if (localStorage.user) {
            const html = /* html */ `
                <a href="/personalPage">Hello Thành</a>
            `;
            document.querySelector(".iconSignIn").innerHTML = html;            
        }
       
    }
};

export default IconSignIn;