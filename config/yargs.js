
const argv = require('yargs').options({
    puerto: {
        default: '/dev/ttyACM0',
        alias: 'p',
        desc: 'Puerto del arduino'
    }
}).argv;


module.exports = {
    argv
};