let progressbar = document.querySelector(".progress-bar");
let percentage = document.querySelector(".percentage")
count = 0;

setInterval(function(){
  if(count < 99){
    count++;
    progressbar.style.width = `${count}%`;
    percentage.textContent = `${count}%`;
  }
},3000)