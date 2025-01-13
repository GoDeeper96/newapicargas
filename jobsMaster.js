import axios from "axios";
import Queue from 'bull';
import EventosModel from "./models/Eventos.model";
import NotificacionesModel from "./models/Notificaciones.model";
import moment from "moment/moment";
import { updateMastersInRedis } from "./jobs";
import { cargaQueue } from "./bullConfig";

export const cargaQueue = new Queue('cargaQueue', {
  redis: { host: '127.0.0.1', port: 6379 },
});

//ADMASTER2
  cargaQueue.process(async (job) => {
    // const { FormData, nuevoPostId } = job.data;
    const nuevoPost = new EventosModel({
        Autor: FormData.Autor,
        EventoNombre: 'Carga de maestros',
        Descripcion: `Sube la data de cada maestro, data mutable.`,
        Funcion: 'addmaster2',
        ConsultaPayload: '',
        Response: 'En progreso...',
        ResponseTamaño: 0,
        FechaStart: moment().format('YYYY-MM-DD hh:mm:ss'),
        FechaEnd: null,
        TimeSpentSec: 0,
        Status: 'LOADING',
        StatusCode: 0,
      });
      await nuevoPost.save();
    try {
      // Realiza la carga pesada
     
    //   console.log(queryJson)
    //   console.log(columnas)
    //   console.log(nombre_tabla)
    //   const InsertarData = await axios.post('http://170.231.81.173:5000/b2b/cargab2b', {
    //     filter: queryJson,
    //     nombre_tabla: FormData.nombre_tabla,
    //     columnas,
    //   });
      await updateMastersInRedis()
      // Actualizar el evento con estado "DONE"
      const FechaEnd = moment().format('YYYY-MM-DD HH:mm:ss');
      const TimeSpentSec = moment(FechaEnd).diff(moment(FormData.FechaStart), 'seconds');
      await EventosModel.findByIdAndUpdate(nuevoPost.id, {
        Response: JSON.stringify(InsertarData.data),
        ResponseTamaño: JSON.stringify(InsertarData.data).length,
        FechaEnd,
        TimeSpentSec,
        Status: 'DONE',
        StatusCode: 200,
      });
  
      // Crear notificación para el usuario
      const sendNotificacion = new NotificacionesModel({
        Usuario: 'Jobber',
        Mensaje: 'Carga de maestros terminada',
        Tipo: 'Carga',
      });
      await sendNotificacion.save();
  
    //   return InsertarData.data; // Retorna los datos procesados
    } catch (error) {
      // Manejo de errores
    //   console.log(error)
      const FechaEnd = moment().format('YYYY-MM-DD HH:mm:ss');
      const TimeSpentSec = moment(FechaEnd).diff(moment(FormData.FechaStart), 'seconds');
      await EventosModel.findByIdAndUpdate(nuevoPost, {
        Response: JSON.stringify(error.message),
        ResponseTamaño: JSON.stringify(error.message).length,
        FechaEnd,
        TimeSpentSec,
        Status: 'ERROR',
        StatusCode: 500,
      });
  
    //   console.log(error.message)
      throw new Error(error.message);
    }
  });