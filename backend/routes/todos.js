const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;
const todos = require('../models/addTodo.model');

const getTodos = async (req,res) => {
    try {
        const { profile_id } = req.query;
        const response = await todos.find({profile_id}).select({'title':1,'completed':1});
        console.log(response);
        res.status(200).json({
            response
        });        
    } catch (error) {
        res.status(500).json({
            error:error.message
        });
    }
};

const addTodos = async (req,res) => {
    try {
        const { title , completed , profile_id} = req.body;
        const t1 = new todos({
            title,
            completed,
            profile_id
        });
       const response  = await t1.save();
       res.status(200).json({
        response
        });        
    } catch (error) {
        res.status(500).json({
            error:error.message
        });
    }
    
};

const deleteTodos = async (req,res) => {
    console.log(req.body);
    try {
        const { profile_id , id } = req.body;
        console.log(`/DELETE ${profile_id} ${id}`);
        const response = await todos.deleteOne({
            $and: [{profile_id},{_id: new ObjectId(id)}]
        });
        res.status(200).json({
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error:error.message
        }); 
    }
};

const updateTodos = async (req,res) => {
    console.log('/UPDATE');
    console.log(req.body);
    try {
        const { title, completed , profile_id , _id} = req.body;
        const response = await todos.updateOne({
            $and: [{profile_id},{_id: new ObjectId(_id)}]
        },{title,completed});
        console.log(response);
        res.status(200).json({
            response
        });
    } catch (error) {
        res.status(500).json({
            error:error.message
        });    
    }
    
};
router.route('/')
            .get(getTodos)
            .post(addTodos)
            .delete(deleteTodos)
            .put(updateTodos);

module.exports = router;