import express from 'express';
import * as Auth from '../controllers/authController.js';

const router = express.Router();

router.post('/', Auth.register);
router.post('/', Auth.login);

export default router;
