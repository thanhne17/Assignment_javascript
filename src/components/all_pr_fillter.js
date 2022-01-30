const Fillter = {
    print(){
        return /* html */ `
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
       `; 
    },
    after(){
        const next = document.querySelector(".next");
        console.log(next);
    }
};

export default Fillter;