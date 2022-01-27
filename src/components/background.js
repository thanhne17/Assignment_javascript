const Background = {
    print(){
        return /* html */ `
                    <!-- bg -->
        <div class="background_img">
        <div class="flex items-center h-[100vh] max-w-[1140px] m-auto z-1">
          <div class="title text-[#fff] w-[70%]">
            <h1 class="text-8xl font-black">Shop With Us</h1>
            <p class=" my-[40px] text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem at, modi nostrum consequatur temporibus officiis?
            </p>
            <div class="title-btn">
              <a href="#pr" class=" px-[50px] p-[15px] font-bold mr-[10px] hover:bg-[orange] ease-in-out duration-300 rounded-md bg-[#eee] text-[black]">Shop now</a>
              <a href="#" class="px-[50px] p-[15px] font-bold hover:bg-[#fff] hover:text-[black] bg-[orange] ease-in-out duration-300 rounded-md">Club member</a>
            </div>
          </div>
        </div>
      </div>
        `;
    }
};

export default Background;