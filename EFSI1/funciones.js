function validarNumero(Nota, Materia) {

    if (Nota > 0 && Nota <= 10) {
        document.getElementById(Materia).style.color = "green";
        return true;
    } else {
        document.getElementById(Materia).style.color = "red";
        return false;
    }
}

function validarNumero2() {
    var Mate = validarNumero(document.getElementById('Mate').value, 'Mate')
    var Lengua = validarNumero(document.getElementById('Lengua').value, 'Lengua')
    var EFSI = validarNumero(document.getElementById('EFSI').value, 'EFSI')

    if (Mate && Lengua && EFSI) {

        return true;

    }

    else {

        return false;

    }
}

function promedio() {
    input = document.getElementsByTagName("input");
    var promedio = 0;

    if (validarNumero2()) {
        for (let i = 0; i < input.length; i++) {

            promedio = promedio + parseInt(input[i].value);
            
        }

        promedio = promedio / input.length;
        console.log(promedio, input.length);
        document.getElementById("resultado").innerHTML = promedio.toFixed(2);

        if (promedio >= 6) {

            document.getElementById("resultado").style.color = "green";

        }
        else {

            document.getElementById("resultado").style.color = "red";

        }

    } else {
        alert("Las notas no son validas.");
    }

}

function notalta() {

    var input = document.getElementsByTagName("input")
    var notalta = 0;
    var Materia;

    if (validarNumero2()) {

        for (let i = 0; i < input.length; i++) {

            if (notalta < parseInt(input[i].value)) {

                notalta = parseInt(input[i].value);
                Materia = input[i].name;
                console.log(input[i].name)
            } 
            
            else if (notalta == parseInt(input[i].value)) {
                Materia = `${Materia}  y  ${input[i].name}`;
            }
        }

        document.getElementById("notalta").innerHTML = Materia;
        document.getElementById("notalta").style.color = "blue";

    } 
    
    else {

        alert("Las notas no son validas. Cambienlas");

    }

}
