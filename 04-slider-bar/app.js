const toggleBtn = document.querySelector(".toggleBtn");

const slidebar = document.querySelector(".slidebar");

const slideClose = document.querySelector(".slideClose");

toggleBtn.addEventListener("click", ()=>{
    slidebar.classList.toggle("show-sidebar")
})

slideClose.addEventListener("click", ()=>{
    slidebar.classList.remove("show-sidebar")
})

