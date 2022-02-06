
const Fillter = {
    print(){
        return /* html */ `
        <div class="sticky top-[100px] ">
        <h3 class="mt-[20px] text-xl font-bold">Khoảng giá: </h3>
        <div class="price">
          <div class="w-[100%] mx-auto">
          <div class="box">

              <div class="values">
                  <div>$<span id="first"></span></div> - <div>$<span id="second"></span></div>
              </div>
              <small>
                  Current Range:
                  <div>$<span id="third"></span></div>
              </small>
          
              <div class="slider" data-value-0="#first" data-value-1="#second" data-range="#third"></div>
          
          </div>
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
       `; 
    }
};

export default Fillter;