let email = document.querySelector(".email");
let password = document.querySelector(".password");
let form = document.querySelector(".loginForm");
let passworderror =  document.querySelector(".PasswordError");
 let emailerror = document.querySelector(".EmailError");

form.addEventListener("submit",function(dets){
    dets.preventDefault();


    const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let isvalid = true;
 
  let emailans = EmailRegex.test(email.value);
  let passwordans = PassRegex.test(password.value);
  


  if(!emailans){
   emailerror.textContent = "Email Is Incorect";
   isvalid = false;
  }

    if(!passwordans){
    passworderror.textContent = "Password Is Incorect";
    isvalid = false;
  }

  if(isvalid){
    document.querySelector(".resultmess").textContent = "EveryThing Is Correct"
  }






})
