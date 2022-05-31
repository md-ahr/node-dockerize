import express from 'express';
import { getContactList } from '../controllers/contactController.js';

const router = express.Router();

router.get(`/contact`, getContactList);

export default router;
