function showAlertSuccess() {
    const successAlert = document.getElementById('alert-success');
    successAlert.classList.add('show');
    setTimeout(() => successAlert.classList.remove('show'), 4000); // Ocultar después de 4 segundos
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}