const d=document,
    $menu=d.querySelector(".panel-menu"),
    $btnOpen=d.querySelector(".menu-v .v"),
    $btnClose=d.querySelector(".close-menu .v");



    d.addEventListener("click", e=>{


        if(e.target===$btnOpen){
$menu.classList.remove("invisible")

        }


        if(e.target===$btnClose){
            $menu.classList.add("invisible")
        }
    })