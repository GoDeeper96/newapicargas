import Queue from 'bull';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter.js';
import { ExpressAdapter } from '@bull-board/express';

// Crear colas
export const cargaQueue = new Queue('cargaQueue', {
  redis: { host: '127.0.0.1', port: 6379 },
});

// Configurar Bull Board
const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues'); // Ruta base para el tablero

createBullBoard({
  queues: [new BullAdapter(cargaQueue)], // Agrega más colas si es necesario
  serverAdapter,
});

export { serverAdapter };