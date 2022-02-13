const LogOut = {
    print(){
        localStorage.removeItem("user");
    }
};

export default LogOut;