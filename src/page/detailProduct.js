import Header from "../components/header";
import Introduce from "../components/introduce";
import Footer from "../components/footer";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { get } from "../api/product";
import { addToCart } from "../utils.js/cart";

const DetailProduct = {

    print(id){
        return fetch(`http://localhost:3001/posts/${id}`)
            .then((res)=>  res.json())
            .then((result)=> /* html */ `
            ${Header.print()}
            
            <div class="bg-[#f8fafc] py-[30px]">
                <div class="w-[80%] mx-auto flex ">
                <div class="">
                    <div class="right bg-[#fff] rounded-2xl overflow-hidden shadow-2xl p-[15px]">
                    <div class="">
                    <div class="item">            
                    <div class="clearfix" style="max-width:600px;">
                        <ul id="image-gallery" class="gallery list-unstyled cS-hidden">
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img2}"> 
                                <img src="${result.img2}" />
                                 </li>
                            <li data-thumb="${result.img3}"> 
                                <img src="${result.img3}" />
                                 </li>
                            <li data-thumb="${result.img4}"> 
                                <img src="${result.img4}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                            <li data-thumb="${result.img}"> 
                                <img src="${result.img}" />
                                 </li>
                      
                        </ul>
                    </div>
                </div>
        
                    </div>
                    </div>

                    <div class="bg-[#fff] rounded-2xl overflow-hidden shadow-2xl p-[15px] mt-[30px]">
                    <div class="tiltle flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                        <h1 class="pl-[10px] font-bold ">Cấu hình và đặc điểm</h1>
                    </div>
                    <div class="inf h-[500px]">
                        <div class="flex justify-between py-[30px] border-b">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Vi xử lý</h1>
                            <p>${result.cpu}</p>
                            </div>
                        </div>
                        <div class="flex w-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Ram</h1>
                            <p>${result.ram}</p>
                            </div>
                        </div>
                        </div>

                        <div class="flex justify-between py-[30px] border-b">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Màn hình</h1>
                            <p>${result.display}</p>
                            </div>
                        </div>
                        <div class="flex w-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Card màn hình</h1>
                            <p>Card đồ họa (GPU)
                                Radeon™ Graphics, GeForce RTX 3060</p>
                            </div>
                        </div>
                        </div>

                        <div class="flex justify-between py-[30px] border-b">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Lưu trữ</h1>
                            <p>SSD 512GB</p>
                            </div>
                        </div>
                        <div class="flex w-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">PIN và Adapter sạc</h1>
                            <p>90 Whr, sạc 150W</p>
                            </div>
                        </div>
                        </div>

                        <div class="flex justify-between pt-[30px]">
                        <div class="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Kết nối chính</h1>
                            <p>1 x Type-C, 3 x USB-A</p>
                            </div>
                        </div>
                        <div class="flex w-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                            </svg>
                            <div class="ml-[10px]">
                            <h1 class="font-semibold block">Trọng lượng</h1>
                            <p>1.9KG</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>
                
                <div class="left bg-[#fff] rounded-2xl overflow-hidden shadow-2xl ml-[50px] p-[15px] w-[35%] p-[10px] sticky top-[20px] h-[700px]">
                    <div class="sticky">
                    <div class="bg-[#fff0f6] rounded-xl p-[10px] flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f43e6a">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Bạn hãy Liên hệ tư vấn để yêu cầu hỗ trợ / đặt mua sản phẩm nhé.
                    </div>
                    <div class="info">
                        <h1 class="font-bold text-xl pt-[20px] pb-[5px]">${result.name_prodcut}</h1>
                        <p>${result.price_text}</p>
                    </div>
                    <h1 class="font-bold py-[20px]">Cấu hình</h1>
                    <div class="w-[70%] text-sm p-[5px] rounded-lg shadow-lg border-[#eee] border">
                        <div class="">
                            <ul class="">
                                <li class="font-semibold">${result.cpu}</li>
                                <li class="font-semibold">${result.card}</li>
                                <li class="font-semibold">${result.ram}</li>
                                <li class="font-semibold">${result.rom}</li>
                                <li class="font-semibold">${result.pin}</li>
                            </ul>
                        </div>
                        <p class="text-[red] pt-[10px] font-bold">${result.price_text}</p>
                    </div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 text-center border-t">
                    ${result.price_text}
                    <a class="cursor-pointer add-to-cart block py-[10px] bg-[#f43e6a] font-bold text-[#fff] m-[10px] rounded-lg">Thêm vào giỏ hàng</a>
                    </div>
                </div>
                </div>

            </div>
            ${Introduce.print()}
            ${Footer.print()}
            `
            );
    },
    after(id){
        Header.after();
        document.querySelector(".add-to-cart").addEventListener("click", async ()=>{
            const { data } = await get(id);
            addToCart({...data, quantily: 1});
            toastr.success(`Bạn đã thêm ${data.name_prodcut} thành công`);
        });

        $(document).ready(function() {
            $("#content-slider").lightSlider({
                loop:true,
                keyPress:true
            });
            $("#image-gallery").lightSlider({
                gallery:true,
                item:1,
                thumbItem:9,
                slideMargin: 0,
                speed:500,
                auto:true,
                loop:true,
                onSliderLoad: function() {
                    $("#image-gallery").removeClass("cS-hidden");
                }  
            });
        });

    }
    
};

export default DetailProduct;