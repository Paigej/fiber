//variables that can be used to access the node modules
var path = require('path');
var webpack = require('webpack');

module.exports = {//exports modules as a whole to be used globally
  entry: { //sets up module with an entry point for the bundle
    app : [
      './lib/index.js'],//js index file
  },
  output: {//options for output
    path: path.join(__dirname, './public/js/'),//absolute path
    filename: `app.js`,//specifies name of file
    publicPath: '/js/'//specifies the path when accessed publicly (i.e. browser)
  },
  plugins: [//add web plugins to module
    // new plugin created that specifies the environment as the production env
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.UglifyJsPlugin({//makes human unreadible but optimizes for time
    }),
  ],
  node: {//compiles for node environment
    fs: "empty"//default filesystem set to empty
  },
  resolve: {//options for resolving path to modules (can replace with other module or path)
    alias: {//modules are compared to an alias and replaced when there's a match
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']//Resolve files with no extentions and .js
  },
  resolveLoader: {//replaces loader's modules and paths
    'fallback': path.join(__dirname, 'node_modules')//look for modules not only in root or resolve.modulesDirectories
  },
  module: {//module options
    loaders: [//array to store loader info as JSON
    {
      test: /\.js$/, //requires js extention
      loaders: ['react-hot', 'babel'], //modules used as loaders
      exclude: /node_modules/, //can't be located in /fiber/node_modules
      include: [path.join(__dirname,'./lib')] //path that the modules must be under
    },
    {
      test: /\.xml$/,//requires xml extention
      loader: "raw"//module used as a loader
    },
    {
      test: /\.json$/,//requires .json extention
      loaders: ['json-loader']//module used as a loader
    },
    {
      test: /\.css?$/,//requires .css extention
      loaders: ['style', 'raw'],//modules used as loaders
      include: __dirname //path that the modules must be under
    }]
  }
};
