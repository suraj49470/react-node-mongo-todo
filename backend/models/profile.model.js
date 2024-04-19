const mongoose = require('mongoose');
const profileSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    password:{
        require: true,
        type: String
    }
});

const profile = mongoose.model('profile',profileSchema);

module.exports = profile;