// src/index.js

const { executeSELECTQuery, executeINSERTQuery, executeDELETEQuery } = require('./queryExecutor');
const {parseSelectQuery, parseINSERTQuery, parseDeleteQuery} = require('./queryParser');
const { readCSV, writeCSV } = require('./csvReader');


module.exports = {readCSV, writeCSV ,parseDeleteQuery, parseSelectQuery, parseINSERTQuery, executeSELECTQuery, executeINSERTQuery, executeDELETEQuery };

