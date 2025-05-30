import express from 'express';
import { getEntry } from '../controllers/entry.controller';


const router = express.Router()

router.get('/', getEntry)

export default router
