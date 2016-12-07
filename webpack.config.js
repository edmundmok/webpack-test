module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    watch: true,
    module: {
    		preLoaders: [
            {
                test: /\.js$/, // include .js files
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                loader: "jshint-loader"
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],
    }, 
    jshint: {
        // jshint errors are displayed by default as warnings
        // set emitErrors to true to display them as errors
        emitErrors: true,

        // jshint to not interrupt the compilation
        // if you want any file with jshint errors to fail
        // set failOnHint to true
        failOnHint: false
    }
};