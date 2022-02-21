import Header from "../components/header";
import Footer from "../components/footer";
import Introduce from "../components/introduce";
import LogOut from "../components/logout";
import { reRender } from "../utils.js";
import { decreaseCart, increaseCart, removeCart } from "../utils.js/cart";
import axios from "axios";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const PersonalPage = {
    async print(){
        if (!localStorage.user) {
            document.location.href = "/";
        }
        let number="";
        let nameUser = "";
        let date = "";
        let month = "";
        let year = "";
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.name) {
            nameUser = user.name;
        }
        if (user.number) {
            number = user.number;
        }
        if (user.month) {
            month = user.month;
        }
        if (user.date) {
            date = user.date;
        }
        if (user.year) {
            year = user.year;
        }
        return /* html */ `
        ${Header.print()}
        <div class="bg-[#f8fafc] pt-[50px] pb-[40px]">
            <main class="w-[80%] mx-auto shadow-xl rounded-xl flex bg-[#fff]">
                <div class="l m-[10px]">
                <div class=" sticky top-[80px]">
                    <div class="border-b pb-[10px]">
                        <img class="rounded-full w-[50px] h-[50px] inline" src="https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png" alt="">
                        <span class="text-xl font-black">${user.email}</span>
                    </div>
                    <div class="user-menu pt-[10px]">
                        <ul>
                        <li class="tab relative">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="#1856b5">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            Tài khoản của tôi
                            <!-- <div class="">
                            <ul class="">
                                <li class="tab">
                                cc
                                </li>
                            </ul>
                            </div> -->
                        </li>
                        <li class="tab tab-active">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="red">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                            Đơn mua
                        </li>
                        <li class="tab">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6  inline-block" fill="none" viewBox="0 0 24 24" stroke="green">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            Thông báo
                        </li>
                        <li class="logout pt-[50px]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Đăng xuất
                    </li>
                        </ul>
                </div>
            
                </div>
                </div>
                <div class="border-l ml-[50px] w-[100%]">
                <div class="tab-content hidden py-[10px] px-[20px] rounded">
                    <div class="border-b pb-[10px]">
                    <h1 class="text-xl">Hồ sơ của tôi</h1>
                    <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                    </div>
                    <form action="" class="px-[20px]" enctype="application/x-www-form-urlencoded">
                    <div class="flex justify-between my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="name">Tên Đăng nhập</label>
                        <input class="flex-1 border-b" type="text" name="name" id="name" value="${nameUser}">
                        <input class="flex-1 border-b" type="hidden" name="id" id="id" value="${user.id}">
                    </div>
                    <div class="flex justify-between my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="email">Email</label>
                        <input class="flex-1 border-b" type="text" name="email" id="email" placeholder="" value="${user.email}">
                    </div>
                    <div class="flex justify-between my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="number">Số điện thoại</label>
                        <input class="flex-1 border-b" type="number" name="number" id="number" value="${number}">
                    </div>
                    <div class="flex justify-start my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="name">Giới tính</label>
                        <select name="gender" id="gender">
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                        </select>
                    </div>
                    <div class="flex justify-between my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="number">Ngày sinh</label>
                        <input class="flex-1 border-b" type="number" name="date" id="date" value="${date}">
                        <input class="flex-1 border-b" type="number" name="month" id="month" value="${month}">
                        <input class="flex-1 border-b" type="number" name="year" id="year" value="${year}">
                    </div>
                    <div class="flex justify-between my-[30px]">
                        <label class="min-w-[100px] mr-[20px]" for="name">Ảnh đại diện</label>
                        <img id="preview" class="w-[150px] h-[150px] rounded-full" src="https://www.vhv.rs/dpng/d/421-4213525_png-file-svg-single-user-icon-png-transparent.png" alt="">
                        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div class="space-y-1 text-center">
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                            </div>
                            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                        </div>
                    </div>
            
                    <div class="px-4 py-3 text-right sm:px-6 border-t">
                        <button id="btn-update" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Lưu</button>
                    </div>
                    </form>
            
                </div>
                <!-- đơn mua -->
                <div class="tab-content w-[100%] py-[10px] px-[20px] active">
                    <ul class="flex justify-between p-[10px] border rounded w-[100%] bg-[#eee]">
                    <li>Tất cả</li>
                    <li>Đang giao</li>
                    <li>Đã giao</li>
                    <li>Đã hủy</li>
                </ul>
                    <div class="flex flex-col">
                    <div class="-my-2 overflow-x-auto">
                        <div class="py-2 align-middle inline-block min-w-full">
                        <div class="overflow-hidden sm:rounded-lg mt-[20px]">
                            <table class="min-w-full divide-y divide-gray-200">
                            <tbody class="bg-white divide-y divide-gray-200">
                                ${JSON.parse(localStorage.getItem("cart")).map((Element)=>{
        return /* html */ `
                    <tr>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="flex items-center">
                        <div class="flex-shrink-0 h-20 w-20">
                            <img class="h-20 w-20" src="${Element.img[0]}" alt="">
                        </div>
                        <div class="ml-4">
                            <div class="text-sm font-medium text-gray-900">${Element.name_prodcut}</div>
                        </div>
                        </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-sm text-gray-900">${Element.price_text}</div>
                        <div class="text-sm text-gray-500"><del>${Element.price_sale}</del></div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">
                    <svg data-id="${Element.id}" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer decrease btn h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                    </svg>
                    X${Element.quantily}
                    <svg data-id="${Element.id}" xmlns="http://www.w3.org/2000/svg" class="cursor-pointer increase btn h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                    </svg>
                    <button data-id="${Element.id}" class="btn btn-remove py-[5px] px-[10px] rounded bg-[#ff00009e] text-[#fff] hover:bg-[red]">Xóa</button>
                    </div>
                        </td>
                    </tr>       
                        `; }).join("")}
                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">Tổng: </td>
                            <td class="px-6 py-4 whitespace-nowrap"><span id="total"></span> đ</td>
                            <td class="px-6 py-4 whitespace-nowrap text-[green]"><a href="#">Thanh toán</a></td>
                        </tr>
                                        <!-- More people... -->
                                    </tbody>
                                    </table>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <!-- thông báo -->
                        <div class="tab-content hidden">
                            Thông báo
                        </div>
                        </div>
                    </main>
                </div>
                ${Introduce.print()}
                ${Footer.print()}
                `;
    },
    after(){
        function start(){
            UpdateInfo();
        }

        start();

        Header.after();
        const tab = document.querySelectorAll(".tab");
        const tab_content = document.querySelectorAll(".tab-content");

        for (let i = 0; i < tab.length; i++) {
            tab[i].addEventListener("click", ()=>{
                document.querySelector(".tab-content.active").classList.add("hidden");
                document.querySelector(".tab-content.active").classList.remove("active");
                tab_content[i].classList.remove("hidden");
                tab_content[i].classList.add("active");

                document.querySelector(".tab.tab-active").classList.remove("tab-active");
                tab[i].classList.add("tab-active");

            });            
        }

        document.querySelector(".logout").addEventListener("click", ()=>{
            LogOut.print();
            document.location.href = "/";
        });

        const btn =  document.querySelectorAll(".btn");
        btn.forEach(element => {
            const dataId = element.dataset.id;
            element.addEventListener("click", ()=>{
                if (element.classList.contains("increase")) {
                    increaseCart(dataId);
                    reRender(PersonalPage, ".container");
                }
                else if(element.classList.contains("decrease")){
                    decreaseCart(dataId);
                    reRender(PersonalPage, ".container");
                }
                else{
                    removeCart(dataId);
                    reRender(PersonalPage, ".container");
                }
            });
        });

        const totalcart = JSON.parse(localStorage.getItem("cart"));
        const result = totalcart.reduce((accument, currentValue)=>{
            let total = accument + Number.parseInt(currentValue.price) * Number.parseInt(currentValue.quantily);
            return total;
        },0);
        document.querySelector("#total").innerHTML = result;
        function UpdateInfo (){
            let imgUploadedLink = "";
            const img = document.querySelector("#file-upload");
            const file = img.files[0];
            img.addEventListener("change", ()=>{
                document.querySelector("#preview").src = URL.createObjectURL(img.files[0]);
            });
            document.querySelector("#btn-update").addEventListener("click",async (e)=>{
                e.preventDefault();
                if (file) {
                    const file = img.files[0];
                    const formData = new FormData();

                    formData.append("file", file);
                    formData.append("upload_preset", "edlvdeks");
                
                    const { data } = await axios.post("https://api.cloudinary.com/v1_1/djsbi0bma/image/upload", formData);
                    imgUploadedLink = data.url;
                }
                const id = JSON.parse(localStorage.getItem("user")).id;
                console.log(id);
                axios.put("http://localhost:3001/users/"+id, {
                    email: document.querySelector("#email").value,
                    id: document.querySelector("#id").value,
                    name: document.querySelector("#name").value,
                    number: document.querySelector("#number").value,
                    date: document.querySelector("#date").value,
                    month: document.querySelector("#month").value,
                    year: document.querySelector("#year"),
                    img: imgUploadedLink ? imgUploadedLink : document.querySelector("#preview").src
                })
                    .then(()=>{
                        toastr.success("Cập nhật tài khoản thành công");
                    });
            });
        }
    }
};

export default PersonalPage;