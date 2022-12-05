const targetElement = document.getElementById("sticky");

function navFixd(){
    const clientRect = targetElement.getBoundingClientRect().top;
    if(clientRect < 1){
        targetElement.classList.add("show");
        title.classList.add("show");
    }
}

function removeFixd(){
    const clientBottom = targetElement.getBoundingClientRect().bottom;
    const pageTitle = document.getElementById("title");
    const titleTop = pageTitle.getBoundingClientRect().top;

    if(titleTop > clientBottom){
        targetElement.classList.remove("show");
        title.classList.remove("show");
    }

}

document.addEventListener("scroll",()=>{
    navFixd();
    removeFixd();
})