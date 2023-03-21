/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      // https://github.com/vuejs/eslint-plugin-vue/issues/1355
      files: ['*.html'],
      rules: {
        'vue/comment-directive': 'off'
      }
    }
  ]
}
