const app = require("./src/app");


const PORT = 5000;
const server = app.listen(PORT, ()=>{
    console.log(`Server on running with port = ${PORT}`)
})

process.on( 'SIGINT', ()=>{
   server.close(()=> console.log('Server Exit'))
})