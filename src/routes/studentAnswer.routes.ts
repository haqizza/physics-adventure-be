import express from 'express';
import {
  getStudentsAnswer,
  getStudentAnswerById,
  getStudentsAnswerByClass,
  createStudentAnswer,
  updateStudentAnswer,
  deleteStudentsAnswer
} from '../controllers/studentsAnswer.controller'

const router = express.Router()

router.get('/', getStudentsAnswer)
router.get('/:studentUuid', getStudentAnswerById)
router.get('/class/:studentClass', getStudentsAnswerByClass)
router.post('/', createStudentAnswer)  
router.put('/:studentUuid', updateStudentAnswer)
router.delete('/:studentUuid', deleteStudentsAnswer)

export default router
