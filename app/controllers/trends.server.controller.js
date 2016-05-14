'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    _ = require('lodash'),
    Trend = mongoose.model('Trending');

/**
 * List of Trends
 */
exports.list = function(req, res) {
    Trend.find().exec(function(err, trend) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(trend);
        }
    });
};

exports.read = function(req, res) {
	Trend.findById(req.params.locationId).exec(function(err, trend) {
		if (err) {
	      return res.status(400).send({
	          message: errorHandler.getErrorMessage(err)
	      });
      } else {
         if (!trend) {
				return res.status(404).send({
  					message: 'Location not found'
  				});
			}
			res.json(trend);
      }
	});
};