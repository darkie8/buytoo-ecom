const appConfig = require('./../config/appConfig');
const controller = require('./../config/controller/controller_ecom');
const authorization = require('./../middlewares_custom/auth');

let setRouter = (app) => {
    let baseurl = appConfig.apiVersion + '/products';
    app.get(baseurl + '/all', controller.show_all);
    app.post(baseurl + '/create',authorization.isAuth, controller.create_response);
    app.get(baseurl + '/view/product_id/:product_id', controller.viewByproduct_id);
    app.get(baseurl + '/view/uuid/:uuid', controller.viewBy_uuid);
    app.get(baseurl + '/view/categories/:categories', controller.viewByCategory);
    app.put(baseurl + '/edit/:product_id',authorization.isAuth, controller.editProduct_info);
    app.post(baseurl + '/delete/:product_id',authorization.isAuth, controller.deleteProduct_info);
    app.post(baseurl + '/delete/categories/:categories',authorization.isAuth, controller.deletePrduct_info_byCategory);
    app.put(baseurl + '/update/offer_price/:product_id',authorization.isAuth, controller.implementing_offer_price);
    app.put(baseurl + '/update/added_to_cart/:product_id',authorization.isAuth, controller.addremoveProduct_to_cart);
    app.put(baseurl + '/update/user_bought/:product_id',authorization.isAuth_user, controller.addUser_amout_bought);
    app.get(baseurl + '/view/users/:users',authorization.isAuth, controller.viewByusers_bought_by);
}

module.exports = {
    setRouter: setRouter
}
