import mongoose from "mongoose"
import { InitClientRedisOther } from "./initRedis.js"
import b2bventas2Model from "./models/b2bventas2.model.js"
import esquemaVentas from "./models/b2bventas2Esquema.js"
import { clickhouse } from "./Clickhousedb.js";
export const updateMastersInRedis = async () => {
  const redisClient = await InitClientRedisOther().connect();

  const fields = [
    'Periodo',
    'Sucursal',
    'CodSupervisor',
    'NroDocSupervisor',
    'VendedorCodigo',
    'NomVen',
    'Nombre',
    'ClienteCodigo',
    'FuerzaVentas',
    'ProductoDescripcion',
    'Marca',
    'Proveedor',
    'GrupoVentas',
    'IDCaracteristica4',
    'SubProveedor',
    'ProductoCodigo',
    'linea',
    'PKIDProveedor',
    'Canal',
    'Distrito',
    'EAN13',
    'CodigoFabrica',
    'JefeVentas',
    'Anio',
    'Mes',
    'BloqueNegocio',
    'Bloque',
    'Zona',
    'EstadoCliente',
    'GiroCliente',
    'ClienteNombre',
    'TipoVentas',
    'EsBonificacion',
  ];


    for (const field of fields) {
      console.log(`Procesando: ${field}`);
      // Consulta a ClickHouse para obtener valores únicos
      const query = `SELECT DISTINCT ${field} FROM ventas_b2b`;
      const result = await clickhouse.query(query).toPromise();

      // Actualización en Redis
      await redisClient.del(field); // Eliminar clave existente
      await redisClient.set(field, JSON.stringify(await result.json()));
      console.log(`TERMINADO: ${field}`);
    }

};
export const addMasters = async()=>{
    const initRedis = await InitClientRedisOther().connect()
    //EJEMPLO
     // EJEMPLO
  const eliminar_periodo = await initRedis.del('Periodo');
  const distinct_Periodo = await b2bventas2Model.distinct('Periodo');
  const addweit = await initRedis.set('Periodo', JSON.stringify(distinct_Periodo));
  console.log('TERMINO Periodo');

  // Sucursal
  const eliminar_sucursal = await initRedis.del('Sucursal');
  const distinct_Sucursal = await b2bventas2Model.distinct('Sucursal');
  const addweit2 = await initRedis.set('Sucursal', JSON.stringify(distinct_Sucursal));
  console.log('TERMINO Sucursal');

  // CodSupervisor
  const eliminar_CodSupervisor = await initRedis.del('CodSupervisor');
  const distinct_CodSupervisor = await b2bventas2Model.distinct('CodSupervisor');
  const addweit3 = await initRedis.set('CodSupervisor', JSON.stringify(distinct_CodSupervisor));
  console.log('TERMINO CodSupervisor');

  // NroDocSupervisor
  const eliminar_NroDocSupervisor = await initRedis.del('NroDocSupervisor');
  const distinct_NroDocSupervisor = await b2bventas2Model.distinct('NroDocSupervisor');
  const addweit4 = await initRedis.set('NroDocSupervisor', JSON.stringify(distinct_NroDocSupervisor));
  console.log('TERMINO NroDocSupervisor');

  // VendedorCodigo
  const eliminar_VendedorCodigo = await initRedis.del('VendedorCodigo');
  const distinct_VendedorCodigo = await b2bventas2Model.distinct('VendedorCodigo');
  const addweit5 = await initRedis.set('VendedorCodigo', JSON.stringify(distinct_VendedorCodigo));
  console.log('TERMINO VendedorCodigo');

  // NomVen
  const eliminar_NomVen = await initRedis.del('NomVen');
  const distinct_NomVen = await b2bventas2Model.distinct('NomVen');
  const addweit6 = await initRedis.set('NomVen', JSON.stringify(distinct_NomVen));
  console.log('TERMINO NomVen');

  // Nombre
  const eliminar_Nombre = await initRedis.del('Nombre');
  const distinct_Nombre = await b2bventas2Model.distinct('Nombre');
  const addweit7 = await initRedis.set('Nombre', JSON.stringify(distinct_Nombre));
  console.log('TERMINO Nombre');

  // ClienteCodigo
  const eliminar_ClienteCodigo = await initRedis.del('ClienteCodigo');
  const distinct_ClienteCodigo = await b2bventas2Model.distinct('ClienteCodigo');
  const addweit8 = await initRedis.set('ClienteCodigo', JSON.stringify(distinct_ClienteCodigo));
  console.log('TERMINO ClienteCodigo');

  // FuerzaVentas
  const eliminar_FuerzaVentas = await initRedis.del('FuerzaVentas');
  const distinct_FuerzaVentas = await b2bventas2Model.distinct('FuerzaVentas');
  const addweit9 = await initRedis.set('FuerzaVentas', JSON.stringify(distinct_FuerzaVentas));
  console.log('TERMINO FuerzaVentas');

  // ProductoDescripcion
  const eliminar_ProductoDescripcion = await initRedis.del('ProductoDescripcion');
  const distinct_ProductoDescripcion = await b2bventas2Model.distinct('ProductoDescripcion');
  const addweit10 = await initRedis.set('ProductoDescripcion', JSON.stringify(distinct_ProductoDescripcion));
  console.log('TERMINO ProductoDescripcion');

  // Marca
  const eliminar_Marca = await initRedis.del('Marca');
  const distinct_Marca = await b2bventas2Model.distinct('Marca');
  const addweit11 = await initRedis.set('Marca', JSON.stringify(distinct_Marca));
  console.log('TERMINO Marca');

  // Proveedor
  const eliminar_Proveedor = await initRedis.del('Proveedor');
  const distinct_Proveedor = await b2bventas2Model.distinct('Proveedor');
  const addweit12 = await initRedis.set('Proveedor', JSON.stringify(distinct_Proveedor));
  console.log('TERMINO Proveedor');

  // GrupoVentas
  const eliminar_GrupoVentas = await initRedis.del('GrupoVentas');
  const distinct_GrupoVentas = await b2bventas2Model.distinct('GrupoVentas');
  const addweit13 = await initRedis.set('GrupoVentas', JSON.stringify(distinct_GrupoVentas));
  console.log('TERMINO GrupoVentas');

  // IDCaracteristica4
  const eliminar_IDCaracteristica4 = await initRedis.del('IDCaracteristica4');
  const distinct_IDCaracteristica4 = await b2bventas2Model.distinct('IDCaracteristica4');
  const addweit14 = await initRedis.set('IDCaracteristica4', JSON.stringify(distinct_IDCaracteristica4));
  console.log('TERMINO IDCaracteristica4');

  // SubProveedor
  const eliminar_SubProveedor = await initRedis.del('SubProveedor');
  const distinct_SubProveedor = await b2bventas2Model.distinct('SubProveedor');
  const addweit15 = await initRedis.set('SubProveedor', JSON.stringify(distinct_SubProveedor));
  console.log('TERMINO SubProveedor');

  // ProductoCodigo
  const eliminar_ProductoCodigo = await initRedis.del('ProductoCodigo');
  const distinct_ProductoCodigo = await b2bventas2Model.distinct('ProductoCodigo');
  const addweit16 = await initRedis.set('ProductoCodigo', JSON.stringify(distinct_ProductoCodigo));
  console.log('TERMINO ProductoCodigo');

  // Línea
  const eliminar_linea = await initRedis.del('linea');
  const distinct_linea = await b2bventas2Model.distinct('linea');
  const addweit18 = await initRedis.set('linea', JSON.stringify(distinct_linea));
  console.log('TERMINO linea');

  // PKIDProveedor
  const eliminar_PKIDProveedor = await initRedis.del('PKIDProveedor');
  const distinct_PKIDProveedor = await b2bventas2Model.distinct('PKIDProveedor');
  const addweit19 = await initRedis.set('PKIDProveedor', JSON.stringify(distinct_PKIDProveedor));
  console.log('TERMINO PKIDProveedor');

  // Pedido ES MUCHO
//   const eliminar_Pedido = await initRedis.del('Pedido');
//   const distinct_Pedido = await b2bventas2Model.distinct('Pedido');
//   const addweit20 = await initRedis.set('Pedido', JSON.stringify(distinct_Pedido));
//   console.log('TERMINO Pedido');

  // Canal
  const eliminar_Canal = await initRedis.del('Canal');
  const distinct_Canal = await b2bventas2Model.distinct('Canal');
  const addweit21 = await initRedis.set('Canal', JSON.stringify(distinct_Canal));
  console.log('TERMINO Canal');

  // Distrito
  const eliminar_Distrito = await initRedis.del('Distrito');
  const distinct_Distrito = await b2bventas2Model.distinct('Distrito');
  const addweit22 = await initRedis.set('Distrito', JSON.stringify(distinct_Distrito));
  console.log('TERMINO Distrito');

  // EAN13
  const eliminar_EAN13 = await initRedis.del('EAN13');
  const distinct_EAN13 = await b2bventas2Model.distinct('EAN13');
  const addweit23 = await initRedis.set('EAN13', JSON.stringify(distinct_EAN13));
  console.log('TERMINO EAN13');

  // CodigoFabrica
  const eliminar_CodigoFabrica = await initRedis.del('CodigoFabrica');
  const distinct_CodigoFabrica = await b2bventas2Model.distinct('CodigoFabrica');
  const addweit24 = await initRedis.set('CodigoFabrica', JSON.stringify(distinct_CodigoFabrica));
  console.log('TERMINO CodigoFabrica');

  // JefeVentas
  const eliminar_JefeVentas = await initRedis.del('JefeVentas');
  const distinct_JefeVentas = await b2bventas2Model.distinct('JefeVentas');
  const addweit25 = await initRedis.set('JefeVentas', JSON.stringify(distinct_JefeVentas));
  console.log('TERMINO JefeVentas');

  // Anio
  const eliminar_Anio = await initRedis.del('Anio');
  const distinct_Anio = await b2bventas2Model.distinct('Anio');
  const addweit26 = await initRedis.set('Anio', JSON.stringify(distinct_Anio));
  console.log('TERMINO Anio');

  // Mes
  const eliminar_Mes = await initRedis.del('Mes');
  const distinct_Mes = await b2bventas2Model.distinct('Mes');
  const addweit27 = await initRedis.set('Mes', JSON.stringify(distinct_Mes));
  console.log('TERMINO Mes');

  // BloqueNegocio
  const eliminar_BloqueNegocio = await initRedis.del('BloqueNegocio');
  const distinct_BloqueNegocio = await b2bventas2Model.distinct('BloqueNegocio');
  const addweit28 = await initRedis.set('BloqueNegocio', JSON.stringify(distinct_BloqueNegocio));
  console.log('TERMINO BloqueNegocio');

  // Bloque
  const eliminar_Bloque = await initRedis.del('Bloque');
  const distinct_Bloque = await b2bventas2Model.distinct('Bloque');
  const addweit29 = await initRedis.set('Bloque', JSON.stringify(distinct_Bloque));
  console.log('TERMINO Bloque');

  // Zona
  const eliminar_Zona = await initRedis.del('Zona');
  const distinct_Zona = await b2bventas2Model.distinct('Zona');
  const addweit30 = await initRedis.set('Zona', JSON.stringify(distinct_Zona));
  console.log('TERMINO Zona');


    // EstadoCliente
    const eliminar_EstadoCliente = await initRedis.del('EstadoCliente');
    const distinct_EstadoCliente = await b2bventas2Model.distinct('EstadoCliente');
    const addweit31 = await initRedis.set('EstadoCliente', JSON.stringify(distinct_EstadoCliente));
    console.log('TERMINO EstadoCliente');

      // GiroCliente
      const eliminar_GiroCliente = await initRedis.del('GiroCliente');
      const distinct_GiroCliente = await b2bventas2Model.distinct('GiroCliente');
      const addweit32 = await initRedis.set('GiroCliente', JSON.stringify(distinct_GiroCliente));
      console.log('TERMINO GiroCliente');
    
    
    // ClienteNombre
    const eliminar_ClienteNombre= await initRedis.del('ClienteNombre');
    const distinct_ClienteNombre = await b2bventas2Model.distinct('ClienteNombre');
    const addweit33 = await initRedis.set('ClienteNombre', JSON.stringify(distinct_ClienteNombre));
    console.log('TERMINO ClienteNombre');

    // TipoVentas
    const eliminar_TipoVentas= await initRedis.del('TipoVentas');
    const distinct_TipoVentas = await b2bventas2Model.distinct('TipoVentas');
    const addweit34 = await initRedis.set('TipoVentas', JSON.stringify(distinct_TipoVentas));
    console.log('TERMINO TipoVentas');


     // EsBonificacion
     const eliminar_EsBonificacion= await initRedis.del('EsBonificacion');
     const distinct_EsBonificacion = await b2bventas2Model.distinct('EsBonificacion');
     const addweit35 = await initRedis.set('EsBonificacion', JSON.stringify(distinct_EsBonificacion));
     console.log('TERMINO EsBonificacion');
    // // NumPedido
    // const eliminar_NumPedido= await initRedis.del('NumPedido');
    // const distinct_NumPedido = await b2bventas2Model.distinct('NumPedido');
    // const addweit35 = await initRedis.set('NumPedido', JSON.stringify(distinct_Zona));
    // console.log('TERMINO NumPedido');
  // Canal01
//   const eliminar_Canal = await initRedis.del('Canal');
//   const distinct_Canal = await b2bventas2Model.distinct('Canal');
//   const addweit31 = await initRedis.set('Canal', JSON.stringify(distinct_Canal));
//   console.log('TERMINO Canal');
    // const eliminar_periodo = await initRedis.del('Periodo')
    // const distinct_Periodo = await b2bventas2Model.distinct('Periodo')
    // const addweit = await initRedis.set('Periodo',JSON.stringify(distinct_Periodo))


    // const distinct_Sucursal = await b2bventas2Model.distinct('Sucursal')
    // const distinct_CodSupervisor = await b2bventas2Model.distinct('CodSupervisor')
    // const NroDocSupervisor = await b2bventas2Model.distinct('NroDocSupervisor')
    // const VendedorCodigo = await b2bventas2Model.distinct('VendedorCodigo')
    // const NomVen = await b2bventas2Model.distinct('NomVen')
    // const Nombre = await b2bventas2Model.distinct('Nombre')
    // const ClienteCodigo = await b2bventas2Model.distinct('ClienteCodigo')
    // const FuerzaVentas = await b2bventas2Model.distinct('FuerzaVentas')
    // const ProductoDescripcion = await b2bventas2Model.distinct('ProductoDescripcion')
    // const Marca = await b2bventas2Model.distinct('Marca')
    // const Proveedor = await b2bventas2Model.distinct('Proveedor')
    // const GrupoVentas = await b2bventas2Model.distinct('GrupoVentas')
    // const IDCaracteristica4 = await b2bventas2Model.distinct('IDCaracteristica4')
    // const SubProveedor = await b2bventas2Model.distinct('SubProveedor')
    // const ProductoCodigo = await b2bventas2Model.distinct('ProductoCodigo')
    // // const EsBonificacion = await b2bventas2Model.distinct('EsBonificacion') //NO ES MUTABLE
    // const linea = await b2bventas2Model.distinct('linea')
    // const PKIDProveedor = await b2bventas2Model.distinct('PKIDProveedor')
    // const Pedido = await b2bventas2Model.distinct('Pedido')
    // const Canal = await b2bventas2Model.distinct('Canal')
    // const Distrito = await b2bventas2Model.distinct('Distrito')
    // const EAN13 = await b2bventas2Model.distinct('EAN13')
    // const CodigoFabrica = await b2bventas2Model.distinct('CodigoFabrica')
    // const JefeVentas = await b2bventas2Model.distinct('JefeVentas')
    // const Anio = await b2bventas2Model.distinct('Anio')
    // const Mes = await b2bventas2Model.distinct('Mes')
    // const BloqueNegocio = await b2bventas2Model.distinct('BloqueNegocio')
    // const Bloque = await b2bventas2Model.distinct('Bloque')
    // const Zona = await b2bventas2Model.distinct('Zona')
    // const EstadoCliente = await b2bventas2Model.distinct('EstadoCliente')
    // const GiroCliente = await b2bventas2Model.distinct('GiroCliente')
    // const ClienteNombre = await b2bventas2Model.distinct('ClienteNombre')
    // const TipoVentas = await b2bventas2Model.distinct('TipoVentas')
    // const NumPedido = await b2bventas2Model.distinct('NumPedido')



   
    // const addweit2 = await initRedis.set('Sucursal',JSON.stringify(distinct_Sucursal))
    // const addweit3 = await initRedis.set('CodSupervisor',JSON.stringify(distinct_CodSupervisor))
    // const addweit4 = await initRedis.set('NroDocSupervisor',JSON.stringify(NroDocSupervisor))
    // const addweit5 = await initRedis.set('VendedorCodigo',JSON.stringify(VendedorCodigo))
    // const addweit6 = await initRedis.set('NomVen',JSON.stringify(NomVen))
    // const addweit7 = await initRedis.set('Nombre',JSON.stringify(Nombre))
    // const addweit8 = await initRedis.set('ClienteCodigo',JSON.stringify(ClienteCodigo))
    // const addweit9 = await initRedis.set('FuerzaVentas',JSON.stringify(FuerzaVentas))
    // const addweit10 = await initRedis.set('ProductoDescripcion',JSON.stringify(ProductoDescripcion))
    // const addweit11 = await initRedis.set('Marca',JSON.stringify(Marca))
    // const addweit12 = await initRedis.set('Proveedor',JSON.stringify(Proveedor))
    // const addweit13 = await initRedis.set('GrupoVentas',JSON.stringify(GrupoVentas))
    // const addweit14 = await initRedis.set('IDCaracteristica4',JSON.stringify(IDCaracteristica4))
    // const addweit15 = await initRedis.set('SubProveedor',JSON.stringify(SubProveedor))
    // const addweit16 = await initRedis.set('ProductoCodigo',JSON.stringify(ProductoCodigo))

    // const addweit18 = await initRedis.set('linea',JSON.stringify(linea))
    // const addweit19 = await initRedis.set('PKIDProveedor',JSON.stringify(PKIDProveedor))
    // const addweit20 = await initRedis.set('Pedido',JSON.stringify(Pedido))
    // const addweit21 = await initRedis.set('Canal',JSON.stringify(Canal))
    // const addweit22 = await initRedis.set('Distrito',JSON.stringify(Distrito))
    // const addweit23 = await initRedis.set('EAN13',JSON.stringify(EAN13))
    // const addweit24 = await initRedis.set('CodigoFabrica',JSON.stringify(CodigoFabrica))
    // const addweit25 = await initRedis.set('JefeVentas',JSON.stringify(JefeVentas))
    // const addweit26 = await initRedis.set('Anio',JSON.stringify(Anio))
    // const addweit27 = await initRedis.set('Mes',JSON.stringify(Mes))
    // const addweit28 = await initRedis.set('BloqueNegocio',JSON.stringify(BloqueNegocio))
    // const addweit29 = await initRedis.set('Bloque',JSON.stringify(Bloque))
    // const addweit30 = await initRedis.set('Zona',JSON.stringify(Zona))
    // const addweit31 = await initRedis.set('EstadoCliente',JSON.stringify(EstadoCliente))
    // const addweit32 = await initRedis.set('GiroCliente',JSON.stringify(GiroCliente))
    // const addweit33 = await initRedis.set('ClienteNombre',JSON.stringify(ClienteNombre))
    // const addweit34 = await initRedis.set('TipoVentas',JSON.stringify(TipoVentas))
    // const addweit35 = await initRedis.set('NumPedido',JSON.stringify(NumPedido))



    // console.log(distinct)

}
export const addMasters2 = async()=>{

}
export async function testSplitCollections()
{
  console.time('Tiempototal');
  const query = `[{"$match":{"$and":[{"Canal":{"$in":["CALLCENTER","COBERTURA","MAYORISTA","MERCADOS","OFICINA"]}}]}},{"$group":{"_id":{"Sucursal":"$Sucursal","Periodo":"$Periodo"},"CantidadUnitaria":{"$sum":"$CantidadUnitaria"}}},{"$project":{"_id":0,"Sucursal":"$_id.Sucursal","Periodo":"$_id.Periodo","CantidadUnitaria":1}}]`
  let data = []
  for (let index = 1; index <= 8; index++) {
    console.log('EMPEZO')
    console.log(index)
    const det = await mongoose.model(`b2b${index}`,esquemaVentas).aggregate(
      JSON.parse(query)
    )
    console.log('TERMINO')
    console.log(index)
    data.push(...det)
    
  }
   // Agrupamos los datos por Periodo y Sucursal, sumando los valores de ValorVenta
   const aggregatedData = data.reduce((acc, curr) => {
    // Crea un identificador único para cada combinación de Periodo y Sucursal
    const key = `${curr.Periodo}_${curr.Sucursal}`;
    
    // Si el acumulador no tiene esa clave, inicializa un nuevo objeto
    if (!acc[key]) {
      acc[key] = {
        Periodo: curr.Periodo,
        Sucursal: curr.Sucursal,
        ValorVenta: 0
      };
    }
    
    // Suma el ValorVenta
    acc[key].ValorVenta += curr.ValorVenta;
    
    return acc;
  }, {});

  // Convierte el objeto acumulador de nuevo a un array
  const resultArray = Object.values(aggregatedData);
  console.log('METODO 2 TERMINO')
  console.timeEnd('Tiempototal');

}
export async function testSplitCollections2()
{
  console.time('Tiempototal1');
  const query2 =`[{"$match":{"$and":[{"Bloque":{"$in":["CHOSICA"]}},{"Distrito":{"$in":["COMAS","ASIA","CHANCAY"]}}]}},{"$group":{"_id":{"Periodo":"$Periodo","Sucursal":"$Sucursal"},"ValorVenta":{"$sum":"$ValorVenta"}}},{"$project":{"_id":0,"Periodo":"$_id.Periodo","Sucursal":"$_id.Sucursal","ValorVenta":1}}]`
  const query = `[
  {"$match":{"$and":[{"linea":{"$in":["CERVEZAS"]}}]}},
  {"$group":{"_id":{"Periodo":"$Periodo","Sucursal":"$Sucursal"},"CantidadUnitaria":{"$sum":"$CantidadUnitaria"}}},
  {"$project":{"_id":0,"Periodo":"$_id.Periodo","Sucursal":"$_id.Sucursal","CantidadUnitaria":1}}]`
  const query3 = `[
  { "$match": { "$and": [ { "Canal": { "$in": ["CALLCENTER", "COBERTURA", "MERCADOS", "OFICINA"] } } ] } },
  
  { "$group": { 
      "_id": { "Periodo": "$Periodo", "Sucursal": "$Sucursal" },
      "CantidadUnitaria": { "$sum": "$CantidadUnitaria" },
      "ValorVenta": { "$sum": "$ValorVenta" }
  }},
  
  { "$group": {
      "_id": "$_id.Periodo",
      "totalValorVenta": { "$sum": "$ValorVenta" },
      "sucursales": { "$push": { 
          "Sucursal": "$_id.Sucursal",
          "CantidadUnitaria": "$CantidadUnitaria",
          "ValorVenta": "$ValorVenta"
      }}
  }},
  
  { "$unwind": "$sucursales" },
  
  { "$project": {
      "Periodo": "$_id",
      "Sucursal": "$sucursales.Sucursal",
      "CantidadUnitaria": "$sucursales.CantidadUnitaria",
      "ValorVenta": "$sucursales.ValorVenta",
      "PorcentajeValorVenta": { 
          "$multiply": [
              { "$divide": [ "$sucursales.ValorVenta", "$totalValorVenta" ] },
              100
          ]
      }
  }}
]`
  const query4 = `[
  { "$match": { "$and": [ { "Canal": { "$in": ["CALLCENTER", "COBERTURA", "MERCADOS", "OFICINA"] } } ] } },
  { "$group": 
    { 
      "_id": { "Periodo": "$Periodo", "Sucursal": "$Sucursal" },
      "CantidadUnitaria": { "$sum": "$CantidadUnitaria" },
      "ValorVenta": { "$sum": "$ValorVenta" }
    }
  },
  { "$group": 
    {
      "_id": "$_id.Periodo",
      "totalValorVenta": { "$sum": "$ValorVenta" },
      "sucursales": { "$push": { 
          "Sucursal": "$_id.Sucursal",
          "CantidadUnitaria": "$CantidadUnitaria",
          "ValorVenta": "$ValorVenta"
    }
  }
  }},
  
  { "$unwind": "$sucursales" },
  
  { "$project": {
      "Periodo": "$_id",
      "Sucursal": "$sucursales.Sucursal",
      "CantidadUnitaria": "$sucursales.CantidadUnitaria",
      "ValorVenta": { 
          "$multiply": [
              { "$divide": [ "$sucursales.ValorVenta", "$totalValorVenta" ] },
              100
          ]
      }
  }}
]`
  const query5 = `[{"$match":
  {"$and":[{"Canal":{"$in":["CALLCENTER","COBERTURA","MERCADOS","OFICINA"]}}]}},{"$group":{
  "_id":{"Periodo":"$Periodo","Sucursal":"$Sucursal"},
  "CantidadUnitaria":{"$sum":"$CantidadUnitaria"},
  "ValorVenta":{"$sum":"$ValorVenta"}}},
  {"$project":
  {
  "_id":0,
  "Periodo":"$_id.Periodo",
  "Sucursal":"$_id.Sucursal",
  "CantidadUnitaria":1,
  "ValorVenta":{"$multiply":[{"$divide":["$ValorVenta",{"$sum":"$ValorVenta"}]},100]}}}]`
  const query6=`[{"$match":{"Fecha":{"$gte":"2024-08-01T05:00:00.000Z","$lte":"2024-08-31T05:00:00.000Z"}}},{"$group":{"_id":{"Periodo":"$Periodo","Sucursal":"$Sucursal"},"ValorVenta":{"$sum":"$ValorVenta"}}},{"$project":{"_id":0,"Periodo":"$data._id.Periodo","Sucursal":"$data._id.Sucursal","ValorVenta":"$data.ValorVenta"}}]`
  const query7 = `[{"$match":{"$and":[{"Distrito":{"$in":["COMAS"]}}]}},{"$group":{"_id":{"Periodo":"$Periodo","Sucursal":"$Sucursal"},"ValorVenta":{"$sum":"$ValorVenta"}}},{"$project":{"_id":0,"Periodo":"$_id.Periodo","Sucursal":"$_id.Sucursal","ValorVenta":"$ValorVenta"}}]`
  let data = []

  const det = await mongoose.model(`90005`,esquemaVentas).aggregate(
    [
      {
        $match: {
          Fecha: {
            $gte: new Date("2024-08-01T00:00:00.000Z"),
            $lte: new Date("2024-08-31T00:00:00.000Z")
          }
        }
      },
      {
        $group: {
          _id: {
            Periodo: "$Periodo",
            Sucursal: "$Sucursal"
          },
          ValorVenta: { $sum: "$ValorVenta" }
        }
      },
      {
        $project: {
          _id: 0,
          Periodo: "$_id.Periodo",
          Sucursal: "$_id.Sucursal",
          ValorVenta: "$ValorVenta"
        }
      }
    ]
  )
  console.log(det)
  console.log('METODO 1 TERMINO')
  console.timeEnd('Tiempototal1');
}

export async function runAggregation() {
  console.log('EMPEZO')
  try {
    // Primer paso: Filtrar los datos por JefeVentas y almacenar el resultado en una colección temporal
    await b2bventas2Model.aggregate([
      { 
        $match: { 
          $and: [
            { JefeVentas: { $in: ["", "CALLCENTER", "JV ARIAS", "JV BAUTISTA", "JV OFICINA", "JV PATTERSON", "JV ROJAS", "JV SILVA", "JV VARGAS", "JV VELA"] } }
          ]
        }
      },
      { $merge: { into: 'filteredResults', whenMatched: 'merge', whenNotMatched: 'insert' } } // Almacena en una colección temporal
    ]);

    console.log('Filtrado completado y almacenado en filteredResults');

    // Segundo paso: Realizar la agregación sobre la colección temporal
    const result = await mongoose.connection.collection('filteredResults').aggregate([
      { 
        $group: { 
          _id: { Periodo: "$Periodo", Sucursal: "$Sucursal" }, 
          ValorVenta: { $sum: "$ValorVenta" }
        }
      },
      { 
        $project: { 
          _id: 0, 
          Periodo: "$_id.Periodo", 
          Sucursal: "$_id.Sucursal", 
          ValorVenta: 1 
        }
      }
    ]).toArray(); // Convertimos los resultados en un array

    console.log('Resultado de la agregación:', result);
    return result; // Devuelve el resultado de la segunda agregación
  } catch (error) {
    console.error('Error durante la agregación:', error);
  }
}

const BATCH_SIZE = 500000; // Tamaño del lote (1 millón)
const COLLECTION_BASE_NAME = 'b2b'; // Nombre base de las colecciones divididas
export async function splitCollectionInChunks() {
  try {
    // 1. Obtener el total de documentos en la colección
    const totalDocuments = await b2bventas2Model.countDocuments();
    console.log(`Total de documentos: ${totalDocuments}`);
    
    let processedDocs = 0; // Llevar la cuenta de los documentos procesados
    let batchNumber = 0;   // Número del lote (para los nombres de las colecciones)

    // 2. Procesar documentos en lotes de hasta 1 millón
    while (processedDocs < totalDocuments) {
      // Aumentar el contador del lote
      batchNumber++;

      // Obtener el siguiente lote de hasta 1 millón de documentos
      const batch = await b2bventas2Model.find()
        .skip(processedDocs) // Saltar los ya procesados
        .limit(BATCH_SIZE)   // Limitar a 1 millón
        .lean();             // Evitar conversión a instancias de Mongoose para mejorar rendimiento

      if (batch.length > 0) {
        // Crear un modelo dinámico para la nueva colección usando el mismo esquema
        const DynamicModel = mongoose.model(`${COLLECTION_BASE_NAME}${batchNumber}`, esquemaVentas);

        // Insertar el lote en la nueva colección (modelo dinámico)
        await DynamicModel.insertMany(batch);
        console.log(`Lote ${batchNumber} con ${batch.length} documentos insertado en ${COLLECTION_BASE_NAME}${batchNumber}`);

        // Aumentar el número de documentos procesados
        processedDocs += batch.length;
      } else {
        // Si no hay más documentos para procesar, salimos del bucle
        console.log(`No se encontraron más documentos para procesar en el lote ${batchNumber}`);
        break;
      }
    }

    console.log('Proceso completado con éxito.');

  } catch (error) {
    console.error('Error al dividir la colección:', error);
  } finally {
    mongoose.disconnect(); // Desconectar de la base de datos
  }
}
// export async function splitCollectionInChunks() {
//   try {
//     // 1. Obtener el total de documentos en la colección
//     const totalDocuments = await b2bventas2Model.countDocuments();
//     console.log(`Total de documentos: ${totalDocuments}`);
    
//     let processedDocs = 0; // Llevar la cuenta de los documentos procesados
//     let batchNumber = 0;   // Número del lote (para los nombres de las colecciones)

//     // 2. Procesar documentos en lotes de hasta 1 millón
//     while (processedDocs < totalDocuments) {
//       // Aumentar el contador del lote
//       batchNumber++;

//       // Obtener el siguiente lote de hasta 1 millón de documentos
//       const batch = await SalesModel.find()
//         .skip(processedDocs) // Saltar los ya procesados
//         .limit(BATCH_SIZE)   // Limitar a 1 millón
//         .lean();             // Evitar conversión a instancias de Mongoose para mejorar rendimiento

//       if (batch.length > 0) {
//         // Crear nombre de la nueva colección
//         const collectionName = `${COLLECTION_BASE_NAME}${batchNumber}`;

//         // Insertar el lote en la nueva colección
//         await mongoose.connection.collection(collectionName).insertMany(batch);
//         console.log(`Lote ${batchNumber} con ${batch.length} documentos insertado en ${collectionName}`);

//         // Aumentar el número de documentos procesados
//         processedDocs += batch.length;
//       } else {
//         // Si no hay más documentos para procesar, salimos del bucle
//         console.log(`No se encontraron más documentos para procesar en el lote ${batchNumber}`);
//         break;
//       }
//     }

//     console.log('Proceso completado con éxito.');

//   } catch (error) {
//     console.error('Error al dividir la colección:', error);
//   } finally {
//     mongoose.disconnect(); // Desconectar de la base de datos
//   }
// }