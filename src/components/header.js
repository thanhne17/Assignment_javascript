import IconSignIn from "./handle_icon_signIn";
import SearchProduct from "./product_form";
// import axios from "axios";
const Header =  {
    print() {
        return /* html */ `
                    <!-- header -->
        <header class="w-[100%] top-0 z-10 bg-[#ffffff94] backdrop-blur-md">
            <div class="wrap-top-header hidden">
            <div class="top-header flex justify-between items-center w-[90%] m-auto p-[10px] ">
                <div class="social cursor-pointer">
                <i data-color="blue" class="fab fa-facebook hover:text-[blue]"></i>
                <i data-color="#1c96e8" class="fab fa-twitter hover:text-[#1c96e8]"></i>
                <i data-color="#31a5d7" class="fab fa-telegram hover:text-[#31a5d7]"></i>
                <i data-color="red" class="fab fa-youtube hover:text-[red]"></i>
                </div>
                <div class="contact">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="orange">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                </span>
                0354170252
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="green">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    </span>
                    thanhntph15251@fpt.edu.vn
                </div>
            </div>
            </div>
            <div class="bottom-header flex justify-between w-[80%] m-auto items-center">
                <div class="logo ">
                <a href="/#/" class="text-[3rem] min-w-[150px] font-black">
                    LAPShop<span class="text-[orange]">.</span>
                </a>
                </div>
                <div>
                    <form class="relative" method="get">
                        <input type="text" class="words rounded-3xl px-[10px] py-[5px] bg-[#eee] text-[black] focus:outline-[#1876f2]" placeholder="Tìm kiếm">
                        <button class="btn-search inline absolute translate-y-[-50%] top-[50%] right-[-40px] bg-[#eee] p-[4px] rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
                <div class="menu ">
                <ul class="flex items-center justify-end">
                    <li class="bg-[#eee] px-[10px] py-[7px] rounded-3xl"><a href="/#/product">Product</a> </li>
                    <li class="bg-[#eee] px-[10px] py-[7px] rounded-3xl"><a href="/#/admin">Admin</a> </li>
                    <li class="relative chuong bg-[#eee] p-[5px] rounded-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        
                        <ul class="absolute z-10">
                            <li>
                            <div class="toast w-[300px] rounded-md text-[#fff] p-[5px] shadow-md">
                                <div class="title flex justify-between border-b">
                                <h1>Notification</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 close" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                </div>
                                <div class="noti font-normal">
                                <p>Hi, welcome to my website!</p>
                                <p>I am Thành</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates, tempore suscipit ipsa voluptas qui quae amet laborum odit est quidem reprehenderit rem architecto, nobis iure. Debitis alias quae ipsa.
                                </div>
                            </div>
                            </li>
                        </ul>
            
                    </li>
                    <li class="bg-[#eee] px-[10px] py-[7px] rounded-3xl">
                        <a class=" flex" href="/#/personalPage">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span class=" text-[green]" id="quantily"></span>
                        </a>
                    </li>
                    <li class="signIn bg-[#eee] p-[5px] rounded-3xl">
                    <a class="iconSignIn" href="/#/signin">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </a>
                </li>
                </ul>
                </div>
            </div>
      </header>
        `; 
    },
    async after(){
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
        const top_header = document.querySelector(".top-header");
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
                top_header.classList.add("hidden");
        
            }
            else{
                myBtn.style.display = "none";
                header.classList.remove("sticky");
                header.style.animation = "";
                header.classList.remove("shadow-md");
                top_header.classList.remove("hidden");

                    
            }
        }
        
        if (myBtn) {
            myBtn.addEventListener("click", ()=>{
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        }
        // const { data } = await axios.get("http://localhost:3001/posts?q=msi");
        // console.log(data);
        
        IconSignIn.print();
        SearchProduct.print();
        const words = document.querySelector(".words");
        const btn_search = document.querySelector(".btn-search");

        btn_search.addEventListener("click", (e)=>{
            e.preventDefault();
            const wordSearch = JSON.parse(JSON.stringify(words.value));
            document.location.href = `/#/product?${wordSearch}`;
        });

        if (localStorage.getItem("cart")) {
            let countQuantily = 0;
            const count = JSON.parse(localStorage.getItem("cart"));
            count.forEach(element => {
                countQuantily += element.quantily;
            });
            document.querySelector("#quantily").innerHTML=countQuantily;
        }
    }
   
};

export default Header;