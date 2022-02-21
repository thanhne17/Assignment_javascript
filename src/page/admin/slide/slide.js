import NavDashboad from "../components/nav";
import axios from "axios";

const Slider = {
    async print(){
        return /* html */ `
        ${NavDashboad.print()}
        <div class="relative md:ml-64 bg-blueGray-50">
        <div class="flex justify-between items-center">
        <h1 class="py-[20px] text-xl font-bold sm:px-6 lg:px-8">Slider</h1>
        <a href="/#/admin/addSlide" class="font-normal sm:mx-6 lg:mx-8 bg-[#0000ffba] p-[10px] text-[#fff] rounded-md fixed bottom-[20px] right-[20px] hover:bg-[#0000ff80] duration-200">Thêm mới</a>
        </div>
        <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${await fetch("http://localhost:3001/slider")
        .then((res)=>res.json())
        .then((result)=>{
            return result.map((Element)=> /* html */ `
                        <tr class="product-item-${Element.id}">
                        <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                            <div class="flex-shrink-0">
                            <img class="h-20 w-100" src="${Element.img}" alt="">
                            </div>
                            <div class="ml-4">
                            </div>
                        </div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="/admin/${Element.id}/editSlide" class="text-indigo-600 hover:text-indigo-900 pr-[10px]">Chỉnh sửa</a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button data-id=${Element.id} class="btn text-indigo-600 hover:text-indigo-900">Xóa</button>
                        </td>
                    </tr>
                        `).join("");
        })
}

                </tbody>
            </table>
            </div>
        </div>
        </div>
        </div>

        </div>
        `;
    },
    after(){
        const btns = document.querySelectorAll(".btn");
        btns.forEach((element)=>{
            const id = element.dataset.id;
            element.addEventListener("click", ()=>{
                const text = "Bạn muốn xóa Slide này không?";
                if (window.confirm(text) == true) {
                    console.log(id);
                    axios.delete(`http://localhost:3001/slider/${id}`);
                    const productDeleted = document.querySelector(`.product-item-${id}`);
                    if (productDeleted) {
                        productDeleted.remove();
                    }
                }
                else{
                    console.log("hủy");
                }
            });
        });
    }
};

export default Slider;