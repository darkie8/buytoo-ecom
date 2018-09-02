let saveFunction = (err, result, id) => {
    if (err) {
        logger.captureError('product info can not be created', 'controller.js', 10);
        res.send(responses.generate(true, 'Failed to create Product info', 500, null));
    } else {
        res.send(responses.generate(false, `id: ${id} product's info in now in the database`, 200, result))
    }
}

module.exports = {
    saveFunction:saveFunction
}