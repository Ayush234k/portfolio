$(window).scroll(function(){
    $(".middle").css("opacity", 1 - $(window).scrollTop()/250);
});

document.querySelector('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behaviour : "smooth"
        });
    });
});