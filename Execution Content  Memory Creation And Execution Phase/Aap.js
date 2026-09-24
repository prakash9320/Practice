function CreateToster(config){
  return function(srt){
    let parent =  document.createElement("div");
     parent.classList.add("parent");
     let chil = document.createElement("div");
     chil.classList.add("child");
     let h1 = document.createElement("h1");
     h1.textContent = srt ;
     document.body.appendChild(parent)
      parent.appendChild(chil)
     chil.appendChild(h1);
     setTimeout(() => {
      document.body.removeChild(parent);
     }, 3000);

  }
}

let Toster = CreateToster({
   
})

Toster("Done !")