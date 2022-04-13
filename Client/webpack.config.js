const path = require("path");

module.exports = {
    entry: {
        app: '/app.js',
        index: '/index.js',
        nightmode: '/nightmode.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    mode: 'development',
}