const bodyClass = "bg-purple-800 bg-gradient-to-br from-blue-300 bg-opacity-25";
const bdy = document.querySelector("body");
bodyClass.split(" ").forEach((cls) => bdy.classList.add(cls));

const calcBodyStyle = 
    "max-w-lg rounded overflow-hidden shadow-2xl bg-purple-800 bg-opacity-75 bg-gradient-to-tr from-gray-800 flex";
const calcBody = document.querySelector(".calculator");
calcBodyStyle.split(" ").forEach((cls) => calcBody.classList.add(cls));

const displayClass = "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 font-semibold px-2 border border-black hover:border-gray-500 rounded";
const display = document.querySelector(".display");
displayClass.split(" ").forEach((cls) => display.classList.add(cls));