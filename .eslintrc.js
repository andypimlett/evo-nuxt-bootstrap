module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  env: {
    browser: true,
    node: true
  },
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
