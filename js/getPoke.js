// URL de la API
const API = "https://rickandmortyapi.com/api/character";

// Obtener resultado de API
const getData = (api) => {
	return fetch(api) //funciona como una promesa
	.then((response) => response.json()) //Conversión a formato Json
	.then((json) =>{
		llenarDatos(json), paginacion(json.info);
	})
	.catch((error) =>
	{
		console.log("Error:", error)
	});
};

const llenarDatos = (data) =>{
	let html = "";
	data.results.forEach((pj) => {
		html += '<div class="col">';
		html += '<div class="card" style="width: 10rem;">';
		html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
		html += '<div class="card-body">';
		html += `<h5 class="card-title">${pj.name}</h5>`;
		html += `<p class="card-text">${pj.species}</p>`;
		html += '</div>';
		html += '</div>';
		html += '</div>';
	});
	document.getElementById("datosPersonajes").innerHTML = html;
}
// Ejecutar getData

getData(API);

// Paginación
const paginacion = (info) => {

	let html = "";
	html += `<li class="page-item"><a class="page-link" onclick="getData('${info.prev}')" >Previous</a></li>`;
	html += `<li class="page-item"><a class="page-link" onclick="getData('${info.next}')">Next</a></li>`;
	document.getElementById("paginacion").innerHTML = html;
}
