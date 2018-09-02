let appConfig = {};
appConfig.port = 5000;
appConfig.allowedCrossOrigin = '*';
appConfig.env = 'dev';
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/ecomdb'
};
appConfig.apiVersion = '/api/v1';
module.exports = {
    port : appConfig.port,
    allowedCrossOrigin : appConfig.allowedCrossOrigin,
    env : appConfig.env,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion,
}