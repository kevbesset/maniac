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
  themes: {
    required: ['transitions'],
    files: [
      'components/ui/themes/ThemeManager.vue',
      'vars/ThemeAttr.ts',
      'assets/sass/_theme.scss',
    ],
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
    externals: ['vue-router@4'],
    required: ['transitions', 'progresses'],
    files: ['components/ui/basics/BaseButton.vue', 'vars/ButtonAttr.ts'],
  },
  modals: {
    required: ['transitions', 'buttons'],
    files: ['components/ui/overlays/ModalOverlay.vue'],
  },
  groups: {
    files: ['components/ui/groups/GutterGroup.vue'],
  },
}
