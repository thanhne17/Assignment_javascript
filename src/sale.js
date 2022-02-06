setTimeout(() => {
    const gia_goc = document.querySelectorAll("#sale");
    const gia_da_giam = document.querySelectorAll("#saled");
    const phanTram = document.querySelectorAll(".phanTram");
    for (let i = 0; i < gia_da_giam.length; i++) {
        const gia_goc_gt = gia_goc[i].getAttribute("value");
        const gia_da_giam_gt = gia_da_giam[i].getAttribute("value");
        if (gia_goc_gt > 0) {
            const result =  ((gia_goc_gt - gia_da_giam_gt)*100)/gia_goc_gt;
            phanTram[i].innerHTML = `   -${Math.floor(result)}%`;        
        }     
    }



}, 1000);