const gia_goc = document.querySelector("#sale");
const gia_da_giam = document.querySelector("#saled");
const gia_goc_gt = gia_goc.getAttribute("value");
const gia_da_giam_gt = gia_da_giam.getAttribute("value");
const phanTram = document.querySelectorAll(".phanTram");
if (gia_goc_gt > 0) {
    const result =  ((gia_goc_gt - gia_da_giam_gt)*100)/gia_goc_gt;
    for (let i = 0; i < phanTram.length; i++) {
        phanTram[i].innerHTML = `${Math.floor(result)}%`;        
    }
}
