import { suma, multiplica } from "./modulo/controller.js";

const devolverMulti = multiplica(1, 2);
console.log(devolverMulti)

const devolverSuma = suma(4, 5);
console.log(chalk.green(devolverSuma));

// Libreria chalk
import chalk from "chalk";