import NavDashboad from "./components/nav";

const Dashboad = {
    print(){
        return /* html */ `
        <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
            ${NavDashboad.print()}
            <div class="relative md:ml-64 bg-blueGray-50">
                <nav
                class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4"
                >
                <div
                    class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4"
                >
                    <a
                    class="text-white text-sm uppercase hidden lg:inline-block font-semibold"
                    href="./index.html"
                    >Dashboard</a
                    >
                    <form
                    class="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"
                    >
                    <div class="relative flex w-full flex-wrap items-stretch">
                        <span
                        class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                        ><i class="fas fa-search"></i
                        ></span>
                        <input
                        type="text"
                        placeholder="Search here..."
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                        />
                    </div>
                    </form>
                    <ul
                    class="flex-col md:flex-row list-none items-center hidden md:flex"
                    >
                    <a
                        class="text-blueGray-500 block"
                        href="#pablo"
                        onclick="openDropdown(event,'user-dropdown')"
                    >
                        <div class="items-center flex">
                        <span
                            class="w-12 h-12 text-sm text-white bg-[#fff] inline-flex items-center justify-center rounded-full"
                            ><img
                            alt="..."
                            class="w-full rounded-full align-middle border-none shadow-lg"
                            src="https://ap.poly.edu.vn/images/logo.png"
                        /></span>
                        </div>
                    </a>
                    <div
                        class="hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
                        id="user-dropdown"
                    >
                        <a
                        href="#pablo"
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >Action</a
                        ><a
                        href="#pablo"
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >Another action</a
                        ><a
                        href="#pablo"
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >Something else here</a
                        >
                        <div
                        class="h-0 my-2 border border-solid border-blueGray-100"
                        ></div>
                        <a
                        href="#pablo"
                        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
                        >Seprated link</a
                        >
                    </div>
                    </ul>
                </div>
                </nav>
                <!-- Header -->
                <div class="relative bg-pink-600 md:pt-32 pb-32 pt-12">
                <div class="px-4 md:px-10 mx-auto w-full">
                    <div>
                    <!-- Card stats -->
                    <div class="flex flex-wrap">
                        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                        >
                            <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div
                                class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                >
                                <h5
                                    class="text-blueGray-400 uppercase font-bold text-xs"
                                >
                                    Traffic
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700">
                                    350,897
                                </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
                                >
                                    <i class="far fa-chart-bar"></i>
                                </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2">
                                <i class="fas fa-arrow-up"></i> 3.48%
                                </span>
                                <span class="whitespace-nowrap">
                                Since last month
                                </span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                        >
                            <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div
                                class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                >
                                <h5
                                    class="text-blueGray-400 uppercase font-bold text-xs"
                                >
                                    New users
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700">
                                    2,356
                                </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"
                                >
                                    <i class="fas fa-chart-pie"></i>
                                </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-red-500 mr-2">
                                <i class="fas fa-arrow-down"></i> 3.48%
                                </span>
                                <span class="whitespace-nowrap"> Since last week </span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                        >
                            <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div
                                class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                >
                                <h5
                                    class="text-blueGray-400 uppercase font-bold text-xs"
                                >
                                    Sales
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700">
                                    924
                                </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"
                                >
                                    <i class="fas fa-users"></i>
                                </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-orange-500 mr-2">
                                <i class="fas fa-arrow-down"></i> 1.10%
                                </span>
                                <span class="whitespace-nowrap"> Since yesterday </span>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
                        >
                            <div class="flex-auto p-4">
                            <div class="flex flex-wrap">
                                <div
                                class="relative w-full pr-4 max-w-full flex-grow flex-1"
                                >
                                <h5
                                    class="text-blueGray-400 uppercase font-bold text-xs"
                                >
                                    Performance
                                </h5>
                                <span class="font-semibold text-xl text-blueGray-700">
                                    49,65%
                                </span>
                                </div>
                                <div class="relative w-auto pl-4 flex-initial">
                                <div
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"
                                >
                                    <i class="fas fa-percent"></i>
                                </div>
                                </div>
                            </div>
                            <p class="text-sm text-blueGray-400 mt-4">
                                <span class="text-emerald-500 mr-2">
                                <i class="fas fa-arrow-up"></i> 12%
                                </span>
                                <span class="whitespace-nowrap">
                                Since last month
                                </span>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </footer>
                </div>
            </div>
            </div>
        `;
    },
    after(){

        /* Make dynamic date appear */
        (function () {
            if (document.getElementById("get-current-year")) {
                document.getElementById(
                    "get-current-year"
                ).innerHTML = new Date().getFullYear();
            }
        })();
        /* Sidebar - Side navigation menu on mobile/responsive mode */
        function toggleNavbar(collapseID) {
            document.getElementById(collapseID).classList.toggle("hidden");
            document.getElementById(collapseID).classList.toggle("bg-white");
            document.getElementById(collapseID).classList.toggle("m-2");
            document.getElementById(collapseID).classList.toggle("py-3");
            document.getElementById(collapseID).classList.toggle("px-6");
        }
        /* Function for dropdowns */
        function openDropdown(event, dropdownID) {
            let element = event.target;
            while (element.nodeName !== "A") {
                element = element.parentNode;
            }
            Popper.createPopper(element, document.getElementById(dropdownID), {
                placement: "bottom-start",
            });
            document.getElementById(dropdownID).classList.toggle("hidden");
            document.getElementById(dropdownID).classList.toggle("block");
        }
  
        (function () {
            /* Chart initialisations */
            /* Line Chart */
            var config = {
                type: "line",
                data: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                    ],
                    datasets: [
                        {
                            label: new Date().getFullYear(),
                            backgroundColor: "#4c51bf",
                            borderColor: "#4c51bf",
                            data: [65, 78, 66, 44, 56, 67, 75],
                            fill: false,
                        },
                        {
                            label: new Date().getFullYear() - 1,
                            fill: false,
                            backgroundColor: "#fff",
                            borderColor: "#fff",
                            data: [40, 68, 86, 74, 56, 60, 87],
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Sales Charts",
                        fontColor: "white",
                    },
                    legend: {
                        labels: {
                            fontColor: "white",
                        },
                        align: "end",
                        position: "bottom",
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true,
                    },
                    scales: {
                        xAxes: [
                            {
                                ticks: {
                                    fontColor: "rgba(255,255,255,.7)",
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: "Month",
                                    fontColor: "white",
                                },
                                gridLines: {
                                    display: false,
                                    borderDash: [2],
                                    borderDashOffset: [2],
                                    color: "rgba(33, 37, 41, 0.3)",
                                    zeroLineColor: "rgba(0, 0, 0, 0)",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                        yAxes: [
                            {
                                ticks: {
                                    fontColor: "rgba(255,255,255,.7)",
                                },
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: "Value",
                                    fontColor: "white",
                                },
                                gridLines: {
                                    borderDash: [3],
                                    borderDashOffset: [3],
                                    drawBorder: false,
                                    color: "rgba(255, 255, 255, 0.15)",
                                    zeroLineColor: "rgba(33, 37, 41, 0)",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                    },
                },
            };
            var ctx = document.getElementById("line-chart").getContext("2d");
            window.myLine = new Chart(ctx, config);
  
            /* Bar Chart */
            config = {
                type: "bar",
                data: {
                    labels: [
                        "January",
                        "February",
                        "March",
                        "April",
                        "May",
                        "June",
                        "July",
                    ],
                    datasets: [
                        {
                            label: new Date().getFullYear(),
                            backgroundColor: "#ed64a6",
                            borderColor: "#ed64a6",
                            data: [30, 78, 56, 34, 100, 45, 13],
                            fill: false,
                            barThickness: 8,
                        },
                        {
                            label: new Date().getFullYear() - 1,
                            fill: false,
                            backgroundColor: "#4c51bf",
                            borderColor: "#4c51bf",
                            data: [27, 68, 86, 74, 10, 4, 87],
                            barThickness: 8,
                        },
                    ],
                },
                options: {
                    maintainAspectRatio: false,
                    responsive: true,
                    title: {
                        display: false,
                        text: "Orders Chart",
                    },
                    tooltips: {
                        mode: "index",
                        intersect: false,
                    },
                    hover: {
                        mode: "nearest",
                        intersect: true,
                    },
                    legend: {
                        labels: {
                            fontColor: "rgba(0,0,0,.4)",
                        },
                        align: "end",
                        position: "bottom",
                    },
                    scales: {
                        xAxes: [
                            {
                                display: false,
                                scaleLabel: {
                                    display: true,
                                    labelString: "Month",
                                },
                                gridLines: {
                                    borderDash: [2],
                                    borderDashOffset: [2],
                                    color: "rgba(33, 37, 41, 0.3)",
                                    zeroLineColor: "rgba(33, 37, 41, 0.3)",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                        yAxes: [
                            {
                                display: true,
                                scaleLabel: {
                                    display: false,
                                    labelString: "Value",
                                },
                                gridLines: {
                                    borderDash: [2],
                                    drawBorder: false,
                                    borderDashOffset: [2],
                                    color: "rgba(33, 37, 41, 0.2)",
                                    zeroLineColor: "rgba(33, 37, 41, 0.15)",
                                    zeroLineBorderDash: [2],
                                    zeroLineBorderDashOffset: [2],
                                },
                            },
                        ],
                    },
                },
            };
            ctx = document.getElementById("bar-chart").getContext("2d");
            window.myBar = new Chart(ctx, config);
        })();
    }
};

export default Dashboad;