enum StoryName {
  COMMONS = 'Commons',
  UI = 'UI',
  BASICS = 'Basics',
  DIALOGS = 'Dialogs',
  LAYERS = 'Layers',
  LOADERS = 'Loaders',
  MEDIAS = 'Medias',
  NAVIGATIONS = 'Navigations',
  WRAPPERS = 'Wrappers',
  FORMS = 'Forms',
  CONTROLS = 'Controls',
  ICONS = 'Icons',
  PLACE_HOLDERS = 'Place holders',
  QUERIES = 'Queries',
  TRANSITIONS = 'Transitions',
}

enum StoryCategory {
  PROPS = 'Props',
  SLOTS = 'Slots',
}

enum StoryControlType {
  BOOLEAN = 'boolean',
  NUMBER = 'number',
  RANGE = 'range',
  OBJECT = 'object',
  FILE = 'file',
  RADIO = 'radio',
  INLINE_RADIO = 'inline-radio',
  CHECK = 'check',
  INLINE_CHECK = 'inline-check',
  SELECT = 'select',
  MULTI_SELECT = 'multi-select',
  TEXT = 'text',
  COLOR = 'color',
  DATE = 'date',
}

export { StoryName, StoryCategory, StoryControlType }
