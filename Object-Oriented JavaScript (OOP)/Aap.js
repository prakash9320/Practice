 // ye hai Factory basic Structure aap ka 
function pencil(tata, relience, adani, color) {
  this.tata = tata;
  this.relience = relience;
  this.adani = adani;
  this.color = color ;
  this.write = function(text){
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = color;
  document.body.append(h1);
  }
}

// our yaha per aap usko naye variable me add kar ke call kaar rahe hai har bar jab new pancil panega to data bhi 
//alag alag hoga  
let pencil1 = new pencil("Tata Motors", "Jio", "Port" , "Orange");
let pencil2 = new pencil("Tata Salt", "Jio Fiber", "Adani Construction " , "skyblue");

Class Example
 
class CreatePencil{
  constructor(Name , company , price , color){
    this.Name = Name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  write(text){
    let h1 = document.createElement("h1");
      h1.textContent = text;
      h1.style.color = this.color;
      document.body.appendChild(h1);
  }
}   
let p1 = new CreatePencil("Prakash Shukla", "Sky", 1232 , "skyblue");

let p2 = new CreatePencil("Prakash Shukla", "Sun", 125332 , "orange");