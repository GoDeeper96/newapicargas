

import app from './app.js';    
import { connectDb } from './mongodbcon.js';
// import { connectDb } from './mongodbConnection/GetConnectionMongoDb';

async function main() {
    try {
      await connectDb();
     
      app.listen(4001,()=>{
        console.log("LISTENNING ON PORT 4001")
        
    })
    } catch (error) {
      console.error(error);
    }
  }

  main();