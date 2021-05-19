'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/zsm', controller.zsm.index);
  router.get('/user/list', controller.user.list);
  // router.get('/user/:id', controller.user.info);
};
