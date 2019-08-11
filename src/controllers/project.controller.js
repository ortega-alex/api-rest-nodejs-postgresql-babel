import Project from '../models/Project';

export async function createProject(req, res) {
    const { name, priority, description, deliverydate } = req.body;
    try {
        let newProyect = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
                fields: ['name', 'priority', 'description', 'deliverydate']
            });
        if (newProyect) {
            return res.json({
                message: 'project created successfully',
                data: newProyect
            });
        }
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err,
            data: {}
        });
    }
}

export async function gerProjects(req, res) {
    try {
        const projects = await Project.findAll();
        res.json({
            projects
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function gerOneProject(req, res) {
    try {
        const { id } = req.params;
        const project = await Project.findOne({ where: { id } });
        res.json({
            project
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function deleteProyect(req, res) {
    try {
        const { id } = req.params;
        const deleteRowCount = await Project.destroy({
            where: {
                id
            }
        })
        res.json({
            message: 'project deleted duccesfully',
            count: deleteRowCount
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}

export async function updtaProject(req, res) {
    try {
        const { id } = req.params;
        const { name, priority, description, deliverydate } = req.body;

        const proyects = await Project.findAll({
            attributes: ['name', 'priority', 'description', 'deliverydate'],
            where: {
                id
            }
        });

        if (proyects.length > 0) {
            proyects.forEach(async proyect => {
                await proyect.update({
                    name,
                    priority,
                    description,
                    deliverydate
                });
            })
        }
        res.json({
            message: 'project update succesfully',
            date: proyects
        })
    } catch (err) {
        res.status(500).json({
            message: 'somethunf foes wrong ' + err
        })
    }
}