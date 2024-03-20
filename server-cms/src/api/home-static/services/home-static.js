'use strict';

/**
 * home-static service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-static.home-static');
