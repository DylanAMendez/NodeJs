const winston = require('winston');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' })
  ],
});


function devolverError() {
    throw new Error("Esto es un error");
}

try{
    devolverError();
}
catch(e){
 logger.log("ERROR!", e.toString());
}
