//const { response } = require("express");
const tasksModel = require("../models/tasksModel");

const getAll = async (request, response) => {
    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
    const createdTask = await tasksModel.createTask(request.body);
    return response.status(201).json(createdTask);
};

const deleteTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

const updateTask = async (req, res) => {
    const { id } = req.params;

    await tasksModel.updateTask(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};
