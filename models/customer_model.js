const db = require('../database');

// tämä vastaa bodyn jsonia
const customer = {
  getById: function(id, callback) {
    return db.query('select * from customer where id_customer=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from customer', callback);
  },
  add: function(customer, callback) {
    return db.query(
      'insert into customer (fname,lname,streetadress) values(?,?,?)',
      [customer.fname, customer.lname, customer.streetadress],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from customer where id_customer=?', [id], callback);
  },
  update: function(id, customer, callback) {
    return db.query(
      'update customer set fname=?,lname=?, streetadress=? where id_customer=?',
      [customer.fname, customer.lname, customer.streetadress, id],
      callback
    );
  }
};
module.exports = customer;