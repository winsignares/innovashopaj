from flask import Blueprint, Flask, jsonify,json, render_template, request
from config.db import app, bd, ma

from models.EmpresasModels import Empresa, EmpresaSchema 

Empresa_schema = EmpresaSchema()
Empresa_schema = EmpresaSchema(many=True)



ruta_Empresas = Blueprint('ruta_Empresas', __name__)

@ruta_Empresas.route('/Empresas')
def inderEmpresa():

    empresas = Empresa.query.all()
    return render_template("empresas.html")


