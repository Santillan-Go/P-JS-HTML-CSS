const d=document;


function  calculator(){



    
const $input=d.querySelector(".result"), 
      $buttons=d.querySelectorAll("button");

     


      const calcular= ()=>{
        $input.value=eval($input.value)
      }
      d.addEventListener("click", e=>{

if(e.target===($buttons[0])){
    $input.value="";
}


$buttons.forEach((b)=>{

    if(["1","2","3","4","5","6","7","8","9","0", "/", "*", "+", "-"].includes((b.textContent))){
    
     if(e.target.textContent===b.textContent) $input.value+=b.textContent
        
    }
    
    })

///CALCULAR CUANDO SE SE DE CLICK A =
    if(e.target===$buttons[1]){
      calcular()
    }


    if(e.target.matches(".ac")){
     
     
    let value= $input.value;
    console.log(value)
  let arrayValue=value.split("");
  console.log(arrayValue)
    arrayValue.splice(arrayValue.length-1,1);
console.log(arrayValue)
$input.value=arrayValue.join("")
    // console.log(value)
    }


      })





}


calculator()