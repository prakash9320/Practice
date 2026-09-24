let abcd = document.querySelector(".abcd");


window.addEventListener("mousemove",function(dets){
 abcd.style.top = dets.clientY + "Px";
 abcd.style.left = dets.clientX + "Px";
})
    