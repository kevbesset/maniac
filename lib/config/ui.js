export default {
  layouts: {
    required: ['transitions', 'router'],
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
    externals: ['vue-router'],
    required: ['transitions', 'progresses'],
    files: ['components/ui/basics/BaseButton.vue', 'vars/ButtonAttr.ts'],
  },
  icons: {
    files: ['components/ui/basics/BaseIcon.vue', '../index.html'],
  },
  modals: {
    required: ['transitions', 'buttons', 'icons'],
    files: ['components/ui/overlays/ModalOverlay.vue'],
  },
  groups: {
    files: ['components/ui/groups/GutterGroup.vue'],
  },
  form: {
    externals: ['vee-validate', '@vee-validate/rules', '@vee-validate/i18n'],
    files: [
      'assets/sass/placeholders/_form.scss',
      'assets/sass/placeholders/_sr-only.scss',
      'components/ui/forms/FormErrorList.vue',
      'components/ui/forms/FormField.vue',
      'components/ui/forms/FormLabel.vue',
      'components/ui/forms/FormRow.vue',
      'components/ui/forms/fields/FormFieldInput.vue',
      'components/ui/forms/fields/FormFieldSelect.vue',
      'libs/vendors/veeValidate.ts',
      'types/Form.type.ts',
      'vars/FormAttr.ts',
    ],
  },
}
