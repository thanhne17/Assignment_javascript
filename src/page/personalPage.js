import Header from "../components/header";
import axios from "axios";

const PersonalPage = {
    async print(){
        const id = JSON.parse(localStorage.getItem("user")).id;
        const{ data } = await axios.get(`http://localhost:3001/users/${id}`);
        console.log(data);
        return /* html */ `
        ${Header.print()}
        
        `;
    },
    after(){
        Header.after();
    }
};

export default PersonalPage;