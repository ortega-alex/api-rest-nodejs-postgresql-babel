import Task from '../models/Tasks';

export async function createTask(req, res) {
    const { name, done, projectid } = req.body;
    try {
        let newTask = await Task.create({
            name,
            done,
            projectid
        }, {
                fields: ['name', 'done', 'proyectid']
            });
        if (newTask) {
            return res.json({
                message: 'task created successfully',
                data: newTask
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err,
            data: {}
        });
    }
}

export async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll({
            attributes: ['id', 'projectid', 'name', 'done'],
            order: [
                ['id', 'DESC']
            ]
        });
        res.json({
            tasks
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function getOneTask(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: { id },
            attributes: ['id', 'projectid', 'name', 'done']
        });
        res.json({
            task
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function deleteTask(req, res) {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'task deleted duccesfully',
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function updtaTask(req, res) {
    try {
        const { id } = req.params;
        const { name, done, projectid } = req.body;

        const tasks = await Task.findAll({
            attributes: ['name', 'done', 'projectid'],
            where: {
                id
            }
        });

        if (tasks.length > 0) {
            tasks.forEach(async task => {
                await task.update({
                    name,
                    done,
                    projectid
                });
            })
        }
        res.json({
            message: 'tasks update succesfully',
            date: tasks
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function getTaskByProject(req, res) {
    try {
        const { projectid } = req.params;

        const tasks = await Task.findAll({
            attributes: ['name', 'done', 'projectid'],
            where: {
                projectid
            }
        });

        res.json({
            tasks
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}