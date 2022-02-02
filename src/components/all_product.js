import Fillter from "./all_pr_fillter";

const AllProduct = {
    print(){
        const currentPage = 1;
        const itemsPerPage = 12;
        const start = (currentPage - 1) * itemsPerPage;
        const end = currentPage * itemsPerPage;
        return fetch("http://localhost:3001/posts")
            .then((res)=>res.json())
            .then((result)=> /* html */ `
              <div class="all-product bg-[#f8fafc] mt-[70px] p-[10px]">
                <div class="wrap-product mx-auto w-[80%]">
                  <h1 class="text-3xl font-black mb-[10px] whitespace-nowrap border-b pb-[10px]">Tất cả laptop</h1>
                  <div class="wrap-all flex">
                    <div class="fillter min-w-[250px]">
                      
                     ${Fillter.print()}
        
                    </div>
                    <div class="product ml-[30px]">
                      <div class="wrap-product grid grid-cols-4 gap-[20px]">
                      ${result.slice(start, end).map((Element)=> /* html */ `
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
                            <del id="sale" value="${Element.price}" class="font-xs">${Element.price_text}</del>  -<span class="phanTram font-bold"></span>
                    
                          </div>
                        </div>
                      </a>
                    </div>
                      `).join(" ")}
                        </div>
                        <div class="flex justify-between mt-[20px] items-center"> 
                          <a href="#" class="bg-[#fe3464] py-[10px] px-[195px] text-[#fff] rounded-lg" id="next">Trang tiếp</a>
                          <div class="flex">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                          </svg>
                          <h1 class="">1</h1>
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            `);
    },
};


export default AllProduct;