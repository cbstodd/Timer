let webpackConfig = require('./webpack.config');

module.exports = function( config ){
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        //Get all files w/.test & .jsx in that folder
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            // For these files we want to run webpack to use sourcefiles versus bundle.jsx
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],// dots or progress options
        client: {
            mocha: {
                timeout: '4000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    })
};