module.exports = {
  layouts: {
    externals: ['vue-router@4'],
    required: ['transitions'],
    files: [
      'components/layouts/DefaultLayout.vue',
      'components/layouts/EmptyLayout.vue',
    ],
  },
  views: {
    files: ['views/HomePage.vue', 'views/NotFoundPage.vue'],
  },
  layers: {
    files: ['components/ui/layers/ThemeLayer.vue', 'vars/ThemeAttr.ts'],
  },
  loaders: {
    files: ['components/ui/loaders/InfiniteLoader.vue'],
  },
  transitions: {
    files: [
      'components/ui/transitions/BemTransition.vue',
      'assets/sass/transitions',
    ],
  },
  buttons: {
    externals: ['sass', 'vue-router@4'],
    required: ['transitions', 'loaders', 'layers'],
    files: ['components/ui/basics/BaseButton.vue', 'vars/ButtonAttr.ts'],
  },
}
