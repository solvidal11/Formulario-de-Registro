// Función para mostrar la alerta de éxito
function showAlertSuccess() {
    const successAlert = document.getElementById('alert-success');
    successAlert.classList.add('show');
    setTimeout(() => successAlert.classList.remove('show'), 4000); // Ocultar después de 4 segundos
}

// Función para mostrar la alerta de error
function showAlertError() {
 const errorAlert = document.getElementById("alert-danger");
 errorAlert.classList.add('show');
setTimeout(() => errorAlert.classList.remove('show'), 4000); // Ocultar después de 4 segundos
}

// Función para validar el formulario
function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    // Validar campos vacíos
    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return false;
    }

    // Validar longitud de la contraseña
    if (password1.length < 6) {
        showAlertError();
        return false;
    }

    // Validar coincidencia de contraseñas
    if (password1 !== password2) {
        showAlertError();
        return false;
    }

    // Validar aceptación de términos
    if (!terminos) {
        showAlertError();
        return false;
    }

    // Si todo es válido
    showAlertSuccess();
    return true;
}

// Añadir el event listener al botón de registro
document.getElementById('regBtn').addEventListener('click', validarFormulario);
