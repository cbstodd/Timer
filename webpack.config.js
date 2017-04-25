let webpack = require('webpack');

module.exports = {
    entry: ['./app/app.jsx'],
    externals: {},
    plugins: [new webpack.ProvidePlugin({ '$': 'jquery', 'jQuery': 'jquery' })],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'app/components/Main.jsx',
            Navbar: 'app/components/Navbar.jsx',
            Timer: 'app/components/Timer.jsx',
            Countdown: 'app/components/Countdown.jsx',
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: [
                    /\.jsx?$/, /\.css$/
                ],
                exclude: /(node_modules|bower_components)/
            }, {
                loader: 'style!css', // CSS Loader
                test: /\.css?$/
            }
        ]
    },
    watch: true,
    devtool: 'cheap-module-eval-source-map' // Creates .map file in chrome dev tools.
};
