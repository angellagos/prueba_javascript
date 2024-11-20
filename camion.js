function comprobarPaquetes(listadoPaquetes, tamanioCamion){
    var espacioMinimoSeguridad = 30;
    var espacioDisponible;
    espacioDisponible = tamanioCamion - espacioMinimoSeguridad;

    if (espacioDisponible <= 0){
        return "El camion no cuenta con el espacio suficiente";
    }

    var mejoresPaquetes;
    var mayorPaquete = -1;

    for (var i = 0; i < listadoPaquetes.length; i++){
        for (var j = i + 1; j < listadoPaquetes.length; j++) {
            var sumaPaquetes = listadoPaquetes[i] + listadoPaquetes[j];
            if (sumaPaquetes == espacioDisponible){
                var paqueteGrande = Math.max(listadoPaquetes[i], listadoPaquetes[j]);
                if (paqueteGrande > mayorPaquete){
                    mejoresPaquetes = [listadoPaquetes[i], listadoPaquetes[j]];
                    mayorPaquete = paqueteGrande;
                }
            }
        }
    }

    if (mejoresPaquetes) {
        return `Los mejores paquetes son ${mejoresPaquetes[0]} y ${mejoresPaquetes[1]}`;
    }

    return "Ninguno de los paquetes cumple con las codiciones";
}

function calcularTamanioPaquetes(){
    var tamanioCamion = parseInt(document.getElementById("tamanioCamion").value);
    var listadoPaquetesStr = document.getElementById("listadoPaquetes").value;

    if (isNaN(tamanioCamion) || !listadoPaquetesStr) {
        document.getElementById("resultado").innerText = "Por favor, ingresa datos válidos.";
        return;
    }

    const listadoPaquetes = listadoPaquetesStr.split(",").map(Number);

    if (listadoPaquetes.some(isNaN)) {
        document.getElementById("resultado").innerText = "El listado de paquetes debe contener solo números separados por comas.";
        return;
    }
    const resultado = comprobarPaquetes(listadoPaquetes, tamanioCamion);
    document.getElementById("resultado").innerText = resultado;
}

//var tamanioCamion = 90;

//var listadoPaquetes = [10 ,60 , 40, 35, 20];
//var respuesta = comprobarPaquetes(listadoPaquetes, tamanioCamion);
//console.log(respuesta);