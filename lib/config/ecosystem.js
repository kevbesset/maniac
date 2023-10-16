module.exports = {
  router: {
    externals: ['vue-router@4'],
    required: ['layouts', 'views'],
    files: ['router.ts', 'types/Router.type.ts', 'vars/RouteName.ts'],
    todo: ['use plugin in main.ts'],
  },
  i18n: {
    externals: ['vue-i18n@9'],
    devExternals: ['@intlify/unplugin-vue-i18n'],
    required: ['storage'],
    files: ['i18n.ts', 'vars/I18nAttr.ts'],
    todo: ['use plugin in main.ts', 'config vite with i18n'],
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
    todo: ['config vite with vite-plugin-eslint'],
  },
  styles: {
    devExternals: ['sass'],
    required: ['placeholders', 'transitions'],
    files: ['assets/sass/_main.scss'],
    todo: ['import main.scss in App.vue'],
  },
  project: {
    devExternals: ['@types/node'],
    required: ['*'],
    files: ['App.vue', 'main.ts', 'env.d.ts', '../vite.config.ts'],
  },
}
