import Task from '../schema/task.schema.js';


export const getTasks = async (req, res) => {
    try {
        const task = await Task.find();
        if(!task) return res.status(204).json();
        
        res.status(200).send(task);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getTaskCount = async (req, res) => {
    try {
        const tasks = await Task.find();
        const taskCount = tasks.length;
        
        res.status(200).json(taskCount);
    } catch (error) {
        res.status(500).json("Error de servidor");
    }
};

export const getTask = async (req, res) => {
    try {
        const taskFound = await Task.findById(req.params.id);
        if(!taskFound) return res.status(204).json();

        res.status(200).json(taskFound);
    } catch (error) {
        res.status(500).json("Error de servidor");
    }
};

export const saveTask = async (req, res) => {
    try {
        const taskData = req.body;

        const task = new Task(taskData);
        const saveTask = await task.save();
        
        res.status(200).json(saveTask);
    } catch (error) {
        res.status(500).json("Error de servidor");
    }
};

export const deleteTask = async (req, res) => {
    try {
        const taskFound = await Task.findByIdAndDelete(req.params.id);
        if(!taskFound) return res.status(204).json();

        res.status(200).json({Delete: taskFound});
    } catch (error) {
        res.status(500).json("Error de servidor");
    }
};

export const updateTask = async (req, res) => {
    const taskUpdate = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!taskUpdate) return res.status(204).json();

    res.status(200).json({update: taskUpdate});
};