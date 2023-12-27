const app = require("./src/app");
const {app: {port}} = require('./src/configs/configMongoDb')

const PORT = port;
const server = app.listen(PORT, ()=>{
    console.log(`Server on running with port = ${PORT}`)
})

// process.on( 'SIGINT', ()=>{
//    server.close(()=> console.log('-----Server Exit'))
// })