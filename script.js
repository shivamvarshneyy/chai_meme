document.addEventListener("DOMContentLoaded", () => {
    const sound = new Audio("./chai_garam.mp3");
    sound.play();
    const chai = document.querySelector(".chai");
    const hover = document.querySelector(".hover-tea");

    const hover_sound = new Audio("./garam_hain_garam_hain.mp3");

    chai.addEventListener("mouseenter",()=>{
        sound.pause;
        sound.play();
        sound.loop = true;
    });

    hover.addEventListener("mouseenter",()=>{
        sound.pause();
        hover_sound.currentTime = 0;
        hover_sound.play();
        hover_sound.loop = true;
    });

    hover.addEventListener("mouseleave",()=>{
        hover_sound.pause();
    });

});