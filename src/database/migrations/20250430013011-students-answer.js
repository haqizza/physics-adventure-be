'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  return db.createTable('students_answer', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    uuid: {
      type: 'string',
      length: '40',
      notNull: true,
      unique: true
    },
    name: { type: 'string', length: 50},
    student_class: { type: 'string', length: 6},
    lvl_2_state_1: 'text',
    lvl_2_state_2: 'text',
    lvl_2_state_3: 'text',
    lvl_3_hypothesis_1: 'text',
    lvl_3_hypothesis_2: 'text',
    lvl_3_hypothesis_3: 'text',
    lvl_5_table_q_1: 'text',
    lvl_5_table_q_2: 'text',
    lvl_5_table_q_3: 'text',
    lvl_7_conslusion: 'text',
    created_at: {
      type: 'timestamp',
      notNull: false
    },
    updated_at: {
      type: 'timestamp',
      notNull: false 
    }
  });
};

exports.down = function(db) {
  return db.dropTable('students_answer');
};

exports._meta = {
  "version": 1
};
