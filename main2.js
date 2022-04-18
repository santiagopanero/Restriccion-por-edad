window.onload = function() {
	const boton = document.querySelector('.boton')
	const edad = document.querySelector('.texto')
	const cartel = document.querySelector('.cartel')
	const imagen = document.querySelector('.imagenBienvenida')

	// capturarClick devuelve la edad que ingreso
	function capturarClick() {
		const edadIngresada = edad.value

	// esto, al estar dentro de la misma función
	// se ejecuta luego de capturar el valor de la edad
		if (edadIngresada < 18) {
			
			// le 'cargo' el estilo de css a cartel y defino
			// lo que va a decir adentro innerHTML
			cartel.classList.add('cartelDenegado')
			cartel.innerHTML = 'eres menor de edad'
			imagen.classList.add('imagenNoPasas')
		}else {

			// si ingreso una edad < 18 y despues una + 18 el cartel
			// cambia el mensaje, pero se queda rojo. Remuevo la calse
			// anterior para que esto no pase 
			cartel.classList.remove('cartelDenegado')
			imagen.classList.remove('imagenNoPasas')
			
			cartel.classList.add('cartelAceptado')
			cartel.innerHTML = 'sos mayor, adelante genio'
			imagen.classList.add('imagenPasas')
		}
	} 

	boton.addEventListener('click', capturarClick)

	edad.addEventListener('keyup', function(event){
		if (event.key === 'Enter') {
			capturarClick()

		// el return sirve para que no se borre el número que escribí luego de presionar
		// Enter (debido a que Enter NO ES UN NÚMERO, la función de abajo lo borra en isNaN)
		return
		}

		// isNaN (is not a number) 
		// borra el value de edad siempre que se ingrese algo que NO SEA UN NÚMERO
		if (isNaN(event.key)) {
			edad.value = ''
		}
	})
}