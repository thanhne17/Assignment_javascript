const Introduce = {
    print(){
        return /* html */ `
                    <!-- introduce -->
        <div class="introduce bg-[#f8fafc] pt-[70px] pb-[35px]">
        <div class="flex w-[80%] rounded-xl bg-[#fff] overflow-hidden shadow-xl mx-auto">
          <div class="right p-[30px] flex-1">
            <h1 class="font-black text-3xl pb-[30px]">Tự tin mua sắm cùng LAPShop</h1>
            <div class="wrap-introduce flex border-b py-[20px]">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-[10px]" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                  <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <h3 class="text-xl font-bold mb-[10px]">Chế độ bảo hành tận tâm</h3>
                <p class="font-medium">Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ điều
                  kiện bảo hành của nhà cung cấp, hãng sản xuất. Nếu có vấn đề về
                  chất lượng sản phẩm, ThinkPro xin cam kết sẽ hỗ trợ Quý khách
                  tới cùng.</p>
              </div>

              <div class="ml-[20px]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-[10px]" fill="none" viewBox="0 0 22 22" stroke="currentColor">
                  <path stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <h3 class="text-xl font-bold mb-[10px]">Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</h3>
                <p class="font-medium">Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ 
                  trợ đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc cảm thấy sản phẩm chưa 
                  đáp ứng được nhu cầu.</p>
              </div>
            </div>

            <div class="wrap-introduce border-b py-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-[10px]" fill="none" viewBox="0 0 22 22"  stroke="currentColor">
                <path stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-xl font-bold mb-[10px]">Thông tin hữu ích</h3>
              <div class="flex flex-wrap">
                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px] mr-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <h1 class="pl-[10px]">Hotline: 0354170252</h1>
                </div>

                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  <h1 class="pl-[10px]">Vận chuyển, thanh toán</h1>
                </div>

                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px] mr-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                  <h1 class="pl-[10px]">Tra cứu bảo hành</h1>
                </div>

                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h1 class="pl-[10px]">Group trao đổi, hỗ trợ</h1>
                </div>

                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px] mr-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <h1 class="pl-[10px]">Hệ thống cửa hàng</h1>
                </div>

                <div class="phone flex bg-[#f8fafc] p-[10px] rounded-xl min-w-[40%] mb-[10px]">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#0065ee">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  <h1 class="pl-[10px]">Bảng giá dịch vụ</h1>
                </div>
              </div>
            </div>

            <div class="wrap-introduce flex pt-[20px]">
              <div class="">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-[10px]" fill="none" viewBox="0 0 22 22"  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                </svg>
                <h3 class="text-xl font-bold mb-[10px]">LAPShop. trên social networks</h3>
                <div class="btn flex">
                  <a href="#" class="fb min-w-[150px] mx-[5px] border rounded-lg p-[5px] flex items-center">
                    <figure class="w-[40px] mr-[10px]">
                      <img src="https://thinkpro.vn/_nuxt/img/facebook.e4b1047.png" alt="">
                    </figure>
                    <p>Facebook</p>
                  </a>

                  <a href="#" class="fb min-w-[150px] mx-[5px] border rounded-lg p-[5px] flex items-center">
                    <figure class="w-[40px] mr-[10px]">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA4CAYAAABqtn+aAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7ZztcdNAEIbf8/DfdgPkXEGABhDugApiKkgqIIECKAFDB6EBMA2AhwKwqMB2BeJWt6dc5DjSKZloz75nZvXlk2f0zt7ex+qkEEABaD6s74fGxnx84t2iveMRW51910PI91zfsN13bcvnuTO1//92UPf9aATLzO4Mdq9xPJCgS2PXxr6FCFpCwhlbGSuSlTYv2tYSU/Ayogd7SlsVTbXQFDiP6IH6EvGWJypPPG12v/HwgH7oLIxob9zJwPvhCkm8NlD7kLkT3wPXSAK2pfLC0gNZ0SReezIXC10VzpAIZUYbJ+ApEqGUmjkBNRKhZLQpG5HUgHRmPCgeZzB/rIyoCr9AoiunJGDyvu6MSUCNfrlA6HSRHLQED6T5tonZv0N8Qo4keGCJEfEL7PDoK+JhSAIOIQRlp9NnsB65hHzGIhsRFvIl5FfroehWmKo1x8cPkImIRqQRZecqSUhx8XGASPDiIzU0OaQgIM+g0QFz36wQkDmMxgPrSOn2RCsgUev2XKMHohbQwUK+RQ/dnoMQ0OMET9yreIYDgJNic/QwLI1SwOLmkGLfZ/SYFIuuCrN49CrdlbG/6DejuCEBc0RAYY1yODR/SMJdon824qswexwJlxl7D1k5bLkC1uIcedsZ5FEKmENYXtiLc+dsYic8SMANhFCrrtS6asgmp0Zki57xGgiaRP3OpiGffySgBA+k6vrJ2C/E9aJTFQP7hGLcDHHmp1cSYuAF4mUbTUdaKMskYHc2ioZyKgnYlTJv7SYTciRCKbt/TsCfSISyoM3AP0kEsaCNe8WX+mBrJNqS8xsT1gOV7Qv+QKItlVb+SqUMScS2TFzvpZrSV7ZOJwGbmftdP+X/wrGQBvQTJO5iZWzqC3grqcSxcMoFCyR8dsQjdrJyXOCVsY+opuqOFvf8FNqmd43aVMPdGrZxeQ27NqzNmhIF2TQ5hPuqBw3V/sAubV3sKxz8sCwqmVvhpGtFnjf8RdPKKB143VH/nIl/nvN+y7bGzedO3CdP0GVe4D9w98m2bjpq4gAAAABJRU5ErkJggg==" alt="">
                    </figure>
                    <p>Youtube</p>
                  </a>

                  <a href="#" class="fb min-w-[150px] mx-[5px] border rounded-lg p-[5px] flex items-center">
                    <figure class="w-[40px] mr-[10px]">
                      <img src="https://thinkpro.vn/_nuxt/img/tiktok.7a8c0ef.png" alt="">
                    </figure>
                    <p>Tiktok</p>
                  </a>

                  <a href="#" class="fb min-w-[150px] mx-[5px] border rounded-lg p-[5px] flex items-center">
                    <figure class="w-[40px] mr-[10px]">
                      <img src="https://thinkpro.vn/_nuxt/img/instagram.c928c7c.png" alt="">
                    </figure>
                    <p>Instagram</p>
                  </a>
                </div>
              </div>
            </div>
            
          </div>
          <div class="left flex-2">
            <figure>
              <img src="https://thinkpro.vn/_nuxt/img/thinkpro-footer.d5b4dbc.png" alt="">
            </figure>
          </div>
        </div>
      </div>
        `;
    }
};

export default Introduce;