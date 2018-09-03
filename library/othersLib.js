const logger =require('./loggerLib');
const responses = require('./responseLib')

let saveFunction = (res, id) =>
     (err, result) => {
        if (err) {
            logger.captureError('product field can not be created', 'controller_ecom.js: create_response', 10);
            res.send(responses.generate(true, 'Failed to create Product info', 500, null));
        } else {
            logger.captureInfo('product field has been created', 'controller_ecom.js: create_response', 5)
            res.send(responses.generate(false, `id: ${id} product's info in now in the database`, 200, result))
        }
    }

module.exports = {
    saveFunction: saveFunction
}