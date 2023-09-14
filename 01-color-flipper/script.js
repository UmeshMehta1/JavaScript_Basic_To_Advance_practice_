const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const btn = document.getElementById("btn")
const color= document.querySelector(".color");

btn.addEventListener("click",()=>{
    // let r = Math.floor(Math.random()*hex.length);  //Random number between zero and the length of array -1 (to

    let hexColor="#";
    for(i=0;i<6;i++){
        hexColor += hex[generateRandomNum()];
    }
    console.log(hexColor)
    color.textContent=hexColor;
    document.body.style.backgroundColor=hexColor;

})

const generateRandomNum =()=>{
    return Math.floor((Math.random()*hex.length));
}