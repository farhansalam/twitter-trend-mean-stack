'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Trending Schema
 */
var TrendingSchema = new Schema({
    location: {
        type: String,
        default: '',
        trim: true,
        unique : true,
    	  trend: {
  	      type: Array,
  	      default: '',
  	      trim: true,     
	    }
    },
});

mongoose.model('Trending', TrendingSchema);