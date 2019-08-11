import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Task = sequelize.define('tasts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    done: {
        type: Sequelize.BOOLEAN
    },
    projectid: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false,
        schema: 'apinode'
    });

export default Task;