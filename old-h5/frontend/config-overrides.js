const { override } = require('customize-cra')

module.exports = override(
  (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      loader: 'class-to-css-loader',
      options: {
        type: 'react',
        rules: [
          { key: 'maw', valReg: /n/, css: 'max-width: none' },
          { key: 'tof', valReg: /e/, css: 'text-overflow: ellipsis' },
        ],
      },
    })
    
    if (process.env.NODE_ENV !== 'development') {
      config.output.publicPath = 'https://www.danshen-helper.com/mas/'
    }
    return config
  }
)