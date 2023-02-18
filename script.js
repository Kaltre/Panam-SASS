const nameForm = document.getElementById('name-form');
const greeting = document.getElementById('greeting');
const resetButton = document.getElementById('reset-button');

// obtener el nombre del usuario desde el local storage
const savedName = localStorage.getItem('name');

if (savedName) {
	// si el nombre ya fue guardado, mostrar un saludo personalizado
	greeting.textContent = `Bienvenido nuevamente ${savedName}`;
} else {
	// si no hay un nombre guardado, mostrar el formulario para que el usuario ingrese su nombre
	nameForm.addEventListener('submit', function(e) {
		e.preventDefault();
		const name = document.getElementById('name').value;
		// guardar el nombre del usuario en el local storage
		localStorage.setItem('name', name);
		// mostrar un saludo personalizado
		greeting.textContent = `¡Bienvenido ${name}!`;
	});
}

// añadir un listener al botón para borrar los datos del local storage
resetButton.addEventListener('click', function() {
	localStorage.removeItem('name');
	location.reload();
});
