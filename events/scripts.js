const red=document.querySelector(".red");
const cyan=document.querySelector(".cyan");
const violet=document.querySelector(".violet");
const orange=document.querySelector(".orange");
const pink=document.querySelector(".pink");

const centre=document.querySelector(".center")

const getColor=(ele) => {
    return window.getComputedStyle(ele).backgroundColor;
};

console.log(getColor(pink));