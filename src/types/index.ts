export interface StudentColumns {
  id?: number;
  uuid: string;
  name: string;
  student_class: string;
  lvl_2_state_1: string;
  lvl_2_state_2: string;
  lvl_2_state_3: string;
  lvl_3_hypothesis_1: string;
  lvl_3_hypothesis_2: string;
  lvl_3_hypothesis_3: string;
  lvl_5_table_q_1: number;
  lvl_5_table_q_2: number;
  lvl_5_table_q_3: number;
  lvl_7_conslusion: string;
}

export interface Student {
  id?: number;
  uuid: string;
  name: string;
  studentClass: string;
  state_1: string;
  state_2: string;
  state_3: string;
  hypothesis_1: string;
  hypothesis_2: string;
  hypothesis_3: string;
  table_q_1: string;
  table_q_2: string;
  table_q_3: string;
  conslusion: string;
}
