const btnBell = document.querySelector(".chuong");
const toast = document.querySelector('.menu > ul > li ul');
const btnClose = document.querySelector(".close");
var status_toast = "close";
btnBell.onclick = (e) => {
    if (status_toast == "close") {
        toast.style.display = "block";
        status_toast = "open";
        console.log(status_toast)
    }
    else if(status_toast == "open"){
        toast.style.display = "none"
        status_toast = "close";
        console.log(status_toast)
    }
};
