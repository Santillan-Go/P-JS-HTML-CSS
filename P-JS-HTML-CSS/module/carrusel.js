const d=document,
    $fatherImages=d.querySelector(".carrusel"),
    $btnBack=d.querySelector(".back"),
    $btnNext=d.querySelector(".next");
let i=0;

const nodeList=$fatherImages.querySelectorAll(".imgs");
    d.addEventListener("click",e=>{

        if(e.target===$btnBack){
            nodeList[i].classList.add("invisible")
           i--;
        

            if(i<0) i=nodeList.length-1;
        nodeList[i].classList.remove("invisible")
          
        }


        if(e.target===$btnNext){
            nodeList[i].classList.add("invisible")
           i++;
       

            if(i===nodeList.length) i=0;
        nodeList[i].classList.remove("invisible")
           
        }
    })