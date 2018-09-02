// response schema

let generate = (err, msg, stat, data) => {
    return {
        error: err,
        message: msg,
        status: stat,
        dataOutput: data
    };
}

module.exports = {
    generate: generate
}