function CrearEmpresa() {
    let EmpresaNombre = document.getElementById("EmpresaNombre");
    let EmpresaPeriodo = document.getElementById("EmpresaPeriodo");
    let EmpresaEstado = document.getElementById("estado");

    let nombre = EmpresaNombre.value;
    let periodo = EmpresaPeriodo.value;
    let estado = EmpresaEstado.value;
   

    let endpoint = "/controller/CrearEmpresa";
    if (nombre && periodo && estado) {
    axios.post(endpoint, {
        'nombre': nombre,
        'periodo': periodo,
        'estado':estado
     

   
    })
    .then(function (response) {
        console.log(response);
        window.location.reload();
    })
    .catch(function (error) {
        console.error('Error creating product:', error);
    });
}
}
document.querySelectorAll('.btnEliminar').forEach(item => {
    item.addEventListener('click', event => {
        const id = event.target.dataset.id; 
       
    });
});




document.querySelectorAll('.btnEditar').forEach(item => {
    item.addEventListener('click', event => {
        const button = event.currentTarget;
        const id = button.dataset.id;
        const nombre = button.dataset.nombre;
        const estado = button.dataset.estado;
        const periodo = button.dataset.periodo;

        console.log("ID:", id);
        console.log("Producto:", nombre);
        console.log("Stock:", estado);
        console.log("Precio:", periodo);

        mostrarFormularioEditar(id, nombre, estado, periodo);
    });
});



function mostrarFormularioEditar( id,nombre, estado, periodo) {
    document.getElementById('floatingFormEditar').style.display = 'block';
    document.getElementById('EmpresaNombreEditar').value = nombre;
    document.getElementById('EmpresaPeriodoEditar').value = periodo;
    document.getElementById('estadoEditar').value = estado;

    // Guardar el id del producto que se está editando
    document.getElementById('floatingFormEditar').dataset.productId = id;
}

function cerrarFormularioEditar() {
    document.getElementById('floatingFormEditar').style.display = 'none';
}


function EditarEmpresa() {
    const id = document.getElementById('floatingFormEditar').dataset.productId;
    const nombre = document.getElementById('EmpresaNombreEditar').value;
    const periodo = document.getElementById('EmpresaPeriodoEditar').value;
    const estado = document.getElementById('estadoEditar').value;
    
    let endpoint = "/controller/EditarEmpresa";
    
    axios.post(endpoint, {
        'id': id,
        'nombre': nombre,
        'periodo': periodo,
        'estado': estado
    })
    .then(function (response) {
        console.log("EDITADO: " + nombre);
        window.location.reload();
    })
    .catch(function (error) {
        console.error('Error EDITAR product:', error);
    });
}


document.querySelectorAll('.btnEliminarEmpresa').forEach(item => {
    item.addEventListener('click', event => {
        const id = event.target.dataset.id; 
        EliminarEmpresa(id); 
    });
});


function EliminarEmpresa(id) {
    let idDelete = id;
    let endpoint = "/controller/EliminarEmpresa";
    
    axios.post(endpoint, {
        'id': idDelete,
    
    })
    .then(function (response) {
        console.log(idDelete);
        console.log(response);
     
    })
    .catch(function (error) {
        console.error('Error creating product:', error);
    });
}