const Pagination = {
    print(){
        return /* html */ `
            ${    
            fetch("http://localhost:3001/posts")
            .then((res)=>res.json())
            .then((result)=>{
                const next = document.querySelector(".next");
                console.log(next); 
                var currentPage = 1;
                const itemPerPage = 12;
                const start = (currentPage - 1) * itemPerPage;
                const end = itemPerPage * currentPage;    
                const dcm = ()=>{
                    document.querySelector(".wrap-product").innerHTML = result.slice(start, end).map((Element)=>{
                        return /* html */ `
                    <div class="product1 bg-[#fff] hover:shadow-lg duration-300 rounded-xl overflow-hidden p-[20px] relative">
                    <a href="/detailPr/${Element.id}" class="">
                      <figure class="h-[50%]">
                        <img src="${Element.img}" alt="">
                      </figure>
                      <div class="info h-[50%] bottom-[5px] ">
                        <div class="name text-xl font-bold">
                          ${Element.name_prodcut}
                        </div>
                        <div class="price">
                          <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                          <del id="sale" value="27990000" class="font-xs">27.990.000đ</del>  -<span class="phanTram font-bold"></span>
    
                        </div>
                      </div>
                    </a>
                    </div> `;
                    }).join("");
                };
            });
    
        const handleClick = (ev) => {
            if (ev.target.class == "next") {
                currentPage++;
            }
            else{
                currentPage--;
            }
            dcm();
    
        };
        next.addEventListener("click", handleClick());
        window.onLoad = dcm();}
        `
    }
}