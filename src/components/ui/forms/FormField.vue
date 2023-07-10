<script lang="ts">
  export default {
    inheritAttrs: false,
  }
</script>

<script setup lang="ts">
  import { useField } from 'vee-validate'
  import { computed, useAttrs } from 'vue'
  import FormFieldSelect from './fields/FormFieldSelect.vue'
  import FormFieldInput from './fields/FormFieldInput.vue'
  import FormLabel from './FormLabel.vue'
  import FormErrorList from './FormErrorList.vue'
  import { FormInputType, FormTheme } from '@/vars/FormAttr'
  import { FormFieldModelValue, FormOption } from '@/types/Form.type'
  import { uniqueId } from '@/libs/helpers/identifier'

  const { class: classList, ...attrs } = useAttrs()

  const props = defineProps<{
    name: string
    id?: string
    type?: FormInputType
    rules?: string | Record<string, unknown>
    modelValue?: FormFieldModelValue
    options?: FormOption[]
    theme?: FormTheme
    hideLabel?: boolean
  }>()

  const inputId = computed(() => props.id || `${props.name}-${uniqueId()}`)
  const required = computed(() => {
    if (!props.rules) return false

    if (typeof props.rules === 'string') {
      return props.rules.includes('required')
    }

    return Object.keys(props.rules).includes('required')
  })

  const { errors, handleChange, handleBlur, value, meta } = useField(
    props.name,
    props.rules,
    {
      initialValue: props.modelValue,
    }
  )

  const inputComponent = computed(() => {
    switch (props.type) {
      case FormInputType.SELECT:
        return FormFieldSelect
      default:
        return FormFieldInput
    }
  })

  const inputBoundings = computed(() => {
    const bindings = { ...attrs }

    // Use custom binding according to form input type
    if (props.type === FormInputType.SELECT) {
      bindings.options = props.options
    } else {
      bindings.type = props.type
    }

    return bindings
  })
</script>

<template>
  <div class="field" :class="classList">
    <FormLabel
      :input-id="inputId"
      :required="required"
      class="field__label"
      :class="{
        'field__label--sr-only': hideLabel,
      }"
    >
      <slot></slot>
    </FormLabel>
    <Component
      :is="inputComponent"
      v-bind="inputBoundings"
      :id="inputId"
      :name="name"
      :meta="meta"
      :value="value"
      :theme="theme"
      class="field__input"
      :class="{
        'field__input--error': errors?.length,
      }"
      @input="handleChange"
      @blur="handleBlur"
    />
    <FormErrorList
      v-if="errors?.length"
      :errors="errors"
      class="field__errors"
    />
  </div>
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
