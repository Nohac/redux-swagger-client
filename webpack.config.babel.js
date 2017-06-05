import webpack from 'webpack';
import path from 'path';

const { NODE_ENV } = process.env;

const plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
  }),
];

const filename = `redux-swagger-client${NODE_ENV === 'production' ? '.min' : ''}.js`;

NODE_ENV === 'production' && plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
      warnings: false,
    },
  })
);

export default {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:[ 'stage-2', 'es2015' ]
        }
      }
    ]
  },
    // module: {
    //   loaders: [
    //     { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
    //   ],
    // },

    entry: [
      './src/index',
    ],

    output: {
      path: path.join(__dirname, 'dist'),
        filename,
        library: 'ReduxSwaggerClient',
        libraryTarget: 'umd',
    },

    plugins,
};
