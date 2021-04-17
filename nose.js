
m = 0;
function agregarFoto() {
    if (m < 4) {
        var h = document.getElementById("foto-avistamiento");
        h.insertAdjacentHTML("beforebegin", "<input type='file' id='foto-avistamiento'>");
        m++
    } else {
        ;
    }
}

function agregarAvistamiento() {
    var div = document.getElementById('repeat'),
        clone = div.cloneNode(true); // true means clone all childNodes and all event handlers
    clone.id = "addavistamiento" + 1;
    div.parentNode.appendChild(clone);
    //document.body.appendChild(clone);
}


var dicregiones = {
    "regiones": [{
        "region": "Arica y Parinacota",
        "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
        "region": "Tarapacá",
        "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
        "region": "Antofagasta",
        "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
        "region": "Atacama",
        "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
        "region": "Coquimbo",
        "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
        "region": "Valparaíso",
        "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
        "region": "Región del Libertador Gral. Bernardo O’Higgins",
        "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
        "region": "Región del Maule",
        "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
        "region": "Región de Ñuble",
        "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
        "region": "Región del Biobío",
        "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
        "region": "Región de la Araucanía",
        "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
        "region": "Región de Los Ríos",
        "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
        "region": "Región de Los Lagos",
        "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
        "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
        "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
        "region": "Región de Magallanes y de la Antártica Chilena",
        "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    },
    {
        "region": "Región Metropolitana de Santiago",
        "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        }]
    }


function crearRegion() {
	let REFregion = document.getElementById("region");
	REFregion.innerHTML="<option value='mal' disabled selected value> - Seleccione -</option>";
	for (let i=0; i<dicregiones.regiones.length; i++) {
		let opcion = "<option value= "+ i +">" +dicregiones.regiones[i].region + "</option>";
		REFregion.insertAdjacentHTML("beforeend", opcion);
	}
}

function crearComuna(numregion){
	let REFcomuna = document.getElementById("comuna");
    let comunas = dicregiones.regiones[numregion].comunas;
    REFcomuna.innerHTML="<option value='mal' disabled selected value> - Seleccione - </option>"; // Borra
    for(let i=0; i<comunas.length; i++){
        let html = "<option value="+i+">"+comunas[i]+"</option>";
        REFcomuna.insertAdjacentHTML("beforeend", html);
    }
}

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