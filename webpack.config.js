const path = require('path');

module.exports = {
  // Entry point for the application
  entry: './src/index.js',
  output: {
    // Output filename and path for the bundled file
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // Enable source maps for easier debugging
    sourceMapFilename: '[file].map',
  },
  devServer: {
    // Directory for static content
    contentBase: path.join(__dirname, 'dist'),
    // Enable compression for better performance
    compress: true,
    // Port for the development server
    port: 3000,
  },
  module: {
    rules: [
      {
        // Rule for processing JavaScript and JSX files
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            // Babel presets for transpiling JavaScript and React
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    // Resolve these extensions
    extensions: ['.js', '.jsx'],
  },
};