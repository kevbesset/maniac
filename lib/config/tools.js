module.exports = {
  contentPlaceholder: {
    files: ['assets/sass/directives/_placeholder.scss', 'directives/placeholder.ts'],
    todo: ['import directive to main.ts'],
  },
  appear: {
    externals: ['animate.css'],
    files: ['directives/appear.ts'],
    todo: [
      'import directive to main.ts',
      'import animate.css in main.ts'
    ],
  },
  bouncy: {
    files: ['assets/sass/directives/_bouncy.scss', 'directives/bouncy.ts'],
    todo: ['import directive to main.ts'],
  },
  directives: {
    required: ['contentPlaceholder', 'appear', 'bouncy']
  },
  storage: {
    files: ['libs/helpers/PersistentStorage.ts'],
  },
}
