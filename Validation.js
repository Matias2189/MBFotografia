const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const detalle = document.querySelector("#detalle")
const detalleHelp = document.querySelector("#detalleHelp")

form.addEventListener("submit", (event) => {
	event.preventDefault()
	if (email.value === "" ||  detalle.value === "") {
		if (email.value === "") {
			emailHelp.innerText = "¡Por favor, completar esta información!"
		}
		if (detalle.value === "") {
			detalleHelp.innerText = "¡Por favor, completar esta información!"
		}
	}   else {
		form.submit ();
	}
})