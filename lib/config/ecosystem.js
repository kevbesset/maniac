module.exports = {
  router: {
    externals: ['vue-router@4'],
    required: ['layouts', 'views'],
    files: ['router.ts', 'types/Router.type.ts', 'vars/RouteName.ts'],
  },
  lint: {
    files: ['../.eslintrc', '../.prettierrc', '../tsconfig.json'],
  },
  styles: {
    required: ['placeholders', 'transitions'],
    files: ['assets/sass/_main.scss'],
  },
  project: {
    externals: ['sass'],
    required: ['*'],
    files: ['App.vue', 'main.ts', 'env.d.ts', '../vite.config.ts'],
  },
}
