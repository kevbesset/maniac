// @ts-ignore
import ThemeManager from '../src/components/ui/themes/ThemeManager.vue'
import { ThemeName } from '../src/vars/ThemeAttr'
import '../src/assets/sass/_main.scss'
import '../src/stories/assets/sass/_main.scss'
import { templateSourceCode } from './source'
import dedent from 'ts-dedent'

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: 'docs',
  previewTabs: {
    'storybook/docs/panel': {
      index: -1,
    },
    canvas: { title: 'Sandbox' },
  },
  docs: {
    transformSource(src, ctx) {
      const match = /\b("')?template\1:\s*`([^`]+)`/.exec(src)
      if (match) {
        return templateSourceCode(dedent(match[2]), ctx.args, ctx.argTypes)
      }
      return src
    },
  },
  options: {
    storySort: {
      order: ['Introduction', 'Getting started', 'Guidelines', '*'],
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    toolbar: {
      icon: 'wrench',
      // Array of plain string values or MenuItem shape (see below)
      items: [
        { value: '', title: 'Clear theme', right: '╳' },
        ...Object.values(ThemeName),
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [
  (story, context) => ({
    components: { ThemeManager },
    template: `<ThemeManager ${
      context.globals.theme ? `theme="${context.globals.theme}"` : ''
    }><story/></ThemeManager>`,
  }),
]
