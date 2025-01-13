import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cron from 'node-cron'
import { ExpressAdapter } from '@bull-board/express'
import { addMasters, runAggregation, splitCollectionInChunks, testSplitCollections, testSplitCollections2 } from './jobs.js'

import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter.js'
const app = express();
// addMasters()
// addMasters()
// runAggregation()
// splitCollectionInChunks()
// testSplitCollections()
// testSplitCollections2()
// addMasters()
const serverAdapter = new ExpressAdapter();
createBullBoard({
    queues: [new BullAdapter(cargaQueue)], // Agrega más colas si es necesario
    serverAdapter,
  });
serverAdapter.setBasePath('/admin/queues'); // Ruta base para acceder al tablero
cron.schedule('*/5 * * * *',async()=>{
    console.log('empezo')
    await cargaQueue.add({
        data
    })
})
app.use('/admin/queues', serverAdapter.getRouter());
app.use(cors());
app.options('*', cors())
// EliminarDatos()
app.set('serverTimeout',6000000)
app.use(bodyParser.urlencoded({extended: true,limit:'200000mb'}));
app.use(bodyParser.json({limit:'200000mb'}));
app.use(morgan('dev'))
export default app