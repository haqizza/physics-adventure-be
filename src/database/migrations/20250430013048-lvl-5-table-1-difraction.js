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
  return db.createTable('lvl_5_table_1_difraction', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length: 10,
      notNull: true
    },
    p1_1: 'decimal',
    p1_2: 'decimal',
    p1_3: 'decimal',
    p2_1: 'decimal',
    p2_2: 'decimal',
    p2_3: 'decimal',
    student_id: {
      type: 'string',
      notNull: true,
      foreignKey: {
        name: 'lvl_5_student_id_fk',
        table: 'students',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'uuid'
      }
    },
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
  return db.dropTable('lvl_2_problem_slvl_5_table_1_difractiontatement');
};

exports._meta = {
  "version": 1
};
