const Footer = {
    print(){
        return /* html */ `
                    <!-- footer -->
        <footer class="w-[100%] bg-[#f8fafc] pt-[50px] pb-[30px]">
        <div class="w-[80%] mx-auto bg-[#fff] rounded-xl shadow-xl flex overflow-hidden">
          <div class="flex-1 p-[20px]">
            <figure class="w-[150px]">
              <a href="#">
                <img src="https://ap.poly.edu.vn/images/logo.png" alt="logo">
              </a>
            </figure>

            <div class="flex flex-wrap ml-[30px] mt-[30px]">
              <a href="#" class="about w-[30%] mb-[15px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <h1 class="font-bold text-[#0065ee]">Về chúng tôi</h1>
              </a>
              <a href="#" class="about w-[30%] mb-[15px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <h1 class="font-bold text-[#0065ee]">Sứ mệnh</h1>
              </a>
              <a href="#" class="about w-[30%] mb-[15px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <h1 class="font-bold text-[#0065ee]">Tin tức</h1>
              </a>
              <a href="#" class="about w-[30%] mb-[15px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <h1 class="font-bold text-[#0065ee]">Giá trị cốt lõi</h1>
              </a>
              <a href="#" class="about w-[30%] mb-[15px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <h1 class="font-bold text-[#0065ee]">Tầm nhìn</h1>
              </a>
              <a href="#" class="about w-[30%] mb-[10px] hover:bg-[#ecf0f4] p-[5px] rounded-md ease-linear duration-300">
                <figure class="w-[100%]">
                  <img src="https://thinkpro.vn/_nuxt/img/think-bocongthuong.08b4936.png" alt="">
                </figure>
              </a>
            </div>
          </div>
          <figure class="flex-1">
            <img src="https://thinkpro.vn/_nuxt/img/store-1.c50f7e3.png" alt="">
          </figure>
        </div>
      </footer>
      <button class="p-[10px] bg-[orange] rounded-3xl btn-top fixed bottom-[30px] right-[10px] hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#fff">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
        `;
    }
};

export default Footer;