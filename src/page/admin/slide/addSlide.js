import NavDashboad from "../components/nav";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
// import $ from "jquery";
// import validate from "jquery-validation";

const AddSlide = {
    async print(){
        // const { data } = await axios.get("http://localhost:3001/cate_pr");
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

                        <div class="col-span-6 sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium text-gray-700">Ảnh</label>
                          <input type="file" name="img" id="img" autocomplete="family-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                          <img id="preview" class="w-[200px]">
                        </div>

                        <input type="hidden" id="id">
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
        img.addEventListener("change", ()=>{
            console.log(URL.createObjectURL(img.files[0]));
            document.querySelector("#preview").src = URL.createObjectURL(img.files[0]);
        });
        btn.addEventListener("click", (e)=>{
            e.preventDefault();
            const file = img.files[0];
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "edlvdeks");
            axios({
                url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
                method: "POST",
                // headers: {
                //     "Content-Type":  "application/x-www-formendcoded",
                // },
                data: formData,
            }).then((res)=>{
                const apiFake = {
                    id: document.querySelector("#id").value,
                    img:  res.data.url,
                };
                console.log(apiFake);
                axios.post("http://localhost:3001/slider", apiFake)
                    .then(()=>{
                        toastr.success("Bạn đã thêm thành công");
                    });
                document.location.href="/admin/slide";
            });
        });
    }
};

export default AddSlide;