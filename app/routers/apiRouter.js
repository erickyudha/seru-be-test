const express = require('express');

const controllers = require('../controllers');
const { authorizeOptional } = require('../controllers/AuthController');

const apiRouter = express.Router();
const authController = controllers.AuthController

// Auth route
apiRouter.post('/login', authController.login.bind(authController));
apiRouter.post('/register', authController.register.bind(authController));
apiRouter.get('/me', authController.authorizeUser.bind(authController),  authController.getSelf.bind(authController));

// crud route
const attachRouteToController = (name, router, controller, auth) => {
    router.get(`/${name}`, auth.authorizeOptional.bind(auth), controller.getAll.bind(controller));
    router.get(`/${name}/:id`, auth.authorizeOptional.bind(auth), controller.getById.bind(controller));
    router.post(`/${name}`, auth.authorizeAdmin.bind(auth), controller.create.bind(controller));
    router.put(`/${name}/:id`, auth.authorizeAdmin.bind(auth), controller.update.bind(controller));
    router.delete(`/${name}/:id`, auth.authorizeAdmin.bind(auth), controller.delete.bind(controller));
}

attachRouteToController('pricelist', apiRouter, controllers.PricelistController, authController);
attachRouteToController('vehicle-brand', apiRouter, controllers.VehicleBrandController, authController);
attachRouteToController('vehicle-model', apiRouter, controllers.VehicleModelController, authController);
attachRouteToController('vehicle-type', apiRouter, controllers.VehicleTypeController, authController);
attachRouteToController('vehicle-year', apiRouter, controllers.VehicleYearController, authController);

const attachUserRouteToController = (name, router, controller, auth) => {
    router.get(`/${name}`, auth.authorizeAdmin.bind(auth), controller.getAll.bind(controller));
    router.get(`/${name}/:id`, auth.authorizeAdmin.bind(auth), controller.getById.bind(controller));
    router.post(`/${name}`, auth.authorizeAdmin.bind(auth), controller.create.bind(controller));
    router.put(`/${name}/:id`, auth.authorizeUser.bind(auth), controller.update.bind(controller));
    router.delete(`/${name}/:id`, auth.authorizeAdmin.bind(auth), controller.delete.bind(controller));
}

attachUserRouteToController('user', apiRouter, controllers.UserController, authController);
module.exports = apiRouter;