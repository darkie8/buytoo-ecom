const appConfig = require('./../config/appConfig');
const controller = require('./../config/controller/controller_ecom');
const authorization = require('./../middlewares_custom/auth');

let setRouter = (app) => {
    let baseurl = appConfig.apiVersion + '/products';
    app.get(baseurl + '/all', controller.show_all);
    app.post(baseurl + '/create', controller.create_response);
}

module.exports = {
    setRouter: setRouter
}
