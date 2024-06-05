function CrearProducto() {
    let nombre = document.getElementById("nombre");
    let stock = document.getElementById("stock");
    let precio = document.getElementById("precio");
    let categoria = document.getElementById("categoria");
    let nameEmpresa = document.getElementById("name_empresa").innerText;

    let NombreValor = nombre.value;
    let StockValor = stock.value;
    let PrecioValor = precio.value;
    let categoriaValor = categoria.value;

    if (NombreValor && StockValor && PrecioValor && categoriaValor )  {
    let endpoint = "/controller/CrearProducto";

    

            axios.post(endpoint, {
                'producto': NombreValor,
                'stock': StockValor,
                'precio': PrecioValor,
                'empresa': nameEmpresa,
                'categoria':categoriaValor
            })
            .then(function (response) {
                console.log("Producto creado para la empresa: " + nameEmpresa);
                console.log(response);
            // window.location.reload();
            })
            .catch(function (error) {
                console.error('Error creating product:', error);
            });
        }
}


document.querySelectorAll('.btnEliminar').forEach(item => {
    item.addEventListener('click', event => {
        const id = event.target.dataset.id; 
        EliminarProducto(id); 
    });
});



document.querySelectorAll('.btnEditar').forEach(item => {
    item.addEventListener('click', event => {
        const button = event.currentTarget;
        const id = button.dataset.id;
        const producto = button.dataset.producto;
        const stock = button.dataset.stock;
        const precio = button.dataset.precio;

        console.log("ID:", id);
        console.log("Producto:", producto);
        console.log("Stock:", stock);
        console.log("Precio:", precio);

        mostrarFormularioEditar(id, producto, stock, precio);
    });
});

function mostrarFormularioEditar(id, nombre, stock, precio) {
    document.getElementById('floatingFormEditar').style.display = 'block';
    document.getElementById('nombreEditar').value = nombre;
    document.getElementById('stockEditar').value = stock;
    document.getElementById('precioEditar').value = precio;

    // Guardar el id del producto que se está editando
    document.getElementById('floatingFormEditar').dataset.productId = id;
}

function cerrarFormularioEditar() {
    document.getElementById('floatingFormEditar').style.display = 'none';
}



function editarProducto() {
    const id = document.getElementById('floatingFormEditar').dataset.productId;
    const nombre = document.getElementById('nombreEditar').value;
    const stock = document.getElementById('stockEditar').value;
    const precio = document.getElementById('precioEditar').value;
    const imagen = document.getElementById('imagenEditar').value;

    let endpoint = "/controller/EditarProducto";
    
    axios.post(endpoint, {
        'id': id,
        'nombre': nombre,
        'stock': stock,
        'precio': precio,
        'imagen': imagen
    })
    .then(function (response) {
        console.log("EDITADO: " + nombre);
        window.location.reload();
    })
    .catch(function (error) {
        console.error('Error EDITAR product:', error);
    });
}



function EliminarProducto(id) {
    let idDelete = id;
    let endpoint = "/controller/EliminarProducto";
    
    axios.post(endpoint, {
        'id': idDelete,
    
    })
    .then(function (response) {
        console.log("Producto Eliminado: " + idDelete );
        window.location.reload();
    })
    .catch(function (error) {
        console.error('Error creating product:', error);
    });
}




function CrearVendedor() {
    let identificacion = document.getElementById("identificacion").value;
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let nameEmpresa = document.getElementById("name_empresa").innerText;

    if (identificacion && nombre && telefono)  {
    let endpoint = "/controller/CrearVendedor";

    

            axios.post(endpoint, {
                'iden': identificacion,
                'nombre': nombre,
                'telefono': telefono,
                'empresa': nameEmpresa
    
            })
            .then(function (response) {
                console.log("Producto creado para la empresa: " + nameEmpresa);
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
        EliminarVendedor(id); 
    });
});


function EliminarVendedor(id) {
    let idDelete = id;
    let endpoint = "/controller/EliminarVendedor";
    
    axios.post(endpoint, {
        'id': idDelete,
    
    })
    .then(function (response) {
        console.log("Producto Eliminado: " + idDelete );
        window.location.reload();
    })
    .catch(function (error) {
        console.error('Error creating product:', error);
    });
}


function crearCliente() {
    let identifi = document.getElementById("ClientesCrearId").value;
    let nombre = document.getElementById("ClientesCrearIdNombre").value;
    let telefono = document.getElementById("ClientesCrearIdTelefono").value;
    let nameEmpresa = document.getElementById("name_empresa").innerText;


    if (identifi && nombre && telefono )  {
    let endpoint = "/controller/CrearCliente";

    

            axios.post(endpoint, {
                'ident': identifi,
                'nombre': nombre,
                'telefono': telefono,
                'empresa':nameEmpresa

            })
            .then(function (response) {
                console.log("Producto creado para la empresa: " + nameEmpresa);
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.error('Error creating product:', error);
            });
        }
    }




   