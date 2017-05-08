module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
                '**/app.test.js'
        ],

        reporters: ['progress'], 
        port: 9876, 
        colors: true,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true

    });
};