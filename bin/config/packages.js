export default {
  accordion: {
    required: ['icon'],
    files: ['components/ui/Accordion.vue', 'components/ui/AccordionGroup.vue']
  },
  alert: {
    required: ['icon'],
    files: ['components/ui/Alert.vue']
  },
  avatar: {
    required: ['image'],
    files: ['components/ui/Avatar.vue']
  },
  badge: {
    files: ['components/ui/Badge.vue']
  },
  button: {
    files: ['components/ui/Button.vue', 'libs/vars/ButtonAttr.ts']
  },
  card: {
    files: ['components/ui/Card.vue']
  },
  dialog: {
    required: ['icon'],
    files: ['components/ui/Dialog.vue']
  },
  icon: {
    files: ['components/ui/Icon.vue']
  },
  image: {
    files: ['components/ui/Image.vue']
  },
  tabs: {
    required: ['tools/tracer', 'card'],
    files: ['components/ui/Tabs.vue']
  },
  'tools/tracer': {
    files: ['libs/uses/useTracer.ts']
  }
}
