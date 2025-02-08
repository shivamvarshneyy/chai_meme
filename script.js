document.addEventListener("DOMContentLoaded", () => {
    const chai = document.querySelector(".chai");
    const hover = document.querySelector(".hover-tea");

    console.log(chai);
    console.log(hover);

    const sound = new Audio("./chai_garam.mp3");
    const hover_sound = new Audio("./garam_hain_garam_hain.mp3");

    chai.addEventListener("mouseenter",()=>{
        sound.currentTime = 0;
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
        sound.currentTime = 0;
        sound.play();
        sound.loop = true;
    });

});