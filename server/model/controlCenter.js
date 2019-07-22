const mongoose = require('mongoose');
const drone = require('./drone');
const { Schema } = mongoose;

var ControlCenterSchema = new Schema({
    message: {
        type: String,
        default: 'pickup'
    },
    _drone: {
        type: drone,
        default: drone
    }
});

mongoose.model('ControlCenter', ControlCenterSchema);