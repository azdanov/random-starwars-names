import { resolve } from 'path';

export default {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'index.min.js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'RandomStarWarsNames',
  },
  devtool: 'source-map',
  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },
  resolve: {
    extensions: ['.ts'],
  },
};
