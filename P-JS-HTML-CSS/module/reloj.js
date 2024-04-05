const d=document,
    $reloj=d.querySelector(".reloj");




function time(){
   const year=  new Date().getFullYear(),
         month=new Date().getMonth(),
         day=new Date().getDate()


       
setInterval(() => {
    $reloj.querySelector(".date").textContent=`${year}-${month+1}-${day}`;
    const TIME= new Date().toLocaleTimeString();
   $reloj.querySelector(".Time").textContent=TIME;
}, 1000);
   
}


    d.addEventListener("DOMContentLoaded",time)