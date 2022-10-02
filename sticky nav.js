const navbarEL = document.querySelector(".navbar");
const topcontainerEl = document.querySelector(".top-container");
const bottomcontainerEl = document.querySelector(".bottom-container");
const textEl = document.querySelector(".text");

console.log(bottomcontainerEl.offsetTop);

window.addEventListener("scroll", ()=>{
    if(window.scrollY > bottomcontainerEl.offsetTop - 
        navbarEL.offsetHeight - 50
    ) {
        navbarEL.classList.add("active");
    }else{
        navbarEL.classList.remove('active');
    }

    //console.log(window.scrollY);
});

