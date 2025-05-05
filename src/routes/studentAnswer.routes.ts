import express from 'express';
import {
  getStudentsAnswer,
  getStudentAnswerById,
  getStudentsAnswerByClass,
  createStudentAnswer
} from '../controllers/studentsAnswer.controller';

const router = express.Router();

router.get('/', getStudentsAnswer);
router.get('/:studentId', getStudentAnswerById);
router.get('/class/:studentClass', getStudentsAnswerByClass);
router.post('/', createStudentAnswer);  

export default router;
