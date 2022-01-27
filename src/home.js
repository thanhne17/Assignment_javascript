const btnBell = document.querySelector(".chuong");
const toast = document.querySelector(".menu > ul > li ul");
// const btnClose = document.querySelector(".close");
var status_toast = "close";
btnBell.onclick = () => {
    if (status_toast == "close") {
        toast.style.display = "block";
        status_toast = "open";
        console.log(status_toast);
    }
    else if(status_toast == "open"){
        toast.style.display = "none";
        status_toast = "close";
        console.log(status_toast);
    }
};

const myBtn = document.querySelector(".btn-top");
window.onscroll = ()=>{
    scrollFunction();
};

function scrollFunction () {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myBtn.style.display = "block";
        myBtn.style.animation = "toTop .5s";
    }
    else{
        myBtn.style.display = "none";
    }
}

myBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});