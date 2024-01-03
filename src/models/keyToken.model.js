'use strict'
const {Schema, model} = require('mongoose')


const DOCUMENT_NAME = 'keyToken'
const COLLECTION_NAME = 'keyTokens'
const keyTokenSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    },
    publicKey: {
        type: String,
        required: true
    },
    refreshToken: {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
    collection: COLLECTION_NAME
})
module.exports = model(DOCUMENT_NAME, keyTokenSchema)