const appConfig = require('./../config/appConfig');
const controller = require('./../config/controller/controller_ecom');
const authorization = require('./../middlewares_custom/auth');

let setRouter = (app) => {
    let baseurl = appConfig.apiVersion + '/products';
    app.get(baseurl + '/all', controller.show_all);
    app.post(baseurl + '/create', controller.create_response);
    app.get(baseurl + '/view/product_id/:product_id', controller.viewByproduct_id);
    app.get(baseurl + '/view/uuid/:uuid', controller.viewBy_uuid);
    app.get(baseurl + '/view/categories/:categories', controller.viewByCategory);
    app.put(baseurl + '/edit/:product_id', controller.editProduct_info);
    app.post(baseurl + '/delete/:product_id', controller.deleteProduct_info);
    app.post(baseurl + '/delete/categories/:categories', controller.deletePrduct_info_byCategory);

}

module.exports = {
    setRouter: setRouter
}
