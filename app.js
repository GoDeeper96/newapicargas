import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cron from 'node-cron'
import { addMasters, runAggregation, splitCollectionInChunks, testSplitCollections, testSplitCollections2 } from './jobs.js'
import { cargaQueue, serverAdapter } from './bullConfig.js'
const app = express();
// addMasters()
// addMasters()
// runAggregation()
// splitCollectionInChunks()
// testSplitCollections()
// testSplitCollections2()
// addMasters()

cron.schedule('*/5 * * * *',async()=>{
    await cargaQueue.add({
        data
    })
})
app.use(cors());
app.options('*', cors())
// EliminarDatos()
app.set('serverTimeout',6000000)
app.use(bodyParser.urlencoded({extended: true,limit:'200000mb'}));
app.use(bodyParser.json({limit:'200000mb'}));
app.use('/admin/queues', serverAdapter.getRouter());
export default app