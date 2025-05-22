import { Request, Response } from 'express';
import db from '../config/database';
import { studentAnswerSchema } from '../validators/studentAnswer.validator';
import { v4 as uuidv4 } from 'uuid';
import { Student, StudentColumns } from '../types';
import { RowDataPacket } from 'mysql2';


const renameDataVariables = (resultRows: RowDataPacket[]) => {
  const dataRows: Student[] = [];

  for (let i = 0; i < resultRows.length; i++) {
    dataRows.push({
      id: resultRows[i].id,
      uuid: resultRows[i].uuid,
      name: resultRows[i].name,
      studentClass: resultRows[i].student_class,
      state_1: resultRows[i].lvl_2_state_1,
      state_2: resultRows[i].lvl_2_state_2,
      state_3: resultRows[i].lvl_2_state_3,
      hypothesis_1: resultRows[i].lvl_3_hypothesis_1,
      hypothesis_2: resultRows[i].lvl_3_hypothesis_2,
      hypothesis_3: resultRows[i].lvl_3_hypothesis_3,
      table_q_1: resultRows[i].lvl_5_table_q_1,
      table_q_2: resultRows[i].lvl_5_table_q_2,
      table_q_3: resultRows[i].lvl_5_table_q_3,
      conslusion: resultRows[i].lvl_7_conslusion,
    });
  };

  return dataRows;
}

export const getStudentsAnswer = (req: Request, res: Response) => {
  db.query<RowDataPacket[]>('SELECT * FROM students_answer', (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const data = renameDataVariables(results);

    const body = {
      code: '200',
      message: 'Students answer retrieved successfully',
      data: data
    }

    res.json(body);
  });
};

export const getStudentAnswerById = (req: Request, res: Response) => {
  const uuid = req.params.studentUuid

  db.query<RowDataPacket[]>('SELECT * FROM students_answer WHERE uuid = ? LIMIT 1', [uuid], (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const data = renameDataVariables(results);

    const body = {
      code: '200',
      message: 'Student answer by id retrieved successfully',
      data: results
    }

    res.json(body);
  });
};

export const getStudentsAnswerByClass = (req: Request, res: Response) => {
  const studentClass = req.params.studentClass

  db.query<RowDataPacket[]>('SELECT * FROM students_answer WHERE student_class = ?', [studentClass] , (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const body = {
      code: '200',
      message: 'Students answer by class retrieved successfully',
      data: results
    }

    res.json(body);
  });
};

export const createStudentAnswer = (req: Request, res: Response) => {
  const parsed = studentAnswerSchema.safeParse(req.body.data);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  const {
    name,
    studentClass,
    state_1,
    state_2,
    state_3,
    hypothesis_1,
    hypothesis_2,
    hypothesis_3,
    table_q_1,
    table_q_2,
    table_q_3,
    conslusion
  } = parsed.data;

  const uuid = uuidv4()

  // Create SQL format timestamp
  const date = new Date();
  const timestamp = date.toISOString().slice(0, 19).replace('T', ' ');

  db.query(
    'INSERT INTO students_answer (name, student_class, uuid, lvl_2_state_1, lvl_2_state_2, lvl_2_state_3, lvl_3_hypothesis_1, lvl_3_hypothesis_2, lvl_3_hypothesis_3, lvl_5_table_q_1, lvl_5_table_q_2, lvl_5_table_q_3, lvl_7_conslusion, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [
      name,
      studentClass,
      uuid,
      state_1,
      state_2,
      state_3,
      hypothesis_1,
      hypothesis_2,
      hypothesis_3,
      table_q_1,
      table_q_2,
      table_q_3,
      conslusion,
      timestamp
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const body = {
        code: '201',
        message: 'Student answer created',
        uuid: uuid
      }
      
      res.status(201).json(body);
    }
  );
}; 

export const updateStudentAnswer = (req: Request, res: Response) => {
  const parsed = studentAnswerSchema.safeParse(req.body.data);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.format() });
  }

  const {
    name,
    studentClass,
    state_1,
    state_2,
    state_3,
    hypothesis_1,
    hypothesis_2,
    hypothesis_3,
    table_q_1,
    table_q_2,
    table_q_3,
    conslusion
  } = parsed.data;

  const uuid = req.params.studentUuid

  // Create SQL format timestamp
  const date = new Date();
  const timestamp = date.toISOString().slice(0, 19).replace('T', ' ');

  db.query(
    'INSERT INTO students_answer (name, student_class, lvl_2_state_1, lvl_2_state_2, lvl_2_state_3, lvl_3_hypothesis_1, lvl_3_hypothesis_2, lvl_3_hypothesis_3, lvl_5_table_p1_1, lvl_5_table_p1_2, lvl_5_table_p1_3, lvl_5_table_p2_1, lvl_5_table_p2_2, lvl_5_table_p2_3, lvl_7_conslusion, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?) WHERE uuid = ?',
    [
      name,
      studentClass,
      state_1,
      state_2,
      state_3,
      hypothesis_1,
      hypothesis_2,
      hypothesis_3,
      table_q_1,
      table_q_2,
      table_q_3,
      conslusion,
      timestamp,
      uuid
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });

      const body = {
        code: '200',
        message: 'Student answer updated',
        uuid: uuid
      }
      
      res.status(200).json(body);
    }
  );
};

export const deleteStudentsAnswer = (req: Request, res: Response) => {
  const uuid = req.params.studentUuid

  db.query('DELETE FROM students_answer WHERE uuid = ?', [uuid] , (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const body = {
      code: '200',
      message: 'Student answer deleted successfully',
    }

    res.json(body);
  });
};