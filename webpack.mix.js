const mix = require('laravel-mix');


mix.disableNotifications()
  .setPublicPath('dist')
  .copyDirectory('static', 'dist')
  .js('src/main.js', 'dist')
  .js('src/content.js', 'dist')
  .js('src/background.js', 'dist')
  .webpackConfig({
    module: {
      rules: [
        {
          test: /\.styl$/,
          loader: ["style-loader", "css-loader", "stylus-loader"]
        }
      ]
    }
  });
