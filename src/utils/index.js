const _ = require('lodash');

const getInfoReturnData = ({fileds = [], object= {}}) => {
    return _.pick(object, fileds)
} 

module.exports = {getInfoReturnData}