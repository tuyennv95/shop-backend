const mongoose = require("mongoose");
const os = require('os')
const process = require('process')


const _SECOND = 20000;
//check numberConnect
const numberConnect = () => {
  const numConnect = mongoose.connections.length;
  return numConnect;
};
//check overLoad
const overLoad = () =>{
    setInterval(()=>{
        const numConnect = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUser = process.memoryUsage().rss;


        const maxConnect = numCores * 10;
        console.log(`Number Connection ${numConnect}`)
        console.log(`Memory Use ${memoryUser / 1024 / 1024} MB`)

        if(numConnect > maxConnect -5 ){
            console.log('Connect overload detected')
        }
    }, _SECOND)
}


module.exports = {numberConnect, overLoad}