//ACCESO A TODO EL FORMULARIO
let formulario=document.forms["formulario"];
let elementos=formulario.elements;
/*
document.forms["formulario"].elements["email"]
*/
document.addEventListener("submit", function(evt){
    //console.log(evt.target)
    //let texto= elementos["idText"].value
    //console.log(texto)
    //Cortarlo
    evt.preventDefault();
    //TEXT AREA
    let texto1= elementos["idText"].value
    //console.log(texto1)

    //TEXTO
    let texto2= document.getElementById("texto").value
    //console.log(texto2)
    
    //EMAIL
    let email= document.getElementById("email").value
    console.log(email)

    //RADIO BUTON
    var radiobutons = document.getElementsByName("nameRadio");
    for (let i=0; i<radiobutons.length; i++){
        console.log(radiobutons[i].value)
        console.log(radiobutons[i].checked)
    }
    //CHECKBOX
    var checkbox1=elementos["idCheckbox1"].value
    console.log(checkbox1)
    var checkbox2=elementos["idCheckbox2"].value
    console.log(checkbox2)

    //SELECT
    var opciones=elementos["idSelect"];
    var idxSeleccionado=opciones.selectedIndex;

    var opcionSeleccionada = opciones.options[idxSeleccionado];
    
    //Info de opcion seleccionada
    var textoSeleccionado=opcionSeleccionada.text;
    console.log(textoSeleccionado)
    var valorSelected = opcionSeleccionada.value;
    console.log(valorSelected)

    //DATALIST NO FUNCIONA
    var inputLista = document.getElementById("listaDatos").value;			// Obtenemos la lista
	console.log(inputLista)
    
})

