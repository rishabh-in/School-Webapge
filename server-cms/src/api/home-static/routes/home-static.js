'use strict';

/**
 * home-static router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::home-static.home-static');
