let number = 0;
let counter = document.querySelector(".counter");
counter.innerText = `${number}`;

let inc = document.querySelector(".increment");
let dec = document.querySelector(".decrement");

let res = document.querySelector(".reset")

// -- Incremnet Button --
inc.addEventListener("click", function(){
  number++;
  counter.innerText = `${number}`;
  
  // -- Limit --
  if(number>=100){
    number = 100;
    counter.innerText = `${number}`;
    alert("Number limit acceeded.")
  }
});

// -- Decremnet Button --
dec.addEventListener("click", function(){
  number--;
  counter.innerText = `${number}`;
  if(number<0){
    number=0;
    counter.innerText = `${number}`;
  }
  
});

// -- Reset --
res.addEventListener("click", function(){
  number = 0;
  counter.innerText = `${number}`;
});

