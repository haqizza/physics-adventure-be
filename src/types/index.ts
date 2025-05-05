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
  lvl_5_table_p1_1: number;
  lvl_5_table_p1_2: number;
  lvl_5_table_p1_3: number;
  lvl_5_table_p2_1: number;
  lvl_5_table_p2_2: number;
  lvl_5_table_p2_3: number;
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
  table_p1_1: number;
  table_p1_2: number;
  table_p1_3: number;
  table_p2_1: number;
  table_p2_2: number;
  table_p2_3: number;
  conslusion: string;
}
