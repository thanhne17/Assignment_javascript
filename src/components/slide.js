import axios from "axios";

const Slider = {
    async print(){
        const { data } =await axios.get("http://localhost:3001/slider");
        return /* html */ `
            <div class="w-[80%] mx-auto my-[30px] flex justify-between">
                <div class="w-[25%]">
                    <div class="bg-[#f8fafc] rounded-xl px-[15px] py-[10px] my-[10px]">
                        <h1 class="text-[19px] font-black leading-relaxed">Miễn phí vận chuyển</h1>
                        <p>100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.</p>
                    </div>
                    <div class="bg-[#f8fafc] rounded-xl px-[15px] py-[10px] my-[10px]">
                        <h1 class="text-[19px] font-black leading-relaxed">Bảo hành tận tâm</h1>
                        <p>Bất kể giấy tờ thế nào, ThinkPro luôn cam kết sẽ hỗ trợ khách hàng tới cùng.</p>
                    </div>
                    <div class="bg-[#f8fafc] rounded-xl px-[15px] py-[10px] my-[10px]">
                        <h1 class="text-[19px] font-black leading-relaxed">Đổi trả 1-1 hoặc hoàn tiền</h1>
                        <p>Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu cầu.</p>
                    </div>
                
                </div>
                    <div class="w-[65%]">
                        <ul id="lightSlider">
                            ${data.map(res => /* html */ `
                            <li>
                                <img class="w-[100%] h-[100%] rounded-xl" src="${res}">
                            </li>
                            `).join("")}
                        </ul>
                    </div>

                    <div class="clear-both"></div>
            </div>
        `;
    },
    after(){
        $("#lightSlider").lightSlider({
            item: 1,
            auto:true,
            // adaptiveHeight:true,
            loop:true,
            slideMargin: 0,
            thumbItem: 9
        });
    }
};

export default Slider;