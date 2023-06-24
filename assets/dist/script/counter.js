



var plusManBig = document.getElementById("plus-man-big"),
minusManBig =document.getElementById("minus-man-big"),
plusManSmall = document.getElementById("plus-man-small"),
minusManSmall =document.getElementById("minus-man-small"),
plusWomanBig = document.getElementById("plus-woman-big"),
minusWomanBig =document.getElementById("minus-woman-big"),
plusWomanSmall = document.getElementById("plus-woman-small"),
minusWomanSmall =document.getElementById("minus-woman-small"),
counterManBig= document.getElementById("counter-man-big"),
counterManSmall =document.getElementById("counter-man-small"),
counterWomanBig =document.getElementById("counter-woman-big"),
counterWomanSmall =document.getElementById("counter-woman-small"),

  count = 0;


//   man
  plusManBig.onclick = function() {
  count += 1;
  counterManBig.innerHTML =  + count;
};
minusManBig.onclick = function() {
    count -= 1;
    counterManBig.innerHTML =  + count;
  };
  plusManSmall.onclick = function() {
    count += 1;
    counterManSmall.innerHTML =  + count;
  };
  minusManSmall.onclick = function() {
    count -= 1;
    counterManSmall.innerHTML =  + count;
  };
//   woman
plusWomanBig.onclick = function() {
    count += 1;
    counterWomanBig.innerHTML =  + count;
  };
  minusWomanBig.onclick = function() {
      count -= 1;
      counterWomanBig.innerHTML =  + count;
    };
    plusWomanSmall.onclick = function() {
      count += 1;
      counterWomanSmall.innerHTML =  + count;
    };
    minusWomanSmall.onclick = function() {
      count -= 1;
      counterWomanSmall.innerHTML =  + count;
    };


   

   