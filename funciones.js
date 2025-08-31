function sendForm() {
    const email = document.getElementById('email');
    const telefono = document.getElementById('tel');
    const descripcion = document.getElementById('descripcion');

    if (email.value.trim() === '') {
        alert("Correo no ingresado")
        return
    }

    if (telefono.value.trim() === '') {
        alert("Telefono no ingresado")
        return
    }
    if (descripcion.value === '') {
        alert("Descripción no ingresada")
        return
    }
   
    return alert("Se ha enviado el formulario correctamente");
}