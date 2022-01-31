import NavDashboad from "../components/nav";

const AddProduct = {
    print(){
        return /* html */ `
            ${NavDashboad.print()}
            <div class="relative md:ml-64 bg-blueGray-50">
            <h1 class="py-[20px] text-xl font-bold sm:px-6 lg:px-8">Thêm mới sản phẩm</h1>
                
            </div>
        `;
    }
};

export default AddProduct;