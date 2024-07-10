function ShowMenu() {
    const button= document.getElementById("menu");
    const header=document.getElementById("header-container");
    const hamburger= document.getElementById("hamburger");
    if(!button.classList.contains("active")){
        button.classList.add("active");
        button.classList.remove("non-active");
        hamburger.className="fas fa-times";
        header.style.background='#00000099';

    }
    else{
        button.classList.remove("active");
        button.classList.add("non-active")
        hamburger.className="fas fa-bars";
        header.style.background='none';
    }
}



