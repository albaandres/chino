alert("Bienvenido a la traducción al chino")
//carga el script después de cargarse el HTML
window.onload = function () {
    var inputLetras = document.getElementById("letras");
    //función que recoge si has pulsado una letra en el INPUT
    inputLetras.addEventListener("keydown", function conversor() {

        var cadena = document.getElementById("letras").value;
        var posicion = cadena.length - 1;
        //evitar caracteres antes de la primera letra
        if (posicion < 0) {
            cadena = "";
        } else {
            var codigoUnicode = cadena.charCodeAt(posicion);
            var chino = unescape("%u" + codigoUnicode + "e8");
            cadena = cadena.substring(0, cadena.length - 1);
            cadena = cadena + chino;
            document.getElementById("letras").value = cadena;
        }
    }
        , false
    );
}




