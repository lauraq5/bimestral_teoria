// Validación de formulario de contacto
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario

    // Validar campos (ejemplo básico)
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor completa todos los campos');
    } else {
        // Aquí podrías enviar el formulario o realizar alguna acción adicional
        alert('Formulario enviado correctamente');
        form.reset();
    }
});

