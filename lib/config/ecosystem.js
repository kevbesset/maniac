module.exports = {
  router: {
    externals: ['vue-router@4'],
    required: ['layouts', 'views'],
    files: ['router.ts', 'types/Router.type.ts', 'vars/RouteName.ts'],
  },
  lint: {
    devExternals: [
      '@vue/eslint-config-prettier',
      '@vue/eslint-config-typescript',
      'eslint',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      'eslint-plugin-unused-imports',
      'eslint-plugin-vue',
      'prettier',
      'vite-plugin-eslint',
    ],
    files: ['../.eslintrc', '../.prettierrc', '../tsconfig.json'],
  },
  styles: {
    devExternals: ['sass'],
    required: ['placeholders', 'transitions'],
    files: ['assets/sass/_main.scss'],
  },
  project: {
    devExternals: ['@types/node'],
    required: ['*'],
    files: ['App.vue', 'main.ts', 'env.d.ts', '../vite.config.ts'],
  },
}
