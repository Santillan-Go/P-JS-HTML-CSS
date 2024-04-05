const d=document,
     $template=d.querySelector(".template-fig").content,
     $images=d.querySelector(".images"),
     $fragment=d.createDocumentFragment(),
     $search=d.querySelector(".search"),
     $full=d.querySelector(".full")



     const getImages= async ()=>{

const response=  await fetch("https://rickandmortyapi.com/api/character");
console.log(response)
const allData= await response.json()
console.log(allData)
const  personajes=allData.results;
console.log(personajes)


personajes.forEach(personaje => {
     $template.querySelector(".img").setAttribute("src", personaje.image)
     $template.querySelector(".open").dataset.src=personaje.image;
     $template.querySelector(".open").dataset.name=personaje.name;
     $template.querySelector(".card-image").dataset.name=personaje.name;
     let $clone=document.importNode($template, true);

     $fragment.appendChild($clone)
});

$images.appendChild($fragment);



const nodeimage=$images.querySelectorAll(".card-image");

filter(nodeimage)

     }





function filter(allimages){
       d.addEventListener("keyup", e=>{
          if(e.target==$search){
               console.log(e.target.value.toLowerCase())
          
               allimages.forEach(img=>{
                    if(img.dataset.name.toLowerCase().includes(e.target.value.toLowerCase())){
                       img.classList.remove("invisible")
                    }else{
                         img.classList.add("invisible")
                    }
               })
               allimages.forEach(i=>{
                    console.log(i.dataset.name)
               })
             
          }
     })
}
   

function openImages(){

     d.addEventListener("click",e=>{

          if(e.target.matches(".open")){
               d.querySelector(".full").classList.remove("desactive")
               d.querySelector(".close").classList.remove("desactive")
               d.querySelector(".name").textContent=e.target.dataset.name;
         $full.querySelector(".img").src=e.target.dataset.src;

          }

          if(e.target.matches(".close")){
               d.querySelector(".full").classList.add("desactive")
               e.target.classList.add("desactive")
               console.log("close")
          }
     })
}

openImages()


d.addEventListener("DOMContentLoaded", getImages)