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
  bemTransition: {
    files: ['components/ui/BemTransition.vue']
  },
  button: {
    files: ['components/ui/Button.vue', 'libs/vars/ButtonAttr.ts']
  },
  card: {
    files: ['components/ui/Card.vue']
  },
  icon: {
    files: ['components/ui/Icon.vue']
  },
  image: {
    files: ['components/ui/Image.vue']
  },
  tabs: {
    required: ['tools/tracer', 'card', 'bemTransition'],
    files: ['components/ui/Tabs.vue']
  },
  'tools/tracer': {
    files: ['libs/uses/useTracer.ts']
  }
}
