const mongoose = require('mongoose');
const { Schema } = mongoose;

const BananaSchema = new Schema({
    name: {
        type: String,
        required: 'enter the name of the banana'
    },
    color: String,
    comment: String,
    size: Number,
    pick_date: {
        type: Date,
        default: Date.now
    }
});

exports.Banana = mongoose.model('bananas', BananaSchema);
