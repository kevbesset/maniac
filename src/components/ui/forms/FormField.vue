<script setup lang="ts">
  import { useField } from 'vee-validate'
  import { computed, useAttrs } from 'vue'
  import FormFieldSelect from './fields/FormFieldSelect.vue'
  import FormFieldInput from './fields/FormFieldInput.vue'
  import FormLabel from './FormLabel.vue'
  import FormErrorList from './FormErrorList.vue'
  import { FormOption } from '@/types/Form.type'
  import { InputTypeHTMLAttribute } from 'vue'
  import GutterGroup from '../groups/GutterGroup.vue'

  defineOptions({
    inheritAttrs: false
  })
  const props = defineProps<{
    name: string
    id?: string
    type?: InputTypeHTMLAttribute | 'select'
    rules?: string
    options?: FormOption[]
    hideLabel?: boolean
  }>()
  const inputValue = defineModel<unknown>()

  const { class: classList, ...attrs } = useAttrs()
  const required = computed(() => {
    if (!attrs.required) return true

    return props.rules?.includes('required')
  })
  const fullRules = computed(() => {
    const rules = props.rules?.split('|')
    if (attrs.required && !rules?.includes('required')) {
      rules?.push('required')
    }

    return rules?.join('|')
  })

  const { errors, value, meta } = useField(props.name, fullRules.value, {
    initialValue: inputValue.value
  })

  const inputComponent = computed(() => {
    switch (props.type) {
      case 'select':
        return FormFieldSelect
      default:
        return FormFieldInput
    }
  })

  const inputBoundings = computed(() => {
    const bindings = { ...attrs }

    if (required.value) {
      bindings.required = true
    }

    // Use custom binding according to form input type
    if (props.type === 'select') {
      bindings.options = props.options
    } else {
      bindings.type = props.type
    }

    return bindings
  })
</script>

<template>
  <GutterGroup block direction="column" class="field" :class="classList">
    <FormLabel
      :input-id="id"
      :required="required"
      class="field__label"
      :class="{
        'field__label--sr-only': hideLabel
      }"
    >
      <slot></slot>
    </FormLabel>
    <Component
      :is="inputComponent"
      :id="id"
      v-bind="inputBoundings"
      v-model="value"
      :name="name"
      :meta="meta"
      class="field__input"
      :class="{
        'field__input--error': errors?.length
      }"
    />
    <FormErrorList
      v-if="errors?.length"
      :errors="errors"
      class="field__errors"
    />
  </GutterGroup>
</template>

<style scoped lang="scss">
  @import '@/assets/sass/placeholders/sr-only';

  .field {
    &__label {
      margin-bottom: 1em;

      &--sr-only {
        @extend %sr-only;
      }
    }

    &__input {
      &--error {
        margin-bottom: 0.75em;
      }
    }
  }
</style>
