const mongoose = require('mongoose');
const { Schema } = mongoose;

var DroneSchema = new Schema({
    message: {
        type: String,
        default: 'ready'
    }
});

// mongoose.model('Drone', DroneSchema);

module.exports = DroneSchema;
