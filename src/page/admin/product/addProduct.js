import NavDashboad from "../components/nav";
import axios from "axios";

const AddProduct = {
    print(){
        return /* html */ `
            ${NavDashboad.print()}
            <div class="relative md:ml-64 bg-blueGray-50">
            <h1 class="py-[20px] text-xl font-bold sm:px-6 lg:px-8">Thêm mới sản phẩm</h1>

        <form action="" class="overflow-hidden border-b border-gray-200 w-[100%] mx-auto form">
          <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-6">
              <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                          <label for="first-name" class="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                          <input type="text" name="name_prodcut" id="name_prodcut" autocomplete="given-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium text-gray-700">Giá</label>
                          <input type="number" name="price" id="price" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-4">
                          <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                          <input type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3">
                          <label for="country" class="block text-sm font-medium text-gray-700">Thể loại</label>
                          <select id="category" name="category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>2D cơ bản</option>
                            <option>3D đồ họa</option>
                            <option>Lập trình</option>
                          </select>
                        </div>
          
                        <div class="col-span-6">
                          <label for="img" class="block text-sm font-medium text-gray-700">Ảnh</label>
                          <input type="text" name="img" id="img" autocomplete="img" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="cpu" class="block text-sm font-medium text-gray-700">Cpu</label>
                          <input type="number" name="cpu" id="cpu" autocomplete="address-level2" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label for="ram" class="block text-sm font-medium text-gray-700">Ram</label>
                          <input type="number" name="ram" id="ram" autocomplete="address-level1" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label for="rom" class="block text-sm font-medium text-gray-700">Rom</label>
                          <input type="number" name="rom" id="rom" autocomplete="postal-code" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit" class="btn-add inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </form>
      </div>
                
        `;
    },
    after(){
        const name_prodcut = document.querySelector("#name_prodcut");
        // const price = document.querySelector("#price");
        // const category = document.querySelector("#category");
        // const img = document.querySelector("#img");
        // const ram = document.querySelector("#ram");
        // const cpu = document.querySelector("#cpu");
        // const rom = document.querySelector("#rom");
        const btn = document.querySelector(".btn-add");
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            console.log(name_prodcut.value);
            const apiFake = {
                name_prodcut: document.querySelector("#name_prodcut").value,
                cpu: document.querySelector("#cpu").value,
                ram: document.querySelector("#ram").value,
                rom: document.querySelector("#rom").value,
                img: "http://placeimg.com/640/480",
            };
            axios.post("http://localhost:3001/posts", apiFake);
        });
    }
};

export default AddProduct;