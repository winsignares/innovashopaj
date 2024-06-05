from flask import Flask, render_template, request, session, redirect, url_for
from config.db import app


from controllers.ClientesController import ruta_Clientes
from controllers.CotizacionesController import ruta_cotizaciones
from controllers.ComprasController import ruta_Compras
from controllers.InformesController import ruta_Informes
from controllers.ParametrosController import ruta_Parametros
from controllers.ProductosController import ruta_Productos
from controllers.StockController import ruta_Stock
from controllers.VendedoresController import ruta_Vendedores
from controllers.EmpresasController import ruta_Empresas
from controllers.ModulosController import ruta_Modulos
from controllers.UserController import ruta_User

app.register_blueprint(ruta_Clientes, url_prefix="/controller")
app.register_blueprint(ruta_cotizaciones, url_prefix="/controller")
app.register_blueprint(ruta_Compras, url_prefix="/controller")
app.register_blueprint(ruta_Informes, url_prefix="/controller")
app.register_blueprint(ruta_Parametros, url_prefix="/controller")
app.register_blueprint(ruta_Productos, url_prefix="/controller")
app.register_blueprint(ruta_Stock, url_prefix="/controller")
app.register_blueprint(ruta_Vendedores, url_prefix="/controller")
app.register_blueprint(ruta_Empresas, url_prefix="/controller")
app.register_blueprint(ruta_Modulos, url_prefix="/controller")
app.register_blueprint(ruta_User, url_prefix="/controller")

@app.route('/', methods=['GET'])
def index():
  
    if 'username' in session:
        if session['rol'] == 'ADMIN':
            return redirect(url_for('PanelAdmin'))
        elif session['rol'] == 'EMPRESA':
            return redirect(url_for('PanelEmpresa'))
        elif session['rol'] == 'VENDEDOR':
            return redirect(url_for('PanelVendedor'))
    return render_template("login.html") 


@app.route('/PanelAdmin', methods=['GET'])
def PanelAdmin():
    
    if 'username' in session and session['rol'] == 'ADMIN':
        return render_template("Admin/PanelAdmin.html") 
    else:
       
        return redirect(url_for('index'))

@app.route('/PanelEmpresa', methods=['GET'])
def PanelEmpresa():

    if 'username' in session and session['rol'] == 'EMPRESA':
        return render_template("Empresas/PanelEmpresas.html") 
    else:
      
        return redirect(url_for('index'))

@app.route('/PanelVendedor', methods=['GET'])
def PanelVendedor():

    if 'username' in session and session['rol'] == 'VENDEDOR':
        return render_template("Vendedor/PanelVendedor.html") 
    else:
      
        return redirect(url_for('index'))

@app.route('/Consultar', methods=['GET'])
def PanelConsultar():
        return render_template("consultar.html") 
 


@app.route('/logout', methods=['GET'])
def logout():

    session.pop('username', None)
    session.pop('rol', None)
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')