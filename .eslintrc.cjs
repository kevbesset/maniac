/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'prettier/prettier': ['off'],
    // See documentation in https://eslint.vuejs.org/rules/
    // Uncategorized rules
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts'
        }
      }
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 0
      }
    ],
    'vue/component-api-style': [
      'error',
      ['script-setup'] // "script-setup", "composition", "composition-vue2", or "options"
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase', // "PascalCase" or "kebab-case"
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/component-options-name-casing': ['error', 'PascalCase'], // "PascalCase", "kebab-case" or "camelCase"
    'vue/custom-event-name-casing': [
      'error',
      'kebab-case', // "camelCase" or "kebab-case"
      {
        ignores: []
      }
    ],
    'vue/html-button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    'vue/html-comment-content-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      },
      {
        exceptions: []
      }
    ],
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: []
      }
    ],
    'vue/html-comment-indent': ['error', 2],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['jsx', 'vue', 'ts', 'js'],
        shouldMatchCase: true
      }
    ],
    'vue/new-line-between-multi-line-property': [
      'error',
      {
        minLineOfMultilineProperty: 2
      }
    ],
    'vue/next-tick-style': ['error', 'promise'], // "promise" | "callback"
    'vue/no-bare-strings-in-template': [
      'warn',
      {
        allowlist: [
          '(',
          ')',
          ',',
          '.',
          '&',
          '+',
          '-',
          '=',
          '*',
          '✕',
          '@',
          '/',
          '#',
          '%',
          '!',
          '?',
          ':',
          '[',
          ']',
          '{',
          '}',
          '<',
          '>',
          '\u00b7',
          '\u2022',
          '\u2010',
          '\u2013',
          '\u2014',
          '\u2212',
          '|'
        ],
        attributes: {
          '/.+/': [
            'title',
            'aria-label',
            'aria-placeholder',
            'aria-roledescription',
            'aria-valuetext'
          ],
          input: ['placeholder'],
          img: ['alt']
        },
        directives: ['v-text']
      }
    ],
    'vue/no-boolean-default': ['error', 'no-default'], // "no-default" | "default-false"
    'vue/no-child-content': [
      'error',
      {
        additionalDirectives: ['foo'] // checks v-foo directive
      }
    ],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-expose-after-await': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['vue'],
        custom: [],
        threshold: 1
      }
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: true,
        disallowVue3BuiltInComponents: true
      }
    ],
    'vue/no-static-inline-styles': [
      'error',
      {
        allowBinding: false
      }
    ],
    'vue/no-template-target-blank': [
      'error',
      {
        allowReferrer: true,
        enforceDynamicLinks: 'always'
      }
    ],
    'vue/no-this-in-before-route-enter': 'error',
    'vue/no-undef-properties': [
      'error',
      {
        ignores: ['/^\\$/']
      }
    ],
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: ['RouterView', 'RouterLink']
      }
    ],
    'vue/no-unused-properties': [
      'error',
      {
        groups: ['props', 'data', 'computed', 'methods', 'setup'],
        deepData: true,
        ignorePublicMembers: false
      }
    ],
    'vue/no-unused-refs': 'error',
    'vue/no-use-computed-property-like-method': 'error',
    'vue/no-useless-mustaches': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-useless-v-bind': [
      'error',
      {
        ignoreIncludesComment: false,
        ignoreStringEscape: false
      }
    ],
    'vue/no-v-html': 'off',
    'vue/no-v-text': 'error',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/prefer-separate-static-class': 'error',
    'vue/require-direct-export': [
      'error',
      {
        disallowFunctionalComponentFunction: true
      }
    ],
    'vue/require-emit-validator': 'error',
    'vue/require-expose': 'error',
    'vue/require-name-property': 'error',
    'vue/v-for-delimiter-style': ['error', 'in'], // "in" | "of"
    'vue/v-on-function-call': [
      'error',
      'never',
      {
        ignoreIncludesComment: false
      }
    ],
    // Extension rules
    'vue/array-bracket-newline': 'error',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'error',
    'vue/comma-dangle': ['error', 'only-multiline'],
    'vue/comma-spacing': 'error',
    'vue/comma-style': 'error',
    'vue/dot-location': ['error', 'property'],
    'vue/dot-notation': 'error',
    'vue/eqeqeq': 'error',
    'vue/func-call-spacing': 'error',
    'vue/key-spacing': 'error',
    'vue/keyword-spacing': 'error',
    'vue/no-constant-condition': 'error',
    'vue/no-empty-pattern': 'error',
    'vue/no-irregular-whitespace': 'error',
    'vue/no-loss-of-precision': 'error',
    'vue/no-restricted-syntax': 'error',
    'vue/no-sparse-arrays': 'error',
    'vue/no-useless-concat': 'error',
    'vue/object-curly-newline': 'error',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/operator-linebreak': 'error',
    'vue/prefer-template': 'error',
    'vue/space-in-parens': 'error',
    'vue/space-infix-ops': 'error',
    'vue/space-unary-ops': 'error',
    'vue/template-curly-spacing': 'error'
  }
}
