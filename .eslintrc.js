
module.exports = {
  /* eslint-disable-next-line */
  /* eslint-enable */
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0,
    'max-nested-callbacks': [0, 2], // 回调嵌套深度
     'indent': ["error", 4, { SwitchCase: 1 }]

  },
  'globals': {
    'Swiper': true
  } // 这个地方是新加入的   全局注入
}
