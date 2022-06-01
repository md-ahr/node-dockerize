import express from 'express';
import { validationRules, validate } from '../middlewares/validators/educationSchemaValidators.js';
import { createEducation } from '../controllers/educationController.js';

const router = express.Router();

router.post('/', validationRules(), validate, createEducation);

export default router;
