const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:"index.js",
        path: path.resolve(__dirname,'./dist'),
        libraryTarget: 'umd',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }],
                exclude:/node_modules/
            },
        ]
    },
}