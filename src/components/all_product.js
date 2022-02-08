import Fillter from "./all_pr_fillter";
import fillter from "../slide_range";
import axios from "axios";

const AllProduct = {
    async print(){
        const currentPage = 1;
        const itemsPerPage = 24;
        const start = (currentPage - 1) * itemsPerPage;
        const end = currentPage * itemsPerPage;
        const { data } = await axios.get("http://localhost:3001/posts");
        fillter.print();
        return  /* html */ `
              <div class="all-product bg-[#f8fafc] pt-[70px] p-[10px]">
                <div class="wrap-product mx-auto w-[80%]">
                  <div class="flex justify-between">
                  <h1 class="text-3xl font-black mb-[10px] whitespace-nowrap border-b pb-[10px]">Tất cả laptop</h1>
                  <!-- This example requires Tailwind CSS v2.0+ -->
                  <div class="relative inline-block text-left">
                  <div>
                    <button id="btn-select" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                      Options
                      <!-- Heroicon name: solid/chevron-down -->
                      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div id="toast" class="hidden z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                      <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                      <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                      <form method="POST" action="#" role="none">
                        <button type="submit" class="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                      </form>
                    </div>
                  </div>
                  </div>
                  </div>
                  <div class="wrap-all flex">
                    <div class="fillter min-w-[250px]">
                      
                     ${Fillter.print()}
      
                    </div>
                    <div class="product ml-[30px]">
                      <div class="wrap-product grid grid-cols-4 gap-[20px]">
                      ${data.slice(start, end).map((Element)=> /* html */ `
                      <div class="product1 bg-[#fff] hover:shadow-xl duration-300 rounded-xl overflow-hidden p-[20px] relative">
                      <a href="/detailPr/${Element.id}" class="">
                        <figure class="h-[50%]">
                          <img src="${Element.img}" alt="">
                        </figure>
                        <div class="info h-[50%] bottom-[5px] ">
                          <div class="name text-xl font-bold">
                            ${Element.name_prodcut}
                          </div>
                          <div class="price">
                            <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="${Element.price-Element.price_sale}">${Element.price-Element.price_sale}đ</span></p>
                            <del id="sale" value="${Element.price}" class="text-sm">${Element.price_text}</del><span class="phanTram font-bold"></span>
                    
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
            `;
    },
};

export default AllProduct;