var btnaj = document.getElementsByClassName("btn-plus");
var qn = document.getElementsByClassName("qte");
var pric = document.getElementsByClassName('price');



for(let i=0; i<btnaj.length; i++){
    btnaj[i].addEventListener("click",function(){
        btnaj[i].previousElementSibling.innerHTML++;
        somme();
    })
}


function somme() {
  var qn = document.getElementsByClassName("qte");
  var pric = document.getElementsByClassName('price');
  let so = document.getElementById("tot");
    let sum = 0;
    for (let i = 0; i < pric.length; i++) {
      sum += pric[i].innerHTML * qn[i].innerHTML;
    }
    so.innerHTML=sum;

  }



  let btnm = document.getElementsByClassName('btn-minus');
 
  for(let i=0;i<btnm.length;i++){
    btnm[i].addEventListener("click",function(){
      if(btnm[i].nextElementSibling.innerHTML >0){
      btnm[i].nextElementSibling.innerHTML--;}
        somme();
    })
  }
  

  let x = document.getElementsByClassName("fa-times");
  let prod = document.getElementsByClassName("card");
  for(let i=0;i<x.length;i++){
  x[i].addEventListener("click", function () {
    prod[i].remove();
    somme();
  })
}

let hearts = document.getElementsByClassName("fa-heart");
console.log(hearts);
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    if(heart.style.color==="red"){
        heart.style.color="gray"
    }
    else heart.style.color="red"
    
  });
}
