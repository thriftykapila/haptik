var slider = document.getElementById("myRange")
console.log("he")

slider.addEventListener("mousemove",function () {
    var x = slider.nodeValue;
    var color = 'linear-gradient(90deg,rgb(117,252,117)' + x + '%,rgb(214,214,214)'+x+'%)' 
    slider.style.background = color; 
})