module.exports = {
  router: {
    externals: ['vue-router'],
    required: ['layouts', 'views'],
    files: ['router.ts', 'types/Router.type.ts', 'vars/RouteName.ts'],
    todo: ['use plugin in main.ts'],
  },
  i18n: {
    externals: ['vue-i18n'],
    devExternals: ['@intlify/unplugin-vue-i18n'],
    required: ['storage'],
    files: ['i18n.ts', 'vars/I18nAttr.ts'],
    todo: ['use plugin in main.ts', 'config vite with i18n'],
  },
  prettier: {
    devExternals: ['prettier'],
    files: ['../.prettierrc'],
  },
  lint: {
    required: ['prettier'],
    devExternals: [
      '@rushstack/eslint-patch',
      '@vue/eslint-config-prettier',
      '@vue/eslint-config-typescript',
      'eslint',
      'eslint-plugin-vue',
      'vite-plugin-eslint',
    ],
    files: ['../.eslintrc.cjs','../tsconfig.json'],
    todo: ['config vite with vite-plugin-eslint'],
  },
  styles: {
    devExternals: ['sass'],
    required: ['transitions', 'directives'],
    files: [
      'assets/sass/_main.scss',
      'assets/sass/_reset.scss',
      'assets/sass/_theme.scss',
      'assets/sass/_placeholder.scss',
      'assets/sass/placeholders/_form.scss',
      'assets/sass/placeholders/_spacing.scss',
      'assets/sass/placeholders/_sr-only.scss',
      'assets/sass/placeholders/_typography.scss'
    ],
    todo: ['import main.scss in App.vue'],
  },
  project: {
    devExternals: [
      '@types/node',
      '@vitejs/plugin-vue',
      'typescript',
      'vite',
      'vite-plugin-eslint',
      'vue-tsc'
    ],
    required: ['*'],
    files: ['App.vue', 'main.ts', '../vite.config.ts', '../public/favicon.png', '../index.html'],
    remove: [
      'style.css',
      'components/HelloWorld.vue',
      'assets/vue.svg',
      '../public/vite.svg'
    ]
  },
}
