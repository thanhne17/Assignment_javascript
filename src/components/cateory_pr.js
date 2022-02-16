import axios from "axios";

const CateProduct = {
    async print(){
        const { data } = await axios.get("http://localhost:3001/cate_pr");
        return /* html */ `
            <section class="cateory w-[80%] mx-auto mb-[70px] mt-[50px]">
            <h1 class="text-3xl font-black mb-[10px]">Laptop theo nhu cầu</h1>
            <div class="wrap-cate flex">
            ${data.map((Element)=> /* html */ `
            <div class="asus p-[20px] shadow-2xl mx-[10px] rounded-md text-center">
            <figure>
              <a href="/#/product?${Element.id_cate}">
                <img src="${Element.img}" alt="">
              </a>
            </figure>
            <p class="mt-[20px]">${Element.title}</p>
            <svg fill="none" height="100" preserveAspectRatio="none" viewBox="0 0 180 188" width="100" xmlns="http://www.w3.org/2000/svg" class="demand-mask">
              <path d="M0.000315029 198C40.0297 198 49.6151 198 90 198C130.428 198 145.231 198 180 198V0C154.031 27.7922 122.919 42.4776 90 42.4776C57.0595 42.4776 25.9694 27.7922 0 0L0.000315029 198Z" fill="white"></path>
            </svg>
          </div>
            `).join("")}
      
            </div>
          </section>
            `;

    }
};

export default CateProduct;