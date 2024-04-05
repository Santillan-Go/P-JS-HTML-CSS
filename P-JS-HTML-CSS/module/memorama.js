const d=document,
     $cards=d.querySelector(".conteiner-cards"),
     $template=d.querySelector(".template-cards").content,
     $fragment=d.createDocumentFragment(),
     btnRestore=d.querySelector(".restore"),
     $count=d.querySelector(".count");





btnRestore.addEventListener("click", restoreGame);


function restoreGame(){
    location.reload()
}

     const getcard= async ()=>{

try{
 const res= await fetch("https://rickandmortyapi.com/api/character");

        const  cards=await res.json();
         
          const justcards=await cards.results;
       const arraycards=[]
      justcards.forEach( (e,i)=> {
            if(i<=2){
                arraycards.push(e);
             
            }
        });

        console.log(arraycards)
        
     showMix(arraycards);
     

       


        
        throw res.ok?"":res.response;
        

}

catch(err){
console.log(err)
}
       
     }
function Mix(){

    return Math.random()-0.5;
}

function  showMix(array){
   
    const doble=[...array,...array];
    console.log(doble)
    const mixDoble= doble.sort(Mix)
    mixDoble.forEach((e,i)=>{
          $template.querySelector(".img").src=e.image;
     $template.querySelector(".img").classList.add("no-select");
    $template.querySelector(".card").dataset.name=e.name;
    $template.querySelector(".card").id=i;

    // name.replace(" ", "-")
    // $template.querySelector(".card").classList.add(name);
    let $clone=document.importNode($template,true);

    $fragment.appendChild($clone)
    })
  

    $cards.appendChild($fragment)
}

     

     d.addEventListener("DOMContentLoaded", getcard)
     let names=[],
        count=0;
        $count.textContent=count;

     //SELECCIONAR CARTAS MEDIANTE EL CLICK, ADD=> NO-SELECT=>OCULTAR IMG
     function select(){
        d.addEventListener("click", e=>{

            if(e.target.matches(".card")){
                console.log("hi")
                if(names.length<=1){
 e.target.querySelector(".img").classList.remove("no-select")
 same(e.target.dataset.name,e.target.id)
                }
                
                 
                 
            }
        })
     }

     select()

  //VALIDAR SI LAS IMAGENES SON LAS
     function same(value,id){

       if(names.length<=2){
        names.push({value,id})
        console.log(names)
        if(names.length===2){
         if(names[0].value===names[1].value){
          console.log("SAME")
          count+=1;
          $count.textContent=count;
         names=[]
         }else{
            console.log(d.getElementById(`${names[0].id}`).querySelector(".img"))
            console.log(d.getElementById(`${names[1].id}`).querySelector(".img"))
         console.log("Not same")
        //     // console.log(document.querySelector(`[data-name="${names[0]}"]`).querySelector(".img"))
        //     // console.log(document.querySelector(`[data-name="${names[1]}"]`).querySelector(".img"))
        //     // console.log(d.querySelector(`[data-names="${names[0]}"]`))
        //     // console.log(d.querySelector(`[data-names="${names[1]}"]`))
        

     setTimeout(() => {
                
        d.getElementById(`${names[0].id}`).querySelector(".img").classList.add("no-select")
        d.getElementById(`${names[1].id}`).querySelector(".img").classList.add("no-select")
        //             $cards.querySelector(`[data-name="${names[0].value}"]`).querySelector(".img").classList.add("no-select")
        //             $cards.querySelector(`[data-name="${names[1].value}"]`).querySelector(".img").classList.add("no-select")
              names=[];
             }, 1000);
        //        }
          
        //     // $cards.dataset.names[0].classList.add("no-select")
        //     // $cards.dataset.names[1].classList.add("no-select")

         }
       }
       
        console.log(names)
     }
    }