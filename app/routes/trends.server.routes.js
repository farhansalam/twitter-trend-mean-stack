'use strict';

module.exports = function(app) {
	var trends = require('../../app/controllers/trends.server.controller');

	app.route('/locations')
	  .get(trends.list);

	app.route('/locations/:locationId')
   	  .get(trends.read);
};