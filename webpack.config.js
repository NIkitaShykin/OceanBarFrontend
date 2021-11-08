const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    static: path.resolve(__dirname, 'public'),
    hot: true,
    open: true,


    // under discussion with the team / to be removed if appears uselsess
    // proxy: {
    //   '*': {
    //     target: 'http://localhost:3000',
    //     changeOrigin: true,
    //     secure: false,
    //   },
    // },


  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                // {targets: 'defaults'}
              ]
            },
          }
        ]
      },
      {
        test: /\.(sc|c)ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|svg|webp)$/,
        loader: 'file-loader',
        options: {
          name: 'src/resources/img/[name].[ext]'
        }
      },
    ],
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.css'],
  },
}
