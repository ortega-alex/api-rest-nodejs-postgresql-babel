import { Router } from 'express';
const router = Router();

import {
    createProject,
    gerProjects,
    gerOneProject,
    deleteProyect,
    updtaProject
} from '../controllers/project.controller';

// /api/project/

router.get('/', gerProjects);
router.post('/', createProject);
router.get('/:id', gerOneProject);
router.delete('/:id', deleteProyect);
router.put('/:id', updtaProject);

export default router;