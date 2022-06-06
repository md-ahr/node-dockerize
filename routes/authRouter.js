import express from 'express';
import * as Auth from '../controllers/authController.js';
import {
    userValidationRules as validationRules,
    validate
} from '../middlewares/validators/schemaValidators.js';

const router = express.Router();

router.post('/register', validationRules(), validate, Auth.register);
router.post('/login', Auth.login);

export default router;
