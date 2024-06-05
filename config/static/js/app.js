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





function Login(){
    let UserId = document.getElementById("UserId");
    let PassId = document.getElementById("PassId");
     
    let User = UserId.value;
    let Pass = PassId.value;
    let endpoint = "/controller/validarUser";
    
    axios.post(endpoint, {
        'user': User,
        'password': Pass
    })
    .then(function (response) {
        let role = response.data.rol;
        
        if (role === "ADMIN") {
            window.location.href = "/PanelAdmin";
            alert(response.data.message)
        } else if (role === "EMPRESA") {
            window.location.href = "/PanelEmpresa";
            alert(response.data.message)
        } else if (role === "VENDEDOR") {
            window.location.href = "/PanelVendedor";
            alert(response.data.message)
        } else {
            alert(response.data.message)
            window.location.reload();
            console.error('Rol desconocido:', role);
        }
    })
    .catch(function (error) {
        alert(response.data.message)
        console.error('Error validating user:', error);
    });
}


