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
    lvl_5_table_p1_1: 'real',
    lvl_5_table_p1_2: 'real',
    lvl_5_table_p1_3: 'real',
    lvl_5_table_p2_1: 'real',
    lvl_5_table_p2_2: 'real',
    lvl_5_table_p2_3: 'real',
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
  return db.dropTable('student_answer');
};

exports._meta = {
  "version": 1
};
