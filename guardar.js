
function validacion() {
    let selectregion = document.getElementById("region").value;
    let selectcomuna = document.getElementById("comuna").value;
    let selectsector = document.getElementById("sector").value;
    let selectnombre = document.getElementById("nombre").value;
    let selectemail = document.getElementById("email").value;
    let selectcelular= document.getElementById("celular").value;
    let selectdiahora = document.getElementById("dia-hora-avistamiento").value;
    let selecttipo = document.getElementById("tipo-avistamiento").value;
    let selectestado = document.getElementById("estado-avistamiento").value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexnum = /^\d+$/
    if (selectregion === "mal") {
        // Si no se cumple la condicion...
        alert('[ERROR] Debe seleccionar una región');
        return false;
    } else if (selectcomuna === "mal") {
        // Si no se cumple la condicion...
        alert('[ERROR] Debe seleccionar una comuna');
        return false;
    } else if (selectsector.length > 100) {
        // Si no se cumple la condicion...
        alert('[error uwu] El texto en Sector debe ser menor a 100 caracteres');
        return false;
    } else if (selectnombre.length > 200) {
        // Si no se cumple la condicion...
        alert('[error uwu] El texto en Nombre debe ser menor a 200 caracteres');
        return false;
    } else if (selectnombre.length === 0) {
        // Si no se cumple la condicion...
        alert('[error uwu] Debe incluir un nombre');
        return false;
    } else if (!regex.test(String(selectemail).toLowerCase())) {  //Esto hace que sea obligatorio
        alert('[error uwu] Correo no válido');
        return false;
    }

}


function placeOrder(miformulario) {
 //   let REFseguro = document.getElementById("siseguro");
  //  REFseguro.onclick = miformulario.submit();
    miformulario.submit();
}

<a href="Informado.html">Ver Listado de Avistamientos</a>

$('#miformulario').submit(function() {
    document.getElementById("formulario").submit();<a href="Informado.html"> Sipi</a>
    return true; // return false to cancel form action
});

document.getElementById("formulario").submit();

$('#miformulario').submit(function() {
    document.getElementById("modalsi").onclick();<a href="Informado.html"> Sipi</a>
    return true; // return false to cancel form action
});



function validacion() {
    let selectregion = document.getElementById("region").value;
    let selectcomuna = document.getElementById("comuna").value;
    let selectsector = document.getElementById("sector").value;
    let selectnombre = document.getElementById("nombre").value;
    let selectemail = document.getElementById("email").value;
    let selectcelular= document.getElementById("celular").value;
    let selectdiahora = document.getElementById("dia-hora-avistamiento").value;
    let selecttipo = document.getElementById("tipo-avistamiento").value;
    let selectestado = document.getElementById("estado-avistamiento").value;
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexnum = /^\d+$/
    if (selectregion === "mal") {
        // Si no se cumple la condicion...
        alert('[ERROR] Debe seleccionar una región');
        return false;
    } else if (selectcomuna === "mal") {
        // Si no se cumple la condicion...
        alert('[ERROR] Debe seleccionar una comuna');
        return false;
    } else if (selectsector.length > 100) {
        // Si no se cumple la condicion...
        alert('[error uwu] El texto en Sector debe ser menor a 100 caracteres');
        return false;
    } else if (selectnombre.length > 200) {
        // Si no se cumple la condicion...
        alert('[error uwu] El texto en Nombre debe ser menor a 200 caracteres');
        return false;
    } else if (selectnombre.length === 0) {
        // Si no se cumple la condicion...
        alert('[error uwu] Debe incluir un nombre');
        return false;
    } else if (!regex.test(String(selectemail).toLowerCase())) {  //Esto hace que sea obligatorio
        alert('[error uwu] Correo no válido');
        return false;
    }

}