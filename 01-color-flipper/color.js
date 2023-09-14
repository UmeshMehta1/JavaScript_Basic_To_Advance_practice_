const rColor = ["green","blue", "black","gray"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", ()=>{
    // let randomColor= Math.floor(Math.random()*rColor.length);
 

     color.textContent= rColor[randomColor()];
    document.body.style.backgroundColor= rColor[randomColor()]
})

const randomColor=()=>{
    return Math.floor(Math.random()*rColor.length);

}

