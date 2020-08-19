const mongoose = require('mongoose');
const { Schema } = mongoose;

const CowSchema = new Schema({
    name: {
        type: String,
        required: 'enter the name of the cow'
    },
    earCoder: String,
    breed: String,
    comment: String,
    weight: Number,
    dateOfBirth: {
        type: Date,
        default: Date.now
    }
});

exports.Cow = mongoose.model('cows', CowSchema);
