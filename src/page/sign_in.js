import { signin } from "../api/user";

const SignIn = {
    print() {
        return /* html */ `
        <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-12 w-auto" src="https://upload.wikimedia.org/wikipedia/commons/2/20/FPT_Polytechnic.png" alt="Workflow">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Đăng nhập
            </h2>
          </div>
          <form class="mt-8 space-y-6" action="" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email </label>
                <input id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email ">
              </div>
              <div>
                <label for="password" class="sr-only">Mật khẩu</label>
                <input id="password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Mật khẩu">
              </div>
                <div>
                <label for="password" class="sr-only">Mật khẩu</label>
                <input id="re-password" name="password" type="password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Xác nhận mật khẩu">
              </div>
            </div>
            <p id="err"></p>
      
            <div class="flex items-center justify-between">
              <div class="flex items-center">
              
              </div>
      
              <div class="text-sm">
                <a href="" class="font-medium text-indigo-600 hover:text-indigo-500">
                  Quên mật khẩu?
                    <a href="/signin" class="font-medium text-indigo-600 hover:text-indigo-500">
                        /Đăng nhập
                    </a>
                </a>
              </div>
            </div>
      
            <div>
              <button type="submit" class="btn-submit group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <!-- Heroicon name: solid/lock-closed -->
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
            `;
    },
    after(){
        const btn = document.querySelector(".btn-submit");
        btn.addEventListener("click", async ()=>{
            try {
                const { data } = await signin({
                    email: document.querySelector("#email-address").value,
                    password: document.querySelector("#password").value,
                });
                localStorage.setItem("user", JSON.stringify(data.user));
                if (data.user.id == 2) {
                    document.location.href = "/#/admin";
                }
                else{
                    document.location.href = "/#/";
                }
            } catch (error) {
                console.log(error.response.data);
                document.querySelector("#err").innerHTML = error.response.data;
                document.querySelector("#err").style.color = "red";
            }
        });
    }
};
  
export default SignIn;
  