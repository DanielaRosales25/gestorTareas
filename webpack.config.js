const path = require('path');

module.exports = {
   entry:'./src/index.js', //punto de entrada de nuestra
   output: {
       filename: 'bundle.js', //nombre del
        path: path.resolve(__dirname, 'dist'), //carpeta de salida
    },
    modele:{
        rules:[
            {
                test:/\.css$/, //identificar archivos css
                use:['style-loader','css-loader'], //loaders para procesar archivos css
            },
            {
                test: /\.js$/,//identificararchivos js
                exclude: /node_modules/, //excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader',//loader para js moderno
                    options:{
                        presets:['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    devtool: 'source-map',//generar source maps para facilitar la depuracion
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),//carpeta principal de servidor
        compress: true,// habilitar la comprencion gzip
        port: 9000, //puerto del servidor de desarollo
    },
};