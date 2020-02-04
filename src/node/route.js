// eslint-disable-next-line no-unused-vars
const express = require('express');
// eslint-disable-next-line no-unused-vars
const bodyParser = require('body-parser');
const mysql = require('mysql');

// eslint-disable-next-line no-unused-vars
const connection = mysql.createPool({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db'
});
