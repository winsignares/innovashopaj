document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnCrear").addEventListener("click", function() {
        var floatingForm = document.querySelector(".floating-form");
        if (floatingForm) {
            floatingForm.style.display = "block";
        } else {
            console.error("El elemento de formulario flotante no se encontró en el DOM.");
        }
    });
});

function cerrarFormulario() {
    var formulario = document.getElementById("floatingForm");
    formulario.style.display = "none";
}