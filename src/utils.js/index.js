export const reRender = async (component, domElement)=>{
    if (component) {
        document.querySelector(domElement).innerHTML = await component.print();
        if (component.after) {
            component.after();
        }
    }
};