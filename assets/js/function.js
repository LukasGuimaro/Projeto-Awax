window.onload = function() {
    document.querySelector(".bot-menu").addEventListener("click", function(){
        if(document.querySelector("nav").style.display == "flex") {
            document.querySelector("nav").style.display = "none";
        } else {
            document.querySelector("nav").style.display = "flex";
        }
    });
}