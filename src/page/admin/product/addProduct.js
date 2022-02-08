import NavDashboad from "../components/nav";
import { add } from "../../../api/product";
import axios from "axios";

const AddProduct = {
    async print(){
        const { data } = await axios.get("http://localhost:3001/cate_pr");
        return /* html */ `
            ${NavDashboad.print()}
            <div class="relative md:ml-64 bg-blueGray-50">
            <h1 class="py-[20px] text-xl font-bold sm:px-6 lg:px-8">Thêm mới sản phẩm</h1>

        <form action="" enctype="application/x-www-form-urlencoded" class="overflow-hidden border-b border-gray-200 w-[100%] mx-auto form">
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

                        <div class="col-span-6 sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium text-gray-700">Giảm giá</label>
                          <input value="0" type="number" name="price_sale" id="price_sale" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3">
                          <label for="country" class="block text-sm font-medium text-gray-700">Thể loại</label>
                          <select id="category" name="category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            ${data.map((Element)=> /* html */ `
                              <option value=${Element.id_cate}>${Element.title}</option>
                            `
    ).join("")}
                          </select>
                        </div>
          
                        <div class="col-span-6">
                          <label for="img" class="block text-sm font-medium text-gray-700">Ảnh</label>
                          <input type="file" name="img" id="img" autocomplete="img" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                          <label for="cpu" class="block text-sm font-medium text-gray-700">Cpu</label>
                          <input type="text" name="cpu" id="cpu" autocomplete="address-level2" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label for="ram" class="block text-sm font-medium text-gray-700">Ram</label>
                          <input type="text" name="ram" id="ram" autocomplete="address-level1" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>
          
                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                          <label for="rom" class="block text-sm font-medium text-gray-700">Rom</label>
                          <input type="text" name="rom" id="rom" autocomplete="postal-code" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                        <label for="first-name" class="block text-sm font-medium text-gray-700">Card màn hình</label>
                        <input type="text" name="card" id="card" autocomplete="given-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      </div>
        
                      <div class="col-span-6 sm:col-span-3">
                        <label for="last-name" class="block text-sm font-medium text-gray-700">Pin và sạc</label>
                        <input type="text" name="pin" id="pin" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
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
        const btn = document.querySelector(".btn-add");
        const img = document.querySelector("#img");
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            const file = img.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "edlvdeks");
            console.log(file);
            axios({
                url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
                method: "POST",
                // headers: {
                //     "Content-Type":  "application/x-www-formendcoded",
                // },
                data: formData,
            }).then((res)=>{
                const apiFake = {
                    name_prodcut: document.querySelector("#name_prodcut").value,
                    id: "",
                    cpu: document.querySelector("#cpu").value,
                    ram: document.querySelector("#ram").value,
                    rom: document.querySelector("#rom").value,
                    price: document.querySelector("#price").value+"đ",
                    pin: document.querySelector("#pin").value,
                    card: document.querySelector("#card").value,
                    img:  res.data.secure_url,
                    price_text: document.querySelector("#price").value.replace(/[^0-9]/g, ""),
                    price_sale: document.querySelector("#price_sale").value,
                };
                console.log(apiFake);
                add(apiFake);
                document.location.href="/admin/index";
            });
        });
    }
};

export default AddProduct;