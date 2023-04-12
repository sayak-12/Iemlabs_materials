const pre = document.querySelector(".preloader");
const preimg = document.querySelector(".preloader img");
window.onload = ()=>{
    setTimeout(()=>{
    preimg.classList.add("big");

    }, 2000);
    setTimeout(()=>{
    pre.classList.add("invisible");

    }, 2500);
}

const fr = document.getElementById("formelem");
fr.addEventListener("submit", (e)=>{
    console.log(e);
    e.preventDefault()
})