const OurProduct = {
    print(){
        return /* html */ `
                    <!-- out product -->
        <section class="w-[80%] mx-auto my-[70px]" id="pr">
        <div class="title text-center w-[60%] m-auto">
          <p class="text-[#ccc] font-bold tracking-widest">SẢN PHẨM NỔI BẬT</p>
          <h1 class="text-5xl my-[30px] font-black">Our Products</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            quas odio excepturi ut provident dolore eos quia, iusto, officiis,
            voluptas dolorum eum sequi soluta earum! Dicta libero nisi ab? Nisi?
          </p>
        </div>
        <div class="wrap-product flex justify-between flex-wrap">
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  17
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="orange">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div class="heart">
                  10
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="red">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  <i class="fas fa-star text-[orange]"></i> 17
                </div>
                <div class="heart">
                  <i class="fas fa-heart text-[red]"></i> 10
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  <i class="fas fa-star text-[orange]"></i> 17
                </div>
                <div class="heart">
                  <i class="fas fa-heart text-[red]"></i> 10
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  <i class="fas fa-star text-[orange]"></i> 17
                </div>
                <div class="heart">
                  <i class="fas fa-heart text-[red]"></i> 10
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  <i class="fas fa-star text-[orange]"></i> 17
                </div>
                <div class="heart">
                  <i class="fas fa-heart text-[red]"></i> 10
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
          <div class="product mt-[50px] w-[30%] ease-in-out duration-300 hover:shadow-2xl border border-[#eee] rounded-md mx-[5px]">
            <a href="#">
              <img src="https://media-api-beta.thinkpro.vn/backend/uploads/product/color_images/2021/5/13/tufdashf15-den-1.jpg" alt="">
            </a>
            <div class="pr-info text-center my-[30px]">
              <h1 class="font-somibold text-xl"><a href="#">Wild West Hoodie</a></h1>
              <div class="sao flex justify-center mt-[10px]">
                <div class="star mr-[10px]">
                  <i class="fas fa-star text-[orange]"></i> 17
                </div>
                <div class="heart">
                  <i class="fas fa-heart text-[red]"></i> 10
                </div>
              </div>
              <p class="text-[#bbb] my-[20px]">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
              <div class="pr-btn">
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">Add to cart</a>
                <a href="#" class="border border-[black] p-[10px] hover:bg-[black] hover:text-[#fff] ease-in-out duration-300">View</a>
              </div>
            </div>
          </div>
        </div>
      </section>
        `;
    }
};

export default OurProduct;