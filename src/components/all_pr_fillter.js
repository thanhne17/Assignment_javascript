import { IonRangeSliderEvent } from "ion-rangeslider";
import { IonRangeSliderOptions } from "ion-rangeslider";
import "ion-rangeslider/css/ion.rangeSlider.min.css";


const Fillter = {
    print(){
        return /* html */ `
        <div class="sticky top-[100px] ">
        <form action="" class="fillter">
          <h3 class="mt-[20px] text-xl font-bold">Khoảng giá: </h3>
          <div class="price">
            <div class="w-[100%] mx-auto">
              <input type="text" class="js-range-slider" name="my_range" value="" />
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
        </form>
      </div>
       `;
    },
    after(){
        const form = document.querySelector(".fillter");
        form.addEventListener("change", ()=>{
            console.log(document.querySelector(".js-range-slider").value);
        });
        $(".js-range-slider").ionRangeSlider({
            type: "double",
            skin: "round",
            min: 0,
            max: 1000,
            from: 0,
            to: 1000,
            step:50,
            grid: true
        });
    } 
};

export default Fillter;