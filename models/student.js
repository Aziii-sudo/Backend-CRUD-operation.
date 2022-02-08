const mongoose = require( 'mongoose')

const stdSCheme = new mongoose.Schema({
    stdName: {
        type: String,
        required: true
    },
    stdRollno: {
        type: String,
        required: true
    },
    stdClassid: {
        type: String,
        required: true
    },
    stdMobile: {
        type: String,
        required: true
    },

    stdClass: {
        type: String,
        required: true
    },
    stdDivision: {
        type: String,
        required: true
    }
})


module.exports =mongoose.model('Std',stdSCheme)