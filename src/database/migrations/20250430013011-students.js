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
  return db.createTable('students', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      length: 10
    },
    uuid: {
      type: 'string',
      notNull: true,
      unique: true
    },
    name: 'string',
    class: 'string',
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
  return db.dropTable('students');
};

exports._meta = {
  "version": 1
};
