from flask import Blueprint, Flask, render_template, request,session,send_file
from config.db import bd, ma, app
from models.InformesModels import Informes, InformeSchema 
from models.ClientesModels import Cliente

Informes_schema = InformeSchema()
Informes_schema = InformeSchema(many=True)

ruta_Informes = Blueprint("ruta_Informes", __name__)

@ruta_Informes.route('/Informes')
def indexInformes():
    informes = Informes.query.all()
    return render_template("Informes.html")

@ruta_Informes.route('/EmpresaInformes')
def EmpresaInforme():
    empresa = session['empresa']
    facturas = Informes.query\
        .join(Cliente, Informes.cliente_id == Cliente.id)\
        .add_columns(Informes.id, Cliente.identificacion, Cliente.nombre, Informes.factura, Informes.estado)\
        .filter(Informes.empresa == empresa)\
        .group_by(Informes.factura)\
        .all()
    return render_template("Empresas/informesEmpresas.html", informe=facturas)

