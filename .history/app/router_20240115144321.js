/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/users', controller.user.index);
  router.post('/users', controller.user.create);
  router.put('/users/:id', controller.user.update);
  router.delete('/users/:id', controller.user.destroy);
};
