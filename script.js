if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready)
    } else {
        ready();
    }


function ready(){

    //navbar navigation
    let $items = document.querySelectorAll('.list');
    $items.forEach(($item) =>{

        $item.addEventListener("click", () => {
   
            document.querySelector(".active").classList.remove("active");
            $item.classList.add("active");
        });
    });

}

