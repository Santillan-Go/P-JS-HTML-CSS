const d=document;


const $add=d.querySelector(".add"),
     $template=d.querySelector(".cardTemplate").content,
     $cardConteiner=d.querySelector(".cards"),
     $form=d.querySelector(".addTask"),
     $fragment=d.createDocumentFragment(),
     $close=d.querySelector(".closePanel");



d.addEventListener("click",  e=>{



if(e.target===$add){
   d.querySelector(".panel").classList.add("open")
 
}

if(e.target===$close){
   d.querySelector(".panel").classList.remove("open")
   d.querySelector(".msg").classList.remove("active-msg")
   
 
}

if(e.target.matches(".delete")){
  
console.log(e.target.dataset.id)
const optons={
   method:"DELETE",
   headers:{
      'Content-Type':'aplication/json'
   }
}
   fetch(`http://localhost:5000/tasks/${e.target.dataset.id}`, optons);
}

if(e.target.matches(".edit")){
  

   d.querySelector(".panel").classList.add("open")
   console.log(e.target)
$form.title.value=e.target.dataset.title;
$form.id.value=e.target.dataset.id;
}
})


const gettask=  async()=>{

try{

  const res= await fetch("http://localhost:5000/tasks");

   const tasks=await res.json();
  
console.log(tasks)

   tasks.forEach(task => {
      
      $template.querySelector(".task").textContent=task.title;
      $template.querySelector(".edit").dataset.id=task.id;
      $template.querySelector(".edit").dataset.title=task.title;
      $template.querySelector(".delete").dataset.id=task.id;
      let clone=document.importNode($template, true);

      $fragment.appendChild(clone)
   });


   $cardConteiner.appendChild($fragment);
}

catch(err){
console.log(err)

}
 
   
}


d.addEventListener("submit", async e=>{

   if(e.target===$form){
 e.preventDefault()

 if(!e.target.id.value){
   if(e.target.title.value){
      d.querySelector(".msg").classList.remove("active-msg")

      const optons=
      {
     method:"POST",
      headers:{
         'Content-Type':'aplication/json'
      },
      body:JSON.stringify( {title: e.target.title.value })
      }
   
      fetch(`http://localhost:5000/tasks`,optons);
      location.reload()
   }else{

d.querySelector(".msg").classList.add("active-msg")
   }
   // CREATE
  
//   Learn new stuff
 }else{
//PUT UPDATE

const optons=
{
  method:"PUT",
  headers:{
   'Content-Type':'aplication/json'
  },
  body:JSON.stringify({ title:e.target.title.value})
}


fetch(`http://localhost:5000/tasks/${e.target.id.value}`,optons)
 }

   }
})

d.addEventListener("DOMContentLoaded", gettask)