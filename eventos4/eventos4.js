
document.addEventListener("drag", function(evt){
    
    if (((evt.clientX) && (evt.clientY))=="0"){
        let papeleraVacia=document.getElementById("papeleraVacia")
        papeleraVacia.parentNode.removeChild(papeleraVacia);

        let bola =document.getElementById("bola")
        bola.parentNode.removeChild(bola);

        let division=document.getElementById("div1")
        division.innerHTML+="<img src='papeleraLLena.jpg' />"
    }
}, false);

