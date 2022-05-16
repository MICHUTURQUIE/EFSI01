// function validar(){

   // input = document.getElementsByTagName("input");

   // for (let i= 0; i < input.length; i++) {
        
   //   if ((parseInt(input[i].value) < 0) && (parseInt(input[i].value) > 11)) {

    //    (parseInt(input[i].value) = true;

  //    }    
 //   }
//}

function promedio(){
    input = document.getElementsByTagName("input");
    var promedio;


    for (let i= 0; i < input.length; i++) {
        
        promedio = promedio + parseInt(input[i].value);
        
    }

    promedio / input.length;

    alert("El promedio de las 3 notas es" + promedio);
}

function notalta(){

    input = document.getElementsByTagName("input");
    var notalta;


    for (let i= 0; i < input.length; i++) {

        if (notalta < parseInt(input[i].value)){

            notalta = parseInt(input[i].value);

        }
        
    }

    alert("Tu nota mas alta es" + notalta);
}

