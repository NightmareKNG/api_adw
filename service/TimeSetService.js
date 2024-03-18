'use strict';

const mongoose = require('mongoose');
var schema = new mongoose.Schema({}, { strict: false });

const { getCollection } = require('../utils/helpers');
const { log } = require('console');

/**
 *
 * body Image 
 * no response value expected for this operation
 **/
exports.addTimeSet = function(body) {
  return new Promise(async function (resolve, reject) {
    try {
      var TimeSet = getCollection('timeset');
      
      body.create_at = Date.now();
      var TimeSet = new TimeSet(body);
      TimeSet.save();

      resolve({ code: 200, message: 'created TimeSet successfully' });
    } catch (error) {
      reject({ code: 404, message: error.message });
    }
  });
}


/**
 * Delete image
 *
 * image_id String 
 * returns inline_response_200_11
 **/
exports.deleteTimeSetById = function(timeset_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var TimeSet = getCollection('timeset');
      const data = await TimeSet.findOne({ _id: timeset_id });
      console.log(data);

      if (data) {
        await data.deleteOne();
        console.log('Document removed successfully');
        resolve({
          code: 200,
          message: "Record deleted successfully",
        });
      } else {
        console.log('Document not found');
      }

    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}


/**
 *
 * returns inline_response_200_8
 **/
exports.getTimeSetAll = function() {
  return new Promise(async function (resolve, reject) {
    var TimeSet = getCollection('timeset');
    var data = [];
    data = await TimeSet.find();

    if (!data.empty) {
      resolve({ code: 200, data: data });
    } else {
      reject({ code: 404, message: 'no user found' });
    }
  });
}

/**
 *
 * image_id String 
 * returns inline_response_200_9
 **/
exports.getTimeSetById = function(timeset_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var TimeSet = getCollection('timeset');
      var data = await TimeSet.findOne({ _id: timeset_id });
      console.log(data);
      if (!data.empty) {
        resolve({ code: 200, data: data });
      } else {
        reject({ code: 400, message: "No user found" });

      }
    } catch (err) {
      reject({ code: 400, message: err.message })
    }
  });
}
/**
 * Update a image
 *
 * body Image_image_id_body 
 * image_id String 
 * returns inline_response_200_10
 **/
exports.updateTimeSetById = function(body,timeset_id) {
  return new Promise(async function (resolve, reject) {
    try {
      var TimeSet = getCollection('timeset');
      var data = await TimeSet.findOneAndUpdate({ _id: timeset_id }, { $set: body });
      console.log(data);
      resolve({ code: 200, message: "Successful operation" });
    } catch (err) {
      reject({ code: 400, message: err.message });
    }
  });
}

