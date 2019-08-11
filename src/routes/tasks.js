import { Router } from 'express';
const router = Router();
import {
    createTask,
    getTasks,
    getOneTask,
    deleteTask,
    updtaTask,
    getTaskByProject
}
from '../controllers/task.controller';

router.get('/', getTasks);
router.get('/:id', getOneTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.put('/:id', updtaTask);
router.put('/prohect/:projectid', getTaskByProject);

export default router;