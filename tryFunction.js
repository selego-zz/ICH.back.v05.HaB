// importamos dotenv, por si acaso
import 'dotenv/config';

// importamos la función que queremos testear
import { getOrderIdByNumber } from './src/models/warehouse/index.js';

console.log(await getOrderIdByNumber('p', 'ich', 2024001));
process.exit(0);
