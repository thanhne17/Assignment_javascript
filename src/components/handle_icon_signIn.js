const IconSignIn = {
    print(){
        const signIn = document.querySelector(".signIn");
        if (localStorage.user) {
            const html = /* html */ `
                <a href="/personalPage">Hello Thành</a>
            `;
            signIn.innerHTML = html;            
        }
       
    }
};

export default IconSignIn;