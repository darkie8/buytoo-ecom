const moment = require('moment');
const momenttz = require('moment-timezone');
const timezone = 'Asia/Kolkata';

let now = moment().format();
let now2 = moment(now).tz(timezone).format('MMMM Do YYYY, h:mm:ss');
let getLocTime = (zone) => momenttz.tz(now2, timezone).clone().tz(zone).format('MMMM Do YYYY, h:mm:ss')

module.exports = {
    now: now2,
    getLocTime: getLocTime,
    timezone: timezone
}