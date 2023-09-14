var count=0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        styles = e.currentTarget.classList;

        if(styles.contains("increase")){
            count++;
        }else if(styles.contains("decrease")){
            count--;
        }else{
            count = 0
        }

        value.textContent= count;
    })
})

