const controllers = require('./controllers');
const middleware = require('./middleware');

const router = (app) => {
  app.get('/getDomos', middleware.requiresLogin, controllers.Domo.getDomos);

  app.get('/login', middleware.requiresSecure, middleware.requiresLogout, controllers.Account.loginPage);
  app.post('/login', middleware.requiresSecure, middleware.requiresLogout, controllers.Account.login);

  app.post('/signup', middleware.requiresSecure, middleware.requiresLogout, controllers.Account.signup);

  app.get('/logout', middleware.requiresLogin, controllers.Account.logout);

  app.get('/maker', middleware.requiresLogin, controllers.Domo.makerPage);
  app.post('/maker', middleware.requiresLogin, controllers.Domo.makeDomo);

  app.get('/', middleware.requiresSecure, middleware.requiresLogout, controllers.Account.loginPage);

  app.delete('/deleteDomo', middleware.requiresLogin, controllers.Domo.deleteDomo);
};

module.exports = router;
