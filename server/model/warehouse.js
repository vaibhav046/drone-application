const mongoose = require('mongoose');
const { Schema } = mongoose;

var WarehouseSchema = new Schema({
    itemName: String,
    itemDescription: String
});

mongoose.model('Warehouse', WarehouseSchema);
