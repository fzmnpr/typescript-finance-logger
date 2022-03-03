const path = require('path');

module.exports= {
    devtool: 'inline-source-map',
    entry: './src/app.ts',
    mode: 'development',
    watch: true,
    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        publicPath: 'public',
        filename: './dist/bundle.js',
        path: path.resolve(__dirname, 'public'),
    }
}