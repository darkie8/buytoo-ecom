const logger = require('./../library/loggerLib');
const response = require('./../library/responseLib');
const check = require('./../library/checkLib');
const user_id = require('./../library/userLib')
let isAuth = (req, res, next) => {
    if (req.params.authToken || req.query.authToken || req.header('authToken')) {
        if (req.params.authToken === 'admin_alpha_priority_10_id_101' ||
            req.query.authToken === 'admin_alpha_priority_10_id_101' ||
            req.header('authToken') === 'admin_alpha_priority_10_id_101') {
            req.user = {
                fullname: 'Alpha',
                userId: 'id_gen101'
            }
            next();
        } else {
            logger.captureError('Incorrect authentication token', 'Authentication Middleware', 10);
            let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null);
            res.send(apiResponse);
        }
    } else {
        logger.captureError('Authentication Token Missing', 'Authentication Middleware', 10);
        let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null);
        res.send(apiResponse);
    }
}
let isAuth_user = (req, res, next) => {
    if(req.body.accessor === 'user')
    {
        let test_user =(array, compare) => {
            let set1 = new Set([...array, compare])
            return array.length === [...set1].length
        }
        let array_id = user_id.user_ids
        if (req.params.users || req.body.users) {
            if ((array_id,req.params.users) ||
            (array_id,req.body.users)) {
              next();
            } else {
                logger.captureError('Incorrect authentication token', 'Authentication Middleware', 10);
                let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null);
                res.send(apiResponse);
            }
        } else {
            logger.captureError('Authentication Token Missing', 'Authentication Middleware', 10);
            let apiResponse = response.generate(true, 'Authentication Token Is Missing In Request', 403, null);
            res.send(apiResponse);
        }
    
} else if(req.body.accessor === 'admin') {
    isAuth(req,res,next)
}
else {
    logger.captureError('Accesor not specified(eg: user/admin)', 'Authentication Middleware', 10);
            let apiResponse = response.generate(true, 'Accesor not specified(eg: user/admin)', 403, null);
            res.send(apiResponse);
}
}

module.exports = {
    isAuth: isAuth,
    isAuth_user: isAuth_user
}