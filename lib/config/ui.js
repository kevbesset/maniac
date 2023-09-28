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
    required: ['i18n'],
    files: ['views/HomePage.vue', 'views/NotFoundPage.vue'],
  },
  themes: {
    required: ['transitions', 'storage'],
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
  icons: {
    files: ['components/ui/basics/BaseIcon.vue'],
  },
  modals: {
    required: ['transitions', 'buttons', 'icons'],
    files: ['components/ui/overlays/ModalOverlay.vue'],
  },
  groups: {
    files: ['components/ui/groups/GutterGroup.vue'],
  },
}
