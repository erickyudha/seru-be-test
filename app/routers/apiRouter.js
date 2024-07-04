const express = require('express');

const controllers = require('../controllers');

const apiRouter = express.Router();

const attachRouteToController = (name, router, controller) => {
    router.get(`/${name}`, controller.getAll.bind(controller));
    router.get(`/${name}/:id`, controller.getById.bind(controller));
    router.post(`/${name}`, controller.create.bind(controller));
    router.put(`/${name}/:id`, controller.update.bind(controller));
    router.delete(`/${name}/:id`, controller.delete.bind(controller));
}

attachRouteToController('user', apiRouter, controllers.UserController);
attachRouteToController('pricelist', apiRouter, controllers.PricelistController);
attachRouteToController('vehicle-brand', apiRouter, controllers.VehicleBrandController);
attachRouteToController('vehicle-model', apiRouter, controllers.VehicleModelController);
attachRouteToController('vehicle-type', apiRouter, controllers.VehicleTypeController);
attachRouteToController('vehicle-year', apiRouter, controllers.VehicleYearController);

module.exports = apiRouter;