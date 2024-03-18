'use strict';

var utils = require('../utils/writer.js');
var TimeSet = require('../service/TimeSetService');

module.exports.addTimeSet = function addTimeSet (req, res, next, body) {
  TimeSet.addTimeSet(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTimeSetById = function deleteTimeSetById (req, res, next, id) {
  TimeSet.deleteTimeSetById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTimeSetAll = function getTimeSetAll (req, res, next) {
  TimeSet.getTimeSetAll()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTimeSetById = function getTimeSetById (req, res, next, id) {
  TimeSet.getTimeSetById(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};


module.exports.updateTimeSetById = function updateTimeSetById (req, res, next, body, id) {
  TimeSet.updateTimeSetById(body, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};