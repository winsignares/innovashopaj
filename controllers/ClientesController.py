from flask import Blueprint, Flask, jsonify,json, render_template, request,session
from config.db import app, bd, ma

from models.ClientesModels import Cliente, ClienteSchema 

Cliente_schema = ClienteSchema()
Cliente_schema = ClienteSchema(many=True)


ruta_Clientes = Blueprint("ruta_Clientes", __name__)

@ruta_Clientes.route('/Clientes')
def indexClientes():
    clientes = Cliente.query.all()
    return render_template("Clientes.html")

@ruta_Clientes.route('/EmpresaClientes')
def EmpresaCliente():
    empresa = session['empresa']
    clientes = Cliente.query.filter_by(empresa=empresa).all()
    return render_template("Empresas/clientesEmpresas.html",clientes=clientes)


@ruta_Clientes.route('/VendedorClientes')
def VendedorCliente():
    empresa = session['empresa']
    clientes = Cliente.query.filter_by(empresa=empresa).all()
    return render_template("Vendedor/clientesVendedor.html",clientes=clientes)




@ruta_Clientes.route('/CrearCliente', methods=['POST'])
def CrearCliente():
    ide = request.json['ident']
    nombres = request.json['nombre']  
    telefonos = request.json['telefono'] 
    empresa = request.json['empresa']
   
    try:
        cliente = Cliente(identificacion=ide,nombre="nombre",telefono="telefono",compras=0,empresa=empresa)
        bd.session.add(cliente)
        bd.session.commit()

        return "Cliente creado. ID: {}".format(cliente.id)

    except Exception as e:
        return "Error: " + str(e)


@ruta_Clientes.route('/EliminarCliente', methods=['POST'])
def EliminarVendedor():
    id = request.json['id']
    try:
        cliente = Cliente.query.get(id)
        if cliente:
            bd.session.delete(cliente)
            bd.session.commit()
            return "Producto eliminado correctamente."
        else:
            return "El producto no existe."
    except Exception as e:
        return "Error eliminando producto: " + str(e)
    
    