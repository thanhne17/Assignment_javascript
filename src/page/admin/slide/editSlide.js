import axios from "axios";
import NavDashboad from "../components/nav";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const EditSlide = {
    async print(id){
        const { data } = await axios.get(`http://localhost:3001/slider/${id}`);
        return /* html */ `
                ${NavDashboad.print()}
                <div class="relative md:ml-64 bg-blueGray-50 mx-[30px] shadow-2xl rounded-xl border">
                <h1 class="py-[20px] text-xl font-bold sm:px-6 lg:px-8">Cập nhật slide</h1>
    
            <form enctype="multipart/form-data" action="" class="overflow-hidden border-b border-gray-200 w-[100%] mx-auto form">
              <div class="mt-10 sm:mt-0">
                <div class="md:grid md:grid-cols-2 md:gap-6">
                  <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                      <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                          <div class="grid grid-cols-6 gap-6">

                            <input value="${data.id}" type="hidden" name="id" id="id" autocomplete="given-name">

                            <div class="col-span-6 border p-[5px] rounded-xl">
                              <label for="img" class="block text-sm font-medium text-gray-700">Slide</label>
                              <input type="file" name="img" id="img" autocomplete="img" class="mt-1 border border-gray-300 block w-full py-2 px-3 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <img class="w-[30%] text-center preview rounded-lg m-[5px]" src="${data.img}">
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
    after(id){
        const btn = document.querySelector(".btn-add");
        const img = document.querySelector("#img");
        let imgUploadedLink = "";

        img.addEventListener("change", ()=>{
            document.querySelector(".preview").src = URL.createObjectURL(img.files[0]);
        });

        btn.addEventListener("click", async (e) => {
            e.preventDefault();

            const file = img.files[0];
            if(file){
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", "edlvdeks");
  
                const {data } = await axios({
                    url: "https://api.cloudinary.com/v1_1/djsbi0bma/image/upload",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-formendcoded",
                    },
                    data: formData,
                });
                imgUploadedLink = data.url;
            }
         
            axios.put("http://localhost:3001/cate_pr/"+id, {
                title: document.querySelector("#name").value,
                id: document.querySelector("#id").value,
                img: [
                    imgUploadedLink ? imgUploadedLink : document.querySelector(".preview").src
                ],
            })
                .then(()=>{
                    toastr.success("Bạn đã cập nhật thành công");
                    setTimeout(() => {
                        document.location.href = "/#/admin/cate";
                    }, 2000);
                })
                .catch(()=>{
                    toastr.error("Có lỗi xảy ra, vui lòng thử lại!");
                });
        });
    }
        
};

export default EditSlide;