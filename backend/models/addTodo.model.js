const mongoose = require('mongoose');
const addTodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    },
    profile_id: {
        required:true,
        type: String
    }
});

const todos = mongoose.model('todos',addTodoSchema);

module.exports = todos;