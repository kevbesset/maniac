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
    required: ['transitions'],
    files: ['components/ui/layers/ThemeLayer.vue', 'vars/ThemeAttr.ts'],
  },
  progresses: {
    files: ['components/ui/progresses/ProgressCircular.vue'],
  },
  transitions: {
    files: [
      'components/ui/transitions/BemTransition.vue',
      'assets/sass/transitions',
    ],
  },
  buttons: {
    externals: ['sass', 'vue-router@4'],
    required: ['transitions', 'progresses'],
    files: ['components/ui/basics/BaseButton.vue', 'vars/ButtonAttr.ts'],
  },
}
