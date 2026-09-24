let obj ={
 name : "Prakash Shukla",
 age : 28
}

let abcd = function(a,b, c){
    console.log(this, a, b ,c);
}

abcd.call(obj, 1 ,2, 3);