//----------------------------------------------------------------------
// webpack.config.js
// Author: Lucas Manning and Bob Dondero
//----------------------------------------------------------------------

const path = require('path');

module.exports = {

   mode: "production",  // "production", "development", "none"

   entry: {
      main: './main.js',
      mainprotected: './mainprotected.js'
   },

   output: {
      // Store the output files in a subdirectory named static.
      path: path.resolve(__dirname, 'static'),

      // Name the output files.
      filename: '[name].bundle.js'
   },

   module: {
      rules: [{
         // Use babel-loader as the loader.
         loader: 'babel-loader',

         // Use these loader options.
         options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
         },

         // Include files whose names match the specified pattern.
         test: /\.jsx?$/,

         // Exclude files whose names match the specified pattern.
         exclude: /node_modules/
      }]
   }
};
