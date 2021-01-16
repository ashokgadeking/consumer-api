const { get } = require('axios')

module.exports = function () {
    return get(`http://127.0.0.1:1234/token/1234`)
}
