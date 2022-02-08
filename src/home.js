const home = {
    print(){
        setTimeout(() => {
            const btnBell = document.querySelector(".chuong");
            const toast = document.querySelector(".menu > ul > li ul");
            // const btnClose = document.querySelector(".close");
            var status_toast = "close";
            if (btnBell) {
                btnBell.onclick = () => {
                    if (status_toast == "close") {
                        toast.style.display = "block";
                        status_toast = "open";
                    }
                    else if(status_toast == "open"){
                        toast.style.display = "none";
                        status_toast = "close";
                    }
                };
            }
        
            const myBtn = document.querySelector(".btn-top");
            const header = document.querySelector("header");
            window.onscroll = ()=>{
                scrollFunction();
            };
        
            function scrollFunction () {
                if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                    myBtn.style.display = "block";
                    myBtn.style.animation = "toTop .5s";
                    header.classList.add("sticky");
                    header.style.animation = "down .5s";
                    header.classList.add("shadow-md");
        
                }
                else{
                    myBtn.style.display = "none";
                    header.classList.remove("sticky");
                    header.style.animation = "";
                    header.classList.remove("shadow-md");
                    
                }
            }
        
            if (myBtn) {
                myBtn.addEventListener("click", ()=>{
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                });
            }
        
        
        }, 3000);
    }
};

export default home;