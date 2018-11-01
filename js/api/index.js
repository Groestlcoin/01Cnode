'use strict';

var api = require("express").Router();
var groestlcoind = require("./groestlcoind");

api.use('/groestlcoind', groestlcoind);

module.exports = api;
