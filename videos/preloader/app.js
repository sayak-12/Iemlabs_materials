const preloader = document.querySelector(".preloader");
//as this page is very small and takes very small time to load, to actually show the page we'll use setTimeout
setTimeout(()=>{
    preloader.classList.add("loaded")
    console.log("loaded!");
},2000);