const AllProduct = {
    print(){
        return /* html */ `
                    <!-- all pr -->
        <div class="all-product bg-[#f8fafc] mt-[70px] p-[10px]">
        <div class="wrap-product mx-auto w-[80%]">
          <h1 class="text-3xl font-black mb-[10px] whitespace-nowrap ">Tất cả laptop</h1>
          <div class="wrap-all flex">
            <div class="fillter min-w-[250px]">
              
              <div class="sticky top-[20px] ">
                <h3 class="mt-[20px] text-xl font-bold">Khoảng giá: </h3>
                <div class="price">
                  <div class="w-[80%] mx-auto">
                    <input type="text" id="js-range-slider" name="my_range" value=""
                        data-type="double"
                        data-min="0"
                        data-max="1000"
                        data-from="0"
                        data-to="1000"
                        data-grid="true"
                    />
                  </div>
                </div>
                <h3 class="mt-[20px] text-xl font-bold">Thương hiệu</h3>
                <div class="branch rounded-md border p-[10px]">
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> SamSung</div>
                  <div class="text-base font-light"><input type="checkbox" name="" id=""> Apple</div>
                </div>
                <h3 class="mt-[20px] text-xl font-bold">Ram</h3>
                <div class="ram rounded-md border p-[10px]">
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 4gb</div>
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 8gb</div>
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 16gb</div>
                  <div class="text-base font-light"><input type="checkbox" name="" id=""> 32gb</div>
                </div>
                <h3 class="mt-[20px] text-xl font-bold">Bộ nhớ trong</h3>
                <div class="ram rounded-md border p-[10px]">
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 4gb</div>
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 8gb</div>
                  <div class="text-base font-light border-b"><input type="checkbox" name="" id=""> 16gb</div>
                  <div class="text-base font-light"><input type="checkbox" name="" id=""> 32gb</div>
                </div>
              </div>

            </div>
            <div class="product ml-[30px]">
              <div class="wrap-product grid grid-cols-4 gap-[20px]">
                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="27990000" class="font-xs">27.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>

                <div class="product1 bg-[#fff] hover:shadow-md rounded-xl overflow-hidden p-[20px]">
                  <a href="#">
                    <figure >
                      <img src="https://media-api-beta.thinkpro.vn/media/core/products/2022/1/14/asus-zenbook-q408ug.jpg" alt="">
                    </figure>
                    <div class="info">
                      <div class="name text-xl font-bold">
                        Asus Zenbook Q408UG
                      </div>
                      <div class="price">
                        <p class="py-[10px]">Từ <span class="text-[red] font-semibold" id="saled" value="23690000">23.690.000đ</span></p>
                        <del id="sale" value="26990000" class="font-xs">26.990.000đ</del>  -<span class="phanTram font-bold"></span>
                
                      </div>
                    </div>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
    }
};

export default AllProduct;