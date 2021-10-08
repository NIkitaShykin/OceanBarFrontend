const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public'),
  },
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'public'),
    hot: true,
    open: true,
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
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
}
